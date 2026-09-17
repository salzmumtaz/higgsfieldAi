import type { StatusBadgeColor } from "@/components/ui/StatusBadge";
import type { MessageKey } from "@/lib/i18n";

export type NavBadge = "new" | "free" | "top";
export type MegaBadge = "new" | "top";

export type MegaIconId = import("@/assets/icons/megaMenuIcons").MegaIconKey;

export type MegaItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon?: MegaIconId;
  badge?: MegaBadge;
  badgeColor?: StatusBadgeColor;
};

export type MegaColumn = {
  titleKey: "header.features" | "header.models" | "header.plugins";
  items: MegaItem[];
};

export type HeaderNavLink = {
  type: "link";
  id: string;
  labelKey: MessageKey;
  href: string;
  badge?: NavBadge;
  shimmer?: boolean;
};

export type HeaderNavMenu = {
  type: "menu";
  id: string;
  labelKey: MessageKey;
  href: string;
  badge?: NavBadge;
  menu: MegaColumn[];
};

export type HeaderNavSeparator = {
  type: "separator";
  id: string;
};

export type HeaderNavEntry = HeaderNavLink | HeaderNavMenu | HeaderNavSeparator;

function item(
  id: string,
  label: string,
  description: string,
  href: string,
  extra?: Pick<MegaItem, "icon" | "badge" | "badgeColor">,
): MegaItem {
  return { id, label, description, href, ...extra };
}

const imageMenu: MegaColumn[] = [
  {
    titleKey: "header.features",
    items: [
      item("create-image", "Create Image", "Generate AI images", "/ai/image?model=nano-banana-2-lite", { icon: "create-image" }),
      item("cinematic-cameras", "Cinematic Cameras", "Image generation with camera controls", "/generate?mode=image&imageModel=cinematic-v1", { icon: "cinematic-cameras", badge: "top" }),
      item("image-canvas", "Canvas", "Visual ideation meets repeatable AI workflows.", "/canvas", { icon: "canvas" }),
      item("soul-moodboard", "Soul Moodboard", "Turn your references into a focused moodboard", "/moodboard", { icon: "soul" }),
      item("soul-id", "Soul ID Character", "Create unique character", "/character", { icon: "soul" }),
      item("ai-influencer", "AI Influencer", "Create and manage your AI influencer", "/ai-influencer-studio", { icon: "ai-influencer" }),
      item("photodump", "Photodump", "Generate Your Aesthetic", "/ai/image?model=soul-v2&modal-photo-dump=true", { icon: "photodump" }),
      item("image-relight", "Relight", "Adjust lighting position, color, and brightness", "/apps/relight", { icon: "image-relight" }),
      item("inpaint", "Inpaint", "Select an area, describe the change", "/layers?model=nano_banana_pro_inpaint", { icon: "inpaint" }),
      item("image-upscale", "Image Upscale", "Enhance image quality", "/upscale", { icon: "upscale" }),
      item("face-swap", "Face Swap", "Create Realistic Face Swaps", "/apps/face-swap", { icon: "face-swap" }),
      item("character-swap", "Character Swap", "Create Realistic Character Swaps", "/apps/character-swap", { icon: "character-swap" }),
    ],
  },
  {
    titleKey: "header.models",
    items: [
      item("soul-2", "Higgsfield Soul 2.0", "Next generation ultra-realistic fashion visuals", "/ai/image?model=soul-v2", { icon: "soul", badge: "top" }),
      item("soul-cinema", "Higgsfield Soul Cinema", "Cinematic Film-Grade Aesthetic", "/ai/image?model=soul-cinematic", { icon: "soul" }),
      item("gpt-sunburst", "GPT Image 2.5 Sunburst", "Exceptional quality, precise edits", "/ai/image?model=gpt-image-2-5-sunburst", { icon: "gpt", badge: "new" }),
      item("gpt-flare", "GPT Image 2.5 Flare", "Stunning everyday images, fast", "/ai/image?model=gpt-image-2-5-flare", { icon: "gpt", badge: "new" }),
      item("gpt-image-2", "GPT Image 2", "4K images with near-perfect text rendering", "/ai/image?model=gpt_image_2", { icon: "gpt", badge: "top" }),
      item("seedream", "Seedream 5.0 Pro", "Logically consistent images with intelligent visual reasoning", "/ai/image?model=seedream_v5_pro", { icon: "seedream" }),
      item("nano-lite", "Nano Banana 2 Lite", "Lightweight image generation at speed", "/ai/image?model=nano-banana-2-lite", { icon: "nano-banana" }),
      item("nano-pro", "Nano Banana Pro", "Best 4K image model ever", "/ai/image?model=nano-banana-pro", { icon: "nano-banana", badge: "top" }),
      item("recraft-styles", "Recraft V4 Styles", "Style it once, every image matches", "/ai/image?model=recraft-v4-styles", { icon: "recraft", badge: "new" }),
      item("recraft-v41", "Recraft V4.1", "Photorealistic and expressive image generation", "/ai/image?model=recraft-v4-1", { icon: "recraft" }),
      item("grok-image", "Grok Imagine 2.0", "High-resolution image generation by xAI", "/ai/image?model=grok-image-2-0", { icon: "grok", badge: "new" }),
      item("flux-2", "FLUX.2", "Speed-optimized detail", "/ai/image?model=flux_2", { icon: "flux-2" }),
      item("z-image", "Z-Image", "Instant lifelike portraits", "/ai/image?model=z-image", { icon: "z-image" }),
      item("topaz", "Topaz", "High-resolution upscaler", "/upscale", { icon: "topaz" }),
    ],
  },
];

