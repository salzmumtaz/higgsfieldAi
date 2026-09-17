export const MediaType = {
  Image: "image",
  Video: "video",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

/** CSS `aspect-ratio` = width / height from media metadata. */
export type GenerationItem = {
  id: string;
  href: string;
  media: {
    type: MediaType;
    src: string;
    posterSrc?: string;
    width: number;
    height: number;
    aspectRatio: number;
  };
  creator: {
    username: string;
    avatarSrc: string;
    href: string;
  };
  likeCount: number;
};

/** Home Community publication record with generation identity metadata. */
export type CommunityGenerationItem = GenerationItem & {
  description?: string;
  jobId?: string;
  jobSetId: string;
  jobSetType: string;
  model: string;
};
