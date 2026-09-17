import { useEffect, useRef, useState } from "react";
import { LikeButton } from "@/components/ui/LikeButton";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";
import type { GenerationItem } from "./gallery.types";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function GenerationCard({
  item,
  mediaFigureClassName,
  eager = false,
}: {
  item: GenerationItem;
  mediaFigureClassName?: string;
  eager?: boolean;
}) {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const user = useAppStore((state) => state.user);
  const likedIds = useAppStore((state) => state.likedGenerationIds);
  const toggleLike = useAppStore((state) => state.toggleLike);
  const liked = Boolean(user) && likedIds.includes(item.id);
  const displayCount = item.likeCount + (liked ? 1 : 0);
  const isVideo = item.media.type === "video";
  const posterSrc = isVideo ? (item.media.posterSrc ?? item.media.src) : item.media.src;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (prefersReducedMotion()) {
        video.pause();
        return;
      }
      video.muted = true;
      void video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <figure
      className={cn(
        "group/item relative isolate overflow-hidden rounded-2xl bg-surface-primary [transform:translateZ(0)] active:brightness-60",
        mediaFigureClassName,
      )}
      style={{ aspectRatio: `${item.media.width} / ${item.media.height}` }}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          disablePictureInPicture
          preload={eager ? "auto" : "metadata"}
          poster={posterSrc}
          src={item.media.src}
          className="absolute inset-0 block size-full object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {t("home.videoUnsupported")}
        </video>
      ) : null}
      <img
        src={posterSrc}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "pointer-events-none absolute inset-0 block size-full object-cover select-none [backface-visibility:hidden] [transform:translateZ(0)]",
          isVideo && playing && "opacity-0",
        )}
      />
      <a
        href={item.href}
        className="absolute inset-0 z-1 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        aria-label={t("home.communityPost", { username: item.creator.username })}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-2 flex flex-col justify-between",
          "bg-gradient-to-t from-black/55 via-transparent to-black/45",
          "opacity-100 transition-opacity duration-200 ease-out motion-reduce:transition-none",
          "md:opacity-0 md:group-hover/item:opacity-100 md:group-focus-within/item:opacity-100",
        )}
      >
        <div className="flex items-center justify-between gap-2 p-2">
          <a
            href={item.creator.href}
            className="pointer-events-auto relative z-3 flex min-w-0 items-center gap-2 rounded-control"
          >
            <img
              src={item.creator.avatarSrc}
              alt={t("home.profilePicture", { username: item.creator.username })}
              width={24}
              height={24}
              className="size-6 shrink-0 rounded-full bg-surface-secondary object-cover"
            />
            <span className="min-w-0 truncate text-sm font-medium text-white">
              {item.creator.username}
            </span>
          </a>
          <LikeButton
            className="pointer-events-auto relative z-3 shrink-0"
            pressed={liked}
            count={displayCount}
            onClick={() => toggleLike(item.id)}
          />
        </div>
      </div>
    </figure>
  );
}