export const IMAGE_MODEL_MENU_ITEMS: MegaItem[] = imageMenu
  .find((column) => column.titleKey === "header.models")!
  .items.filter((entry) => imageModelIdFromHref(entry.href) != null);

export function imageModelIdFromHref(href: string): string | undefined {
  const url = new URL(href, "https://higgsfield.ai");
  if (url.pathname !== "/ai/image") return undefined;
  return url.searchParams.get("model") ?? undefined;
}

const videoMenu: MegaColumn[] = [
  {
    titleKey: "header.features",
    items: [
      item("create-video", "Create Video", "Generate AI videos", "/ai/video", { icon: "create-video" }),
      item("cinema-studio", "Cinema Studio", "Cinematic video with AI director", "/generate?mode=video", { icon: "cinema-studio" }),
      item("faceless", "Faceless Studio", "Start a faceless channel in one click", "/faceless-studio", { icon: "faceless" }),
      item("video-3d-jutsu", "3D Jutsu", "Create 3D scenes and turn them into videos", "/3d-jutsu", { icon: "three-d-jutsu", badge: "new" }),
      item("shorts", "Shorts Studio", "Turn your footage into ready-made shorts", "/shorts-studio", { icon: "shorts" }),
      item("explainer", "Higgsfield Explainer", "Turn any topic into an explainer video", "/explainer", { icon: "explainer" }),
      item("video-canvas", "Canvas", "Visual ideation meets repeatable AI workflows.", "/canvas", { icon: "canvas" }),
      item("mixed-media", "Mixed Media", "Create mixed media projects", "/mixed-media", { icon: "mixed-media" }),
      item("edit-video", "Edit Video", "Edit scenes, shots, elements", "/ai/video/edit", { icon: "edit-video" }),
      item("reframe", "Higgsfield Reframe", "Reframe and resize videos to any aspect ratio", "/ai/video/reframe", { icon: "soul" }),
      item("click-to-ad", "Click to Ad", "Turn product URLs into video ads", "/apps/link-to-video-ad", { icon: "click-to-ad" }),
      item("color-palette", "Change Color Palette", "Adjust color palette, tones, and overall mood", "/apps/video-rehex", { icon: "color-palette" }),
      item("video-relight", "Relight", "Adjust lighting position, color, and brightness", "/apps/video-relight", { icon: "video-relight" }),
      item("lipsync", "Lipsync Studio", "Create Talking Clips", "/lipsync-studio", { icon: "lipsync" }),
      item("draw-to-video", "Draw to Video", "Sketch turns into a cinema", "/ai/video?video-inpaint=true&generationType=video", { icon: "inpaint" }),
      item("draw-to-edit", "Draw to Edit", "Sketch directly on video frames to guide edits", "/ai/video?image-inpaint=true", { icon: "draw-to-edit" }),
      item("ugc", "UGC Factory", "Build UGC video with avatar", "/lipsync-studio?ugc-studio=new", { icon: "ugc" }),
      item("video-upscale", "Video Upscale", "Enhance video quality", "/upscale", { icon: "upscale" }),
    ],
  },
  {
    titleKey: "header.models",
    items: [
      item("seedance", "Seedance 2.5", "Create cinematic videos up to 30 seconds", "/ai/video?model=seedance_2_5", { icon: "seedance", badge: "top", badgeColor: "cyan" }),
      item("seedance-2", "Seedance 2.0", "Browse premium AI video generations from the Higgsfield community", "/ai/video?model=seedance_2_0", { icon: "seedance" }),
      item("genjutsu", "Higgsfield Genjutsu", "Transfer motion or swap objects from a reference video", "/ai/video?model=genjutsu", { icon: "soul", badge: "new" }),
      item("gemini-omni", "Gemini Omni Flash 1.1", "Generate and edit video from any input", "/ai/video?model=gemini-omni-flash-1-1", { icon: "gemini" }),
      item("kling-3", "Kling 3.0", "Cinematic videos with audio", "/ai/video?model=kling3_0", { icon: "kling" }),
      item("kling-motion", "Kling Motion Control", "Transfer motion from video to image", "/ai/video/motion", { icon: "kling" }),
      item("flux-3-video", "FLUX.3 Video", "Text, image, and video generation with synchronized audio", "/ai/video?model=flux_3_video", { icon: "flux-3-video" }),
      item("minimax-h3", "MiniMax H3", "Create 2K videos from text, keyframes, or multimodal references", "/ai/video?model=minimax_h3", { icon: "minimax" }),
      item("wan-3", "Wan 3.0", "Create videos from text, keyframes, or multimodal references", "/ai/video?model=wan3_0", { icon: "z-image" }),
      item("grok-video", "Grok Imagine 1.5", "Cinematic videos with synchronized audio", "/ai/video?model=grok_video_v15", { icon: "grok" }),
      item("kling-omni", "Kling 3.0 Omni Edit", "Edit videos with text prompts", "/ai/video/edit?model=kling-video-reference-o3", { icon: "kling" }),
      item("sora-2", "Sora 2", "OpenAI's most advanced video model", "/ai/video?model=open_sora_video", { icon: "sora" }),
      item("veo", "Google Veo 3.1", "Advanced AI video with sound", "/ai/video?model=veo-3-1-preview", { icon: "gemini" }),
      item("happy-horse", "HappyHorse", "Alibaba's #1 ranked video and audio model", "/ai/video?model=happy-horse", { icon: "happy-horse" }),
      item("hailuo", "Minimax Hailuo 2.3", "Fastest high-dynamic video", "/ai/video?model=minimax-2.3", { icon: "minimax" }),
      item("dop", "Higgsfield DOP", "VFX and camera control", "/ai/video?model=standard", { icon: "soul" }),
    ],
  },
];

