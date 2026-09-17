import { useCallback, useRef, useState } from "react";
import {
  FEATURED_PAGE_SIZE,
  featuredSlides,
} from "@/features/home/featured-slider/featured-slider.data";

export function useFeaturedFeed() {
  const [visibleCount, setVisibleCount] = useState(FEATURED_PAGE_SIZE);
  const requestedForCountRef = useRef<number | null>(null);

  const items = featuredSlides.slice(0, visibleCount);
  const hasMore = visibleCount < featuredSlides.length;

  const loadMore = useCallback(() => {
    setVisibleCount((count) => {
      if (requestedForCountRef.current === count) return count;
      requestedForCountRef.current = count;
      return Math.min(count + FEATURED_PAGE_SIZE, featuredSlides.length);
    });
  }, []);

  return { items, hasMore, loadMore };
}
