import type { FooterLinkItem } from "./footer.data";

export function FooterLink({
  href,
  label,
  openInNewTab,
  rel,
}: Omit<FooterLinkItem, "id">) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={rel}
      className="text-nowrap text-sm font-medium text-fg-inverse md:text-base md:transition md:hover:opacity-60"
    >
      {label}
    </a>
  );
}
