import { soulCinemaGallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

export function SoulCinemaSection() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(soulCinemaGallery.titleKey)}
      description={t(soulCinemaGallery.descriptionKey)}
      titleHref={soulCinemaGallery.titleHref}
      viewAllHref={soulCinemaGallery.viewAllHref}
      items={soulCinemaGallery.items}
      desktopOnly
      className="mb-10 md:mb-16"
    />
  );
}
