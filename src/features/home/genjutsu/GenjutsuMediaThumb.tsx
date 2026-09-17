import { memo } from "react";
import type { GenjutsuMedia } from "./genjutsu.data";
import {
  GENJUTSU_PROGRESS_CIRCUMFERENCE,
  GENJUTSU_PROGRESS_RADIUS,
} from "./genjutsu.media";
import { cn } from "@/lib/cn";

export const GenjutsuMediaThumb = memo(function GenjutsuMediaThumb({
  media,
  selected,
  label,
  tooltip,
  onSelect,
  className,
}: {
  media: GenjutsuMedia;
  selected: boolean;
  label: string;
  tooltip: string | null;
  onSelect: (id: string) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={selected}
      title={tooltip ?? undefined}
      className={cn(
        "relative size-8 shrink-0 rounded-full bg-white shadow-[0_6px_12px_0_rgba(0,0,0,0.40)] transition-[filter] hover:brightness-150",
        "@max-[20rem]:size-7",
        className,
      )}
      onPointerUp={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(media.id);
      }}
    >
      <img
        alt=""
        loading="lazy"
        decoding="async"
        src={media.posterSrc}
        className="size-full rounded-full border border-white object-cover"
      />

      {selected ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="pointer-events-none absolute inset-0 size-8 -rotate-90 @max-[20rem]:size-7"
        >
          <circle
            cx="16"
            cy="16"
            r={GENJUTSU_PROGRESS_RADIUS}
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={GENJUTSU_PROGRESS_CIRCUMFERENCE}
            strokeDashoffset={`calc(${GENJUTSU_PROGRESS_CIRCUMFERENCE}px * (1 - var(--explore-video-progress, 0)))`}
          />
        </svg>
      ) : null}
    </button>
  );
});
