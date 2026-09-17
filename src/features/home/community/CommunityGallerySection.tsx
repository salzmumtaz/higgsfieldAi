import { GalleryFadeCta } from "@/features/home/gallery/GalleryFadeCta";
import { GenerationCard } from "@/features/home/gallery/GenerationCard";
import { HomeGallery } from "@/features/home/gallery/HomeGallery";
import type { GenerationItem } from "@/features/home/models/types";
import { ColumnGallery } from "@/features/home/gallery/layouts/ColumnGallery";
import { useT } from "@/lib/i18n";

function itemKey(item: GenerationItem) {
  return item.id;
}

function itemAspectRatio(item: GenerationItem) {
  return item.media.aspectRatio;
}

export function CommunityGallerySection({
  title,
  description,
  titleHref,
  viewAllHref,
  items,
  mediaFigureClassName,
  desktopOnly = false,
  className,
}: {
  title: string;
  description: string;
  titleHref: string;
  viewAllHref: string;
  items: GenerationItem[];
  mediaFigureClassName?: string;
  desktopOnly?: boolean;
  className?: string;
}) {
  const t = useT();
  return (
    <div className="container-app">
      <HomeGallery
        title={title}
        titleHref={titleHref}
        description={description}
        desktopOnly={desktopOnly}
        className={className}
      >
        <div className="relative h-[56rem] max-h-[56rem] overflow-hidden">
          <ColumnGallery
            items={items}
            getKey={itemKey}
            getAspectRatio={itemAspectRatio}
            maxCols={4}
          >
            {(item) => (
              <GenerationCard
                item={item}
                mediaFigureClassName={mediaFigureClassName}
                eager={item.id === items[0]?.id}
              />
            )}
          </ColumnGallery>
          <GalleryFadeCta
            href={viewAllHref}
            label={t("actions.viewAllOf", { name: title })}
            fromClassName="from-page"
          />
        </div>
      </HomeGallery>
    </div>
  );
}
