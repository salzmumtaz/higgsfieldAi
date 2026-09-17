import type { SVGProps } from "react";
import { SoulIcon } from "@/assets/icons/SoulIcon";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import type { QuickStartBadge, QuickStartItem } from "./quick-start.types";

const badgeClass: Record<QuickStartBadge, string> = {
  top: "bg-brand-secondary text-white [background-image:radial-gradient(39.71%_136.54%_at_51.64%_117.31%,#F920D1_0%,#ED1572_100%)]",
  new: "bg-brand text-fg-inverse",
};

const badgeBaseClass =
  "pointer-events-none inline-block shrink-0 -skew-x-12 rounded-sm px-1.5 font-grotesk text-xs font-bold whitespace-nowrap uppercase";

export function QuickStartCard({ item }: { item: QuickStartItem }) {
  const t = useT();
  const badgeLabel = item.badge ? t(`badges.${item.badge}`) : null;
  const typeLabel =
    item.type === "video"
      ? t("nav.video")
      : item.type === "image"
        ? t("nav.image")
        : null;

  return (
    <a
      href={item.href}
      className={cn(
        "group relative flex min-h-31.5 overflow-hidden rounded-2xl border border-border-subtle bg-transparent p-0.5 transition-all duration-300 ease-out hover:border-transparent hover:p-0",
        item.desktopOnly ? "hidden lg:flex" : "flex",
      )}
    >
      <div className="relative flex h-full w-full flex-1 flex-col items-start justify-between gap-3 overflow-hidden rounded-xl bg-surface-secondary p-3.5 transition-all duration-300 ease-out group-hover:p-4">
        <div className="relative flex w-full items-center justify-between">
          <QuickStartIcon item={item} />
        </div>
        <div className="relative flex w-full flex-col gap-1">
          <div className="flex min-w-0 items-center gap-1.5 text-sm leading-6 font-semibold tracking-normal text-white">
            <span className="truncate">{item.title}</span>
            {item.badge && badgeLabel ? (
              <p className={cn(badgeBaseClass, "max-lg:hidden!", badgeClass[item.badge])}>
                {badgeLabel}
              </p>
            ) : null}
          </div>
          <p className="text-sm leading-5 font-normal text-fg-secondary lg:text-xs lg:leading-4.5">
            {item.description}
          </p>
        </div>
      </div>
      {item.badge && badgeLabel ? (
        <p
          className={cn(
            badgeBaseClass,
            "absolute top-3 right-3 z-10 lg:hidden!",
            badgeClass[item.badge],
          )}
        >
          {badgeLabel}
        </p>
      ) : null}
      {item.type && typeLabel ? (
        <span
          className={cn(
            "absolute top-3 right-3 z-10 grid grid-flow-col items-center gap-1 rounded-full bg-overlay-hover px-2 py-1.5 text-xs font-medium leading-4.5 text-white/80 backdrop-blur-sm",
            item.typeHiddenBelowLg && "max-lg:hidden",
          )}
        >
          {item.type === "video" ? <VideoTypeIcon /> : <ImageTypeIcon />}
          {typeLabel}
        </span>
      ) : null}
    </a>
  );
}

function QuickStartIcon({ item }: { item: QuickStartItem }) {
  const iconClass =
    "relative size-5 drop-shadow-[0px_3px_2px_rgba(0,0,0,0.15)]";

  if (item.icon === "nano-banana") {
    return <NanoBananaProIcon className={cn(iconClass, "text-white [&_path]:[stroke-width:1.5px]!")} />;
  }

  if (item.icon === "genjutsu") {
    return <SoulIcon className={cn(iconClass, "text-white [&_path]:[stroke-width:1.5px]!")} />;
  }

  if (item.iconSrc) {
    return (
      <img
        src={item.iconSrc}
        alt=""
        aria-hidden="true"
        className={iconClass}
      />
    );
  }

  return null;
}

function NanoBananaProIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" {...props}>
      <g transform="translate(-4 -4)">
        <path
          d="M24.416 17.3333C25.7727 15.9766 26.3143 14.4206 26.5775 13.4006C26.6922 12.9563 26.513 12.4894 26.1459 12.2141C25.7997 11.9544 25.3392 11.9107 24.943 12.0847C20.8314 13.8904 15.7539 14.6144 11.8743 10.625M11.5837 6.51828C11.5837 5.79758 10.9368 5.24928 10.2258 5.36742L9.05914 5.56128C8.49633 5.6548 8.08371 6.14164 8.08371 6.71218V9.6558C8.08371 9.9016 8.00259 10.1393 7.87246 10.3479C5.18176 14.6597 8.60539 22.4216 15.7447 24.2359C22.7529 26.0169 28.5748 21.3217 29.0521 17.5186C29.0917 17.2034 28.9541 16.8991 28.7247 16.6791L28.6296 16.5877C28.2694 16.2421 27.7304 16.1671 27.2782 16.3783C20.5792 19.5059 12.5278 18.8512 11.5838 9.75012L11.5837 6.51828Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

function VideoTypeIcon() {
  return (
    <svg
      className="size-3.5"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5.75C2 4.7835 2.7835 4 3.75 4H14.25C15.2165 4 16 4.7835 16 5.75V8.78669L20.191 6.6912C21.0221 6.27563 22 6.88 22 7.80923V16.1912C22 17.1204 21.0221 17.7248 20.191 17.3092L16 15.2137V18.25C16 19.2165 15.2165 20 14.25 20H3.75C2.7835 20 2 19.2165 2 18.25V5.75ZM16 13.5367L20.5 15.7867V8.21374L16 10.4637V13.5367Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ImageTypeIcon() {
  return (
    <svg
      className="size-3.5"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.75C3 3.7835 3.7835 3 4.75 3H19.25C20.2165 3 21 3.7835 21 4.75V19.25C21 20.2165 20.2165 21 19.25 21H4.75C3.7835 21 3 19.2165 3 19.25V4.75ZM4.75 4.5C4.61193 4.5 4.5 4.61193 4.5 4.75V14.4393L6.76256 12.1768C7.44598 11.4934 8.55402 11.4934 9.23744 12.1768L16.5607 19.5H19.25C19.3881 19.5 19.5 19.3881 19.5 19.25V4.75C19.5 4.61193 19.3881 19.5 19.25 4.5H4.75Z"
        fill="currentColor"
      />
      <path
        d="M13.4255 8.53727C13.4738 8.51308 13.5131 8.47385 13.5373 8.42546L14.2764 6.94721C14.3685 6.76295 14.6315 6.76295 14.7236 6.94721L15.4627 8.42546C15.4869 8.47385 15.5262 8.51308 15.5745 8.53727L17.0528 9.27639C17.237 9.36852 17.237 9.63148 17.0528 9.72361L15.5745 10.4627C15.5262 10.4869 15.4869 10.5262 15.4627 10.5745L14.7236 12.0528C14.6315 12.237 14.3685 12.237 14.2764 12.0528L13.5373 10.5745C13.5131 10.5262 13.4738 10.4869 13.4255 10.4627L11.9472 9.72361C11.763 9.63148 11.763 9.36852 11.9472 9.27639L13.4255 8.53727Z"
        fill="currentColor"
      />
    </svg>
  );
}
