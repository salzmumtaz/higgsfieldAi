/**
 * Home gallery datasets in page order, plus placeholders for the special
 * non-gallery banners that sit between them. Section kinds stay distinct;
 * do not collapse Visual Effects / Genjutsu / Projects into GenerationItem.
 *
 * Full sequence with copy, visibility, and unimplemented banners:
 * `research/HOME_SECTION_ORDER.md`.
 */
import type { MessageKey } from "@/lib/i18n";
import { gptImage2Items } from "@/features/home/community/gpt-image-2.data";
import { marketingStudioItems } from "@/features/home/community/marketing-studio.data";
import { seedance20Items } from "@/features/home/community/seedance-20.data";
import { seedance25Items } from "@/features/home/community/seedance-25.data";
import { soul20Items } from "@/features/home/community/soul-20.data";
import { soulCinemaItems } from "@/features/home/community/soul-cinema.data";
import { visualEffects } from "@/features/home/effects/visual-effects.data";
import { genjutsuPresets } from "@/features/home/genjutsu/genjutsu.data";
import { homeProjects } from "@/features/home/projects/projects.data";

export const visualEffectsGallery = {
  kind: "visual-effects" as const,
  id: "visual-effects",
  titleKey: "home.visualEffects.title" as MessageKey,
  descriptionKey: "home.visualEffects.description" as MessageKey,
  titleHref: "/effects",
  ctaHref: "/effects/use",
  viewAllHref: "/effects",
  desktopOnly: true,
  items: visualEffects,
};

export const genjutsuGallery = {
  kind: "genjutsu" as const,
  id: "genjutsu",
  titleKey: "home.genjutsu.title" as MessageKey,
  descriptionKey: "home.genjutsu.description" as MessageKey,
  descriptionMobileKey: "home.genjutsu.descriptionMobile" as MessageKey,
  generateHref: "/ai/video?model=genjutsu",
  learnMoreHref: "/higgsfield-genjutsu-presets",
  viewAllHref: "/higgsfield-genjutsu-presets",
  titleHref: "/higgsfield-genjutsu-presets",
  items: genjutsuPresets,
};

export const seedance25Gallery = {
  kind: "community" as const,
  id: "seedance-2-5",
  slug: "seedance-2-5-community",
  titleKey: "home.seedance25.title" as MessageKey,
  descriptionKey: "home.seedance25.description" as MessageKey,
  titleHref: "/seedance-2-5-community",
  viewAllHref: "/seedance-2-5-community",
  items: seedance25Items,
};

export const projectsGallery = {
  kind: "projects" as const,
  id: "projects",
  titleKey: "home.projects.title" as MessageKey,
  descriptionKey: "home.projects.description" as MessageKey,
  ctaHref: "/community",
  items: homeProjects,
};

export const gptImage2Gallery = {
  kind: "community" as const,
  id: "gpt-image-2",
  slug: "gpt-image-2-community",
  titleKey: "home.gptImage2.title" as MessageKey,
  descriptionKey: "home.gptImage2.description" as MessageKey,
  titleHref: "/gpt-image-2-community",
  viewAllHref: "/gpt-image-2-community",
  desktopOnly: true,
  items: gptImage2Items,
};

export const marketingStudioGallery = {
  kind: "community" as const,
  id: "marketing-studio",
  slug: "marketing-studio-community",
  titleKey: "home.marketingStudio.title" as MessageKey,
  descriptionKey: "home.marketingStudio.description" as MessageKey,
  titleHref: "/marketing-studio-community",
  viewAllHref: "/marketing-studio-community",
  desktopOnly: true,
  items: marketingStudioItems,
};

export const seedance20Gallery = {
  kind: "community" as const,
  id: "seedance-2-0",
  slug: "seedance-2-community",
  titleKey: "home.seedance20.title" as MessageKey,
  descriptionKey: "home.seedance20.description" as MessageKey,
  titleHref: "/seedance-2-community",
  viewAllHref: "/seedance-2-community",
  desktopOnly: true,
  items: seedance20Items,
};

export const soulCinemaGallery = {
  kind: "community" as const,
  id: "soul-cinema",
  slug: "soul-cinema-community",
  titleKey: "home.soulCinema.title" as MessageKey,
  descriptionKey: "home.soulCinema.description" as MessageKey,
  titleHref: "/soul-cinema-community",
  viewAllHref: "/soul-cinema-community",
  desktopOnly: true,
  items: soulCinemaItems,
};

export const soul20Gallery = {
  kind: "community" as const,
  id: "soul-2-0",
  slug: "soul-community",
  titleKey: "home.soul20.title" as MessageKey,
  descriptionKey: "home.soul20.description" as MessageKey,
  titleHref: "/soul-community",
  viewAllHref: "/soul-community",
  desktopOnly: true,
  items: soul20Items,
};

/** Gallery datasets only, in Home content order. */
export const homeGallerySections = [
  visualEffectsGallery,
  genjutsuGallery,
  seedance25Gallery,
  projectsGallery,
  gptImage2Gallery,
  marketingStudioGallery,
  seedance20Gallery,
  soulCinemaGallery,
  soul20Gallery,
] as const;

/**
 * Full Home main-column sequence after Featured / Quick Start / Astra.
 * Banner entries are placeholders — do not implement in this step.
 */
export const homePageSequence = [
  { type: "gallery" as const, id: "visual-effects" },
  { type: "gallery" as const, id: "genjutsu" },
  { type: "gallery" as const, id: "seedance-2-5" },
  { type: "gallery" as const, id: "projects" },
  { type: "banner" as const, id: "supercomputer", implemented: true },
  { type: "gallery" as const, id: "gpt-image-2" },
  { type: "banner" as const, id: "one-canvas", implemented: true },
  { type: "gallery" as const, id: "marketing-studio" },
  { type: "gallery" as const, id: "seedance-2-0" },
  { type: "banner" as const, id: "photodump", implemented: true },
  { type: "gallery" as const, id: "soul-cinema" },
  { type: "gallery" as const, id: "soul-2-0" },
  { type: "banner" as const, id: "home-trailer-gn", implemented: true },
  { type: "banner" as const, id: "home-trailer-un", implemented: false },
] as const;
