import type { SVGProps } from "react";

export function EnterpriseIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 2.75C13 8 16 11 21.25 12 16 13 13 16 12 21.25 11 16 8 13 2.75 12 8 11 11 8 12 2.75Z"
      />
    </svg>
  );
}
