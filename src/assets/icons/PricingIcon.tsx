import type { SVGProps } from "react";

export function PricingIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 7.75L6.25 10L8.5 12.25M12.7071 20.0429L22.049 10.701C22.4371 10.3129 22.4398 9.68443 22.0551 9.29295L16.901 4.04903C16.713 3.85774 16.4561 3.75 16.1879 3.75H7.81214C7.54393 3.75 7.28696 3.85774 7.09895 4.04903L1.94493 9.29295C1.56016 9.68443 1.56288 10.3129 1.95102 10.701L11.2929 20.0429C11.6834 20.4334 12.3166 20.4334 12.7071 20.0429Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
