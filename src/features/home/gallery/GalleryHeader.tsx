import { cn } from "@/lib/cn";
import type { GalleryAction } from "./models/types";

export function GalleryHeader({
  title,
  titleHref,
  description,
  action,
}: {
  title: string;
  titleHref?: string;
  description?: string;
  action?: GalleryAction;
}) {
  const heading = titleHref ? (
    <a href={titleHref} className="type-accent relative uppercase">
      {title}
    </a>
  ) : (
    <span className="type-accent uppercase">{title}</span>
  );

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <hgroup className="space-y-1">
        <h2>{heading}</h2>
        {description ? (
          <p className="text-sm font-normal text-fg-secondary">{description}</p>
        ) : null}
      </hgroup>
      {action ? (
        <a
          href={action.href}
          className={cn(
            "type-button inline-flex h-[var(--layout-control-md)] shrink-0 items-center justify-center rounded-button bg-brand px-4 text-base font-semibold text-fg-inverse shadow-[var(--shadow-brand-button)]",
            "transition-[filter,transform] duration-[0.18s] ease-[var(--ease-button)] hover:brightness-110 active:translate-y-px",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
          )}
        >
          {action.label}
        </a>
      ) : null}
    </div>
  );
}
