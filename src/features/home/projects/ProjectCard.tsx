import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import type { HomeProject } from "./projects.data";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isHlsSrc(src: string) {
  return src.includes(".m3u8");
}

export function ProjectCard({ project }: { project: HomeProject }) {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const hoveredRef = useRef(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, []);

  function revealIfPlaying() {
    const video = videoRef.current;
    if (!hoveredRef.current || !video || video.paused) return;
    setShowVideo(true);
  }

  function playIfHovered() {
    const video = videoRef.current;
    if (!video || !hoveredRef.current) return;
    video.muted = true;
    video.playsInline = true;
    void video.play().then(revealIfPlaying).catch(() => {});
  }

  function ensureSource() {
    const video = videoRef.current;
    const src = project.videoSrc;
    if (!video || !src) return;

    if (isHlsSrc(src) && Hls.isSupported()) {
      if (hlsRef.current) return;
      const hls = new Hls({ maxBufferLength: 8 });
      hlsRef.current = hls;
      hls.on(Hls.Events.MANIFEST_PARSED, playIfHovered);
      hls.on(Hls.Events.MEDIA_ATTACHED, playIfHovered);
      hls.attachMedia(video);
      hls.loadSource(src);
      return;
    }

    if (!video.src && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }

  function playPreview() {
    if (!project.videoSrc || prefersReducedMotion()) return;
    hoveredRef.current = true;
    ensureSource();
    playIfHovered();
  }

  function stopPreview() {
    hoveredRef.current = false;
    setShowVideo(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }

  return (
    <article
      data-higgsfield-projects-card
      className="group/project relative isolate flex flex-col gap-1 rounded-2xl bg-surface-primary p-1 transition-colors duration-200 hover:bg-surface-tertiary motion-reduce:transition-none"
      onPointerEnter={playPreview}
      onPointerLeave={stopPreview}
      onFocusCapture={playPreview}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          stopPreview();
        }
      }}
    >
      <a
        href={project.href}
        className="absolute inset-0 z-20 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
        aria-label={project.title}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.1)] group-has-[:focus-visible]/project:shadow-[inset_0_0_0_2px_var(--brand)]"
      />
      <figure className="relative overflow-hidden rounded-[inherit] aspect-[343/195]">
        <img
          src={project.posterSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn(
            "pointer-events-none absolute inset-0 size-full object-cover",
            showVideo && "opacity-0",
          )}
        />
        {project.videoSrc ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            className="pointer-events-none absolute inset-0 size-full object-cover"
            onPlaying={revealIfPlaying}
            onCanPlay={playIfHovered}
          />
        ) : null}
      </figure>
      <div className="relative z-40 flex items-center justify-between gap-2 p-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <a href={project.authorHref} className="relative shrink-0">
            <img
              src={project.authorAvatarSrc}
              alt={project.authorName}
              width={20}
              height={20}
              className="size-5 rounded-full object-cover"
            />
          </a>
          <p className="min-w-0 truncate text-sm font-medium text-fg">
            {project.title}
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1 text-sm text-fg-secondary">
          <PublicIcon />
          {t("badges.public")}
        </p>
      </div>
    </article>
  );
}

function PublicIcon() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-6-3.8-9S9.5 5.8 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
