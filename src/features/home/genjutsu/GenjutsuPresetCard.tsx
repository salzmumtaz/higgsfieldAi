import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { GenjutsuMediaSelector } from "./GenjutsuMediaSelector";
import type { GenjutsuPreset } from "./genjutsu.data";
import {
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
import { useT } from "@/lib/i18n";

const INTERSECT_MARGIN = "600px 0px";
const LEAVE_DELAY_MS = 500;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useExploreActive() {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!node) return;

    let visible = false;
    let leaveTimer = 0;
    let enterFrame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.clearTimeout(leaveTimer);
        cancelAnimationFrame(enterFrame);
        if (entry?.isIntersecting) {
          if (visible) return;
          enterFrame = requestAnimationFrame(() => {
            visible = true;
            setActive(true);
          });
          return;
        }
        if (!visible) return;
        leaveTimer = window.setTimeout(() => {
          visible = false;
          setActive(false);
        }, LEAVE_DELAY_MS);
      },
      { rootMargin: INTERSECT_MARGIN },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(leaveTimer);
      cancelAnimationFrame(enterFrame);
      observer.disconnect();
    };
  }, [node]);

  return { setNode, active };
}

export function GenjutsuPresetCard({
  preset,
  chrome = "desktop",
}: {
  preset: GenjutsuPreset;
  chrome?: "desktop" | "mobile";
}) {
  const t = useT();
  const { setNode, active } = useExploreActive();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedId, setSelectedId] = useState(() => showcaseMedia(preset).id);
  const [presenting, setPresenting] = useState(false);
  const media = mediaById(preset, selectedId);
  const playing = active || focused;
  const hasVariants = preset.variants.length > 0;
  const recreate = recreateForMedia(preset, selectedId);
  const ModeIcon =
    preset.mode === "motion-control" ? MotionTransferIcon : ObjectsSwapIcon;

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
    setSelectedId(id);
    actionsRef.current?.style.removeProperty("--explore-video-progress");
    setPresenting(false);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!playing || prefersReducedMotion()) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => {});
  }, [playing, media.id]);

  return (
    <article
      ref={setNode}
      data-explore-card=""
      data-explore-card-active={playing ? "" : undefined}
      data-hovered={hovered ? "" : undefined}
      className={cn(
        "group/explore-card relative isolate min-w-0 overflow-hidden rounded-xl bg-surface-primary [container-type:inline-size]",
        chrome === "desktop" ? "w-full shrink-0" : "mb-4 w-full shrink-0 break-inside-avoid",
        GENJUTSU_ASPECT_CLASS[preset.aspect],
      )}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) =>
        setFocused(event.currentTarget.contains(event.relatedTarget as Node))
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-explore-poster=""
        alt=""
        loading="lazy"
        decoding="async"
        src={media.posterSrc}
        className={cn(
          "pointer-events-none absolute inset-0 z-1 size-full object-cover",
          playing && presenting && "opacity-0",
        )}
      />
      {playing ? (
        <div className="pointer-events-none absolute inset-0">
          <video
            key={media.id}
            ref={videoRef}
            loop
            muted
            playsInline
            disablePictureInPicture
            poster={media.posterSrc}
            src={media.videoSrc}
            aria-label={t("home.genjutsu.example")}
            className="absolute inset-0 size-full object-cover [&::-webkit-media-controls]:hidden! [&::-webkit-media-controls-start-playback-panel]:hidden!"
            onTimeUpdate={hasVariants ? onTimeUpdate : undefined}
            onPlaying={() => setPresenting(true)}
            onPause={() => setPresenting(false)}
          >
            {t("home.videoUnsupported")}
          </video>
        </div>
      ) : null}

      <div
        data-explore-mode-chip=""
        className={cn(
          "pointer-events-none absolute top-3 left-3 z-10 hidden items-center gap-1.5 text-xs font-semibold text-white drop-shadow-sm md:flex",
          "@max-[20rem]:top-2 @max-[20rem]:left-2 @max-[20rem]:gap-1 @max-[20rem]:text-[0.625rem]",
          "opacity-0 transition-opacity group-hover/explore-card:opacity-100 group-data-[hovered]/explore-card:opacity-100 group-focus-within/explore-card:opacity-100",
          "max-md:opacity-100 [@media(hover:none)]:opacity-100",
        )}
      >
        <ModeIcon className="size-4 shrink-0 @max-[20rem]:size-3" />
        {preset.mode === "motion-control"
          ? t("home.genjutsu.motionTransfer")
          : t("home.genjutsu.objectsSwap")}
      </div>

      {hasVariants || recreate ? (
        <div
          ref={actionsRef}
          data-explore-card-actions=""
          className={cn(
            "absolute inset-x-3 bottom-3 z-20 flex min-w-0 items-end justify-between gap-2",
            "@max-[20rem]:inset-x-2 @max-[20rem]:bottom-2",
            "opacity-0 transition-opacity group-hover/explore-card:opacity-100 group-data-[hovered]/explore-card:opacity-100 group-focus-within/explore-card:opacity-100",
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
            <a
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
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
