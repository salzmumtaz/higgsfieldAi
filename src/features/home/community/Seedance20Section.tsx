import { seedance20Gallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

export function Seedance20Section() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(seedance20Gallery.titleKey)}
      description={t(seedance20Gallery.descriptionKey)}
      titleHref={seedance20Gallery.titleHref}
      viewAllHref={seedance20Gallery.viewAllHref}
      items={seedance20Gallery.items}
      desktopOnly
      className="mb-10 md:mb-16"
    />
  );
}