export const VIDEO_MODEL_MENU_ITEMS: MegaItem[] = videoMenu
  .find((column) => column.titleKey === "header.models")!
  .items.filter((entry) => videoModelIdFromHref(entry.href) != null);

export function videoModelIdFromHref(href: string): string | undefined {
  const url = new URL(href, "https://higgsfield.ai");
  if (
    url.pathname !== "/ai/video" &&
    url.pathname !== "/ai/video/edit"
  ) {
    return undefined;
  }
  return url.searchParams.get("model") ?? undefined;
}

const audioMenu: MegaColumn[] = [
  {
    titleKey: "header.features",
    items: [
      item("tts", "Text to Speech", "Generate speech from text", "/audio?voiceMode=voiceover", { icon: "tts" }),
      item("voice-change", "Voice Change", "Swap voices in any video", "/audio?voiceMode=change-voice", { icon: "voice-change" }),
      item("translate", "Translate", "Translate and lip-sync your video into a new language", "/audio?voiceMode=translate", { icon: "translate" }),
    ],
  },
  {
    titleKey: "header.models",
    items: [
      item("seed-audio", "Seed Audio 1.0", "Multi-speaker scenes with speech and ambience", "/audio?voiceMode=voiceover&audioModel=seed_audio", { icon: "seed-speech" }),
      item("eleven", "Eleven v3", "Emotion and delivery control via inline tags", "/audio?voiceMode=voiceover&audioModel=elevenlabs", { icon: "elevenlabs" }),
      item("qwen-audio", "Qwen Audio 3.0", "Natural speech with voice, style, and emotion control", "/audio?voiceMode=voiceover&audioModel=qwen_audio", { icon: "qwen-audio" }),
      item("minimax-speech", "MiniMax Speech 2.8 HD", "High-fidelity single-voice narration", "/audio?voiceMode=voiceover&audioModel=minimax", { icon: "minimax-speech" }),
      item("seed-speech", "Seed Speech", "Multilingual speech across 30+ languages", "/audio?voiceMode=voiceover&audioModel=seed_speech", { icon: "seed-speech" }),
    ],
  },
];

