import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

type LikeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed: boolean;
  count: number;
};

export function LikeButton({
  pressed,
  count,
  className,
  type = "button",
  onClick,
  ...props
}: LikeButtonProps) {
  const t = useT();
  return (
    <button
      type={type}
      aria-pressed={pressed}
      aria-label={t("actions.like")}
      className={cn(
        "inline-flex items-center gap-1 rounded-pill border-0 bg-white/8 px-2 py-1 text-sm font-medium text-white backdrop-blur-[2rem]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        pressed && "text-brand",
        className,
      )}
      {...props}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick?.(event);
      }}
    >
      <HeartIcon filled={pressed} />
      <span className="tabular-nums">{count}</span>
    </button>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 20.25s-6.75-4.2-9.18-8.13C1.2 9.6 2.04 6 5.4 6c2.04 0 3.24 1.2 3.6 1.8.36-.6 1.56-1.8 3.6-1.8 3.36 0 4.2 3.6 2.58 6.12C18.75 16.05 12 20.25 12 20.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
