import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { PromptEnhancerIcon, QualityBadgeIcon } from "./icons";
import { AUTH_SLIDE_MS, authShowcaseSlides } from "./config/showcase";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AuthShowcase() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    authShowcaseSlides.forEach((slide, slideIndex) => {
      const video = videoRefs.current[slideIndex];
      if (!video || slide.kind !== "video") return;
      if (slideIndex === index) {
        video.muted = true;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [index]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let frame = 0;
    const start = performance.now();

    function tick(now: number) {
      const next = Math.min((now - start) / AUTH_SLIDE_MS, 1);
      setProgress(next);
      if (next >= 1) {
        setProgress(0);
        setIndex((current) => (current + 1) % authShowcaseSlides.length);
        return;
      }
      frame = window.requestAnimationFrame(tick);
    }

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [index]);

  function goTo(next: number) {
    setIndex(next);
    setProgress(0);
  }

  const slide = authShowcaseSlides[index];

  return (
    <div className="hidden min-h-0 w-1/2 shrink-0 p-2 pr-0 xl:block">
      <div className="h-full overflow-hidden rounded-xl">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-black">
          <div className="min-h-0 flex-1 overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            >
              {authShowcaseSlides.map((item, slideIndex) => (
                <div
                  key={item.id}
                  className="relative h-full min-w-0 flex-[0_0_100%]"
                >
                  <div className="absolute inset-0">
                    {item.kind === "video" ? (
                      <video
                        ref={(node) => {
                          videoRefs.current[slideIndex] = node;
                        }}
                        className="size-full object-cover"
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        aria-label={t(item.titleKey)}
                      >
                        {t("home.videoUnsupported")}
                      </video>
                    ) : (
                      <img
                        src={item.src}
                        alt={t(item.titleKey)}
                        className="size-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-8 p-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-1">
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-[10px] leading-3.5 font-semibold text-white backdrop-blur-lg">
                  <QualityBadgeIcon className="size-4" />
                  {t("auth.quality2k")}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-[10px] leading-3.5 font-semibold text-white backdrop-blur-lg">
                  <PromptEnhancerIcon className="size-4" />
                  {t("auth.promptEnhancer")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h2 className="font-grotesk text-[40px] leading-12 font-bold tracking-[-0.8px] text-white uppercase">
                  {t(slide.titleKey)}
                </h2>
                <p className="text-sm leading-5 text-white/50">
                  {t(slide.descriptionKey)}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {authShowcaseSlides.map((item, slideIndex) => {
                  const fill =
                    slideIndex < index
                      ? 100
                      : slideIndex === index
                        ? progress * 100
                        : 0;
                  return (
                    <button
                      key={`${item.id}-bar`}
                      type="button"
                      className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-white/20"
                      aria-label={t(item.tabKey)}
                      onClick={() => goTo(slideIndex)}
                    >
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width: `${fill}%` }}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-1">
                {authShowcaseSlides.map((item, slideIndex) => (
                  <button
                    key={`${item.id}-tab`}
                    type="button"
                    className={cn(
                      "min-w-0 flex-1 truncate text-left text-xs leading-4.5 transition-colors",
                      slideIndex === index
                        ? "font-medium text-white"
                        : "font-normal text-white/40 hover:text-white/60",
                    )}
                    onClick={() => goTo(slideIndex)}
                  >
                    {t(item.tabKey)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
