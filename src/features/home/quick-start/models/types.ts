export const QuickStartBadge = {
  Top: "top",
  New: "new",
} as const;

export type QuickStartBadge =
  (typeof QuickStartBadge)[keyof typeof QuickStartBadge];

export const QuickStartMediaType = {
  Video: "video",
  Image: "image",
} as const;

export type QuickStartMediaType =
  (typeof QuickStartMediaType)[keyof typeof QuickStartMediaType];

export const QuickStartIconId = {
  NanoBanana: "nano-banana",
  Genjutsu: "genjutsu",
} as const;

export type QuickStartIconId =
  (typeof QuickStartIconId)[keyof typeof QuickStartIconId];

export type PromoBenefit = {
  id: string;
  text: string;
  hideOnXSmall?: boolean;
};

export type PromoHeroContent = {
  posterSrc: string;
  videoSrc: string;
  heading: string;
  headingAccent: string;
  benefits: PromoBenefit[];
  ctaMobile: string;
  ctaDesktop: string;
};

export type QuickStartItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  iconSrc?: string;
  icon?: QuickStartIconId;
  badge?: QuickStartBadge;
  type?: QuickStartMediaType;
  typeHiddenBelowLg?: boolean;
  desktopOnly?: boolean;
};
