import type { SVGProps } from "react";

/** Image / Video Features: Canvas. Live stroke was currentColor. */
export function CanvasIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M15.75 6V7.75C15.75 8.02614 15.9739 8.25 16.25 8.25H18M15.75 6V4.25C15.75 3.97386 15.9739 3.75 16.25 3.75H19.75C20.0261 3.75 20.25 3.97386 20.25 4.25V7.75C20.25 8.02614 20.0261 8.25 19.75 8.25H18M15.75 6H8.25M6 8.25V15.75M18 8.25V10.25M8 18V16.25C8 15.9739 7.77614 15.75 7.5 15.75H4.25C3.97386 15.75 3.75 15.9739 3.75 16.25V19.75C3.75 20.0261 3.97386 20.25 4.25 20.25H7.5C7.77614 20.25 8 20.0261 8 19.75V18ZM8 18H10.25M4.25 8.25H7.75C8.02614 8.25 8.25 8.02614 8.25 7.75V4.25C8.25 3.97386 8.02614 3.75 7.75 3.75H4.25C3.97386 3.75 3.75 3.97386 3.75 4.25V7.75C3.75 8.02614 3.97386 8.25 4.25 8.25ZM12.75 12.75L20.25 14.8929L16.7679 16.7679L14.8929 20.25L12.75 12.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
