import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { AppLink } from "@/components/navigation/AppLink";
import { GenjutsuMediaSelector } from "./GenjutsuMediaSelector";
import type { GenjutsuPreset } from "./genjutsu.data";
import {
  ExpandExampleIcon,
  MotionTransferIcon,
  ObjectsSwapIcon,
  RecreateSparkleIcon,
} from "./genjutsu-icons";
import {
  GENJUTSU_ASPECT_CLASS,
  mediaById,
  playbackProgress,
  recreateForMedia,
  recreateHref,
  showcaseMedia,
} from "./genjutsu.media";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function reducedMotionEnabled() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

export const GenjutsuPresetCard = memo(function GenjutsuPresetCard({
  preset,
  chrome = "desktop",
}: {
  preset: GenjutsuPreset;
  chrome?: "desktop" | "mobile";
}) {
  const cardRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const hoveredRef = useRef(false);
  const focusWithinRef = useRef(false);

  // Only user media selection is React state.
  // Scrolling, visibility and playback never update React state.
  const [selectedId, setSelectedId] = useState(() => showcaseMedia(preset).id);

  const media = mediaById(preset, selectedId);
  const hasVariants = preset.variants.length > 0;
  const recreate = recreateForMedia(preset, selectedId);
  const ModeIcon =
    preset.mode === "motion-control" ? MotionTransferIcon : ObjectsSwapIcon;

  const setPlaybackAttribute = useCallback((active: boolean) => {
    if (active) {
      cardRef.current?.setAttribute("data-explore-card-active", "");
    } else {
      cardRef.current?.removeAttribute("data-explore-card-active");
    }
  }, []);

  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotionEnabled()) {
      video.pause();
      setPlaybackAttribute(false);
      return;
    }

    video.muted = true;
    setPlaybackAttribute(true);
    void video.play().catch(() => {
      setPlaybackAttribute(false);
    });
  }, [setPlaybackAttribute]);

  const pauseVideo = useCallback(() => {
    videoRef.current?.pause();
    setPlaybackAttribute(false);
  }, [setPlaybackAttribute]);

  // When a variant changes while the card is already hovered/focused,
  // start the newly mounted video. This only runs after a user selection.
  useEffect(() => {
    if (hoveredRef.current || focusWithinRef.current) {
      playVideo();
    }
  }, [media.id, playVideo]);

  const onTimeUpdate = useCallback(
    (event: SyntheticEvent<HTMLVideoElement>) => {
      const { currentTime, duration } = event.currentTarget;
      actionsRef.current?.style.setProperty(
        "--explore-video-progress",
        String(playbackProgress(currentTime, duration)),
      );
    },
    [],
  );

  const onSelectMedia = useCallback((id: string) => {
    setSelectedId((current) => (current === id ? current : id));
    actionsRef.current?.style.removeProperty("--explore-video-progress");
  }, []);

  return (
    <article
      ref={cardRef}
      data-explore-card=""
      className={cn(
        "group/explore-card relative isolate min-w-0 cursor-pointer overflow-hidden rounded-xl bg-surface-primary [container-type:inline-size]",
        chrome === "desktop"
          ? "w-full shrink-0"
          : "mb-4 w-full shrink-0 break-inside-avoid",
        GENJUTSU_ASPECT_CLASS[preset.aspect],
      )}
      onPointerEnter={() => {
        hoveredRef.current = true;
        playVideo();
      }}
      onPointerLeave={() => {
        hoveredRef.current = false;
        if (!focusWithinRef.current) pauseVideo();
      }}
      onFocusCapture={() => {
        focusWithinRef.current = true;
        playVideo();
      }}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (nextTarget && event.currentTarget.contains(nextTarget)) return;

        focusWithinRef.current = false;
        if (!hoveredRef.current) pauseVideo();
      }}
    >
      <button
        type="button"
        aria-label="Open preset"
        className="absolute inset-0 z-[16] cursor-pointer touch-manipulation"
      />

      <img
        data-explore-poster=""
        alt=""
        loading="lazy"
        decoding="async"
        src={media.posterSrc}
        className="pointer-events-none absolute inset-0 z-1 size-full object-cover"
      />

      {/* Always mounted, but preload="none" prevents eager media loading.
          Playback is controlled imperatively on hover/focus, with no React state. */}
      <div className="pointer-events-none absolute inset-0 z-2">
        <video
          key={media.id}
          ref={videoRef}
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="none"
          poster={media.posterSrc}
          src={media.videoSrc}
          aria-label={t("home.genjutsu.example")}
          className="absolute inset-0 size-full object-cover [backface-visibility:hidden] [transform:translateZ(0)] [&::-webkit-media-controls]:hidden! [&::-webkit-media-controls-start-playback-panel]:hidden!"
          onTimeUpdate={hasVariants ? onTimeUpdate : undefined}
        >
          {t("home.videoUnsupported")}
        </video>
      </div>

      {/* Controls stay mounted permanently. CSS handles visibility. */}
      <div
        data-explore-mode-chip=""
        className={cn(
          "pointer-events-none absolute top-3 left-3 z-10 hidden items-center gap-1.5 text-xs font-semibold text-white drop-shadow-sm md:flex",
          "@max-[20rem]:top-2 @max-[20rem]:left-2 @max-[20rem]:gap-1 @max-[20rem]:text-[0.625rem]",
          "opacity-0 transition-opacity group-hover/explore-card:opacity-100 group-focus-within/explore-card:opacity-100",
          "max-md:opacity-100 [@media(hover:none)]:opacity-100",
        )}
      >
        <ModeIcon className="size-4 shrink-0 @max-[20rem]:size-3" />
        {preset.mode === "motion-control"
          ? t("home.genjutsu.motionTransfer")
          : t("home.genjutsu.objectsSwap")}
      </div>

      <div
        className={cn(
          "absolute top-3 right-3 z-20 flex flex-col items-end gap-2 opacity-0 transition-opacity",
          "group-hover/explore-card:opacity-100 group-focus-within/explore-card:opacity-100",
          "max-md:hidden motion-reduce:transition-none [@media(hover:none)]:hidden",
          "@max-[20rem]:top-2 @max-[20rem]:right-2 @max-[20rem]:gap-3",
        )}
      >
        <button
          type="button"
          aria-label="Expand example"
          className={cn(
            "relative flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white",
            "shadow-[inset_0_2px_3px_0_rgba(255,255,255,0.05),0_2px_4px_-0.5px_rgba(0,0,0,0.12)] backdrop-blur-md",
            "transition-[filter] before:absolute before:-inset-1 hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
            "motion-reduce:transition-none @max-[20rem]:size-7 @max-[20rem]:before:-inset-1.5",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <ExpandExampleIcon className="size-4" />
        </button>
      </div>

      {hasVariants || recreate ? (
        <div
          ref={actionsRef}
          data-explore-card-actions=""
          className={cn(
            "absolute inset-x-3 bottom-3 z-20 flex min-w-0 items-end justify-between gap-2",
            "@max-[20rem]:inset-x-2 @max-[20rem]:bottom-2",
            "opacity-0 transition-opacity group-hover/explore-card:opacity-100 group-focus-within/explore-card:opacity-100",
            "max-md:hidden [@media(hover:none)]:hidden",
            recreate && !hasVariants && "justify-end",
          )}
        >
          {hasVariants ? (
            <GenjutsuMediaSelector
              preset={preset}
              selectedId={selectedId}
              onSelect={onSelectMedia}
            />
          ) : null}

          {recreate ? (
            <AppLink
              href={recreateHref(recreate.variantId)}
              aria-label={t("actions.recreateThisExample")}
              className={cn(
                "inline-flex h-8 shrink-0 touch-manipulation items-center justify-center gap-1 rounded-control bg-brand px-2.5 text-sm font-semibold text-fg-inverse",
                "shadow-[var(--shadow-brand-button)] transition-[filter,transform] duration-[0.18s] ease-[var(--ease-button)] hover:brightness-110",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                "@max-[20rem]:h-7 @max-[20rem]:min-w-0 @max-[20rem]:px-2 @max-[20rem]:py-0",
              )}
              onClick={(event) => event.stopPropagation()}
            >
              <RecreateSparkleIcon className="size-4" />
              {t("actions.recreate")}
            </AppLink>
          ) : null}
        </div>
      ) : null}
    </article>
  );
});
