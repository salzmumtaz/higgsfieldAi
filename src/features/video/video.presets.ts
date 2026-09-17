import type {
  GenjutsuMode,
  GenjutsuModeLabel,
  GenjutsuPresetBase,
} from "@/features/home/genjutsu/genjutsu.data";
import { genjutsuPresets } from "@/features/home/genjutsu/genjutsu.data";
import type { MotionPreset } from "@/features/video/video.types";

export type GenjutsuLibraryPreset = GenjutsuPresetBase & {
  posterSrc: string;
  videoSrc: string;
  source: "higgsfield" | "community";
  likeCount?: number;
};

/** Home and the Video library share the same Genjutsu domain record. This is
 * an adapter over the existing curated Home set, not a copied preset catalog. */
export const higgsfieldGenjutsuLibraryPresets: GenjutsuLibraryPreset[] =
  genjutsuPresets.slice(0, 8).map((preset) => {
    const media = preset.generatedVariants[0] ?? preset.variants[0] ?? preset.source;
    return {
      id: preset.id,
      name: preset.name,
      description: preset.description,
      mode: preset.mode,
      modeLabel: preset.modeLabel,
      presetSource: preset.presetSource,
      posterSrc: media.posterSrc,
      videoSrc: media.videoSrc,
      source: "higgsfield",
    };
  });

const COMMUNITY_PRESETS = [
  ["7d8d7bd8-021e-4940-b643-3945e722e081", "motion-control"],
  ["a61846fe-17fd-4ad8-91c3-9178a0236439", "motion-control"],
  ["55c09c9f-6219-4082-a204-adc09474534b", "motion-control"],
  ["d54b033a-89c4-4c25-89bf-2b0f33f762ce", "motion-control"],
  ["a3c1a5c3-6e1f-4e74-b08c-24d0fa2cf0a0", "motion-control"],
  ["9f6c6529-9eff-43a3-9915-0594a1516122", "replace-objects"],
  ["6a3c816d-9ae5-4e8e-a791-5a1463983d56", "motion-control"],
  ["36a22d44-a050-4918-996b-0cfb4e023944", "motion-control"],
] as const satisfies readonly (readonly [string, GenjutsuMode])[];

export const communityGenjutsuLibraryPresets: GenjutsuLibraryPreset[] =
  COMMUNITY_PRESETS.map(([id, mode]) => ({
    id,
    name: mode === "replace-objects" ? "Objects swap" : "Motion transfer",
    description: "",
    mode,
    modeLabel: (mode === "replace-objects"
      ? "Objects swap"
      : "Motion transfer") as GenjutsuModeLabel,
    presetSource: "community",
    source: "community",
    posterSrc: `https://d8j0ntlcm91z4.cloudfront.net/community-presets/${id}/generation.webp`,
    videoSrc: `https://d8j0ntlcm91z4.cloudfront.net/community-presets/${id}/generation.mp4`,
  }));

const MOTION_PRESET_MEDIA = [
  ["cedeade5-7011-4cd3-b642-e361b2037754", "f3f1068f-60f7-49d9-8256-4ed09c4d20a6"],
  ["73f69a34-e5ff-4b80-bd41-bd42a83a4074", "38a58318-780d-41c8-98e8-190106e54eb0"],
  ["c2907128-55c0-4c7e-b86a-127f88f9544c", "b7d972dc-fa4b-4024-8158-e3ad85bfb5df"],
  ["3a093552-d898-45f2-9304-7c2fe9c5c8b5", "d9d7ea02-fdcc-475a-a53e-d3353a8b866e"],
  ["7a4d0814-e3b2-4f26-b520-e2f943d621e6", "c1571011-b5f8-4cd0-98d1-149be80bd21a"],
  ["d9ccf4c1-a495-4d21-9c06-7827b5e8619f", "062dcd0d-2b81-4e82-8757-8bb1cd491581"],
  ["68b5173d-b62c-41ea-b6de-20845847f5af", "22287793-7664-4802-b0a3-ba8c0f65f994"],
  ["6fc36421-f1f5-41e2-802c-0a70ecfbd65b", "1c1ad507-fd7e-45eb-8f20-5436d3e3f238"],
] as const;

export const motionPresets: MotionPreset[] = MOTION_PRESET_MEDIA.map(
  ([posterId, videoId]) => ({
    id: videoId,
    posterSrc: `https://cdn.higgsfield.ai/kling_motion_control_preset/${posterId}.webp`,
    videoSrc: `https://cdn.higgsfield.ai/kling_motion_control_preset/${videoId}.mp4`,
  }),
);
