import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import {
  UpgradeCheckIcon,
  UpgradeCreditIcon,
  UpgradeCrossIcon,
  UpgradeGemIcon,
  UpgradeModelGlyph,
  UpgradeSparkIcon,
} from "@/features/upgrade/icons";
import type {
  BillingPeriod,
  UpgradeBadge,
  UpgradeModelGroup,
  UpgradePlan,
} from "@/features/upgrade/types";

const surfaceStyle: Record<UpgradePlan["surface"], string> = {
  basic:
    "bg-[radial-gradient(58%_220%_at_3%_42%,rgba(255,255,255,0.094)_0%,rgba(255,255,255,0.035)_42%,rgba(255,255,255,0.01)_100%),linear-gradient(#1d1f20_0%,#17191b_100%)]",
  pro: "bg-[radial-gradient(58%_220%_at_3%_42%,rgba(209,254,23,0.12)_0%,rgba(209,254,23,0.04)_42%,rgba(255,255,255,0.01)_100%),linear-gradient(#1f2118_0%,#17191b_100%)]",
  max: "bg-[radial-gradient(58%_220%_at_3%_42%,rgba(255,0,91,0.14)_0%,rgba(255,0,91,0.05)_42%,rgba(255,255,255,0.01)_100%),linear-gradient(#231a20_0%,#17191b_100%)]",
};

const ctaStyle: Record<UpgradePlan["ctaVariant"], string> = {
  white:
    "bg-white text-fg-inverse shadow-[inset_0_-3px_0_rgba(0,0,0,0.1),0_6px_4px_rgba(0,0,0,0.25),0_32px_24px_rgba(0,0,0,0.15)]",
  brand: "bg-brand text-fg-inverse shadow-[var(--shadow-brand-button)]",
  "brand-secondary":
    "bg-brand-secondary text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.32),0_6px_4px_rgba(0,0,0,0.25),0_32px_24px_rgba(0,0,0,0.15)]",
};

