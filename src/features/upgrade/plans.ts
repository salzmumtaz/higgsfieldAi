import type {
  UpgradeBadge,
  UpgradeFeatureRow,
  UpgradeModelGroup,
  UpgradePlan,
} from "@/features/upgrade/types";

export const UPGRADE_PROMOTION_POSTER =
  "https://static.higgsfield.ai/promotions/upgrade-promotion-poster.webp";
export const UPGRADE_PROMOTION_VIDEO =
  "https://static.higgsfield.ai/promotions/upgrade-promotion.mp4";

const noAccess: UpgradeBadge = {
  variant: "muted",
  labelKey: "upgrade.badge.noAccess",
};
const noUnlimited: UpgradeBadge = {
  variant: "muted",
  labelKey: "upgrade.badge.noUnlimited",
};
const sevenDayUnlimited: UpgradeBadge = {
  variant: "brand",
  labelKey: "upgrade.badge.sevenDayUnlimited",
};
const fullAccess: UpgradeBadge = {
  variant: "brand",
  labelKey: "upgrade.badge.fullAccess",
};
const bestValue: UpgradeBadge = {
  variant: "premium",
  labelKey: "upgrade.badge.bestValue",
};

const seedanceLocked: UpgradeModelGroup = {
  id: "seedance-locked",
  titleKey: "upgrade.group.noSeedance25",
  subtitleKey: "upgrade.group.availableFromPro",
  dimmed: true,
  rows: [
    { id: "seedance-2-5", label: "Seedance 2.5", badges: [noAccess] },
    { id: "seedance-2-0", label: "Seedance 2.0", badges: [noAccess] },
  ],
};

const seedanceFull: UpgradeModelGroup = {
  id: "seedance-full",
  titleKey: "upgrade.group.seedanceAccess",
  subtitleKey: "upgrade.group.seedanceFullLineup",
  rows: [
    {
      id: "seedance-2-5",
      label: "Seedance 2.5",
      badges: [{ variant: "neutral", label: "1080p" }, fullAccess],
    },
    {
      id: "seedance-2-0",
      label: "Seedance 2.0",
      badges: [{ variant: "neutral", label: "4K" }, fullAccess],
    },
  ],
};

const basicFeatures: UpgradeFeatureRow[] = [
  {
    id: "parallel",
    labelKey: "upgrade.feature.parallel2",
    available: true,
    hint: true,
  },
  {
    id: "supercomputer",
    labelKey: "upgrade.feature.supercomputer",
    available: true,
    tone: "cyan",
  },
  {
    id: "seedance-fast",
    labelKey: "upgrade.feature.seedanceFastMini",
    available: true,
  },
  {
    id: "selected-models",
    labelKey: "upgrade.feature.selectedModels",
    available: true,
    hint: true,
  },
  {
    id: "early-access",
    labelKey: "upgrade.feature.earlyAccess",
    available: false,
  },
  {
    id: "marketplace",
    labelKey: "upgrade.feature.marketplace",
    available: false,
  },
  {
    id: "lowest-cost",
    labelKey: "upgrade.feature.lowestCost",
    available: false,
  },
];

/** Pro/Max share every feature row except the first one and the last badge. */
function upperFeatures(options: {
  parallelKey: UpgradeFeatureRow["labelKey"];
  parallelBadge?: UpgradeBadge;
  lowestCost: boolean;
  lowestCostBadge?: UpgradeBadge;
}): UpgradeFeatureRow[] {
  return [
    {
      id: "parallel",
      labelKey: options.parallelKey,
      available: true,
      hint: true,
      badge: options.parallelBadge,
    },
    {
      id: "supercomputer",
      labelKey: "upgrade.feature.supercomputer",
      available: true,
      tone: "cyan",
    },
    {
      id: "all-seedance",
      labelKey: "upgrade.feature.allSeedance",
      available: true,
    },
    {
      id: "all-models",
      labelKey: "upgrade.feature.allModels",
      available: true,
      hint: true,
    },
    {
      id: "early-access",
      labelKey: "upgrade.feature.earlyAccess",
      available: true,
      hint: true,
    },
    {
      id: "marketplace",
      labelKey: "upgrade.feature.marketplace",
      available: true,
    },
    {
      id: "lowest-cost",
      labelKey: "upgrade.feature.lowestCost",
      available: options.lowestCost,
      badge: options.lowestCostBadge,
    },
  ];
}

const newBadge: UpgradeBadge = {
  variant: "brand",
  labelKey: "upgrade.badge.new",
};

