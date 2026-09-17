import { createFileRoute } from "@tanstack/react-router";
import { FeaturedSlider } from "@/features/home/featured-slider/FeaturedSlider";
import { useFeaturedFeed } from "@/features/home/featured-slider/useFeaturedFeed";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { items, hasMore, loadMore } = useFeaturedFeed();

  return (
    <FeaturedSlider
      items={items}
      hasMore={hasMore}
      onEndReached={loadMore}
    />
  );
}
