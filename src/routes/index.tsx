import { createFileRoute } from "@tanstack/react-router";
import { t } from "@/lib/i18n";
import {
  AstraBanner,
  ExploreMoreSection,
  ExploreQuickStart,
  FeaturedSlider,
  GenjutsuSection,
  GptImage2Section,
  MarketingStudioSection,
  OneCanvasBanner,
  PhotodumpBanner,
  ProjectsSection,
  Seedance20Section,
  Seedance25Section,
  Soul20Section,
  SoulCinemaSection,
  SupercomputerBanner,
  useFeaturedFeed,
  VisualEffectsSection,
} from "@/features/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: t("meta.home") }],
  }),
  component: HomePage,
});

function HomePage() {
  const { items, hasMore, loadMore } = useFeaturedFeed();

  return (
    <>
      <FeaturedSlider items={items} hasMore={hasMore} onEndReached={loadMore} />
      <div className="container-app md:pt-2">
        <ExploreQuickStart />
        <AstraBanner />
      </div>
      <VisualEffectsSection />
      <GenjutsuSection />
      <Seedance25Section />
      <ProjectsSection />
      <SupercomputerBanner />
      <GptImage2Section />
      <OneCanvasBanner />
      <MarketingStudioSection />
      <Seedance20Section />
      <PhotodumpBanner />
      <SoulCinemaSection />
      <Soul20Section />
      <ExploreMoreSection />
    </>
  );
}
