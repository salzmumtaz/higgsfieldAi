import { useState } from "react";
import { PromoTagIcon } from "@/assets/icons/PromoTagIcon";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

export function PromotionHeader() {
  const t = useT();
  const [expanded, setExpanded] = useState(true);

  return (
    <header
      data-expanded={expanded ? "true" : "false"}
      className={cn(
        "relative z-[3] grid bg-brand text-fg-inverse transition-[grid-template-rows,box-shadow,border-color] duration-[var(--duration-slow)] ease-out",
        expanded
          ? "grid-rows-[1fr] border-b border-white/20 shadow-[0_0_12px_0_rgb(209_254_23_/_0.5)]"
          : "grid-rows-[0fr] border-0 shadow-none",
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="container-app relative grid min-h-11 items-center px-2 md:px-0">
          <button
            type="button"
            className="relative flex w-full min-w-0 items-center justify-start gap-3 py-1.5 text-left md:size-full md:justify-center md:px-11 md:text-center"
          >
            <span className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-normal">
              <PromoTagIcon className="size-4 shrink-0" />
              <span className="min-w-0 md:truncate">{t("header.promo")}</span>
            </span>
            <span className="hidden h-6 shrink-0 items-center rounded-md bg-white px-2.5 text-xs font-semibold leading-4 text-fg-inverse shadow-[0_2px_4px_rgba(0,0,0,0.2)] md:inline-flex">
              {t("header.promoCta")}
            </span>
          </button>

          <button
            type="button"
            className="absolute top-1/2 right-2 z-10 grid size-5 -translate-y-1/2 items-center justify-center rounded-lg text-fg-inverse md:right-4 md:size-7"
            aria-label={t("header.dismissPromo")}
            onClick={() => setExpanded(false)}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m6.25 6.25 11.5 11.5m0-11.5-11.5 11.5"
      />
    </svg>
  );
}
