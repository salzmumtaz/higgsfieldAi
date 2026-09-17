import {
  VIDEO_MODEL_MENU_ITEMS,
  videoModelIdFromHref,
} from "@/components/header/header.data";
import {
  DEFAULT_VIDEO_MODEL_ID,
  type MotionControlWorkflow,
  type VideoComposerConfig,
  type VideoModelConfig,
} from "@/features/video/video.types";

const STANDARD_WORKSPACE: VideoModelConfig["workspace"] = {
  defaultTab: "how-it-works",
  tabs: ["history", "how-it-works"],
  guideKind: "standard-create",
};

const COMPOSERS: Record<string, VideoComposerConfig> = {
  seedance_2_5: {
    pricing: { originalCredits: 80, credits: 45 },
  },
  "gemini-omni-flash-1-1": {
    presetLabel: "General",
    inputStrategy: {
      kind: "references-or-frames",
      accept: ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/quicktime"],
      multiple: true,
    },
    controls: [
      { id: "duration", type: "duration", defaultValue: "8s" },
      { id: "aspect", type: "aspect-ratio", defaultValue: "16:9" },
      { id: "resolution", type: "resolution", defaultValue: "720p" },
    ],
    pricing: { credits: 24 },
  },
  kling3_0: {
    presetLabel: "General",
    inputStrategy: {
      kind: "start-end-frames",
      accept: ["image/jpeg", "image/png", "image/webp"],
    },
    controls: [
      { id: "multi-shot", type: "action", label: "Multi-shot" },
      { id: "enhance", type: "toggle", label: "Enhance", defaultValue: true },
      {
        id: "unknown-speaker-control",
        type: "unknown-visible-control",
        icon: "speaker",
        defaultValue: true,
      },
      { id: "elements", type: "action", label: "Elements" },
      { id: "copy", type: "action", label: "Copy" },
      { id: "duration", type: "duration", defaultValue: "5s" },
      { id: "aspect", type: "aspect-ratio", defaultValue: "16:9" },
      { id: "resolution", type: "resolution", defaultValue: "4K" },
    ],
    pricing: { credits: 30 },
  },
};

function catalogModel(id: string): VideoModelConfig {
  const item = VIDEO_MODEL_MENU_ITEMS.find(
    (entry) => videoModelIdFromHref(entry.href) === id,
  );
  if (!item) throw new Error(`Missing confirmed Video catalog row for ${id}`);

  const genjutsu = id === "genjutsu";
  return {
    id,
    label: item.label,
    description: item.description,
    href: item.href,
    icon: item.icon,
    badge: item.badge,
    engineId: id,
    composerKind: genjutsu ? "genjutsu" : "standard-create",
    composer: COMPOSERS[id],
    workspace: genjutsu
      ? {
          defaultTab: "motion-library",
          tabs: ["history", "motion-library", "how-it-works"],
          libraryKind: "genjutsu",
        }
      : STANDARD_WORKSPACE,
  };
}

export const VIDEO_MODELS: VideoModelConfig[] = VIDEO_MODEL_MENU_ITEMS.map(
  (item) => catalogModel(videoModelIdFromHref(item.href)!),
);

const modelsById = new Map(VIDEO_MODELS.map((model) => [model.id, model]));

export function isVideoModelId(value: string): boolean {
  return modelsById.has(value);
}

export function resolveVideoModelId(value: unknown): string {
  return typeof value === "string" && modelsById.has(value)
    ? value
    : DEFAULT_VIDEO_MODEL_ID;
}

export function getVideoModel(id: string): VideoModelConfig {
  return modelsById.get(id) ?? modelsById.get(DEFAULT_VIDEO_MODEL_ID)!;
}

export const MOTION_CONTROL_WORKFLOW: MotionControlWorkflow = {
  kind: "motion-control",
  route: "/ai/video/motion",
  label: "Motion Control",
  description: "Control motion with video references",
  modelLabel: "Kling 3.0 Motion Control",
  videoAccept: ["video/mp4", "video/quicktime"],
  imageAccept: ["image/jpeg", "image/jpg", "image/png"],
  quality: "720p",
  defaultSceneSource: "image",
  pricing: { credits: 7 },
  workspace: {
    defaultTab: "how-it-works",
    tabs: ["history", "how-it-works"],
    libraryKind: "motion-control",
  },
};