export const UPGRADE_PLANS: UpgradePlan[] = [
  {
    id: "basic",
    nameKey: "upgrade.plan.basic.name",
    subtitleKey: "upgrade.plan.basic.subtitle",
    credits: 120,
    creditNoteKeys: [
      "upgrade.credits.basicGenerations",
      "upgrade.credits.basicVideos",
    ],
    fixedCreditsKey: "upgrade.credits.basicFixed",
    ctaKey: "upgrade.plan.basic.cta",
    ctaVariant: "white",
    surface: "basic",
    periods: {
      annual: {
        price: 9,
        priceCaptionKey: "upgrade.price.billedAnnually",
        savingsNoteKey: "upgrade.savings.noDifference",
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              { id: "nano-banana-pro", label: "Nano Banana Pro", muted: true },
              { id: "nano-banana-2", label: "Nano Banana 2", muted: true },
              { id: "kling-3", label: "Kling 3.0", muted: true },
            ],
            footnoteKey: "upgrade.group.noOtherUnlimited",
            footnoteTone: "muted",
          },
          seedanceLocked,
        ],
        features: basicFeatures,
      },
      monthly: {
        price: 9,
        priceCaptionKey: "upgrade.price.billedMonthly",
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              { id: "nano-banana-pro", label: "Nano Banana Pro", muted: true },
              { id: "nano-banana-2", label: "Nano Banana 2", muted: true },
            ],
            footnoteKey: "upgrade.group.noOtherUnlimited",
            footnoteTone: "muted",
          },
          seedanceLocked,
        ],
        features: basicFeatures,
      },
    },
  },
  {
    id: "pro",
    nameKey: "upgrade.plan.pro.name",
    subtitleKey: "upgrade.plan.pro.subtitle",
    credits: 600,
    creditNoteKeys: [
      "upgrade.credits.proGenerations",
      "upgrade.credits.proVideos",
    ],
    creditTiers: [600, 900],
    ctaKey: "upgrade.plan.pro.cta",
    ctaVariant: "brand",
    surface: "pro",
    periods: {
      annual: {
        price: 23,
        originalPrice: 29,
        priceCaptionKey: "upgrade.price.billedAnnually",
        savingsAmount: "$72",
        headerBadges: [
          { variant: "discount", labelKey: "upgrade.badge.off21" },
        ],
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              {
                id: "nano-banana-pro",
                label: "Nano Banana Pro",
                muted: true,
                badges: [noUnlimited],
              },
              {
                id: "nano-banana-2",
                label: "Nano Banana 2",
                badges: [
                  { variant: "neutral", label: "2K" },
                  sevenDayUnlimited,
                ],
              },
              {
                id: "kling-3",
                label: "Kling 3.0",
                badges: [sevenDayUnlimited],
              },
            ],
            footnoteKey: "upgrade.group.sevenUnlimitedModels",
            footnoteTone: "brand",
          },
          seedanceFull,
        ],
        features: upperFeatures({
          parallelKey: "upgrade.feature.unlimitedParallel",
          parallelBadge: newBadge,
          lowestCost: false,
        }),
      },
      monthly: {
        price: 29,
        priceCaptionKey: "upgrade.price.billedMonthly",
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              {
                id: "nano-banana-pro",
                label: "Nano Banana Pro",
                muted: true,
                badges: [noUnlimited],
              },
              {
                id: "nano-banana-2",
                label: "Nano Banana 2",
                muted: true,
                badges: [noUnlimited],
              },
            ],
            footnoteKey: "upgrade.group.sevenUnlimitedModels",
            footnoteTone: "brand",
          },
          seedanceFull,
        ],
        features: upperFeatures({
          parallelKey: "upgrade.feature.parallel3",
          lowestCost: false,
        }),
      },
    },
  },
  {
    id: "max",
    nameKey: "upgrade.plan.max.name",
    subtitleKey: "upgrade.plan.max.subtitle",
    credits: 1800,
    creditNoteKeys: [
      "upgrade.credits.maxGenerations",
      "upgrade.credits.maxVideos",
    ],
    creditTiers: [1800, 3600, 5400],
    ctaKey: "upgrade.plan.max.cta",
    ctaVariant: "brand-secondary",
    surface: "max",
    periods: {
      annual: {
        price: 59,
        originalPrice: 79,
        priceCaptionKey: "upgrade.price.billedAnnually",
        savingsAmount: "$240",
        headerBadges: [
          { variant: "discount", labelKey: "upgrade.badge.off25" },
          bestValue,
        ],
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              {
                id: "nano-banana-pro",
                label: "Nano Banana Pro",
                badges: [
                  { variant: "neutral", label: "2K" },
                  sevenDayUnlimited,
                ],
              },
              {
                id: "nano-banana-2",
                label: "Nano Banana 2",
                badges: [
                  { variant: "neutral", label: "2K" },
                  sevenDayUnlimited,
                ],
              },
              {
                id: "kling-3",
                label: "Kling 3.0",
                badges: [sevenDayUnlimited],
              },
            ],
            footnoteKey: "upgrade.group.sevenUnlimitedModels",
            footnoteTone: "brand",
          },
          seedanceFull,
        ],
        features: upperFeatures({
          parallelKey: "upgrade.feature.unlimitedParallel",
          parallelBadge: newBadge,
          lowestCost: true,
          lowestCostBadge: {
            variant: "brand",
            labelKey: "upgrade.badge.cheaper60",
          },
        }),
      },
      monthly: {
        price: 79,
        priceCaptionKey: "upgrade.price.billedMonthly",
        headerBadges: [bestValue],
        modelGroups: [
          {
            id: "unlimited",
            titleKey: "upgrade.group.unlimitedFreeGens",
            rows: [
              {
                id: "nano-banana-pro",
                label: "Nano Banana Pro",
                badges: [
                  { variant: "neutral", label: "2K" },
                  sevenDayUnlimited,
                ],
              },
              {
                id: "nano-banana-2",
                label: "Nano Banana 2",
                badges: [
                  { variant: "neutral", label: "2K" },
                  sevenDayUnlimited,
                ],
              },
            ],
            footnoteKey: "upgrade.group.sevenUnlimitedModels",
            footnoteTone: "brand",
          },
          seedanceFull,
        ],
        features: upperFeatures({
          parallelKey: "upgrade.feature.unlimitedParallel",
          parallelBadge: newBadge,
          lowestCost: true,
          lowestCostBadge: {
            variant: "brand",
            labelKey: "upgrade.badge.cheaper50",
          },
        }),
      },
    },
  },
];
