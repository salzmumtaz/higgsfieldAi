import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { t } from "@/lib/i18n";

const desktopNav = [
  t("nav.explore"),
  t("nav.image"),
  t("nav.video"),
  t("nav.effects"),
  t("nav.community"),
] as const;

const mobileNav = [
  t("nav.explore"),
  t("nav.community"),
  t("nav.library"),
  t("nav.profile"),
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-page text-fg">
      <header
        className="sticky top-0 z-[51] border-b border-border-subtle bg-page"
        style={{ height: "var(--layout-header-height)" }}
      >
        <div className="container-app flex h-full items-center gap-3">
          <div className="font-grotesk shrink-0 text-base font-bold tracking-tight text-fg">
            higgsfield
          </div>
          <nav
            className="hidden min-w-0 flex-1 items-center gap-2 overflow-hidden md:flex"
            aria-label="Primary"
          >
            {desktopNav.map((label) => (
              <span
                key={label}
                className="type-button shrink-0 px-2 py-1 text-fg-secondary"
              >
                {label}
              </span>
            ))}
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="bg-brand-soft text-brand shadow-[var(--shadow-soft-inset)] hover:bg-brand-soft"
            >
              {t("nav.login")}
            </Button>
            <Button variant="primary" size="sm">
              {t("nav.signUp")}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-[calc(var(--layout-mobile-nav)+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>

      <nav
        className="fixed inset-x-0 bottom-0 z-[51] border-t border-border-subtle bg-page md:hidden"
        style={{
          height: "calc(var(--layout-mobile-nav) + env(safe-area-inset-bottom))",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        aria-label="Mobile"
      >
        <div className="flex h-[var(--layout-mobile-nav)] items-stretch">
          {mobileNav.map((label) => (
            <span
              key={label}
              className="flex flex-1 items-center justify-center text-xs font-medium text-fg-secondary"
            >
              {label}
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
}
