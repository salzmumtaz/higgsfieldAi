import { cn } from "@/lib/cn";
import { GalleryHeader } from "./GalleryHeader";
import type { HomeGalleryProps } from "./gallery.types";

export function HomeGallery({
  title,
  titleHref,
  description,
  action,
  desktopOnly = false,
  className,
  children,
}: HomeGalleryProps) {
  return (
    <section
      className={cn(
        "mb-6 space-y-5",
        desktopOnly && "hidden md:block",
        className,
      )}
    >
      <GalleryHeader
        title={title}
        titleHref={titleHref}
        description={description}
        action={action}
      />
      {children}
    </section>
  );
}
