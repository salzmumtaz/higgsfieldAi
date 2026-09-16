import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
};

export function Chip({ className, pressed = false, type = "button", ...props }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={pressed}
      className={cn(
        "inline-flex h-[var(--layout-chip)] items-center rounded-pill px-3 text-sm font-medium transition-colors duration-[var(--duration-normal)] ease-out focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand",
        pressed
          ? "bg-surface-tertiary text-fg"
          : "bg-surface-primary text-fg-secondary hover:bg-surface-secondary",
        className,
      )}
      {...props}
    />
  );
}
