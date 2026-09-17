import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type StatusBadgeColor = "lime" | "pink" | "cyan";

const pillClass: Record<StatusBadgeColor, string> = {
  lime: "bg-brand text-fg-inverse",
  pink: "bg-brand-secondary text-white",
  cyan: "text-white bg-[linear-gradient(90deg,#3259b4_0%,#3c8cff_50%,#00c8d2_75%,#78c9e6_100%)]",
};

export const statusBadgeWellClass: Record<StatusBadgeColor, string> = {
  lime: "border-brand-alpha",
  pink: "border-brand-secondary-alpha",
  cyan: "border-[#3CD8FF]",
};

export function StatusBadge({
  color,
  children,
  className,
}: {
  color: StatusBadgeColor;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("absolute -top-3 left-1/2 -translate-x-1/2", className)}>
      <span
        className={cn(
          "font-grotesk inline-block -skew-x-12 rounded-sm px-1.5 text-xs font-bold whitespace-nowrap uppercase",
          pillClass[color],
        )}
      >
        {children}
      </span>
    </span>
  );
}
