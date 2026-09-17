import type { MessageKey } from "@/lib/i18n";

export type BillingPeriod = "monthly" | "annual";

export type UpgradeBadgeVariant =
  /** lime pill, e.g. 7-day unlimited / Full access / 60% cheaper */
  | "brand"
  /** magenta skewed pill, e.g. 21% OFF */
  | "discount"
  /** blue gem pill, e.g. Best value */
  | "premium"
  /** plain translucent pill, e.g. 2K / 1080p / 4K */
  | "neutral"
  /** dimmed pill, e.g. No access / No unlimited */
  | "muted";

export type UpgradeBadge = {
  variant: UpgradeBadgeVariant;
  /** Proper nouns and resolutions stay literal; prose uses labelKey. */
  label?: string;
  labelKey?: MessageKey;
};

export type UpgradeModelRow = {
  id: string;
  label: string;
  badges?: UpgradeBadge[];
  muted?: boolean;
};

export type UpgradeModelGroup = {
  id: string;
  titleKey: MessageKey;
  subtitleKey?: MessageKey;
  rows: UpgradeModelRow[];
  footnoteKey?: MessageKey;
  footnoteTone?: "brand" | "muted";
  /** Captured `opacity-60` treatment on locked groups. */
  dimmed?: boolean;
};

export type UpgradeFeatureRow = {
  id: string;
  labelKey: MessageKey;
  available: boolean;
  /** Supercomputer row is rendered in the cyan accent. */
  tone?: "cyan";
  /** Captured dotted-underline tooltip affordance. */
  hint?: boolean;
  badge?: UpgradeBadge;
};

export type UpgradePlanPeriod = {
  price: number;
  originalPrice?: number;
  priceCaptionKey: MessageKey;
  /** Formatted saving, e.g. `$72`. Absent where the capture shows none. */
  savingsAmount?: string;
  savingsNoteKey?: MessageKey;
  headerBadges?: UpgradeBadge[];
  modelGroups: UpgradeModelGroup[];
  features: UpgradeFeatureRow[];
};

export type UpgradePlan = {
  id: string;
  nameKey: MessageKey;
  subtitleKey: MessageKey;
  credits: number;
  creditNoteKeys: MessageKey[];
  /** Basic shows a fixed-amount note; Pro/Max show a credit tier slider. */
  fixedCreditsKey?: MessageKey;
  creditTiers?: number[];
  ctaKey: MessageKey;
  ctaVariant: "white" | "brand" | "brand-secondary";
  surface: "basic" | "pro" | "max";
  periods: Record<BillingPeriod, UpgradePlanPeriod>;
};
