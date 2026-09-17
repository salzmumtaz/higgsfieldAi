import {
  IMAGE_MODEL_MENU_ITEMS,
  headerNav,
  imageModelIdFromHref,
  type MegaItem,
} from "@/components/header/header.data";
import { IMAGE_MODELS } from "@/features/image/models";
import { VIDEO_MODELS } from "@/features/video/video.models";
import type {
  ModelGroup,
  SearchItem,
  SearchKind,
  SiteSearchData,
} from "@/features/search/types";

const menuEntries = headerNav.filter((entry) => entry.type === "menu");

function menuItems(
  menuId: string,
  column: "header.features" | "header.models",
) {
  const menu = menuEntries.find((entry) => entry.id === menuId);
  return menu?.menu.find((entry) => entry.titleKey === column)?.items ?? [];
}

function toSearchItem(
  item: MegaItem,
  kind: SearchKind,
  options?: Pick<SearchItem, "modelId" | "generationModel">,
): SearchItem {
  return {
    id: `${kind}-${item.id}`,
    title: item.label,
    description: item.description,
    href: item.href,
    kind,
    icon: item.icon,
    badge: item.badge,
    keywords: [item.id, item.label, kind, options?.modelId].filter(
      (value): value is string => Boolean(value),
    ),
    ...options,
  };
}

function imageModelItems(): SearchItem[] {
  const catalogById = new Map(
    IMAGE_MODEL_MENU_ITEMS.map((item) => [
      imageModelIdFromHref(item.href),
      item,
    ]),
  );

  return IMAGE_MODELS.flatMap((model) => {
    const catalog = catalogById.get(model.id);
    if (!catalog) return [];
    return [
      toSearchItem(catalog, "image-models", {
        modelId: model.id,
        generationModel: { mode: "image", model: model.id },
      }),
    ];
  });
}

function routedModelItems(
  menuId: "audio",
  kindForItem: (item: MegaItem) => SearchKind,
): SearchItem[] {
  return menuItems(menuId, "header.models").map((item) => {
    const url = new URL(item.href, "https://higgsfield.ai");
    const kind = kindForItem(item);
    const modelId =
      url.searchParams.get("model") ??
      url.searchParams.get("audioModel") ??
      undefined;
    const mode =
      kind === "edit-models"
        ? "video-edit"
        : kind === "audio-models"
          ? "audio"
          : "video";

    return toSearchItem(item, kind, {
      modelId,
      generationModel: modelId ? { mode, model: modelId } : undefined,
    });
  });
}

const imageItems = imageModelItems();
const videoItems: SearchItem[] = VIDEO_MODELS.map((model) => ({
  id: `video-models-${model.id}`,
  title: model.label,
  description: model.description,
  href: model.href,
  kind: "video-models",
  icon: model.icon,
  badge: model.badge,
  keywords: [model.id, model.label, "video-models"],
  modelId: model.id,
  generationModel: { mode: "video", model: model.id },
}));
const editItems = menuItems("video", "header.models")
  .filter((item) => {
    const path = new URL(item.href, "https://higgsfield.ai").pathname;
    return (
      path.startsWith("/ai/video/edit") || path.startsWith("/ai/video/motion")
    );
  })
  .map((item) => toSearchItem(item, "edit-models"));
const audioItems = routedModelItems("audio", () => "audio-models");

const modelGroups: ModelGroup[] = [
  {
    id: "image-models",
    label: "Image models",
    shortLabel: "Image",
    items: imageItems,
  },
  {
    id: "video-models",
    label: "Video models",
    shortLabel: "Video",
    items: videoItems,
  },
  {
    id: "edit-models",
    label: "Edit models",
    shortLabel: "Edit",
    items: editItems,
  },
  {
    id: "audio-models",
    label: "Audio models",
    shortLabel: "Audio",
    items: audioItems,
  },
].filter((group) => group.items.length > 0) as ModelGroup[];

