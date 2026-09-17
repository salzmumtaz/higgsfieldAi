import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type KeyboardEvent,
  type SVGProps,
} from "react";
import { useRouter } from "@tanstack/react-router";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { megaIcons } from "@/assets/icons/megaMenuIcons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/Dialog";
import type { MegaIconId } from "@/components/header/header.data";
import {
  SEARCH_KIND_LABELS,
  SITE_SEARCH_DATA,
} from "@/features/search/config/search";
import type {
  ModelGroup,
  SearchItem,
  SearchKind,
  SearchTab,
} from "@/features/search/types";
import { cn } from "@/lib/cn";
import { useT, type Translate } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";

const RECENTS_KEY = "site-search-recents";
const RECENTS_MAX = 3;
const QUERY_DEBOUNCE_MS = 200;

const TABS: {
  id: SearchTab;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: "start" | "end";
  href?: string;
}[] = [
  { id: "all" },
  { id: "models", Icon: ModelsTabIcon },
  { id: "products", Icon: ProductsTabIcon },
  { id: "characters", Icon: CharactersTabIcon },
  { id: "community", Icon: CommunityTabIcon },
  { id: "apps", Icon: ExternalArrowIcon, iconPosition: "end", href: "/apps" },
  {
    id: "originals",
    Icon: ExternalArrowIcon,
    iconPosition: "end",
    href: "https://higgsfield.ai/original-series",
  },
];

const RESULT_KIND_ORDER: SearchKind[] = [
  "image-models",
  "video-models",
  "edit-models",
  "audio-models",
  "products",
  "characters",
  "community",
  "apps",
  "originals",
];

