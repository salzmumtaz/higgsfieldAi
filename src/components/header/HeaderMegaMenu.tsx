import { megaIcons } from "@/assets/icons/megaMenuIcons";
import type { MegaColumn, MegaIconId, MegaItem } from "@/components/header/header.data";
import { AppLink } from "@/components/navigation/AppLink";
import { StatusBadge, statusBadgeWellClass } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";

const adobeMarks: Record<"ps" | "pr" | "ae", string> = {
  ps: "Ps",
  pr: "Pr",
  ae: "Ae",
};

export function HeaderMegaMenu({
  columns,
  onItemSelect,
}: {
  columns: MegaColumn[];
  onItemSelect: () => void;
}) {
  const t = useT();
  return (
    <div className="flex p-1">
      {columns.map((column) => (
        <div key={column.titleKey} className="min-w-72 p-2 pt-3">
          <p className="px-2 text-sm text-fg-secondary">{t(column.titleKey)}</p>
          <div className="mt-1 max-h-[min(70vh,36rem)] overflow-y-auto pr-1">
            {column.items.map((entry) => (
              <MegaRow
                key={entry.id}
                item={entry}
                onSelect={onItemSelect}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MegaRow({
  item,
  onSelect,
}: {
  item: MegaItem;
  onSelect: () => void;
}) {
  const t = useT();
  const badgeColor =
    item.badgeColor ?? (item.badge === "new" ? "lime" : item.badge === "top" ? "pink" : undefined);

  return (
    <AppLink
      href={item.href}
      onClick={onSelect}
      className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-card p-2 no-underline transition-colors duration-[var(--duration-fast)] ease-out hover:bg-overlay-hover"
    >
      <div
        className={cn(
          "relative grid size-12 shrink-0 place-items-center rounded-xl border border-transparent bg-surface-secondary text-fg [&_svg]:size-6",
          badgeColor ? statusBadgeWellClass[badgeColor] : null,
        )}
      >
        <MegaIcon icon={item.icon} />
        {item.badge && badgeColor ? (
          <StatusBadge color={badgeColor}>{t(`badges.${item.badge}`)}</StatusBadge>
        ) : null}
      </div>
      <div className="grid min-w-0 auto-rows-min gap-1">
        <p className="font-grotesk truncate text-sm font-medium text-fg">{item.label}</p>
        <p className="text-sm text-fg-secondary">{item.description}</p>
      </div>
    </AppLink>
  );
}

function MegaIcon({ icon }: { icon?: MegaIconId }) {
  if (!icon) return null;
  if (icon === "ps" || icon === "pr" || icon === "ae") {
    return (
      <span aria-hidden="true" className="text-lg leading-none font-bold text-white">
        {adobeMarks[icon]}
      </span>
    );
  }
  const Icon = megaIcons[icon];
  if (!Icon) return null;
  return <Icon />;
}