const featureItems = menuEntries.flatMap(
  (entry) =>
    entry.menu.find((column) => column.titleKey === "header.features")?.items ??
    [],
);
const topLevelProducts: SearchItem[] = headerNav.flatMap((entry) => {
  if (
    entry.type !== "link" ||
    entry.id === "explore" ||
    entry.id === "community" ||
    entry.id === "contests" ||
    entry.id === "originals"
  ) {
    return [];
  }
  return [
    {
      id: `products-${entry.id}`,
      title: entry.id,
      titleKey: entry.labelKey,
      description: "",
      href: entry.href,
      kind: "products",
      keywords: [entry.id, "products"],
      badge:
        entry.badge === "top" || entry.badge === "new"
          ? entry.badge
          : undefined,
    },
  ];
});

function dedupeByHref<T extends { href: string }>(items: T[]) {
  const hrefs = new Set<string>();
  return items.filter((item) => {
    if (hrefs.has(item.href)) return false;
    hrefs.add(item.href);
    return true;
  });
}

const productItems = dedupeByHref([
  ...featureItems.map((item) => toSearchItem(item, "products")),
  ...topLevelProducts,
]).filter((item) => item.href.startsWith("/"));

const appItems = productItems
  .filter((item) =>
    new URL(item.href, "https://higgsfield.ai").pathname.startsWith("/apps"),
  )
  .map((item) => ({
    ...item,
    id: item.id.replace(/^products-/, "apps-"),
    kind: "apps" as const,
    keywords: [...item.keywords, "apps"],
  }));

const CHARACTER_ORDER = [
  "photodump",
  "ai-cast",
  "character-swap",
  "ai-stylist",
  "soul-id",
  "ai-influencer",
  "face-swap",
  "video-face-swap",
  "recast",
] as const;

const featureById = new Map(featureItems.map((item) => [item.id, item]));
const characterItems = CHARACTER_ORDER.flatMap((id) => {
  const item = featureById.get(id);
  return item ? [toSearchItem(item, "characters")] : [];
});

function topLevelItem(id: string, kind: SearchKind): SearchItem[] {
  const entry = headerNav.find(
    (candidate) => candidate.type === "link" && candidate.id === id,
  );
  if (!entry || entry.type !== "link") return [];
  return [
    {
      id: `${kind}-${entry.id}`,
      title: id,
      titleKey: entry.labelKey,
      description: "",
      href: entry.href,
      kind,
      keywords: [entry.id, kind],
    },
  ];
}

const communityItems = [
  ...topLevelItem("community", "community"),
  ...topLevelItem("contests", "community"),
];
const originalItems = topLevelItem("originals", "originals");
const allItems = [
  ...modelGroups.flatMap((group) => group.items),
  ...productItems,
  ...characterItems,
  ...communityItems,
  ...appItems,
  ...originalItems,
];

export const SITE_SEARCH_DATA: SiteSearchData = {
  modelGroups,
  productItems,
  productGridItems: productItems.slice(0, 8),
  productPromos: [],
  appItems,
  characterItems,
  communityItems,
  originalItems,
  allItems,
  recentFallbackItems: [
    imageItems.find((item) => item.modelId === "nano-banana-2-lite") ??
      imageItems[0],
    productItems.find((item) => item.href === "/canvas"),
  ].filter((item): item is SearchItem => Boolean(item)),
  trendingItems: [
    productItems.find((item) => item.id === "products-mcp"),
    productItems.find((item) => item.id === "products-ai-influencer"),
    videoItems.find((item) => item.modelId === "seedance_2_5"),
  ].filter((item): item is SearchItem => Boolean(item)),
};

export const SEARCH_KIND_LABELS: Record<SearchKind, string> = {
  "image-models": "Image models",
  "video-models": "Video models",
  "edit-models": "Edit models",
  "audio-models": "Audio models",
  products: "Products",
  characters: "Characters",
  community: "Community",
  apps: "Apps",
  originals: "Originals",
};
