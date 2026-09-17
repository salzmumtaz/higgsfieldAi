import type {
  GenjutsuAspectBucket,
  GenjutsuMedia,
  GenjutsuPreset,
  GenjutsuRecreate,
} from "./genjutsu.data";

/** Home framed masonry always packs into five equal flex columns. */
export const GENJUTSU_DESKTOP_COLUMNS = 5;

/** Inverse-aspect height weights used by live `vi()`. */
export const GENJUTSU_ASPECT_WEIGHT: Record<GenjutsuAspectBucket, number> = {
  "16/9": 9 / 16,
  "9/16": 16 / 9,
  "3/2": 2 / 3,
};

export const GENJUTSU_ASPECT_CLASS: Record<GenjutsuAspectBucket, string> = {
  "16/9": "aspect-video",
  "9/16": "aspect-9/16",
  "3/2": "aspect-3/2",
};

const PROGRESS_RADIUS = 15;
export const GENJUTSU_PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;
export const GENJUTSU_PROGRESS_RADIUS = PROGRESS_RADIUS;

/** Showcase / default selected media: edit variant, else first variant, else source. */
export function showcaseMedia(preset: GenjutsuPreset): GenjutsuMedia {
  const edit = preset.variants.find((variant) => variant.kind === "edit");
  return edit ?? preset.variants[0] ?? preset.source;
}

export function mediaById(
  preset: GenjutsuPreset,
  id: string,
): GenjutsuMedia {
  return preset.variants.find((variant) => variant.id === id) ?? preset.source;
}

function uniqueById(items: GenjutsuMedia[]): GenjutsuMedia[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

/**
 * Circular selector: lead is the edit/showcase variant; rest is source
 * then remaining variants (live `y()`), de-duplicated by id.
 */
export function selectorThumbs(preset: GenjutsuPreset): {
  lead: GenjutsuMedia;
  rest: GenjutsuMedia[];
} | null {
  const lead =
    preset.variants.find((variant) => variant.kind === "edit") ??
    preset.variants[0] ??
    null;
  if (!lead) return null;

  return {
    lead,
    rest: uniqueById([
      preset.source,
      ...preset.variants.filter((variant) => variant.id !== lead.id),
    ]).filter((item) => item.id !== lead.id),
  };
}

function recreateFromVariant(
  preset: GenjutsuPreset,
  variant: GenjutsuMedia | undefined,
): (GenjutsuRecreate & { variantId: string }) | null {
  if (!variant?.recreate || !preset.source.mediaId) return null;
  return {
    prompt: variant.recreate.prompt,
    params: variant.recreate.params,
    variantId: variant.recreate.variantId || variant.id,
  };
}

/** Recreate payload for the selected media, else first variant that can recreate. */
export function recreateForMedia(
  preset: GenjutsuPreset,
  selectedId: string,
): (GenjutsuRecreate & { variantId: string }) | null {
  const selected = mediaById(preset, selectedId);
  return (
    recreateFromVariant(preset, selected) ??
    recreateFromVariant(
      preset,
      preset.variants.find((variant) => variant.recreate),
    )
  );
}

export function playbackProgress(currentTime: number, duration: number) {
  return Number.isFinite(duration) && duration > 0
    ? Math.min(1, Math.max(0, currentTime / duration))
    : 0;
}

export function packGenjutsuColumns(presets: GenjutsuPreset[]) {
  const columns = Array.from({ length: GENJUTSU_DESKTOP_COLUMNS }, () => ({
    height: 0,
    cards: [] as GenjutsuPreset[],
  }));

  for (const preset of presets) {
    const column = columns.reduce((shortest, next) =>
      next.height < shortest.height ? next : shortest,
    );
    column.cards.push(preset);
    column.height += GENJUTSU_ASPECT_WEIGHT[preset.aspect];
  }

  return columns.map((column) => column.cards);
}

export function generateHref() {
  return "/ai/video?model=genjutsu";
}

export function recreateHref(variantId: string) {
  return `/ai/video?model=genjutsu&recreateId=${variantId}`;
}

export const GENJUTSU_PRESETS_HREF = "/higgsfield-genjutsu-presets";
export const GENJUTSU_MOBILE_LIMIT = 15;