export function SearchModal() {
  const t = useT();
  const router = useRouter();
  const open = useAppStore((state) => state.searchOpen);
  const openSearch = useAppStore((state) => state.openSearch);
  const closeSearch = useAppStore((state) => state.closeSearch);
  const [activeTab, setActiveTab] = useState<SearchTab>("all");
  const [inputQuery, setInputQuery] = useState("");
  const [query, setQuery] = useState("");
  const [recentIds, setRecentIds] = useState<string[]>(readRecentIds);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setQuery(inputQuery.trim().toLowerCase()),
      QUERY_DEBOUNCE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [inputQuery]);

  useEffect(() => {
    function onShortcut(event: globalThis.KeyboardEvent) {
      if (event.isComposing || event.key.toLowerCase() !== "k") return;
      if (!event.metaKey && !event.ctrlKey) return;
      event.preventDefault();
      openSearch();
    }

    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, [openSearch]);

  const searchTextById = useMemo(
    () =>
      new Map(
        SITE_SEARCH_DATA.allItems.map((item) => [
          item.id,
          searchableText(item, t),
        ]),
      ),
    [t],
  );

  const queryItems = useMemo(() => {
    if (!query) return [];
    return SITE_SEARCH_DATA.allItems.filter((item) =>
      searchTextById.get(item.id)?.includes(query),
    );
  }, [query, searchTextById]);

  const groupedResults = useMemo(
    () =>
      RESULT_KIND_ORDER.flatMap((kind) => {
        const items = queryItems.filter((item) => item.kind === kind);
        return items.length ? [{ kind, items }] : [];
      }),
    [queryItems],
  );

  function resetAndClose() {
    closeSearch();
    setInputQuery("");
    setQuery("");
    setSelectedIndex(0);
  }

  function selectItem(item: SearchItem) {
    const nextIds = [
      item.id,
      ...recentIds.filter((id) => id !== item.id),
    ].slice(0, RECENTS_MAX);
    setRecentIds(nextIds);
    writeRecentIds(nextIds);
    resetAndClose();
    router.history.push(item.href);
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!queryItems.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) => (current + 1) % queryItems.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex(
        (current) => (current - 1 + queryItems.length) % queryItems.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = queryItems[selectedIndex];
      if (item) selectItem(item);
    }
  }

  const recentItems = recentIds
    .map((id) => SITE_SEARCH_DATA.allItems.find((item) => item.id === id))
    .filter((item): item is SearchItem => Boolean(item));

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) resetAndClose();
      }}
    >
      <DialogContent
        showClose={false}
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          window.requestAnimationFrame(() => inputRef.current?.focus());
        }}
        className={cn(
          "top-0 right-0 bottom-0 left-0 m-auto translate-none outline-none",
          "h-[min(40.125rem,calc(100dvh-24px))] w-[47.5rem] max-w-[calc(100vw-24px)]",
          "overflow-hidden rounded-[28px] border-white/12 bg-surface-secondary/85 p-0 text-fg shadow-[0_0_120px_rgba(0,0,0,0.44)] backdrop-blur-3xl",
        )}
        overlayClassName="bg-black/60 backdrop-blur-xl"
      >
        <DialogTitle className="sr-only">{t("search.title")}</DialogTitle>
        <DialogDescription className="sr-only">
          {t("search.description")}
        </DialogDescription>

        <section
          aria-label={t("search.title")}
          className={cn(
            "grid h-full min-h-0 w-full overflow-hidden",
            inputQuery.trim()
              ? "grid-rows-[52px_1fr] gap-1.5"
              : "grid-rows-[52px_auto_1fr] gap-1.5",
          )}
        >
          <div className="mx-4 mt-3 grid h-10 min-w-0 grid-cols-[auto_1fr_auto] items-center gap-1.5 rounded-2xl bg-white/5 px-3 py-2">
            <SearchIcon className="size-4 text-white/50" />
            <input
              ref={inputRef}
              value={inputQuery}
              onChange={(event) => {
                setInputQuery(event.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={onInputKeyDown}
              placeholder={t("search.placeholder")}
              aria-label={t("search.title")}
              className="min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
            {inputQuery ? (
              <button
                type="button"
                onClick={() => {
                  setInputQuery("");
                  inputRef.current?.focus();
                }}
                className="grid size-7 place-items-center rounded-full text-white/50 hover:bg-white/5 hover:text-white"
                aria-label={t("search.clear")}
              >
                <CloseIcon />
              </button>
            ) : (
              <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/40 sm:block">
                ⌘ K
              </kbd>
            )}
          </div>

          {!inputQuery.trim() ? (
            <div
              role="tablist"
              aria-label={t("search.title")}
              className="mx-1 flex h-12 gap-2 overflow-x-auto px-3 py-2"
            >
              {TABS.map((tab) => (
                <SearchTabItem
                  key={tab.id}
                  label={t(`search.tabs.${tab.id}`)}
                  Icon={tab.Icon}
                  iconPosition={tab.iconPosition}
                  href={tab.href}
                  active={activeTab === tab.id}
                  onSelect={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          ) : null}

          <div className="min-h-0 overflow-y-auto px-4 pb-4">
            {inputQuery.trim() ? (
              query ? (
                queryItems.length ? (
                  <div className="grid gap-4">
                    {groupedResults.map((group) => (
                      <SearchSection
                        key={group.kind}
                        label={SEARCH_KIND_LABELS[group.kind]}
                        items={group.items}
                        selectedItem={queryItems[selectedIndex]}
                        onSelect={selectItem}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid min-h-105 place-items-center text-sm text-white/50">
                    {t("search.noResults", { query: inputQuery.trim() })}
                  </div>
                )
              ) : (
                <SearchSkeleton />
              )
            ) : (
              <IdleContent
                activeTab={activeTab}
                recentItems={
                  recentItems.length
                    ? recentItems
                    : SITE_SEARCH_DATA.recentFallbackItems
                }
                onSelect={selectItem}
              />
            )}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}

function IdleContent({
  activeTab,
  recentItems,
  onSelect,
}: {
  activeTab: SearchTab;
  recentItems: SearchItem[];
  onSelect: (item: SearchItem) => void;
}) {
  const t = useT();

  if (activeTab === "all") {
    return (
      <div className="grid gap-5">
        {recentItems.length ? (
          <SearchSection
            label={t("search.recent")}
            items={recentItems}
            onSelect={onSelect}
            compact
          />
        ) : null}
        {SITE_SEARCH_DATA.trendingItems.length ? (
          <SearchSection
            label={t("search.trending")}
            items={SITE_SEARCH_DATA.trendingItems}
            onSelect={onSelect}
            columns
          />
        ) : null}
      </div>
    );
  }

  if (activeTab === "models") {
    return (
      <div className="grid">
        <div className="grid gap-5 md:grid-cols-[9rem_1fr]">
          <div className="hidden content-start gap-1.5 md:grid">
            <span className="text-xs font-medium text-white/50">
              {t("search.tabs.models")}
            </span>
            {SITE_SEARCH_DATA.modelGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() =>
                  document
                    .getElementById(group.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="grid h-11 grid-cols-[1fr_auto] items-center rounded-xl px-2 text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white"
              >
                <span>{group.shortLabel}</span>
                <span className="grid h-4.5 min-w-6.5 place-items-center rounded-md bg-white/5 px-1.5 text-[10px] text-white/40">
                  {group.items.length}
                </span>
              </button>
            ))}
          </div>
          <div className="grid gap-4">
            {SITE_SEARCH_DATA.modelGroups.map((group) => (
              <ModelGroupSection
                key={group.id}
                group={group}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const itemsByTab: Record<
    Exclude<SearchTab, "all" | "models">,
    SearchItem[]
  > = {
    products: SITE_SEARCH_DATA.productItems,
    characters: SITE_SEARCH_DATA.characterItems,
    community: SITE_SEARCH_DATA.communityItems,
    apps: SITE_SEARCH_DATA.appItems,
    originals: SITE_SEARCH_DATA.originalItems,
  };
  const items = itemsByTab[activeTab];

  return (
    <div className="grid gap-5">
      {activeTab === "products" && SITE_SEARCH_DATA.trendingItems.length ? (
        <SearchSection
          label={t("search.trending")}
          items={SITE_SEARCH_DATA.trendingItems}
          onSelect={onSelect}
          columns
        />
      ) : null}
      <SearchSection
        label={t(`search.tabs.${activeTab}`)}
        items={items}
        onSelect={onSelect}
        columns={activeTab === "products" || activeTab === "apps"}
      />
    </div>
  );
}

function ModelGroupSection({
  group,
  onSelect,
}: {
  group: ModelGroup;
  onSelect: (item: SearchItem) => void;
}) {
  return (
    <section id={group.id} className="scroll-mt-1">
      <div className="mb-1.5 flex items-center justify-between">
        <h3 className="text-xs font-medium text-white/50">{group.label}</h3>
        <span className="text-[10px] text-white/30">{group.items.length}</span>
      </div>
      <div className="grid">
        {group.items.map((item) => (
          <SearchResultRow key={item.id} item={item} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

function SearchSection({
  label,
  items,
  onSelect,
  selectedItem,
  compact,
  columns,
}: {
  label: string;
  items: SearchItem[];
  onSelect: (item: SearchItem) => void;
  selectedItem?: SearchItem;
  compact?: boolean;
  columns?: boolean;
}) {
  if (!items.length) return null;

  return (
    <section className="grid gap-1.5">
      <h3 className="text-xs font-medium text-white/50">{label}</h3>
      <div className={cn("grid", columns && "md:grid-cols-2 md:gap-x-2")}>
        {items.map((item) => (
          <SearchResultRow
            key={item.id}
            item={item}
            compact={compact}
            selected={selectedItem?.id === item.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

function SearchResultRow({
  item,
  compact,
  selected,
  onSelect,
}: {
  item: SearchItem;
  compact?: boolean;
  selected?: boolean;
  onSelect: (item: SearchItem) => void;
}) {
  const t = useT();
  const title = item.titleKey ? t(item.titleKey) : item.title;
  const description = item.descriptionKey
    ? t(item.descriptionKey)
    : item.description;

  return (
    <button
      type="button"
      data-search-result
      onMouseMove={(event) =>
        event.currentTarget.focus({ preventScroll: true })
      }
      onClick={() => onSelect(item)}
      className={cn(
        "group grid w-full grid-cols-[auto_1fr_auto] items-center rounded-xl text-left transition-colors focus:outline-none",
        compact ? "min-h-11 gap-2 p-1 pr-3" : "min-h-15 gap-3 py-2 pr-4 pl-2",
        selected ? "bg-white/10" : "hover:bg-white/5 focus-visible:bg-white/5",
      )}
    >
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-[10px] bg-white/5 text-white",
          compact ? "size-10 [&_svg]:size-4.5" : "size-11 [&_svg]:size-5",
        )}
      >
        <SearchItemIcon icon={item.icon} />
      </span>
      <span className="grid min-w-0 gap-0.5">
        <span className="flex min-w-0 items-center gap-2">
          <span className="truncate text-sm font-semibold text-white/90">
            {title}
          </span>
          {item.badge ? (
            <span
              className={cn(
                "font-grotesk rounded-sm px-1.5 text-[10px] font-bold uppercase",
                item.badge === "new"
                  ? "bg-brand text-fg-inverse"
                  : "bg-brand-secondary text-white",
              )}
            >
              {t(`badges.${item.badge}`)}
            </span>
          ) : null}
        </span>
        {description ? (
          <span className="truncate text-xs text-white/50">{description}</span>
        ) : null}
      </span>
      <ArrowIcon className="size-4 text-white/30 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
    </button>
  );
}

function SearchItemIcon({ icon }: { icon?: MegaIconId }) {
  if (!icon) return <SearchIcon className="size-5 text-white/50" />;
  if (icon === "ps" || icon === "pr" || icon === "ae") {
    return <span className="text-xs font-bold uppercase">{icon}</span>;
  }
  const Icon = megaIcons[icon];
  return Icon ? <Icon /> : <SearchIcon className="size-5 text-white/50" />;
}

function searchableText(item: SearchItem, t: Translate) {
  return [
    item.title,
    item.titleKey ? t(item.titleKey) : "",
    item.description,
    item.descriptionKey ? t(item.descriptionKey) : "",
    item.kind,
    ...item.keywords,
  ]
    .join(" ")
    .toLowerCase();
}

function readRecentIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(RECENTS_KEY) ?? "[]",
    );
    return Array.isArray(parsed)
      ? parsed
          .filter((id): id is string => typeof id === "string")
          .slice(0, RECENTS_MAX)
      : [];
  } catch {
    return [];
  }
}

function writeRecentIds(ids: string[]) {
  try {
    window.localStorage.setItem(RECENTS_KEY, JSON.stringify(ids));
  } catch {
    // Search remains usable when storage is unavailable.
  }
}

function SearchTabItem({
  label,
  Icon,
  iconPosition = "start",
  href,
  active,
  onSelect,
}: {
  label: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconPosition?: "start" | "end";
  href?: string;
  active: boolean;
  onSelect: () => void;
}) {
  const className = cn(
    "grid h-8 shrink-0 grid-flow-col items-center justify-center gap-1 rounded-full border px-3.5 py-1 text-sm font-medium text-white/80 transition-colors duration-150 [&_svg]:size-4",
    active
      ? "border-transparent bg-white/10 text-white"
      : "border-white/10 bg-transparent hover:bg-white/5 hover:text-white",
  );
  const content = (
    <>
      {Icon && iconPosition === "start" ? <Icon aria-hidden /> : null}
      <span>{label}</span>
      {Icon && iconPosition === "end" ? <Icon aria-hidden /> : null}
    </>
  );

  if (href) {
    return (
      <a data-site-search-nav href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-site-search-nav
      data-site-search-tab
      className={className}
      onClick={onSelect}
    >
      {content}
    </button>
  );
}

function SearchSkeleton() {
  return (
    <div aria-hidden="true" className="grid gap-2 pt-2">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-15 animate-pulse rounded-xl bg-white/5" />
      ))}
    </div>
  );
}

function ModelsTabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 7a.75.75 0 0 1 .75.75c0 2.426.536 4.001 1.517 4.983.982.981 2.557 1.517 4.983 1.517a.75.75 0 0 1 0 1.5c-2.426 0-4.001.536-4.983 1.517-.981.982-1.517 2.557-1.517 4.983a.75.75 0 0 1-1.5 0c0-2.426-.536-4.001-1.517-4.983-.982-.981-2.557-1.517-4.983-1.517a.75.75 0 0 1 0-1.5c2.426 0 4.001-.536 4.983-1.517.981-.982 1.517-2.557 1.517-4.983A.75.75 0 0 1 13 7Zm0 5.009A6.93 6.93 0 0 1 10.009 15 6.93 6.93 0 0 1 13 17.991 6.93 6.93 0 0 1 15.991 15 6.93 6.93 0 0 1 13 12.009ZM6 5.5a.5.5 0 0 0-1 0c0 .981-.217 1.573-.572 1.928C4.072 7.783 3.481 8 2.5 8a.5.5 0 0 0 0 1c.981 0 1.573.217 1.928.572C4.783 9.928 5 10.519 5 11.5a.5.5 0 0 0 1 0c0-.981.217-1.573.572-1.928C6.928 9.217 7.519 9 8.5 9a.5.5 0 0 0 0-1c-.981 0-1.573-.217-1.928-.572C6.217 7.072 6 6.481 6 5.5ZM11 1.5a.5.5 0 0 0-1 0c0 .633-.141.975-.333 1.167C9.475 2.859 9.133 3 8.5 3a.5.5 0 0 0 0 1c.633 0 .975.141 1.167.333.192.192.333.534.333 1.167a.5.5 0 0 0 1 0c0-.633.141-.975.333-1.167C11.525 4.141 11.867 4 12.5 4a.5.5 0 0 0 0-1c-.633 0-.975-.141-1.167-.333C11.141 2.475 11 2.133 11 1.5Z"
      />
    </svg>
  );
}

function ProductsTabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 1.75v6.5m0 7.5v6.5M8.25 12h-6.5m14 0h6.5M8 8 6 6m10 2 2-2m-2 10 2 2M8 16l-2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CharactersTabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.25 3.75h-6.5a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h2.506m13-7.5v6.5a1 1 0 0 1-1 1h-2.513m-9.487 0a4.75 4.75 0 0 1 9.487 0H7.256ZM19 1.75l1.083 2.167L22.25 5l-2.167 1.083L19 8.25l-1.083-2.167L15.75 5l2.167-1.083L19 1.75ZM14.75 10.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityTabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 2.75a3.5 3.5 0 1 1 0 7m5.75 10.5h1.5a.93.93 0 0 0 .921-.996c-.405-2.55-2.324-4.825-4.922-5.745M9.25 9.75a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM1.077 19.222C1.629 15.67 5.077 12.75 9.25 12.75s7.621 2.919 8.173 6.472a.868.868 0 0 1-.923.997H2a.868.868 0 0 1-.923-.997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M15 12.5V5H7.5M5.208 14.792l8.959-8.959"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="m4 4 8 8m0-8-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="m5 11 6-6m-4 0h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
