import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Footer } from "@/components/footer/Footer";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Header } from "@/components/header/Header";
import { PromotionHeader } from "@/components/header/PromotionHeader";
import { AuthModal } from "@/features/auth/Modal";
import { SearchModal } from "@/features/search/Modal";
import { UpgradeModal } from "@/features/upgrade/Modal";
import { useT } from "@/lib/i18n";

export function AppShell({ children }: { children: ReactNode }) {
  const t = useT();
  const isGeneratorShell = useRouterState({
    select: (state) =>
      state.location.pathname === "/ai/image" ||
      state.location.pathname === "/ai/video" ||
      state.location.pathname === "/ai/video/motion",
  });
  const mobileNav = [
    t("nav.explore"),
    t("nav.community"),
    t("nav.library"),
    t("nav.profile"),
  ] as const;

  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip bg-page text-fg">
      <PromotionHeader />
      <Header />

      <main className="min-w-0 flex-1">{children}</main>

      {isGeneratorShell ? null : (
        <>
          <Footer />
          <SiteFooter />
        </>
      )}

      <nav
        className="fixed inset-x-0 bottom-0 z-[51] border-t border-border-subtle bg-page md:hidden"
        style={{
          height:
            "calc(var(--layout-mobile-nav) + env(safe-area-inset-bottom))",
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

      <AuthModal />
      <UpgradeModal />
      <SearchModal />
    </div>
  );
}
