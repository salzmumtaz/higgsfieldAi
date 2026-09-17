import { gptImage2Gallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

export function GptImage2Section() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(gptImage2Gallery.titleKey)}
      description={t(gptImage2Gallery.descriptionKey)}
      titleHref={gptImage2Gallery.titleHref}
      viewAllHref={gptImage2Gallery.viewAllHref}
      items={gptImage2Gallery.items}
      desktopOnly
      className="mb-10 md:mb-16"
    />
  );
}
