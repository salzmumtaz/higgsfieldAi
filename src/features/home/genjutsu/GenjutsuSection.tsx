import { memo, useSyncExternalStore, type CSSProperties } from "react";
import { AppLink } from "@/components/navigation/AppLink";
import { GenjutsuPresetCard } from "./GenjutsuPresetCard";
import { genjutsuPresets } from "./genjutsu.data";
import { NewModelBadgeIcon, ViewAllArrowIcon } from "./genjutsu-icons";
import {
  GENJUTSU_MOBILE_LIMIT,
  GENJUTSU_PRESETS_HREF,
  generateHref,
  packGenjutsuColumns,
} from "./genjutsu.media";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";

const FRAME_SHADOW = "0 0 2rem 0 rgba(0, 0, 0, 0.85)";
const FRAME_BORDER =
  "linear-gradient(180deg, #3B3B3B 0%, #2E2E2E 50%, #343434 100%)";
const BADGE_BORDER = "linear-gradient(180deg, #73802E 0%, #656B43 100%)";
const MASONRY_FADE = "linear-gradient(180deg, rgb(0 0 0 / 0) 0%, #000 73.33%)";
const DESKTOP_QUERY = "(min-width: 768px)";

// Static data: do not rebuild these arrays whenever Home re-renders on scroll.
const DESKTOP_COLUMNS = packGenjutsuColumns(genjutsuPresets);
const MOBILE_PRESETS = genjutsuPresets.slice(0, GENJUTSU_MOBILE_LIMIT);

const maskBorderStyle = (background: string): CSSProperties => ({
  padding: 1,
  background,
  WebkitMask:
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
});

function subscribeDesktop(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getDesktopSnapshot() {
  return window.matchMedia(DESKTOP_QUERY).matches;
}

function useIsDesktop() {
  return useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, () => true);
}

function GradientHairline({
  background,
  className,
}: {
  background: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
      style={maskBorderStyle(background)}
    />
  );
}

function NewModelBadge() {
  return (
    <span
      className={cn(
        "relative inline-flex w-fit items-center justify-center gap-1 rounded-full py-1 pr-2 pl-1.5",
        "bg-[rgba(209,254,23,0.2)] text-sm leading-5 font-semibold tracking-normal text-brand",
        "shadow-[inset_0_-0.125rem_0.375rem_rgb(255_255_255/0.25)] backdrop-blur-lg [-webkit-backdrop-filter:blur(1rem)]",
        "[&_svg]:size-4",
      )}
    >
      <NewModelBadgeIcon />
      <span className="relative px-1 whitespace-nowrap">
        {t("home.genjutsu.newModel")}
      </span>
      <GradientHairline background={BADGE_BORDER} />
    </span>
  );
}

function marketingPrimaryClassName() {
  return cn(
    "type-button inline-flex h-[var(--layout-control-md)] items-center justify-center rounded-button bg-brand px-4 text-lg font-semibold text-fg-inverse shadow-[var(--shadow-brand-button)]",
    "transition-[filter,transform] duration-[0.18s] ease-[var(--ease-button)] hover:brightness-110 active:translate-y-px",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    "max-md:w-full",
  );
}

function marketingSecondaryClassName() {
  return cn(
    "type-button inline-flex h-[var(--layout-control-md)] items-center justify-center rounded-button bg-overlay-hover px-4 text-lg font-semibold text-white",
    "transition-[filter,background-color] duration-[0.18s] ease-[var(--ease-button)] hover:bg-white/10",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    "max-md:w-full",
  );
}

function brandSoftClassName(extra?: string) {
  return cn(
    "inline-flex h-[var(--layout-control-md)] items-center justify-center gap-2 rounded-button bg-[var(--bg-brand-soft-10)] px-4 text-base font-semibold text-brand",
    "transition-[filter] duration-[0.18s] ease-[var(--ease-button)] hover:brightness-110",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    extra,
  );
}