export function UpgradePlanCard({
  plan,
  period,
  selected,
  onSelect,
}: {
  plan: UpgradePlan;
  period: BillingPeriod;
  selected: boolean;
  onSelect: () => void;
}) {
  const t = useT();
  const data = plan.periods[period];

  return (
    <div className="flex w-86 max-w-full flex-col">
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[1.25rem]",
          surfaceStyle[plan.surface],
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-1 rounded-[inherit] border border-white/10"
        />

        <div className="relative z-2 flex flex-col gap-3 px-4 pt-4">
          <div className="flex flex-col gap-1">
            <div className="flex min-w-0 items-center gap-2">
              <span className="font-grotesk shrink-0 text-2xl leading-7 font-bold tracking-[-0.075rem] text-white uppercase">
                {t(plan.nameKey)}
              </span>
              <div className="flex min-w-0 items-center gap-1">
                {data.headerBadges?.map((badge) => (
                  <UpgradeBadgePill
                    key={badge.labelKey ?? badge.label}
                    badge={badge}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-white/50">{t(plan.subtitleKey)}</p>
          </div>

          <div className="flex h-34 flex-col justify-between rounded-xl bg-white/5 p-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <UpgradeSparkIcon className="size-4 shrink-0 text-white" />
                <span className="text-sm font-semibold text-white">
                  {formatCredits(plan.credits)} {t("upgrade.credits.perMonth")}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {plan.creditNoteKeys.map((key) => (
                  <span key={key} className="text-xs text-white/50">
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>

            {plan.fixedCreditsKey ? (
              <span className="text-xs text-white/50">
                {t(plan.fixedCreditsKey)}
              </span>
            ) : null}

            {plan.creditTiers ? <CreditTiers tiers={plan.creditTiers} /> : null}
          </div>

          <div className="flex flex-nowrap items-end gap-1">
            {data.originalPrice == null ? null : (
              <span className="font-grotesk relative text-2xl leading-7 font-bold tracking-[-0.075rem] text-brand-secondary uppercase">
                ${data.originalPrice}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-1/2 h-0.5 -rotate-8 bg-brand-secondary"
                />
              </span>
            )}
            <span className="font-grotesk text-[1.75rem] leading-8 font-bold tracking-[-0.075rem] text-white uppercase">
              ${data.price}
            </span>
            <span className="mb-0.5 text-xs whitespace-nowrap text-white/50">
              {t(data.priceCaptionKey)}
            </span>
          </div>
        </div>

        <div className="relative z-2 flex flex-1 flex-col gap-4 px-3 pt-3 pb-3">
          <div className="flex flex-col items-start rounded-xl border border-white/5 bg-white/5">
            <button
              type="button"
              onClick={onSelect}
              className={cn(
                "h-12 w-full cursor-pointer rounded-[0.625rem] text-sm font-semibold transition-[filter] duration-150 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                ctaStyle[plan.ctaVariant],
              )}
            >
              {t(plan.ctaKey)}
            </button>
            <div className="flex w-full items-center justify-center p-2">
              <span className="text-xs leading-4 text-white/50">
                {selected ? (
                  <span className="font-semibold text-white">
                    {t("upgrade.planSelected", { plan: t(plan.nameKey) })}
                  </span>
                ) : data.savingsAmount ? (
                  <>
                    <span className="font-semibold text-white">
                      {t("upgrade.savings.save", {
                        amount: data.savingsAmount,
                      })}
                    </span>{" "}
                    {t("upgrade.savings.comparedToMonthly")}
                  </>
                ) : data.savingsNoteKey ? (
                  t(data.savingsNoteKey)
                ) : (
                  <span className="invisible">—</span>
                )}
              </span>
            </div>
          </div>

          {data.modelGroups.map((group) => (
            <ModelGroup key={group.id} group={group} />
          ))}

          <div className="flex flex-col gap-1">
            {data.features.map((feature) => (
              <div key={feature.id} className="flex w-full items-center gap-1">
                <div className="flex min-w-0 flex-1 items-center gap-1">
                  {feature.available ? (
                    <UpgradeCheckIcon className="size-4 shrink-0 text-white" />
                  ) : (
                    <UpgradeCrossIcon className="size-4 shrink-0 text-white/30" />
                  )}
                  <span
                    className={cn(
                      "text-xs leading-4",
                      feature.available ? "text-white" : "text-white/30",
                      feature.tone === "cyan" && "text-[#3cd8ff]",
                      feature.hint &&
                        "underline decoration-white/40 decoration-dotted underline-offset-2",
                    )}
                  >
                    {t(feature.labelKey)}
                  </span>
                </div>
                {feature.badge ? (
                  <UpgradeBadgePill badge={feature.badge} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModelGroup({ group }: { group: UpgradeModelGroup }) {
  const t = useT();

  return (
    <div
      className={cn(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-white/5 bg-[radial-gradient(80%_40%_at_50%_100%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%),var(--bg-surface-secondary)] px-3 pt-3 pb-1",
        group.dimmed && "opacity-60",
      )}
    >
      <div className="flex flex-col">
        <span className="font-grotesk text-base leading-5 font-bold tracking-[-0.04em] text-white/50 uppercase">
          {t(group.titleKey)}
        </span>
        {group.subtitleKey ? (
          <span className="text-xs font-medium text-white/30">
            {t(group.subtitleKey)}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1 pt-1">
        {group.rows.map((row) => (
          <div key={row.id} className="flex w-full items-center gap-1.5">
            <UpgradeModelGlyph muted={row.muted} />
            <span
              className={cn(
                "min-w-0 flex-1 text-xs leading-4",
                row.muted ? "text-white/30" : "text-white",
              )}
            >
              {row.label}
            </span>
            <div className="flex shrink-0 items-center gap-1">
              {row.badges?.map((badge) => (
                <UpgradeBadgePill
                  key={badge.labelKey ?? badge.label}
                  badge={badge}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {group.footnoteKey ? (
        <span
          className={cn(
            "py-1 text-xs leading-4",
            group.footnoteTone === "brand" ? "text-brand" : "text-white/30",
          )}
        >
          {t(group.footnoteKey)}
        </span>
      ) : null}
    </div>
  );
}

/** Captured credit tier rail. Alternate tier pricing was not captured, so the
 *  rail is presentational and always shows the captured base tier. */
function CreditTiers({ tiers }: { tiers: number[] }) {
  const t = useT();

  return (
    <div className="flex flex-col gap-1.5">
      <div className="relative mx-2.5 h-1 rounded-full bg-white/10">
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-0 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"
        />
      </div>
      <div className="flex justify-between px-2.5">
        {tiers.map((tier, index) => (
          <span
            key={tier}
            aria-label={t("upgrade.credits.tierLabel", {
              amount: formatCredits(tier),
            })}
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              index === 0 ? "text-white" : "text-white/50",
            )}
          >
            <UpgradeCreditIcon className="size-3.5 shrink-0" />
            {formatCredits(tier)}
          </span>
        ))}
      </div>
    </div>
  );
}

function UpgradeBadgePill({ badge }: { badge: UpgradeBadge }) {
  const t = useT();
  const label = badge.labelKey ? t(badge.labelKey) : badge.label;

  if (badge.variant === "discount") {
    return (
      <span className="font-grotesk inline-flex h-4 -skew-x-[10.89deg] items-center rounded-xs bg-brand-secondary px-1.5 text-xs leading-none font-bold text-white uppercase">
        <span className="whitespace-nowrap skew-x-[10.89deg]">{label}</span>
      </span>
    );
  }

  if (badge.variant === "premium") {
    return (
      <span className="font-grotesk inline-flex h-4 -skew-x-[10.89deg] items-center gap-0.5 rounded-xs bg-[radial-gradient(84%_180%_at_50%_118%,#4FC9DC_0%,#32A2EE_50%,#167BFF_100%)] pr-1.5 pl-1 text-xs leading-none font-bold text-white uppercase">
        <span className="inline-flex skew-x-[10.89deg]">
          <UpgradeGemIcon className="size-2.5" />
        </span>
        <span className="whitespace-nowrap skew-x-[10.89deg]">{label}</span>
      </span>
    );
  }

  return (
    <span
      className={cn(
        "shrink-0 rounded px-1 py-0.5 text-[10px] leading-3.5 font-semibold whitespace-nowrap",
        badge.variant === "brand" && "bg-brand text-fg-inverse",
        badge.variant === "neutral" && "bg-white/20 text-white",
        badge.variant === "muted" && "bg-white/10 text-white/50",
      )}
    >
      {label}
    </span>
  );
}

function formatCredits(value: number) {
  return value.toLocaleString("en-US");
}
