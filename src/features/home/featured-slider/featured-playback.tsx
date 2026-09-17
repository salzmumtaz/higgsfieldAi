import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useFeaturedVideoPlayback(inView: boolean) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!inView || prefersReducedMotion()) {
      video.pause();
      return;
    }

    video.muted = true;
    const tryPlay = () => {
      void video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("canplay", tryPlay);
    };
  }, [inView]);

  return { videoRef, playing, setPlaying };
}

export function featuredItemInView(
  start: number,
  end: number,
  scrollLeft: number,
  viewportWidth: number,
  minRatio = 0.5,
) {
  const size = end - start;
  if (size <= 0 || viewportWidth <= 0) return false;
  const visible =
    Math.min(end, scrollLeft + viewportWidth) - Math.max(start, scrollLeft);
  return visible / size >= minRatio;
}