const pluginsMenu: MegaColumn[] = [
  {
    titleKey: "header.plugins",
    items: [
      item("photoshop", "Adobe Photoshop", "AI photo tools inside Photoshop", "/plugins/photoshop", { icon: "ps" }),
      item("premiere", "Adobe Premiere Pro", "AI video tools inside Premiere Pro", "/plugins/premiere-pro", { icon: "pr" }),
      item("after-effects", "Adobe After Effects", "AI video tools inside After Effects", "/plugins/after-effects", { icon: "ae" }),
      item("davinci", "DaVinci Resolve", "AI video tools inside DaVinci Resolve", "/plugins/davinci", { icon: "davinci" }),
      item("figma", "Figma", "AI image & video tools inside Figma", "/plugins/figma", { icon: "figma" }),
      item("blender", "Blender", "AI image & video tools inside Blender", "/plugins/blender", { icon: "blender" }),
      item("minecraft", "Minecraft", "AI generation tools inside Minecraft", "/plugins/minecraft", { icon: "minecraft" }),
    ],
  },
];

export const headerNav: HeaderNavEntry[] = [
  { type: "link", id: "explore", labelKey: "nav.explore", href: "/" },
  { type: "menu", id: "image", labelKey: "nav.image", href: "/ai/image?model=gpt_image_2", menu: imageMenu },
  { type: "menu", id: "video", labelKey: "nav.video", href: "/ai/video", menu: videoMenu },
  { type: "menu", id: "audio", labelKey: "nav.audio", href: "/audio", menu: audioMenu },
  { type: "link", id: "mcp", labelKey: "nav.mcp", href: "/mcp" },
  { type: "link", id: "api", labelKey: "nav.api", href: "https://console.higgsfield.ai" },
  { type: "separator", id: "sep-after-api" },
  { type: "link", id: "chatgpt", labelKey: "nav.chatgptPlugin", href: "/gpt-astra", badge: "new", shimmer: true },
  { type: "link", id: "genjutsu", labelKey: "nav.genjutsu", href: "/ai/video?model=genjutsu", badge: "free" },
  { type: "link", id: "effects", labelKey: "nav.effects", href: "/effects/use", badge: "free" },
  { type: "link", id: "cinema", labelKey: "nav.cinemaStudio", href: "/generate" },
  { type: "link", id: "marketing", labelKey: "nav.marketingStudio", href: "/marketing-studio" },
  { type: "link", id: "supercomputer", labelKey: "nav.supercomputer", href: "/supercomputer" },
  { type: "link", id: "3d-jutsu", labelKey: "nav.threeDJutsu", href: "/3d-jutsu", badge: "new" },
  { type: "link", id: "edit", labelKey: "nav.edit", href: "/layers" },
  { type: "link", id: "academy", labelKey: "nav.academy", href: "/academy" },
  { type: "link", id: "community", labelKey: "nav.community", href: "/community" },
  { type: "link", id: "contests", labelKey: "nav.contests", href: "/contests/higgsfield-global-film-festival" },
  { type: "menu", id: "plugins", labelKey: "nav.plugins", href: "/plugins/after-effects", menu: pluginsMenu },
  { type: "link", id: "canvas", labelKey: "nav.canvas", href: "/canvas" },
  { type: "link", id: "originals", labelKey: "nav.originals", href: "/original-series" },
];
