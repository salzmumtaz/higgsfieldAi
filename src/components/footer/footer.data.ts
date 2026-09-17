import type { MessageKey } from "@/lib/i18n";

export type FooterLinkItem = {
  id: string;
  href: string;
  label: string;
  openInNewTab?: boolean;
  rel?: string;
};

export type FooterGroupItem = {
  id: string;
  title: string;
  links: FooterLinkItem[];
};

export type FooterColumnItem = {
  id: string;
  groups: FooterGroupItem[];
};

export const footerColumns: FooterColumnItem[] = [
  {
    id: "create",
    groups: [
      {
        id: "create",
        title: "Create",
        links: [
          { id: "ai-video", href: "/ai-video", label: "AI Video" },
          { id: "ai-image", href: "/ai-image", label: "AI Image" },
          {
            id: "edit-image",
            href: "/edit?model=nano_banana_pro_inpaint",
            label: "Edit Image",
          },
          { id: "inpaint", href: "/image-editing", label: "Inpaint" },
          { id: "upscale", href: "/upscale", label: "Upscale" },
          { id: "sora-2-upscale", href: "/sora-2-upscale", label: "Sora 2 Upscale" },
          { id: "mixed-media", href: "/mixed-media-intro", label: "Mixed Media" },
          { id: "ai-face-swap", href: "/apps/face-swap", label: "AI Face Swap" },
          { id: "ai-influencer", href: "/ai-influencer", label: "AI Influencer" },
          { id: "apps", href: "/apps", label: "Apps" },
        ],
      },
    ],
  },
  {
    id: "models",
    groups: [
      {
        id: "video-models",
        title: "Video Models",
        links: [
          { id: "seedance-2-5", href: "/seedance/2.5", label: "Seedance 2.5" },
          { id: "seedance-2-0", href: "/seedance/2.0", label: "Seedance 2.0" },
          { id: "kling-3-0", href: "/kling-3.0", label: "Kling 3.0" },
          { id: "sora-2", href: "/sora-2", label: "Sora 2 Introduction" },
          { id: "veo-3-1", href: "/veo3.1", label: "Veo 3.1 Introduction" },
          { id: "wan-2-6", href: "/wan-2.6", label: "WAN 2.6" },
          {
            id: "grok-imagine-1-5",
            href: "/grok-imagine-1.5",
            label: "Grok Imagine 1.5",
          },
          {
            id: "gemini-omni-flash",
            href: "/gemini-omni-flash",
            label: "Gemini Omni Flash",
          },
        ],
      },
      {
        id: "image-models",
        title: "Image Models",
        links: [
          { id: "nano-banana", href: "/nano-banana-intro", label: "Nano Banana" },
          { id: "flux-2", href: "/flux-2-intro", label: "Flux 2" },
          { id: "seedream-5", href: "/seedream-5.0", label: "Seedream 5" },
          { id: "gpt-image-2", href: "/gpt-2", label: "GPT Image 2" },
        ],
      },
    ],
  },
  {
    id: "studios-soul",
    groups: [
      {
        id: "studios",
        title: "Studios",
        links: [
          {
            id: "cinema-studio",
            href: "/cinematic-video-generator",
            label: "Cinema Studio",
          },
          {
            id: "marketing-studio",
            href: "/marketing-studio-intro",
            label: "Marketing Studio",
          },
          { id: "lipsync-studio", href: "/lipsync-studio", label: "Lipsync Studio" },
          {
            id: "photodump-studio",
            href: "/photodump-studio",
            label: "Photodump Studio",
          },
          {
            id: "fashion-factory",
            href: "/fashion-factory",
            label: "Fashion Factory",
          },
          { id: "ugc-factory", href: "/ugc-factory", label: "UGC Factory" },
          {
            id: "higgsfield-popcorn",
            href: "/storyboard-generator",
            label: "Higgsfield Popcorn",
          },
          {
            id: "higgsfield-canvas",
            href: "/canvas-intro",
            label: "Higgsfield Canvas",
          },
        ],
      },
      {
        id: "soul",
        title: "Soul",
        links: [
          { id: "soul-2-0", href: "/soul-intro", label: "Soul 2.0" },
          {
            id: "soul-id-character",
            href: "/character",
            label: "Soul ID Character",
          },
          { id: "soul-cinema", href: "/soul-cinema", label: "Soul Cinema" },
        ],
      },
    ],
  },
  {
    id: "platform-resources",
    groups: [
      {
        id: "platform",
        title: "Platform",
        links: [
          {
            id: "supercomputer",
            href: "/supercomputer-intro",
            label: "Supercomputer",
          },
          { id: "mcp-cli", href: "/mcp", label: "MCP/CLI" },
          { id: "api", href: "https://higgsfield.ai/higgsfield-api", label: "API" },
          { id: "collab", href: "/chat-intro", label: "Collab" },
          { id: "games", href: "/games-intro", label: "Games" },
          {
            id: "reference-extension",
            href: "https://chromewebstore.google.com/detail/higgsfield-reference/oohmjaflbknghbidmaoonmchcodhmkgj",
            label: "Reference Extension",
          },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        links: [
          { id: "blog", href: "/blog", label: "Blog" },
          { id: "creator-hub", href: "/creator-hub", label: "Creator Hub" },
          {
            id: "help-center",
            href: "/creator-hub/help-center",
            label: "Help Center",
          },
          { id: "academy", href: "/academy", label: "Academy" },
          {
            id: "prompt-guide",
            href: "/nano-banana-pro-prompt-guide",
            label: "Prompt Guide",
          },
        ],
      },
    ],
  },
  {
    id: "company-community",
    groups: [
      {
        id: "company",
        title: "Company",
        links: [
          { id: "about", href: "/about", label: "About" },
          { id: "trust", href: "/trust", label: "Trust" },
          { id: "enterprise", href: "/enterprise", label: "Enterprise" },
          { id: "team", href: "/team-plan", label: "Team" },
          { id: "pricing", href: "/pricing", label: "Pricing" },
          {
            id: "careers",
            href: "https://jobs.ashbyhq.com/higgsfieldai",
            label: "Careers",
            openInNewTab: true,
            rel: "nofollow noopener",
          },
          { id: "contact", href: "/contact", label: "Contact" },
        ],
      },
      {
        id: "community",
        title: "Community",
        links: [
          { id: "community", href: "/community", label: "Community" },
          { id: "contests", href: "/contests", label: "Contests" },
          {
            id: "creator-partners",
            href: "https://higgsfield.ai/creator-partnership-program",
            label: "Creator Partners",
          },
        ],
      },
    ],
  },
];

export const footerGroups = footerColumns.flatMap((column) => column.groups);

export const footerSocials: FooterLinkItem[] = [
  {
    id: "twitter",
    href: "https://x.com/higgsfield",
    label: "X / Twitter",
    openInNewTab: true,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@HiggsfieldAI",
    label: "Youtube",
    openInNewTab: true,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/higgsfield",
    label: "LinkedIn",
    openInNewTab: true,
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@higgsfield.ai90",
    label: "Tiktok",
    openInNewTab: true,
  },
];

export const siteFooterLinks: {
  id: string;
  href: string | null;
  labelKey: MessageKey;
}[] = [
  {
    id: "help-center",
    href: "/creator-hub/help-center",
    labelKey: "footer.helpCenter",
  },
  {
    id: "cookie-notice",
    href: "/cookie-notice",
    labelKey: "footer.cookieNotice",
  },
  {
    id: "cookie-settings",
    href: null,
    labelKey: "footer.cookieSettings",
  },
  {
    id: "terms",
    href: "/terms-of-use-agreement",
    labelKey: "footer.terms",
  },
  {
    id: "privacy",
    href: "/privacy-policy",
    labelKey: "footer.privacy",
  },
] as const;
