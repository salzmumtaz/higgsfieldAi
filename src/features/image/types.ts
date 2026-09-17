import type { MegaBadge, MegaIconId } from "@/components/header/header.data";
import type { MessageKey } from "@/lib/i18n";

export const DEFAULT_IMAGE_MODEL_ID = "gpt_image_2";

export const IMAGE_REFERENCE_ACCEPT = [".jpg", ".jpeg", ".png", ".webp"] as const;

export const SHARED_IMAGE_QUANTITY = {
  default: 1,
  max: 4,
} as const;

export type ImageControlConfig =
  | {
      type: "aspect-ratio" | "quality" | "resolution" | "select";
      id: string;
      defaultValue: string;
    }
  | {
      type: "toggle";
      id: string;
      defaultValue: boolean;
      onLabel: string;
      offLabel: string;
    }
  | {
      type: "action";
      id: string;
      label: string;
      badge?: "New";
    };

export type ImageComposerConfig = {
  references?: {
    enabled: boolean;
    multiple: boolean;
    accept: readonly string[];
  };
  characterSlot?: {
    enabled: true;
  };
  controls?: ImageControlConfig[];
  quantity?: {
    default: number;
    max: number;
  };
  pricing?: {
    credits: number;
    originalCredits?: number;
  };
};

export type ImageModelConfig = {
  id: string;
  engineId?: string;
  label: string;
  chipLabel?: string;
  description: string;
  icon: MegaIconId;
  badge?: MegaBadge;
  /** Captured upsell copy for the shared UpgradeModal. Generic copy is used when absent. */
  upsell?: {
    titleKey: MessageKey;
    descriptionKey: MessageKey;
  };
  composer?: ImageComposerConfig;
};
