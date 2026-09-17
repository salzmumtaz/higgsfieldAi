import type { ButtonHTMLAttributes, Ref } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "icon" | "soft";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  ref?: Ref<HTMLButtonElement>;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[var(--layout-control-sm)] px-3 text-sm rounded-control",
  md: "h-[var(--layout-control-md)] px-4 text-base rounded-button",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-fg-inverse font-semibold shadow-[var(--shadow-brand-button)] hover:brightness-110 active:translate-y-px",
  secondary:
    "bg-surface-secondary text-fg border border-border-default hover:bg-surface-tertiary",
  ghost: "bg-transparent text-fg hover:bg-overlay-hover",
  icon: "bg-transparent text-fg hover:bg-overlay-hover px-0",
  soft: "bg-brand-soft text-brand shadow-[var(--shadow-soft-inset)] hover:bg-[var(--bg-brand-soft-10)]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ref,
  ...props
}: ButtonProps) {
  const iconSize =
    variant === "icon"
      ? size === "sm"
        ? "size-9 rounded-control px-0"
        : "size-12 rounded-button px-0"
      : sizeClasses[size];

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "type-button inline-flex items-center justify-center gap-2 whitespace-nowrap transition-[filter,transform,background-color,color] duration-[0.18s] ease-[var(--ease-button)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand",
        variant === "icon" ? iconSize : sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
