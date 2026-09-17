import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";

type MasonryPosition = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type MasonryLayout<T> = {
  columnCount: number;
  columnWidth: number;
  height: number;
  items: Array<{ item: T; position: MasonryPosition }>;
};

/** Masonic-style shortest-column packer (Higgsfield viral-hub list). */
function layoutMasonry<T>({
  width,
  items,
  getAspectRatio,
  minColumnWidth = 160,
  gap = 8,
  maxColumnCount = 5,
}: {
  width: number;
  items: T[];
  getAspectRatio: (item: T) => number;
  minColumnWidth?: number;
  gap?: number;
  maxColumnCount?: number;
}): MasonryLayout<T> {
  if (width <= 0 || items.length === 0) {
    return { columnCount: 0, columnWidth: 0, height: 0, items: [] };
  }

  const columnCount = Math.min(
    maxColumnCount,
    Math.max(1, Math.floor((width + gap) / (minColumnWidth + gap))),
  );
  const columnWidth = (width - gap * (columnCount - 1)) / columnCount;
  const columnHeights = Array.from({ length: columnCount }, () => 0);

  const placed = items.map((item) => {
    let column = 0;
    for (let index = 1; index < columnCount; index += 1) {
      if (columnHeights[index]! < columnHeights[column]!) column = index;
    }

    const height = columnWidth / getAspectRatio(item);
    const top = columnHeights[column]!;
    const left = column * (columnWidth + gap);
    columnHeights[column] = top + height + gap;

    return {
      item,
      position: { top, left, width: columnWidth, height },
    };
  });

  const height = Math.max(0, ...columnHeights.map((value) => value - gap));

  return { columnCount, columnWidth, height, items: placed };
}

function readWidth(node: HTMLElement) {
  const rectWidth = node.getBoundingClientRect().width;
  if (rectWidth > 0) return rectWidth;
  return node.clientWidth;
}

export function MasonryGallery<T>({
  items,
  getKey,
  getAspectRatio,
  minColumnWidth = 160,
  gap = 8,
  maxColumnCount = 5,
  children,
}: {
  items: T[];
  getKey: (item: T) => string;
  getAspectRatio: (item: T) => number;
  minColumnWidth?: number;
  gap?: number;
  maxColumnCount?: number;
  children: (item: T, index: number) => ReactNode;
}) {
  const observerRef = useRef<ResizeObserver | null>(null);
  const [width, setWidth] = useState(0);

  const setHostNode = useCallback((node: HTMLDivElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    if (!node) return;

    const apply = () => {
      const next = readWidth(node);
      if (next <= 0) return;
      setWidth((current) => (Math.abs(current - next) < 0.5 ? current : next));
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    observerRef.current = observer;
  }, []);

  const layout = useMemo(
    () =>
      layoutMasonry({
        width,
        items,
        getAspectRatio,
        minColumnWidth,
        gap,
        maxColumnCount,
      }),
    [width, items, getAspectRatio, minColumnWidth, gap, maxColumnCount],
  );

  return (
    <div ref={setHostNode} className="w-full min-h-px">
      <div
        role="list"
        className="relative w-full"
        style={{ height: layout.height || undefined }}
      >
        {layout.items.map(({ item, position }, index) => (
          <div
            key={getKey(item)}
            role="listitem"
            className="absolute"
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height,
            }}
          >
            {children(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
