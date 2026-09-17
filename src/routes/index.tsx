import { createFileRoute } from "@tanstack/react-router";
import { AstraBanner } from "@/features/home/astra-banner/AstraBanner";
import { FeaturedSlider } from "@/features/home/featured-slider/FeaturedSlider";
import { useFeaturedFeed } from "@/features/home/featured-slider/useFeaturedFeed";
import { ExploreQuickStart } from "@/features/home/quick-start/ExploreQuickStart";

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
    </>
  );
}
