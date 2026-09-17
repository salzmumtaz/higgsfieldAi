import type { SVGProps } from "react";

export function LanguageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.5"
        d="M21 12H3m18.25 0a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0ZM12 21c-2.21 0-4-4.03-4-9s1.79-9 4-9 4 4.03 4 9-1.79 9-4 9Z"
      />
    </svg>
  );
}
