import { useEffect, useRef, type SVGProps } from "react";
import { promoHero } from "./config/quick-start";
import { useT } from "@/lib/i18n";

const overlayGradient =
  "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 38%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 100%)";

const headingGradient = "linear-gradient(180deg, #ffffff 0%, #999999 100%)";

const accentGradient =
  "linear-gradient(90deg, rgb(209,254,23) 0%, rgba(209,254,23,0.8) 100%)";

const ctaBackground =
  "linear-gradient(180deg, rgba(255,255,20,0) 0%, #ffff14 100%), linear-gradient(90deg, #d1fe17 0%, #d1fe17 100%)";

export function PromoHeroCard() {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
  }, []);

  return (
    <div className="grid w-full opacity-100 transition-[height,opacity] duration-[200ms] ease-out motion-reduce:transition-none lg:w-[48%] lg:max-w-160 lg:min-h-66 lg:shrink-0">
      <button
        type="button"
        className="relative isolate block aspect-[351/197] w-full overflow-hidden rounded-lg bg-surface-primary text-left ring-1 ring-border-strong ring-inset transition-opacity hover:opacity-95 md:rounded-[20px] lg:aspect-auto lg:min-h-66 lg:self-stretch"
      >
        <img
          src={promoHero.posterSrc}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="metadata"
          aria-hidden="true"
          src={promoHero.videoSrc}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        >
          {t("home.videoUnsupported")}
        </video>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: overlayGradient }}
        />
        <div className="relative z-2 flex min-h-[inherit] w-full flex-col items-start gap-1 p-3 max-lg:min-h-full min-[700px]:px-6 min-[700px]:pt-6 lg:gap-3 lg:px-5.5 lg:pt-5.5 lg:pb-5.5">
          <h3
            className="max-w-136 font-grotesk text-[20px] leading-6.75 font-bold tracking-[-0.04em] uppercase [font-feature-settings:'ss04'_1] text-balance min-[480px]:text-[28px] min-[480px]:leading-8 min-[480px]:whitespace-nowrap lg:text-[2.25rem] lg:leading-10"
            style={{
              backgroundImage: headingGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <span className="block">{promoHero.heading}</span>
            <span
              className="block"
              style={{
                backgroundImage: accentGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {promoHero.headingAccent}
            </span>
          </h3>
          <div className="max-w-136 text-xs leading-5 font-medium tracking-normal text-white/60 md:text-sm">
            <ul className="flex max-w-75 flex-col gap-1.5">
              {promoHero.benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className={
                    benefit.hideOnXSmall
                      ? "flex items-start gap-1 max-[429px]:hidden"
                      : "flex items-start gap-1"
                  }
                >
                  <CheckIcon className="size-4 shrink-0 text-white/60" />
                  <span className="text-xs leading-4.5">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto w-full pt-2 min-[430px]:w-fit min-[430px]:max-w-full">
            <span className="relative inline-block w-full min-[430px]:w-auto">
              <span
                className="relative inline-flex h-10 w-full items-center justify-center overflow-hidden rounded-[10px] px-3 pt-2.5 pb-3.5 shadow-[var(--shadow-brand-button)] min-[430px]:w-auto min-[430px]:min-w-64.5 lg:h-12 lg:px-4 lg:pt-3 lg:pb-4"
                style={{ backgroundImage: ctaBackground }}
              >
                <span className="relative truncate px-1.5 text-sm leading-5 font-semibold whitespace-nowrap text-fg-inverse lg:text-base">
                  <span className="lg:hidden">{promoHero.ctaMobile}</span>
                  <span className="hidden lg:inline">
                    {promoHero.ctaDesktop}
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7406 7.1827C18.0539 7.45363 18.0882 7.92725 17.8173 8.24057L10.4673 16.7406C10.3305 16.8988 10.1339 16.9926 9.92494 16.9996C9.71594 17.0066 9.51353 16.9259 9.36654 16.7772L6.21654 13.5897C5.92539 13.2951 5.9282 12.8202 6.22282 12.5291C6.51744 12.2379 6.9923 12.2407 7.28346 12.5353L9.86327 15.1458L16.6827 7.25945C16.9536 6.94613 17.4272 6.91177 17.7406 7.1827Z"
        fill="currentColor"
      />
    </svg>
  );
}
