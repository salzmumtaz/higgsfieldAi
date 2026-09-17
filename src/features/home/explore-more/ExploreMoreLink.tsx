import { AppLink } from "@/components/navigation/AppLink";

export function ExploreMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <AppLink
      href={href}
      className="inline-grid h-8 items-center rounded-full bg-surface-primary px-3 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-secondary active:bg-white md:rounded-lg"
    >
      {label}
    </AppLink>
  );
}
