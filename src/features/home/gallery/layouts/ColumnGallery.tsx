import { useEffect, useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  communityColumnCount,
  packShortestColumn,
  type CommunityColumnCount,
  type CommunityMaxCols,
} from "./pack-shortest-column";

function viewportColumnCount(maxCols: CommunityMaxCols): CommunityColumnCount {
  if (typeof window === "undefined") return maxCols;
  return communityColumnCount(window.innerWidth, maxCols);
}

/**
 * Community Home layout (`G`/`Kr`): CSS grid of column stacks.
 * Packs a flat list with shortest-column using height/width (`1 / aspectRatio`).
 * Live resize uses a shrink/grow hybrid; this rebuild re-packs on count change.
 */
export function ColumnGallery<T>({
  items,
  getKey,
  getAspectRatio,
  maxCols = 4,
  children,
}: {
  items: T[];
  getKey: (item: T) => string;
  getAspectRatio: (item: T) => number;
  maxCols?: CommunityMaxCols;
  children: (item: T) => ReactNode;
}) {
  const [columnCount, setColumnCount] = useState(() => viewportColumnCount(maxCols));

  useEffect(() => {
    const apply = () => {
      const next = communityColumnCount(window.innerWidth, maxCols);
      setColumnCount((current) => (current === next ? current : next));
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [maxCols]);

  const columns = useMemo(
    () =>
      packShortestColumn(items, columnCount, (item) => {
        const ratio = getAspectRatio(item);
        return ratio > 0 ? 1 / ratio : 1;
      }),
    [items, columnCount, getAspectRatio],
  );

  return (
    <div
      className="grid overflow-x-hidden"
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className={cn("space-y-2", index < columnCount - 1 && "pr-2")}
        >
          {column.map((item) => (
            <div key={getKey(item)}>{children(item)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
