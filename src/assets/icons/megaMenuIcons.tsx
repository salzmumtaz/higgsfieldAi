import type { ComponentType, SVGProps } from "react";
import { AiInfluencerIcon } from "@/assets/icons/AiInfluencerIcon";
import { BlenderIcon } from "@/assets/icons/BlenderIcon";
import { CanvasIcon } from "@/assets/icons/CanvasIcon";
import { CharacterSwapIcon } from "@/assets/icons/CharacterSwapIcon";
import { CinemaStudioIcon } from "@/assets/icons/CinemaStudioIcon";
import { CinematicCamerasIcon } from "@/assets/icons/CinematicCamerasIcon";
import { ClickToAdIcon } from "@/assets/icons/ClickToAdIcon";
import { ColorPaletteIcon } from "@/assets/icons/ColorPaletteIcon";
import { CreateImageIcon } from "@/assets/icons/CreateImageIcon";
import { CreateVideoIcon } from "@/assets/icons/CreateVideoIcon";
import { DavinciIcon } from "@/assets/icons/DavinciIcon";
import { DrawToEditIcon } from "@/assets/icons/DrawToEditIcon";
import { EditVideoIcon } from "@/assets/icons/EditVideoIcon";
import { ElevenlabsIcon } from "@/assets/icons/ElevenlabsIcon";
import { ExplainerIcon } from "@/assets/icons/ExplainerIcon";
import { FaceSwapIcon } from "@/assets/icons/FaceSwapIcon";
import { FacelessIcon } from "@/assets/icons/FacelessIcon";
import { FigmaIcon } from "@/assets/icons/FigmaIcon";
import { Flux2Icon } from "@/assets/icons/Flux2Icon";
import { Flux3VideoIcon } from "@/assets/icons/Flux3VideoIcon";
import { GeminiIcon } from "@/assets/icons/GeminiIcon";
import { GptImageIcon } from "@/assets/icons/GptImageIcon";
import { GrokIcon } from "@/assets/icons/GrokIcon";
import { HappyHorseIcon } from "@/assets/icons/HappyHorseIcon";
import { ImageRelightIcon } from "@/assets/icons/ImageRelightIcon";
import { InpaintIcon } from "@/assets/icons/InpaintIcon";
import { KlingIcon } from "@/assets/icons/KlingIcon";
import { LipsyncIcon } from "@/assets/icons/LipsyncIcon";
import { MinecraftIcon } from "@/assets/icons/MinecraftIcon";
import { MinimaxIcon } from "@/assets/icons/MinimaxIcon";
import { MinimaxSpeechIcon } from "@/assets/icons/MinimaxSpeechIcon";
import { MixedMediaIcon } from "@/assets/icons/MixedMediaIcon";
import { NanoBananaIcon } from "@/assets/icons/NanoBananaIcon";
import { PhotodumpIcon } from "@/assets/icons/PhotodumpIcon";
import { QwenAudioIcon } from "@/assets/icons/QwenAudioIcon";
import { RecraftIcon } from "@/assets/icons/RecraftIcon";
import { SeedSpeechIcon } from "@/assets/icons/SeedSpeechIcon";
import { SeedanceIcon } from "@/assets/icons/SeedanceIcon";
import { SeedreamIcon } from "@/assets/icons/SeedreamIcon";
import { ShortsIcon } from "@/assets/icons/ShortsIcon";
import { SoraIcon } from "@/assets/icons/SoraIcon";
import { SoulIcon } from "@/assets/icons/SoulIcon";
import { ThreeDJutsuIcon } from "@/assets/icons/ThreeDJutsuIcon";
import { TopazIcon } from "@/assets/icons/TopazIcon";
import { TranslateIcon } from "@/assets/icons/TranslateIcon";
import { TtsIcon } from "@/assets/icons/TtsIcon";
import { UgcIcon } from "@/assets/icons/UgcIcon";
import { UpscaleIcon } from "@/assets/icons/UpscaleIcon";
import { VideoRelightIcon } from "@/assets/icons/VideoRelightIcon";
import { VoiceChangeIcon } from "@/assets/icons/VoiceChangeIcon";
import { ZImageIcon } from "@/assets/icons/ZImageIcon";

export type MegaIconKey =
  | "create-image"
  | "cinematic-cameras"
  | "canvas"
  | "soul"
  | "ai-influencer"
  | "photodump"
  | "image-relight"
  | "inpaint"
  | "upscale"
  | "face-swap"
  | "character-swap"
  | "gpt"
  | "seedream"
  | "nano-banana"
  | "recraft"
  | "grok"
  | "flux-2"
  | "z-image"
  | "topaz"
  | "create-video"
  | "cinema-studio"
  | "faceless"
  | "three-d-jutsu"
  | "shorts"
  | "explainer"
  | "mixed-media"
  | "edit-video"
  | "click-to-ad"
  | "color-palette"
  | "video-relight"
  | "lipsync"
  | "draw-to-edit"
  | "ugc"
  | "seedance"
  | "gemini"
  | "kling"
  | "flux-3-video"
  | "minimax"
  | "sora"
  | "happy-horse"
  | "tts"
  | "voice-change"
  | "translate"
  | "davinci"
  | "figma"
  | "blender"
  | "minecraft"
  | "seed-speech"
  | "elevenlabs"
  | "qwen-audio"
  | "minimax-speech"
  | "ps"
  | "pr"
  | "ae";

export const megaIcons: Record<
  Exclude<MegaIconKey, "ps" | "pr" | "ae">,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  "create-image": CreateImageIcon,
  "cinematic-cameras": CinematicCamerasIcon,
  canvas: CanvasIcon,
  soul: SoulIcon,
  "ai-influencer": AiInfluencerIcon,
  photodump: PhotodumpIcon,
  "image-relight": ImageRelightIcon,
  inpaint: InpaintIcon,
  upscale: UpscaleIcon,
  "face-swap": FaceSwapIcon,
  "character-swap": CharacterSwapIcon,
  gpt: GptImageIcon,
  seedream: SeedreamIcon,
  "nano-banana": NanoBananaIcon,
  recraft: RecraftIcon,
  grok: GrokIcon,
  "flux-2": Flux2Icon,
  "z-image": ZImageIcon,
  topaz: TopazIcon,
  "create-video": CreateVideoIcon,
  "cinema-studio": CinemaStudioIcon,
  faceless: FacelessIcon,
  "three-d-jutsu": ThreeDJutsuIcon,
  shorts: ShortsIcon,
  explainer: ExplainerIcon,
  "mixed-media": MixedMediaIcon,
  "edit-video": EditVideoIcon,
  "click-to-ad": ClickToAdIcon,
  "color-palette": ColorPaletteIcon,
  "video-relight": VideoRelightIcon,
  lipsync: LipsyncIcon,
  "draw-to-edit": DrawToEditIcon,
  ugc: UgcIcon,
  seedance: SeedanceIcon,
  gemini: GeminiIcon,
  kling: KlingIcon,
  "flux-3-video": Flux3VideoIcon,
  minimax: MinimaxIcon,
  sora: SoraIcon,
  "happy-horse": HappyHorseIcon,
  tts: TtsIcon,
  "voice-change": VoiceChangeIcon,
  translate: TranslateIcon,
  davinci: DavinciIcon,
  figma: FigmaIcon,
  blender: BlenderIcon,
  minecraft: MinecraftIcon,
  "seed-speech": SeedSpeechIcon,
  elevenlabs: ElevenlabsIcon,
  "qwen-audio": QwenAudioIcon,
  "minimax-speech": MinimaxSpeechIcon,
};
