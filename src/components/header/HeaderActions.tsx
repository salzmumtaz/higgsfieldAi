import type { SVGProps } from "react";
import { EnterpriseIcon } from "@/assets/icons/EnterpriseIcon";
import { PricingIcon } from "@/assets/icons/PricingIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { LanguageMenu } from "@/components/header/LanguageMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";

const iconButtonClass =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-control text-white transition-colors duration-[var(--duration-fast)] ease-out hover:bg-overlay-hover";

const actionChipClass =
  "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-control bg-overlay-hover px-2 text-sm font-medium whitespace-nowrap text-white no-underline shadow-[inset_0_1.5px_3px_#ffffff0d] transition-[filter,color] duration-150 ease-out hover:brightness-110";

const discountBadgeClass =
  "pointer-events-none absolute top-[calc(100%-8px)] left-1/2 grid h-4 min-w-14 -translate-x-1/2 place-items-center rounded-md px-1.5 py-0.5 font-grotesk text-[10px] leading-[10px] font-bold whitespace-nowrap text-white bg-[radial-gradient(39.71%_136.54%_at_51.64%_117.31%,#f920d1_0%,#ed1572_100%)]";

export function HeaderActions() {
  const t = useT();
  const user = useAppStore((state) => state.user);
  const openAuthModal = useAppStore((state) => state.openAuthModal);
  const openSearch = useAppStore((state) => state.openSearch);
  const signOut = useAppStore((state) => state.signOut);

  return (
    <div className="ml-auto flex shrink-0 items-center gap-1">
      {user ? (
        <button
          type="button"
          className={iconButtonClass}
          aria-label={t("header.search")}
          title={t("search.openShortcut")}
          onClick={openSearch}
        >
          <SearchIcon className="size-5" />
        </button>
      ) : null}

      <a href="/pricing" className={cn(actionChipClass, "relative overflow-visible")}>
        <PricingIcon className="size-4" />
        {t("nav.pricing")}
        <span className={discountBadgeClass}>{t("header.pricingOff")}</span>
      </a>

      <a
        href="https://higgsfield.ai/enterprise"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(actionChipClass, "hidden md:inline-flex")}
      >
        <EnterpriseIcon className="size-4" />
        <span>{t("nav.enterprise")}</span>
      </a>

      <LanguageMenu />

      <span aria-hidden="true" className="mx-1 hidden h-4 w-px shrink-0 bg-border-default md:block" />

      {user ? (
        <Button variant="ghost" size="sm" onClick={signOut}>
          {t("auth.signOut")}
        </Button>
      ) : (
        <>
          <Button
            variant="soft"
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => openAuthModal("login")}
          >
            {t("nav.login")}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => openAuthModal("signup")}
          >
            {t("nav.signUp")}
          </Button>
        </>
      )}

      <button
        type="button"
        className={cn(iconButtonClass, "md:hidden")}
        aria-label={t("header.openMenu")}
      >
        <MenuIcon />
      </button>
    </div>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
