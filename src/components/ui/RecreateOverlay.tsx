import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";

type RecreateOverlayProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function RecreateOverlay({
  className,
  children,
  type = "button",
  ...props
}: RecreateOverlayProps) {
  return (
    <button
      type={type}
      className={cn(
        "type-label inline-flex h-[var(--layout-recreate)] items-center justify-center rounded-control px-3",
        "bg-[var(--bg-brand-soft-10)] text-brand backdrop-blur-[8px]",
        "transition-[opacity,filter] duration-[var(--duration-normal)] ease-out",
        "hover:brightness-110 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand",
        className,
      )}
      {...props}
    >
      {children ?? t("actions.recreate")}
    </button>
  );
}
