export function ShimmerText({ text }: { text: string }) {
  return (
    <>
      <span
        className="shimmer-text [--shimmer-text-base:currentColor] [--shimmer-text-highlight:color-mix(in_srgb,var(--text-primary)_90%,transparent)]"
        data-text={text}
        aria-hidden="true"
      >
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
