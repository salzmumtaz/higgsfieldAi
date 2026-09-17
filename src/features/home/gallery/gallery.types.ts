import type { ReactNode } from "react";

export type GalleryAction = {
  href: string;
  label: string;
};

export type HomeGalleryProps = {
  title: string;
  titleHref?: string;
  description?: string;
  action?: GalleryAction;
  desktopOnly?: boolean;
  className?: string;
  children: ReactNode;
};

/** CSS `aspect-ratio` = width / height from media metadata. Do not snap to 9:16. */
export type GenerationItem = {
  id: string;
  href: string;
  media: {
    type: "image" | "video";
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
