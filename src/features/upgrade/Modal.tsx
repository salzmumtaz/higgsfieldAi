import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/Dialog";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";
import { UpgradeCloseIcon } from "@/features/upgrade/icons";
import { UpgradePlanCard } from "@/features/upgrade/PlanCard";
import {
  UPGRADE_PLANS,
  UPGRADE_PROMOTION_POSTER,
  UPGRADE_PROMOTION_VIDEO,
} from "@/features/upgrade/plans";
import type { BillingPeriod } from "@/features/upgrade/types";

const closeButtonClass =
  "flex size-8 cursor-pointer items-center justify-center rounded-2xl border-[1.5px] border-white/4 bg-page-primary text-white transition-colors hover:bg-surface-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function UpgradeModal() {
  const t = useT();
  const open = useAppStore((state) => state.upgradeOpen);
  const context = useAppStore((state) => state.upgradeContext);
  const closeUpgradeModal = useAppStore((state) => state.closeUpgradeModal);
  const [period, setPeriod] = useState<BillingPeriod>("annual");
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const title = t(context?.titleKey ?? "upgrade.genericTitle");
  const description = t(
    context?.descriptionKey ?? "upgrade.genericDescription",
  );

  function resetAndClose() {
    setPeriod("annual");
    setSelectedPlanId(null);
    closeUpgradeModal();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (next) return;
        resetAndClose();
      }}
    >
      <DialogContent
        showClose={false}
        data-upgrade-source={context?.source}
        data-upgrade-product={context?.productId}
        className={cn(
          "top-0 right-0 bottom-0 left-0 m-auto translate-none outline-none",
          "h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-none",
          "flex min-h-0 flex-col overflow-hidden rounded-[20px] border-border-card bg-page-primary p-0",
          "md:h-[calc(100dvh-48px)] md:w-[calc(100vw-48px)] md:rounded-3xl",
          "xl:h-[calc(100dvh-64px)] xl:w-[calc(100vw-64px)]",
        )}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>

        <DialogClose
          className={cn(
            closeButtonClass,
            "absolute top-5 right-5 z-20 hidden md:flex",
          )}
          aria-label={t("upgrade.close")}
        >
          <UpgradeCloseIcon />
        </DialogClose>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="relative w-full md:hidden">
            <video
              poster={UPGRADE_PROMOTION_POSTER}
              loop
              muted
              playsInline
              autoPlay
              preload="auto"
              className="h-60 w-full object-cover"
            >
              <source src={UPGRADE_PROMOTION_VIDEO} type="video/mp4" />
            </video>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-page-primary"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-page-primary via-page-primary/50 to-transparent"
            />
            <DialogClose
              className={cn(closeButtonClass, "absolute top-4 right-4 z-20")}
              aria-label={t("upgrade.close")}
            >
              <UpgradeCloseIcon />
            </DialogClose>
            <div className="absolute bottom-0 left-4 z-10 space-y-1 pb-1">
              <p className="font-grotesk text-[1.75rem] leading-9 font-bold tracking-[-1.12px] text-white">
                {title}
              </p>
              <p className="text-sm text-fg-secondary">{description}</p>
            </div>
          </div>

          <div className="w-full space-y-6 px-6 py-6 md:mx-auto md:max-w-[87.5rem] md:px-12 md:py-12">
            <div className="hidden text-center md:mx-auto md:block md:max-w-4xl">
              <p className="font-grotesk text-[2.5rem] leading-[1.125] font-bold tracking-[-0.04em] text-white uppercase">
                {title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-fg-secondary">
                {description}
              </p>
            </div>

            <div className="mt-8 mb-5 flex justify-center">
              <BillingToggle period={period} onChange={setPeriod} />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex w-full flex-wrap justify-center gap-2 xl:gap-4">
                {UPGRADE_PLANS.map((plan) => (
                  <UpgradePlanCard
                    key={plan.id}
                    plan={plan}
                    period={period}
                    selected={selectedPlanId === plan.id}
                    onSelect={() => setSelectedPlanId(plan.id)}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-1 text-center">
                <span className="text-xs text-fg-secondary">
                  {t("upgrade.note.unlimitedScope")}
                  <br />
                  {t("upgrade.note.taxes")}{" "}
                  <span className="underline">{t("actions.learnMore")}</span>
                  <br />
                  {t("upgrade.note.rollout")}
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
              <button type="button" className={secondaryActionClass}>
                {t("upgrade.footer.explorePlans")}
              </button>
              <button type="button" className={secondaryActionClass}>
                {t("upgrade.footer.creditPacks")}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const secondaryActionClass =
  "inline-flex h-11 max-w-80 min-w-0 flex-1 cursor-pointer items-center justify-center rounded-xl border border-border-default bg-surface-tertiary px-4 text-sm font-semibold tracking-[-0.0625em] whitespace-nowrap text-white transition-colors hover:bg-overlay-hover active:brightness-75 sm:h-12 sm:min-w-44 sm:px-6 sm:text-base";

function BillingToggle({
  period,
  onChange,
}: {
  period: BillingPeriod;
  onChange: (next: BillingPeriod) => void;
}) {
  const t = useT();
  const annual = period === "annual";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={annual}
      aria-label={t("upgrade.billing.toggleLabel")}
      onClick={() => onChange(annual ? "monthly" : "annual")}
      className="flex h-10 cursor-pointer items-center justify-center gap-0.5 overflow-hidden rounded-lg border border-border-default px-2 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <span
        className={cn(
          "px-1.5 text-xs leading-4 font-medium transition-colors",
          annual ? "text-fg-secondary" : "text-white",
        )}
      >
        {t("upgrade.billing.monthly")}
      </span>
      <span
        className={cn(
          "relative flex h-4 w-7 shrink-0 items-center overflow-hidden rounded-xl transition-colors",
          annual ? "bg-brand" : "bg-white/20",
        )}
      >
        <span
          className={cn(
            "ml-0.5 size-3 rounded-lg border border-black/10 bg-white transition-transform",
            annual && "translate-x-3",
          )}
        />
      </span>
      <span className="flex items-center">
        <span
          className={cn(
            "px-1.5 text-xs leading-4 font-medium transition-colors",
            annual ? "text-white" : "text-fg-secondary",
          )}
        >
          {t("upgrade.billing.annual")}
        </span>
        {annual ? (
          <span className="flex shrink-0 items-center pl-1">
            <span className="font-grotesk flex h-4 -skew-x-[10deg] items-center rounded-sm bg-brand-secondary px-1.5 text-xs leading-none font-bold whitespace-nowrap text-white uppercase">
              <span className="skew-x-[10deg]">
                {t("upgrade.billing.discount")}
              </span>
            </span>
          </span>
        ) : null}
      </span>
    </button>
  );
}
