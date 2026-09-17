import { LanguageMenu } from "@/components/header/LanguageMenu";
import { useT } from "@/lib/i18n";
import { siteFooterLinks } from "./footer.data";

const linkClassName =
  "inline-grid grid-flow-col content-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap font-medium text-fg transition hover:brightness-60";

export function SiteFooter() {
  const t = useT();
  const year = String(new Date().getFullYear());

  return (
    <footer
      id="footer"
      className="contain-layout w-full bg-page pb-[calc(var(--layout-mobile-nav)+env(safe-area-inset-bottom))] md:pb-0"
    >
      <nav className="flex w-full flex-col gap-5 px-6 py-6 text-sm font-normal text-fg-secondary md:flex-row md:items-center md:justify-between">
        <p className="order-2 text-center text-sm font-normal text-fg-secondary md:order-1 md:text-left">
          <span className="whitespace-nowrap">
            {t("footer.copyright", { year })}
          </span>
          <span className="md:inline"> {t("footer.allRights")}</span>
        </p>
        <ul className="order-1 flex flex-wrap items-center justify-center gap-6 text-left text-sm font-normal text-fg md:order-2 md:justify-end md:text-right">
          <li>
            <LanguageMenu variant="footer" />
          </li>
          {siteFooterLinks.map((item) => (
            <li key={item.id}>
              {item.href ? (
                <a href={item.href} className={linkClassName}>
                  {t(item.labelKey)}
                </a>
              ) : (
                <button type="button" className="cursor-pointer border-0 bg-transparent p-0 font-medium text-inherit transition hover:brightness-60">
                  {t(item.labelKey)}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
