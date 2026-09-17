import type { ReactNode } from "react";
import { Header } from "@/components/header/Header";
import { PromotionHeader } from "@/components/header/PromotionHeader";
import { t } from "@/lib/i18n";

const mobileNav = [
  t("nav.explore"),
  t("nav.community"),
  t("nav.library"),
  t("nav.profile"),
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip bg-page text-fg">
      <PromotionHeader />
      <Header />

      <main className="min-w-0 flex-1 pb-[calc(var(--layout-mobile-nav)+env(safe-area-inset-bottom))] md:pb-0">
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
