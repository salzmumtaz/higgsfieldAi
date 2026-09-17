export type QuickStartBadge = "top" | "new";
export type QuickStartMediaType = "video" | "image";
export type QuickStartIconId = "nano-banana" | "genjutsu";

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
