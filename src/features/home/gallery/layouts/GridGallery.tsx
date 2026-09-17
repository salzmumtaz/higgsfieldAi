import type { ReactNode } from "react";

/** Home Projects layout: CSS auto-fit grid, document order, no column packer. */
export function GridGallery({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}
