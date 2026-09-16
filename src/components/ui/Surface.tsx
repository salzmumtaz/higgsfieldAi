import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  padding?: boolean;
};

export function Surface({ className, padding = true, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border-subtle bg-surface-primary",
        padding && "p-4",
        className,
      )}
      {...props}
    />
  );
}
