export function ExploreMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-grid h-8 items-center rounded-full bg-surface-primary px-3 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-secondary active:bg-white md:rounded-lg"
    >
      {label}
    </a>
  );
}
