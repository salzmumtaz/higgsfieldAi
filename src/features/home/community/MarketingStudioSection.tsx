import { marketingStudioGallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { CommunityGallerySection } from "./CommunityGallerySection";

export function MarketingStudioSection() {
  const t = useT();
  return (
    <CommunityGallerySection
      title={t(marketingStudioGallery.titleKey)}
      description={t(marketingStudioGallery.descriptionKey)}
      titleHref={marketingStudioGallery.titleHref}
      viewAllHref={marketingStudioGallery.viewAllHref}
      items={marketingStudioGallery.items}
      desktopOnly
      className="mb-10 md:mb-16"
    />
  );
}
