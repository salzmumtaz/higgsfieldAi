export function UpgradeCloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M4.2 4.2 10 10l5.8-5.8M4.2 15.8 10 10l5.8 5.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function UpgradeCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="m7.5 13.125 3.375 3.375 5.625-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UpgradeCrossIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UpgradeSparkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M14.013 7a1 1 0 0 1 .934.641l1.344 3.494a1 1 0 0 0 .574.574l3.494 1.344a1 1 0 0 1 .641.934v.026a1 1 0 0 1-.641.934l-3.494 1.344a1 1 0 0 0-.574.574l-1.344 3.494a1 1 0 0 1-.934.641h-.026a1 1 0 0 1-.934-.641l-1.344-3.494a1 1 0 0 0-.574-.574l-3.494-1.344A1 1 0 0 1 7 14.013v-.026a1 1 0 0 1 .641-.934l3.494-1.344a1 1 0 0 0 .574-.574l1.344-3.494A1 1 0 0 1 13.987 7zM7 3c.241 0 .458.149.544.374l.697 1.81a1 1 0 0 0 .574.575l1.811.697a.583.583 0 0 1 0 1.088l-1.81.697a1 1 0 0 0-.575.574l-.697 1.811a.583.583 0 0 1-1.088 0l-.697-1.81a1 1 0 0 0-.574-.575l-1.811-.697a.583.583 0 0 1 0-1.088l1.81-.697a1 1 0 0 0 .575-.574l.697-1.811A.58.58 0 0 1 7 3"
      />
    </svg>
  );
}

export function UpgradeCreditIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M22 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        fill="currentColor"
      />
      <path
        d="M14.381 5.522A8.5 8.5 0 0 0 6.935 16.69A8 8 0 0 1 9 3a7.98 7.98 0 0 1 5.381 2.522Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function UpgradeGemIcon({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.562 3.523A1.75 1.75 0 0 1 7.81 3h8.376c.47 0 .92.189 1.248.523l5.154 5.244a1.75 1.75 0 0 1-.01 2.464l-9.342 9.342a1.75 1.75 0 0 1-2.475 0l-9.342-9.342a1.75 1.75 0 0 1-.01-2.464zM9.028 7.22a.75.75 0 0 1 0 1.06L7.308 10l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function UpgradeModelGlyph({ muted }: { muted?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        muted
          ? "size-4 shrink-0 rounded-full border border-white/10 bg-white/5"
          : "size-4 shrink-0 rounded-full border border-white/15 bg-white/12"
      }
    />
  );
}
