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
