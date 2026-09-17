import type { PromoHeroContent, QuickStartItem } from "./quick-start.types";

export const promoHero: PromoHeroContent = {
  posterSrc:
    "https://static.higgsfield.ai/public/promotions/seedance-2-5-sale-hero-poster.jpg",
  videoSrc:
    "https://static.higgsfield.ai/promotions/seedance_2_5_explore_image.mp4",
  heading: "Sign up and get your",
  headingAccent: "extra discount",
  benefits: [
    { id: "unlimited", text: "Get unlimited Nano Banana Pro" },
    { id: "discount", text: "Unlock your extra discount" },
    {
      id: "seedance",
      text: "Access to Seedance 2.5",
      hideOnXSmall: true,
    },
  ],
  ctaMobile: "Get your discount",
  ctaDesktop: "Sign up and get your discount",
};

export const quickStartItems: QuickStartItem[] = [
  {
    id: "seedance-2-5",
    title: "Seedance 2.5",
    description: "The most advanced video model",
    href: "/ai/video?model=seedance_2_5&resolution=1080p",
    iconSrc:
      "https://static.higgsfield.ai/explore/image-generate-block/seedance-logo.png",
    badge: "top",
    type: "video",
    typeHiddenBelowLg: true,
  },
  {
    id: "nano-banana-pro",
    title: "Nano Banana Pro",
    description: "Generate high-quality visuals",
    href: "/nano-banana-pro",
    icon: "nano-banana",
    type: "image",
  },
  {
    id: "genjutsu",
    title: "Higgsfield Genjutsu",
    description: "One video, many versions",
    href: "/ai/video?model=genjutsu",
    icon: "genjutsu",
    badge: "new",
  },
  {
    id: "mcp-cli",
    title: "MCP & CLI",
    description: "Turn Claude into a creative engine",
    href: "/mcp",
    iconSrc:
      "https://static.higgsfield.ai/explore/image-generate-block/claude-logo.png",
    desktopOnly: true,
  },
  {
    id: "cinema-studio-4",
    title: "Cinema Studio 4.0",
    description: "Create cinematic scenes effortlessly",
    href: "/generate",
    iconSrc:
      "https://static.higgsfield.ai/explore/image-generate-block/cinema-studio.png",
    desktopOnly: true,
  },
  {
    id: "supercomputer",
    title: "Supercomputer",
    description: "Agent powered by GPT-6 Astra",
    href: "/supercomputer?model=openai/gpt-6-astra",
    iconSrc:
      "https://static.higgsfield.ai/explore/image-generate-block/supercomputer-card-icon.svg",
  },
];
