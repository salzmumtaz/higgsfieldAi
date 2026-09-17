import { useT } from "@/lib/i18n";
import {
  footerColumns,
  footerGroups,
  footerSocials,
  type FooterGroupItem,
  type FooterLinkItem,
} from "./footer.data";
import { FooterLink } from "./FooterLink";

export function Footer() {
  const t = useT();
  return (
    <footer
      id="footer-landing"
      className="relative z-10 bg-brand text-fg-inverse"
    >
      <div className="container-app grid grid-flow-row-dense gap-14 py-4 md:gap-18 md:py-9">
        <div className="grid grid-rows-[auto_1fr] justify-between gap-8 md:gap-12 xl:grid-cols-[auto_1fr]">
          <h2 className="font-grotesk pr-10 text-brand-h-xs font-medium text-fg-inverse uppercase xl:max-w-96 md:text-brand-h-md">
            {t("footer.heading")}
          </h2>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 xl:grid-cols-5">
            <div className="contents xl:hidden">
              {footerGroups.map((group) => (
                <FooterGroup key={group.id} group={group} />
              ))}
              <ul className="col-span-2 grid grid-cols-2 gap-3 md:hidden">
                {footerSocials.map((link) => (
                  <SocialItem key={link.id} link={link} />
                ))}
              </ul>
            </div>
            {footerColumns.map((column) => (
              <div
                key={column.id}
                className="hidden xl:flex xl:flex-col xl:gap-12"
              >
                {column.groups.map((group) => (
                  <FooterGroup key={group.id} group={group} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-flow-row-dense justify-between gap-8 xl:grid-cols-[auto_1fr]">
          <div className="text-fg-inverse">
            <p className="mt-8 md:mt-0">{t("footer.address")}</p>
          </div>
          <ul className="hidden gap-8 md:flex xl:justify-end">
            {footerSocials.map((link) => (
              <SocialItem key={link.id} link={link} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ group }: { group: FooterGroupItem }) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-medium text-surface-tertiary/48 md:text-base">
        {group.title}
      </h3>
      <ul className="space-y-3">
        {group.links.map((link) => (
          <li key={link.id}>
            <FooterLink
              href={link.href}
              label={link.label}
              openInNewTab={link.openInNewTab}
              rel={link.rel}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function SocialItem({ link }: { link: FooterLinkItem }) {
  return (
    <li>
      <FooterLink
        href={link.href}
        label={link.label}
        openInNewTab={link.openInNewTab}
        rel={link.rel}
      />
    </li>
  );
}