const GenjutsuDesktopSection = memo(function GenjutsuDesktopSection() {
  return (
    <section
      aria-label={t("home.genjutsu.title")}
      className={cn(
        "relative isolate flex w-full flex-col items-start gap-4 self-stretch overflow-hidden rounded-3xl bg-black px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]",
        "md:gap-7 md:px-6 md:pt-6 md:pb-0",
        "[@supports(-webkit-hyphens:none)]:[clip-path:inset(0_round_1.5rem)] [@supports(-webkit-hyphens:none)]:shadow-[inset_0_0_0_1px_#343434]",
      )}
      style={{ boxShadow: FRAME_SHADOW }}
    >
      <GradientHairline background={FRAME_BORDER} className="z-30" />

      <div className="relative z-10 flex w-full min-w-0 flex-col items-stretch gap-4 md:flex-row md:flex-nowrap md:items-start md:justify-between md:gap-8">
        <div className="flex min-w-0 flex-1 flex-col">
          <NewModelBadge />
          <h2 className="font-grotesk mt-4 text-[1.625rem] leading-[1.875rem] font-bold tracking-[-1.2px] text-brand uppercase [font-feature-settings:'ss04'] md:mt-6 md:text-[2.125rem] md:leading-9">
            {t("home.genjutsu.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-5 font-medium text-fg-secondary md:text-base md:leading-6">
            {t("home.genjutsu.description")}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row sm:items-center md:mt-auto md:w-auto">
          <AppLink
            href={generateHref()}
            className={marketingPrimaryClassName()}
          >
            Try free
          </AppLink>
          <a
            href={GENJUTSU_PRESETS_HREF}
            className={marketingSecondaryClassName()}
          >
            {t("actions.learnMore")}
          </a>
        </div>
      </div>

      <div className="@container relative min-h-0 w-full min-w-0 overflow-hidden">
        <div
          data-explore-masonry=""
          className="flex h-[calc(45cqw+3*var(--spacing-q-200,0.5rem))] w-full gap-2 overflow-hidden"
        >
          {DESKTOP_COLUMNS.map((column, index) => (
            <div
              key={index}
              className="flex min-w-0 flex-1 flex-col gap-2 [&_[data-explore-card]]:mb-0!"
            >
              {column.map((preset) => (
                <GenjutsuPresetCard key={preset.id} preset={preset} />
              ))}
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-6 bottom-0 z-10 h-60"
          style={{ background: MASONRY_FADE }}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex w-full justify-center">
        <a
          href={GENJUTSU_PRESETS_HREF}
          className={brandSoftClassName("pointer-events-auto max-md:w-full")}
        >
          {t("actions.viewAllPresets")}
          <ViewAllArrowIcon />
        </a>
      </div>
    </section>
  );
});

const GenjutsuMobileSection = memo(function GenjutsuMobileSection() {
  return (
    <section className="space-y-5">
      <hgroup className="space-y-1">
        <h2>
          <a
            href={GENJUTSU_PRESETS_HREF}
            className="type-accent relative uppercase"
          >
            {t("home.genjutsu.title")}
          </a>
        </h2>
        <p className="text-sm font-normal text-fg-secondary">
          {t("home.genjutsu.descriptionMobile")}
        </p>
      </hgroup>

      <div className="relative max-h-224 overflow-hidden">
        <div
          data-explore-masonry=""
          className="w-full columns-2 [column-gap:1rem]"
        >
          {MOBILE_PRESETS.map((preset) => (
            <GenjutsuPresetCard
              key={preset.id}
              preset={preset}
              chrome="mobile"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute -bottom-1 left-0 z-10 grid h-52 w-full items-end justify-center bg-gradient-to-t from-page to-transparent pb-5">
          <a
            href={GENJUTSU_PRESETS_HREF}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-button bg-brand-soft px-4 py-3 text-sm font-semibold text-brand backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {t("actions.viewAllPresets")}
            <ViewAllArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
});

export const GenjutsuSection = memo(function GenjutsuSection() {
  const isDesktop = useIsDesktop();

  // Important: only one responsive tree is mounted. CSS hiding both trees still
  // leaves every card, observer and video lifecycle alive in React.
  return isDesktop ? (
    <div className="container-app mb-6">
      <GenjutsuDesktopSection />
    </div>
  ) : (
    <div className="container-app my-6">
      <GenjutsuMobileSection />
    </div>
  );
});
