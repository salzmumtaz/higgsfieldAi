import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from "react";
import { useRouter } from "@tanstack/react-router";

const APP_OWNED_PATHS = new Set([
  "/",
  "/ai/image",
  "/ai/video",
  "/ai/video/motion",
]);

export function isAppOwnedHref(href: string): boolean {
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  const url = new URL(href, "https://app.local");
  const pathname =
    url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
  return APP_OWNED_PATHS.has(pathname);
}

export const AppLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a">
>(function AppLink({ href, onClick, target, download, ...props }, ref) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      !href ||
      !isAppOwnedHref(href) ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      download != null ||
      (target && target !== "_self")
    ) {
      return;
    }

    event.preventDefault();
    const url = new URL(href, window.location.origin);
    router.history.push(`${url.pathname}${url.search}${url.hash}`);
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      download={download}
      onClick={handleClick}
      {...props}
    />
  );
});
