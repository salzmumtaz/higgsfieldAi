import type { GenerationItem } from "@/features/home/gallery/gallery.types";

/**
 * Home Community-family card record (`G` / publication tile).
 * Extra fields come from the Home RSC payload and are used for Recreate / model identity.
 */
export type CommunityGenerationItem = GenerationItem & {
  /** Preview/publication description snippet from the Home RSC payload. */
  description?: string;
  jobId?: string;
  jobSetId: string;
  jobSetType: string;
  /** Same as `jobSetType` on Home; the engine that produced the generation. */
  model: string;
};
