import { seedance25Gallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

/** Live Home figure extra (`zi`) — Seedance 2.5 only. */
export const SEEDANCE_25_FIGURE_CLASSNAME =
  "[&>img]:origin-bottom [&>img]:scale-125 [&>video]:origin-bottom [&>video]:scale-125";

export function Seedance25Section() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(seedance25Gallery.titleKey)}
      description={t(seedance25Gallery.descriptionKey)}
      titleHref={seedance25Gallery.titleHref}
      viewAllHref={seedance25Gallery.viewAllHref}
      items={seedance25Gallery.items}
      mediaFigureClassName={SEEDANCE_25_FIGURE_CLASSNAME}
    />
  );
}
