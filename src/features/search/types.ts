import type { MegaBadge, MegaIconId } from "@/components/header/header.data";
import type { MessageKey } from "@/lib/i18n";

export type SearchKind =
  | "image-models"
  | "video-models"
  | "edit-models"
  | "audio-models"
  | "products"
  | "characters"
  | "community"
  | "apps"
  | "originals";

export type SearchTab =
  | "all"
  | "models"
  | "products"
  | "characters"
  | "community"
  | "apps"
  | "originals";

export type SearchItem = {
  id: string;
  title: string;
  titleKey?: MessageKey;
  description: string;
  descriptionKey?: MessageKey;
  href: string;
  kind: SearchKind;
  modelId?: string;
  generationModel?: {
    mode: "image" | "video" | "video-edit" | "audio";
    model: string;
  };
  icon?: MegaIconId;
  badge?: MegaBadge;
  keywords: string[];
};

export type ModelGroup = {
  id: Extract<
    SearchKind,
    "image-models" | "video-models" | "edit-models" | "audio-models"
  >;
  label: string;
  shortLabel: string;
  items: SearchItem[];
};

export type ProductPromo = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type SiteSearchData = {
  modelGroups: ModelGroup[];
  productItems: SearchItem[];
  productGridItems: SearchItem[];
  productPromos: ProductPromo[];
  appItems: SearchItem[];
  characterItems: SearchItem[];
  characterPromo?: ProductPromo;
  communityItems: SearchItem[];
  communityPromo?: ProductPromo;
  originalItems: SearchItem[];
  allItems: SearchItem[];
  recentFallbackItems: SearchItem[];
  trendingItems: SearchItem[];
};
