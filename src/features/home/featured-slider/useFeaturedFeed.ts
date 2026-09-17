import { useCallback, useRef, useState } from "react";
import {
  FEATURED_PAGE_SIZE,
  featuredSlides,
} from "@/features/home/featured-slider/featured-slider.data";

export function useFeaturedFeed() {
  const [visibleCount, setVisibleCount] = useState(FEATURED_PAGE_SIZE);
  const visibleCountRef = useRef(visibleCount);
  const requestedForCountRef = useRef<number | null>(null);
  visibleCountRef.current = visibleCount;

  const items = featuredSlides.slice(0, visibleCount);
  const hasMore = visibleCount < featuredSlides.length;

  const loadMore = useCallback(() => {
    const count = visibleCountRef.current;
    if (requestedForCountRef.current === count) return;
    requestedForCountRef.current = count;
    setVisibleCount(Math.min(count + FEATURED_PAGE_SIZE, featuredSlides.length));
  }, []);

  return { items, hasMore, loadMore };
}
