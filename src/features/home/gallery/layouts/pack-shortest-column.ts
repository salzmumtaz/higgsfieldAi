/** Shortest-column packer used by viral-hub (pixel heights) and community `Js` (height/width). */
export function packShortestColumn<T>(
  items: T[],
  columnCount: number,
  sizeOf: (item: T) => number,
): T[][] {
  const columns = Array.from({ length: columnCount }, () => [] as T[]);
  const heights = Array.from({ length: columnCount }, () => 0);

  for (const item of items) {
    const column = heights.indexOf(Math.min(...heights));
    if (column < 0) continue;
    columns[column]!.push(item);
    const size = sizeOf(item);
    heights[column] += Number.isFinite(size) ? size : 1;
  }

  return columns;
}

export type CommunityMaxCols = 3 | 4 | 5;
export type CommunityColumnCount = 1 | 2 | 3 | 4 | 5;

/**
 * Community Home `Qs(innerWidth, maxCols=4)`:
 * >1280 → max, ≤1280 → max-1, ≤1024 → max-2, ≤768 → 2.
 */
export function communityColumnCount(
  viewportWidth: number,
  maxCols: CommunityMaxCols = 4,
): CommunityColumnCount {
  if (viewportWidth <= 768) return 2;
  if (viewportWidth <= 1024) {
    if (maxCols === 5) return 3;
    if (maxCols === 4) return 2;
    return 1;
  }
  if (viewportWidth <= 1280) {
    if (maxCols === 5) return 4;
    if (maxCols === 4) return 3;
    return 2;
  }
  return maxCols;
}
