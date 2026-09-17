import {
  IMAGE_MODEL_MENU_ITEMS,
  imageModelIdFromHref,
} from "@/components/header/header.data";
import {
  DEFAULT_IMAGE_MODEL_ID,
  IMAGE_REFERENCE_ACCEPT,
  SHARED_IMAGE_QUANTITY,
  type ImageComposerConfig,
  type ImageModelConfig,
} from "@/features/image/types";

export const IMAGE_EMPTY_STATE_MEDIA = [
  "https://static.higgsfield.ai/public/image/empty-state/soul-cinematic-1.webp",
  "https://static.higgsfield.ai/public/image/empty-state/soul-cinematic-2.webp",
  "https://static.higgsfield.ai/public/image/empty-state/soul-cinematic-3.webp",
  "https://static.higgsfield.ai/public/image/empty-state/soul-cinematic-4.webp",
];

const CHIP_LABELS: Record<string, string> = {
  "soul-v2": "Soul 2.0",
  "soul-cinematic": "Soul Cinema",
};

const ENGINE_IDS: Record<string, string> = {
  gpt_image_2: "imagegen_2_0",
  "soul-v2": "soul-v2",
  "soul-cinematic": "soul-cinematic",
  "gpt-image-2-5-sunburst": "gpt-image-2-5-sunburst",
};

const UPSELLS: Record<string, NonNullable<ImageModelConfig["upsell"]>> = {
  gpt_image_2: {
    titleKey: "upgrade.gptImage2Title",
    descriptionKey: "upgrade.gptImage2Description",
  },
};

const COMPOSERS: Record<string, ImageComposerConfig> = {
  gpt_image_2: {
    references: {
      enabled: true,
      multiple: true,
      accept: IMAGE_REFERENCE_ACCEPT,
    },
    controls: [
      { type: "aspect-ratio", id: "aspect", defaultValue: "Auto" },
      { type: "quality", id: "quality", defaultValue: "High" },
      { type: "resolution", id: "resolution", defaultValue: "2K" },
      { type: "select", id: "unknown-auto", defaultValue: "Auto" },
    ],
    quantity: SHARED_IMAGE_QUANTITY,
    pricing: { credits: 6.5, originalCredits: 8.5 },
  },
  "soul-v2": {
    references: {
      enabled: true,
      multiple: false,
      accept: IMAGE_REFERENCE_ACCEPT,
    },
    characterSlot: { enabled: true },
    controls: [
      {
        type: "action",
        id: "color-transfer",
        label: "Color Transfer",
        badge: "New",
      },
      { type: "aspect-ratio", id: "aspect", defaultValue: "3:4" },
      { type: "resolution", id: "resolution", defaultValue: "2k" },
      {
        type: "toggle",
        id: "unlabeled",
        defaultValue: false,
        onLabel: "On",
        offLabel: "Off",
      },
    ],
    quantity: SHARED_IMAGE_QUANTITY,
    pricing: { credits: 0.125 },
  },
  "soul-cinematic": {
    references: {
      enabled: true,
      multiple: false,
      accept: IMAGE_REFERENCE_ACCEPT,
    },
    characterSlot: { enabled: true },
    controls: [
      { type: "action", id: "camera", label: "Camera" },
      {
        type: "action",
        id: "color-transfer",
        label: "Color Transfer",
        badge: "New",
      },
      { type: "aspect-ratio", id: "aspect", defaultValue: "16:9" },
      { type: "resolution", id: "resolution", defaultValue: "2k" },
      {
        type: "toggle",
        id: "unlabeled",
        defaultValue: true,
        onLabel: "On",
        offLabel: "Off",
      },
    ],
    quantity: SHARED_IMAGE_QUANTITY,
    pricing: { credits: 0.125 },
  },
  "gpt-image-2-5-sunburst": {
    references: {
      enabled: true,
      multiple: true,
      accept: IMAGE_REFERENCE_ACCEPT,
    },
    controls: [
      { type: "aspect-ratio", id: "aspect", defaultValue: "Auto" },
      { type: "quality", id: "quality", defaultValue: "High" },
      { type: "resolution", id: "resolution", defaultValue: "2K" },
    ],
    quantity: SHARED_IMAGE_QUANTITY,
    pricing: { credits: 3 },
  },
};

function catalogModel(id: string): ImageModelConfig {
  const item = IMAGE_MODEL_MENU_ITEMS.find(
    (entry) => imageModelIdFromHref(entry.href) === id,
  );
  if (!item || !item.icon) {
    throw new Error(`Missing confirmed Image model catalog row for ${id}`);
  }

  const composer = COMPOSERS[id];
  return {
    id,
    label: item.label,
    chipLabel: CHIP_LABELS[id],
    description: item.description,
    icon: item.icon,
    badge: item.badge,
    engineId: ENGINE_IDS[id],
    upsell: UPSELLS[id],
    composer,
  };
}

export const IMAGE_MODELS: ImageModelConfig[] = IMAGE_MODEL_MENU_ITEMS.map(
  (item) => catalogModel(imageModelIdFromHref(item.href)!),
);

export const IMAGE_MODEL_IDS = IMAGE_MODELS.map((model) => model.id);

const modelsById = new Map(IMAGE_MODELS.map((model) => [model.id, model]));

export function isImageModelId(value: string): boolean {
  return modelsById.has(value);
}

export function resolveImageModelId(value: unknown): string {
  if (typeof value === "string" && modelsById.has(value)) return value;
  return DEFAULT_IMAGE_MODEL_ID;
}

export function getImageModel(id: string): ImageModelConfig {
  return modelsById.get(id) ?? modelsById.get(DEFAULT_IMAGE_MODEL_ID)!;
}
