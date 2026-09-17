import type { SVGProps } from "react";

/** Image Features: Create Image. Live stroke was white; mapped to currentColor. */
export function CreateImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.5 20.5L9.41421 13.4142C8.63317 12.6332 7.36684 12.6332 6.58579 13.4142L3.5 16.5M6.5 20.5H17.5C19.1569 20.5 20.5 19.1569 20.5 17.5V6.5C20.5 4.84315 19.1569 3.5 17.5 3.5H6.5C4.84315 3.5 3.5 4.84315 3.5 6.5V17.5C3.5 19.1569 4.84315 20.5 6.5 20.5ZM14.5 7L13.6667 8.66667L12 9.5L13.6667 10.3333L14.5 12L15.3333 10.3333L17 9.5L15.3333 8.66667L14.5 7Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}
