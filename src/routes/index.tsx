import { createFileRoute } from "@tanstack/react-router";
import { AstraBanner } from "@/features/home/astra-banner/AstraBanner";
import { GptImage2Section } from "@/features/home/community/GptImage2Section";
import { MarketingStudioSection } from "@/features/home/community/MarketingStudioSection";
import { Seedance20Section } from "@/features/home/community/Seedance20Section";
import { Seedance25Section } from "@/features/home/community/Seedance25Section";
import { Soul20Section } from "@/features/home/community/Soul20Section";
import { SoulCinemaSection } from "@/features/home/community/SoulCinemaSection";
import { VisualEffectsSection } from "@/features/home/effects/VisualEffectsSection";
import { ExploreMoreSection } from "@/features/home/explore-more/ExploreMoreSection";
import { FeaturedSlider } from "@/features/home/featured-slider/FeaturedSlider";
import { useFeaturedFeed } from "@/features/home/featured-slider/useFeaturedFeed";
import { GenjutsuSection } from "@/features/home/genjutsu/GenjutsuSection";
import { ProjectsSection } from "@/features/home/projects/ProjectsSection";
import { ExploreQuickStart } from "@/features/home/quick-start/ExploreQuickStart";
import { OneCanvasBanner } from "@/features/home/one-canvas-banner/OneCanvasBanner";
import { PhotodumpBanner } from "@/features/home/photodump-banner/PhotodumpBanner";
import { SupercomputerBanner } from "@/features/home/supercomputer-banner/SupercomputerBanner";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { items, hasMore, loadMore } = useFeaturedFeed();

  return (
    <>
      <FeaturedSlider
        items={items}
        hasMore={hasMore}
        onEndReached={loadMore}
      />
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
