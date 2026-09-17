import type { SVGProps } from "react";

/** Video Models: Seedance 2.5. Live 16×16 bars (Image Seedream is a different 14×14 mark). */
export function SeedanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path
        d="m3.154 12.154-2.62.655V1.2l2.62.655v10.3Zm12.668.679-2.626.656V.519l2.627.65v11.664Zm-8.509-.325-2.622.656v-6.84l2.622.655v5.53ZM9.025 5.31l2.627-.656v6.84l-2.627-.656V5.31Z"
        fill="currentColor"
      />
    </svg>
  );
}
