import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HiggsfieldMark } from "@/assets/icons/HiggsfieldMark";
import { HeaderActions } from "@/components/header/HeaderActions";
import { HeaderNav } from "@/components/header/HeaderNav";
import { cn } from "@/lib/cn";
import { t } from "@/lib/i18n";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Header() {
  const rootRef = useRef<HTMLElement>(null);
  const positionerRef = useRef<HTMLDivElement>(null);
  const [openValue, setOpenValue] = useState("");

  const alignViewport = useCallback((value: string) => {
    const root = rootRef.current;
    const positioner = positionerRef.current;
    if (!root || !positioner || !value) return;

    const trigger = root.querySelector(`[data-nav-trigger="${CSS.escape(value)}"]`);
    if (!(trigger instanceof HTMLElement)) return;

    const rootRect = root.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const menuWidth = positioner.offsetWidth;
    const maxLeft = Math.max(0, window.innerWidth - 8 - rootRect.left - menuWidth);
    const left = Math.max(0, Math.min(triggerRect.left - rootRect.left, maxLeft));
    root.style.setProperty("--nav-vp-left", `${left}px`);
  }, []);

  useLayoutEffect(() => {
    if (!openValue) return;

    alignViewport(openValue);

    const positioner = positionerRef.current;
    const observer = positioner
      ? new ResizeObserver(() => alignViewport(openValue))
      : null;
    if (positioner && observer) observer.observe(positioner);

    function onWindowChange() {
      alignViewport(openValue);
    }

    window.addEventListener("resize", onWindowChange);
    const scroller = rootRef.current?.querySelector("[data-nav-scroll]");
    scroller?.addEventListener("scroll", onWindowChange, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", onWindowChange);
      scroller?.removeEventListener("scroll", onWindowChange);
    };
  }, [alignViewport, openValue]);

  return (
    <header className="sticky top-0 z-[51] h-[var(--layout-header-height)] w-full min-w-0 overflow-visible border-b border-border-subtle bg-page">
      <NavigationMenu.Root
        ref={rootRef}
        delayDuration={120}
        skipDelayDuration={200}
        aria-label={t("header.primary")}
        className="relative flex h-full w-full min-w-0 items-center gap-3 overflow-visible px-4"
        onValueChange={setOpenValue}
      >
        <Link
          to="/"
          aria-label={t("header.logo")}
          className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-white"
        >
          <HiggsfieldMark className="size-5 text-fg-inverse" />
        </Link>

        <HeaderNav />
        <HeaderActions />

        <div
          ref={positionerRef}
          className="absolute top-full z-[52] flex w-max justify-start"
          style={{ left: "var(--nav-vp-left, 0px)" }}
        >
          <NavigationMenu.Viewport
            className={cn(
              "relative mt-1 max-w-[calc(100vw-2rem)] origin-top overflow-hidden rounded-card border border-border-default bg-surface-section text-fg shadow-[var(--shadow-raised-sm)]",
              "h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] data-[state=open]:animate-[overlay-in_var(--duration-fast)_var(--ease-out)]",
            )}
          />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}
