import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLayoutEffect, useRef, type ComponentProps } from "react";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import {
  headerNav,
  type HeaderNavEntry,
  type NavBadge,
} from "@/components/header/header.data";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

const navItemClass =
  "inline-flex h-9 shrink-0 items-center gap-1 rounded-lg px-2 text-sm font-medium whitespace-nowrap no-underline transition-colors duration-[var(--duration-fast)] ease-out text-fg-secondary hover:bg-overlay-hover hover:text-fg data-[state=open]:bg-overlay-hover data-[active]:text-brand data-[status=active]:text-brand";

export function HeaderNav() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { pathname, search } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname,
      search: state.location.searchStr,
    }),
  });

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function syncScrollFade() {
      const node = scrollRef.current;
      if (!node) return;
      const start = node.scrollLeft <= 1;
      const end = node.scrollLeft + node.clientWidth >= node.scrollWidth - 1;
      node.toggleAttribute("data-scroll-start", start);
      node.toggleAttribute("data-scroll-end", end);
    }

    syncScrollFade();
    el.addEventListener("scroll", syncScrollFade, { passive: true });
    const observer = new ResizeObserver(syncScrollFade);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    return () => {
      el.removeEventListener("scroll", syncScrollFade);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-nav-scroll=""
      className="header-nav-scroll hidden min-w-0 flex-1 overflow-x-auto overflow-y-hidden md:block [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <NavigationMenu.List className="m-0 flex w-max list-none flex-nowrap items-center gap-2 p-0">
        {headerNav.map((entry) => (
          <NavEntry
            key={entry.id}
            entry={entry}
            pathname={pathname}
            search={search}
          />
        ))}
      </NavigationMenu.List>
    </div>
  );
}

function NavEntry({
  entry,
  pathname,
  search,
}: {
  entry: HeaderNavEntry;
  pathname: string;
  search: string;
}) {
  const t = useT();
  if (entry.type === "separator") {
    return (
      <li
        aria-hidden="true"
        className="mx-1 h-4 w-px shrink-0 self-center bg-border-default"
      />
    );
  }

  const active = isNavActive(entry.href, pathname, search);
  const itemClass = cn(navItemClass, active && "text-brand hover:text-brand");
  const labelText = t(entry.labelKey);
  const label = (
    <>
      {entry.type === "link" && entry.shimmer ? (
        <ShimmerText text={labelText} />
      ) : (
        labelText
      )}
      {entry.badge ? <NavBadgeMark badge={entry.badge} /> : null}
    </>
  );

  if (entry.type === "link") {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild active={active}>
          <NavHref
            href={entry.href}
            className={itemClass}
            data-active={active ? "" : undefined}
            aria-current={active ? "page" : undefined}
          >
            {label}
          </NavHref>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item value={entry.id}>
      <NavigationMenu.Trigger asChild>
        <NavHref
          href={entry.href}
          className={itemClass}
          data-nav-trigger={entry.id}
          data-active={active ? "" : undefined}
          aria-current={active ? "page" : undefined}
        >
          {label}
        </NavHref>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content className="w-max">
        <HeaderMegaMenu columns={entry.menu} />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function NavHref({
  href,
  className,
  children,
  ...props
}: ComponentProps<"a"> & { href: string }) {
  if (href === "/") {
    return (
      <Link to="/" className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}

function NavBadgeMark({ badge }: { badge: NavBadge }) {
  const t = useT();
  return (
    <span className="rounded-md bg-brand/20 px-1.5 py-0.5 text-[10px] leading-[12px] font-bold whitespace-nowrap text-brand">
      {t(`badges.${badge}`)}
    </span>
  );
}

function isNavActive(
  href: string,
  pathname: string,
  search: string,
): boolean {
  if (href.startsWith("http")) return false;

  const url = new URL(href, "https://higgsfield.local");
  if (url.pathname !== pathname) {
    if (url.pathname === "/community" && pathname.startsWith("/community")) {
      return true;
    }
    if (url.pathname === "/effects/use" && pathname.startsWith("/effects/use")) {
      return true;
    }
    if (
      url.pathname === "/plugins/after-effects" &&
      pathname.startsWith("/plugins")
    ) {
      return true;
    }
    return false;
  }

  const model = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search).get(
    "model",
  );
  const hrefModel = url.searchParams.get("model");

  if (pathname === "/ai/video") {
    if (hrefModel === "genjutsu") return model === "genjutsu";
    if (!hrefModel) return model !== "genjutsu";
    return model === hrefModel;
  }

  if (pathname === "/") return true;
  return true;
}
