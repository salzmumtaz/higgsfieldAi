import type { FeaturedSlide } from "@/features/home/featured-slider/models/types";
import { useFeaturedVideoPlayback } from "@/features/home/featured-slider/featured-playback";
import { AppLink } from "@/components/navigation/AppLink";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

const mediaInsetShadow =
  "shadow-[-0.5px_-0.5px_1px_0_rgba(255,255,255,0.12)_inset,0.8px_0.5px_0.5px_0_rgba(27,27,27,0.17)_inset]";

export function FeaturedCard({
  item,
  inView,
}: {
  item: FeaturedSlide;
  inView: boolean;
}) {
  const t = useT();
  const { videoRef, playing, setPlaying } = useFeaturedVideoPlayback(inView);
  const openLabel = t("home.openProduct", { title: item.title });
  const mediaLabel = `${item.title} - ${item.description}`;
  const sameHref = item.hrefDesktop === item.hrefMobile;

  return (
    <div className="relative grid w-full grid-flow-row-dense gap-3 rounded-lg transition-[color,filter] duration-150 hover:text-brand active:brightness-[0.6]">
      {sameHref ? (
        <HitArea
          href={item.hrefDesktop}
          label={openLabel}
          external={item.external}
        />
      ) : (
        <>
          <HitArea
            href={item.hrefDesktop}
            label={openLabel}
            external={item.external}
            className="hidden md:block"
          />
          <HitArea
            href={item.hrefMobile}
            label={openLabel}
            external={item.external}
            className="md:hidden"
          />
        </>
      )}

      <figure className="relative aspect-video overflow-hidden rounded-lg">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="none"
          poster={item.posterSrc}
          src={item.videoSrc}
          aria-label={mediaLabel}
          className="size-full object-cover"
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {t("home.videoUnsupported")}
        </video>

        {item.posterSrc ? (
          <img
            alt=""
            src={item.posterSrc}
            sizes="(max-width: 768px) 90vw, 512px"
            loading="lazy"
            decoding="async"
            className={cn(
              "pointer-events-none absolute inset-0 size-full object-cover select-none",
              playing && "opacity-0",
            )}
          />
        ) : null}

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit]",
            mediaInsetShadow,
          )}
        />
        <figcaption className="hidden">
          {item.title}: {item.description}
        </figcaption>
      </figure>

      <div className="grid grid-rows-2 text-left">
        <h3 className="font-grotesk truncate text-base font-bold tracking-[-0.04em] uppercase">
          {item.title}
        </h3>
        <p className="truncate text-xs text-fg-secondary xl:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function HitArea({
  href,
  label,
  className,
  external,
}: {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <AppLink
      href={href}
      aria-label={label}
      className={cn("absolute inset-0 z-10", className)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="sr-only">{label}</span>
    </AppLink>
  );
}
