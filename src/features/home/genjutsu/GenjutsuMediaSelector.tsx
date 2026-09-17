import { memo, useMemo } from "react";
import { GenjutsuMediaThumb } from "./GenjutsuMediaThumb";
import type { GenjutsuMedia, GenjutsuPreset } from "./genjutsu.data";
import { selectorThumbs } from "./genjutsu.media";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";

function thumbLabel(preset: GenjutsuPreset, media: GenjutsuMedia) {
  if (media.id === preset.source.id) {
    return t("home.genjutsu.showSourceVideo");
  }

  const index = preset.variants.findIndex((variant) => variant.id === media.id);
  return t("home.genjutsu.showVariant", { index: index + 1 });
}

function thumbTooltip(preset: GenjutsuPreset, media: GenjutsuMedia) {
  const showcase = preset.variants.find((variant) => variant.kind === "edit");
  const lead = showcase ?? preset.variants[0];

  if (lead && media.id === lead.id) return t("home.genjutsu.showcase");
  if (media.id === preset.source.id) return t("home.genjutsu.reference");

  const outputs = preset.variants.filter(
    (variant) => variant.id !== lead?.id && variant.kind !== "source",
  );
  const outputIndex = outputs.findIndex((variant) => variant.id === media.id);

  return outputIndex >= 0
    ? t("home.genjutsu.output", { index: outputIndex + 1 })
    : null;
}

export const GenjutsuMediaSelector = memo(function GenjutsuMediaSelector({
  preset,
  selectedId,
  onSelect,
  className,
}: {
  preset: GenjutsuPreset;
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
}) {
  const thumbs = useMemo(() => selectorThumbs(preset), [preset]);
  if (!thumbs) return null;

  return (
    <div
      className={cn(
        "flex min-w-0 shrink items-center gap-2 @max-[20rem]:gap-0",
        className,
      )}
    >
      <GenjutsuMediaThumb
        media={thumbs.lead}
        selected={selectedId === thumbs.lead.id}
        label={thumbLabel(preset, thumbs.lead)}
        tooltip={thumbTooltip(preset, thumbs.lead)}
        onSelect={onSelect}
      />

      <span
        aria-hidden="true"
        className="h-3 w-px bg-[var(--border-default)] @max-[20rem]:hidden"
      />

      {thumbs.rest.map((media) => (
        <GenjutsuMediaThumb
          key={media.id}
          className="@max-[20rem]:-ml-2"
          media={media}
          selected={selectedId === media.id}
          label={thumbLabel(preset, media)}
          tooltip={thumbTooltip(preset, media)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
});
