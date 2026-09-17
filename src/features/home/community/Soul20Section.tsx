import { soul20Gallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

export function Soul20Section() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(soul20Gallery.titleKey)}
      description={t(soul20Gallery.descriptionKey)}
      titleHref={soul20Gallery.titleHref}
      viewAllHref={soul20Gallery.viewAllHref}
      items={soul20Gallery.items}
      desktopOnly
      className="mb-10 md:mb-16"
    />
  );
}
