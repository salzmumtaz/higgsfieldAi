import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export function GalleryFadeCta({
  href,
  label,
  className,
  heightClassName = "h-52",
  fromClassName = "from-page",
  style,
}: {
  href: string;
  label: string;
  className?: string;
  heightClassName?: string;
  fromClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -bottom-1 left-0 z-10 grid w-full items-end justify-center bg-gradient-to-t to-transparent pb-5 md:pb-9",
        heightClassName,
        fromClassName,
        className,
      )}
      style={style}
    >
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-button bg-brand-soft px-4 py-3 text-sm font-semibold text-brand backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {label}
        <ViewAllIcon />
      </a>
    </div>
  );
}

function ViewAllIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 15.25V5.75M18.25 5.75H8.75M18.25 5.75L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
