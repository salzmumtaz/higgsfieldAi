import type { MegaBadge, MegaIconId } from "@/components/header/header.data";

export const DEFAULT_VIDEO_MODEL_ID = "seedance_2_5";

export type VideoComposerKind = "standard-create" | "genjutsu";
export type VideoWorkspaceTab = "history" | "motion-library" | "how-it-works";

export type VideoInputStrategy =
  | {
      kind: "references-or-frames";
      accept: readonly string[];
      multiple: boolean;
    }
  | {
      kind: "start-end-frames";
      accept: readonly string[];
    };

export type VideoControlConfig =
  | {
      id: string;
      type: "duration" | "aspect-ratio" | "resolution";
      defaultValue: string;
    }
  | {
      id: string;
      type: "toggle" | "unknown-visible-control";
      defaultValue: boolean;
      label?: string;
      icon?: "speaker";
    }
  | {
      id: string;
      type: "action";
      label: string;
    };

export type VideoComposerConfig = {
  presetLabel?: string;
  inputStrategy?: VideoInputStrategy;
  controls?: VideoControlConfig[];
  pricing?: {
    credits: number;
    originalCredits?: number;
  };
};

export type VideoModelConfig = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon?: MegaIconId;
  badge?: MegaBadge;
  engineId?: string;
  composerKind: VideoComposerKind;
  composer?: VideoComposerConfig;
  workspace: {
    defaultTab: VideoWorkspaceTab;
    tabs: VideoWorkspaceTab[];
    guideKind?: "standard-create";
    libraryKind?: "genjutsu";
  };
};

export type MotionControlWorkflow = {
  kind: "motion-control";
  route: "/ai/video/motion";
  label: string;
  description: string;
  modelLabel: string;
  videoAccept: readonly string[];
  imageAccept: readonly string[];
  quality: string;
  defaultSceneSource: "video" | "image";
  pricing: { credits: number };
  workspace: {
    defaultTab: VideoWorkspaceTab;
    tabs: VideoWorkspaceTab[];
    libraryKind: "motion-control";
  };
};

export type MotionPreset = {
  id: string;
  videoSrc: string;
  posterSrc?: string;
  aspectRatio?: number;
};
