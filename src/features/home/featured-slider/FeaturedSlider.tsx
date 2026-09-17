import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type SVGProps,
} from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { FeaturedCard } from "@/features/home/featured-slider/FeaturedCard";
import { featuredItemInView } from "@/features/home/featured-slider/featured-playback";
import type { FeaturedSlide } from "@/features/home/featured-slider/models/types";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

const CARD_GAP_PX = 20;
const SCROLLER_PAD_PX = 16;
const OVERSCAN = 2;
const LOAD_MORE_WITHIN = 3;
const SCROLL_EDGE_PX = 3;
const INDEX_SNAP_PX = 8;

function estimateCardWidth() {
  if (typeof window === "undefined") return 312;
  if (window.matchMedia("(min-width: 80rem)").matches) return 512;
  if (window.matchMedia("(min-width: 48rem)").matches) return 400;
  return 312;
}

export function FeaturedSlider({
  items,
  hasMore = false,
  onEndReached,
}: {
  items: FeaturedSlide[];
  hasMore?: boolean;
  onEndReached?: () => void;
}) {
  const t = useT();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const hasMoreRef = useRef(hasMore);
  const countRef = useRef(items.length);
  const onEndReachedRef = useRef(onEndReached);
  const requestedForCountRef = useRef<number | null>(null);
  hasMoreRef.current = hasMore;
  countRef.current = items.length;
  onEndReachedRef.current = onEndReached;
  const [scrollLeft, setScrollLeft] = useState(0);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollerRef.current,
    estimateSize: estimateCardWidth,
    horizontal: true,
    gap: CARD_GAP_PX,
    paddingStart: SCROLLER_PAD_PX,
    paddingEnd: SCROLLER_PAD_PX,
    scrollPaddingStart: SCROLLER_PAD_PX,
    scrollPaddingEnd: SCROLLER_PAD_PX,
    overscan: OVERSCAN,
    followOnAppend: false,
    getItemKey: (index) => items[index]?.id ?? index,
    onChange(instance) {
      if (!hasMoreRef.current) return;
      const last = instance.getVirtualItems().at(-1);
      const count = countRef.current;
      if (!last || last.index < count - LOAD_MORE_WITHIN) return;
      if (requestedForCountRef.current === count) return;
      requestedForCountRef.current = count;
      onEndReachedRef.current?.();
    },
  });

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    const observer = new ResizeObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        virtualizer.measure();
      });
    });
    observer.observe(scroller);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [virtualizer]);

  function offsetForIndex(index: number, max: number) {
    if (index <= 0) return 0;
    if (index >= items.length - 1) return max;
    const measured = virtualizer.getOffsetForIndex(index, "start");
    const left =
      measured?.[0] ??
      index * (estimateCardWidth() + CARD_GAP_PX);
    return Math.min(Math.max(left, 0), max);
  }

  function indexForOffset(offset: number, max: number) {
    if (offset <= SCROLL_EDGE_PX) return 0;
    let index = 0;
    for (let i = 0; i < items.length; i += 1) {
      if (offsetForIndex(i, max) <= offset + INDEX_SNAP_PX) index = i;
      else break;
    }
    return index;
  }

  function showBy(delta: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const max = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    if (!animatingRef.current) {
      indexRef.current = indexForOffset(scroller.scrollLeft, max);
    }

    const target = Math.min(
      Math.max(indexRef.current + delta, 0),
      items.length - 1,
    );
    indexRef.current = target;

    const left = offsetForIndex(target, max);
    if (Math.abs(scroller.scrollLeft - left) <= SCROLL_EDGE_PX) {
      animatingRef.current = false;
      return;
    }

    animatingRef.current = true;
    scroller.scrollTo({
      left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  function handleScroll(event: { currentTarget: HTMLDivElement }) {
    const offset = event.currentTarget.scrollLeft;
    setScrollLeft(offset);
    if (!animatingRef.current) {
      const max = Math.max(
        0,
        event.currentTarget.scrollWidth - event.currentTarget.clientWidth,
      );
      indexRef.current = indexForOffset(offset, max);
    }
  }

  function syncIndexFromScroll(event: { currentTarget: HTMLDivElement }) {
    animatingRef.current = false;
    const max = Math.max(
      0,
      event.currentTarget.scrollWidth - event.currentTarget.clientWidth,
    );
    indexRef.current = indexForOffset(event.currentTarget.scrollLeft, max);
  }

  const virtualItems = virtualizer.getVirtualItems();
  const viewportWidth = virtualizer.scrollRect?.width ?? 0;
  const canPrev = scrollLeft > SCROLL_EDGE_PX;
  const canNext = scrollLeft + viewportWidth < virtualizer.getTotalSize() - SCROLL_EDGE_PX;

  return (
    <section className="group relative z-0 mx-auto mb-6 w-full min-w-0 max-w-[var(--layout-content-max)] px-0 pt-2 md:mb-8 md:pt-3">
      <div
        ref={scrollerRef}
        data-featured-scroller=""
        onScroll={handleScroll}
        onScrollEnd={syncIndexFromScroll}
        className="h-[calc(19.5rem*0.5625+3.75rem)] w-full min-w-0 overflow-x-scroll md:h-[calc(25rem*0.5625+3.75rem)] xl:h-[calc(32rem*0.5625+3.75rem)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul
          className="relative m-0 h-full list-none p-0"
          style={{ width: virtualizer.getTotalSize() }}
        >
          {virtualItems.map((virtualItem) => {
            const item = items[virtualItem.index];
            if (!item) return null;

            return (
              <li
                key={virtualItem.key}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                className="absolute top-0 w-[19.5rem] md:w-[25rem] xl:w-[32rem]"
                style={{ left: virtualItem.start }}
              >
                <FeaturedCard
                  item={item}
                  inView={featuredItemInView(
                    virtualItem.start,
                    virtualItem.end,
                    scrollLeft,
                    viewportWidth,
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0 -left-px z-[2] hidden h-full w-36 bg-gradient-to-r from-page to-transparent 2xl:block",
          canPrev ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -right-px z-[2] hidden h-full w-36 bg-gradient-to-l from-page to-transparent opacity-100 2xl:block"
      />

      <SliderArrow
        direction="prev"
        visible={canPrev}
        aria-label={t("home.prevFeatured")}
        onClick={() => showBy(-1)}
      />
      <SliderArrow
        direction="next"
        visible={canNext}
        aria-label={t("home.nextFeatured")}
        onClick={() => showBy(1)}
      />
    </section>
  );
}

function SliderArrow({
  direction,
  visible,
  className,
  ...props
}: {
  direction: "prev" | "next";
  visible: boolean;
} & ComponentProps<typeof Button>) {
  return (
    <Button
      variant="secondary"
      size="md"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "absolute top-[calc(50%-2rem)] z-10 size-12 min-w-12 -translate-y-1/2 rounded-full border-0 px-0",
        "bg-surface-secondary text-fg shadow-[inset_0_0_0_9999px_rgb(255_255_255_/_0.05)] backdrop-blur-2xl",
        "hidden lg:inline-grid lg:place-content-center [&_svg]:size-9",
        "transition-opacity duration-[var(--duration-normal)] ease-out",
        direction === "next" ? "right-1" : "left-1",
        visible
          ? "opacity-0 group-hover:opacity-100"
          : "pointer-events-none opacity-0",
        className,
      )}
      {...props}
    >
      {direction === "next" ? (
        <ChevronRightIcon />
      ) : (
        <ChevronLeftIcon />
      )}
    </Button>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M10 16L13.6464 12.3536C13.8417 12.1583 13.8417 11.8417 13.6464 11.6464L10 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M14 16L10.3536 12.3536C10.1583 12.1583 10.1583 11.8417 10.3536 11.6464L14 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
