import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import type { VisualEffectPreset } from "./config/visual-effects";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function EffectPresetCard({
  preset,
  eager = false,
}: {
  preset: VisualEffectPreset;
  eager?: boolean;
}) {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const exampleHref = `/effects/examples/${preset.slug}`;
  const recreateHref = `/effects/use/${preset.slug}`;

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
  }, []);

  return (
    <figure className="group/item relative isolate size-full overflow-hidden rounded-2xl bg-white/5 [container-type:size] [transform:translateZ(0)]">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        disablePictureInPicture
        preload={eager ? "auto" : "metadata"}
        poster={preset.posterSrc}
        src={preset.videoSrc}
        className="absolute inset-0 block size-full object-cover [backface-visibility:hidden] [transform:translateZ(0)]"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        {t("home.videoUnsupported")}
      </video>
      <img
        src={preset.posterSrc}
        alt=""
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "pointer-events-none absolute inset-0 block size-full object-cover select-none [backface-visibility:hidden] [transform:translateZ(0)]",
          playing && "opacity-0",
        )}
      />
      <a
        href={exampleHref}
        aria-label={`View ${preset.title}`}
        className="absolute inset-0 z-1 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-1px] z-2 rounded-[inherit] bg-black/70 opacity-0 transition-opacity duration-200 ease-out will-change-[opacity] motion-reduce:transition-none md:group-focus-within/item:opacity-100 md:group-hover/item:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 z-3 flex flex-col items-center justify-center gap-2.5 px-[clamp(0.5rem,8cqw,3rem)] pt-3 pb-5 sm:pt-6 md:pt-8">
        <h2 className="flex w-full max-w-full shrink-0 flex-col justify-center overflow-hidden text-center font-grotesk text-[clamp(0.875rem,min(11cqw,15cqh),2.25rem)] leading-none font-bold tracking-[-0.04em] text-white uppercase break-words opacity-0 transition-opacity duration-200 ease-out motion-reduce:transition-none md:group-focus-within/item:opacity-100 md:group-hover/item:opacity-100">
          {preset.title}
        </h2>
        <div className="pointer-events-none z-3 flex shrink-0 justify-center">
          <a
            href={recreateHref}
            className={cn(
              "type-label inline-flex h-[var(--layout-recreate)] shrink-0 items-center justify-center gap-0 rounded-control bg-[var(--bg-brand-soft-10)] px-3 text-brand backdrop-blur-sm",
              "pointer-events-none opacity-0 transition-opacity duration-200 ease-out [backface-visibility:hidden] [transform:translateZ(0)] motion-reduce:transition-none",
              "md:group-focus-within/item:pointer-events-auto md:group-focus-within/item:opacity-100 md:group-hover/item:pointer-events-auto md:group-hover/item:opacity-100",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
            )}
          >
            <RecreateSparkleIcon />
            <span className="px-1.5">{t("actions.recreate")}</span>
          </a>
        </div>
      </div>
    </figure>
  );
}

function RecreateSparkleIcon() {
  return (
    <svg
      className="size-5"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25C8.25 13.8242 10.2859 12.2487 11.2673 11.2673C12.2487 10.2859 13.8242 9.75 16.25 9.75C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25C13.8242 8.25 12.2487 7.71411 11.2673 6.73269C10.2859 5.75127 9.75 4.17581 9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75C8.25 4.17581 7.71411 5.75127 6.73269 6.73269C5.75127 7.71411 4.17581 8.25 1.75 8.25C1.33579 8.25 1 8.58579 1 9C1 9.41421 1.33579 9.75 1.75 9.75C4.17581 9.75 5.75127 10.2859 6.73269 11.2673C7.71411 12.2487 8.25 13.8242 8.25 16.25Z"
        fill="currentColor"
      />
      <path
        d="M16.75 22.25C16.75 22.6642 17.0858 23 17.5 23C17.9142 23 18.25 22.6642 18.25 22.25C18.25 20.6922 18.5949 19.7418 19.1684 19.1684C19.7418 18.5949 20.6922 18.25 22.25 18.25C22.6642 18.25 23 17.9142 23 17.5C23 17.0858 22.6642 16.75 22.25 16.75C20.6922 16.75 19.7418 16.4051 19.1684 15.8316C18.5949 15.2582 18.25 14.3078 18.25 12.75C18.25 12.3358 17.9142 12 17.5 12C17.0858 12 16.75 12.3358 16.75 12.75C16.75 14.3078 16.4051 15.2582 15.8316 15.8316C15.2582 16.4051 14.3078 16.75 12.75 16.75C12.3358 16.75 12 17.0858 12 17.5C12 17.9142 12.3358 18.25 12.75 18.25C14.3078 18.25 15.2582 18.5949 15.8316 19.1684C16.4051 19.7418 16.75 20.6922 16.75 22.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
