import { Button } from "@/components/ui/Button";
import { t } from "@/lib/i18n";

type ImageGenerateButtonProps = {
  pricing?: {
    credits: number;
    originalCredits?: number;
  };
};

export function ImageGenerateButton({ pricing }: ImageGenerateButtonProps) {
  return (
    <Button
      type="submit"
      variant="primary"
      className="h-10 w-auto min-w-36 shrink-0 gap-2 rounded-xl px-2.5 text-sm font-semibold"
    >
      <span>{t("actions.generate")}</span>
      <GenerateSparkleIcon />
      {pricing ? <CreditPrice pricing={pricing} /> : null}
    </Button>
  );
}

function CreditPrice({
  pricing,
}: {
  pricing: { credits: number; originalCredits?: number };
}) {
  if (pricing.originalCredits == null) {
    return <span>{formatCredits(pricing.credits)}</span>;
  }

  return (
    <span className="inline-flex items-center gap-1">
      <span className="relative opacity-50">
        {formatCredits(pricing.originalCredits)}
        <span className="absolute -right-0.5 -left-0.5 top-1/2 rotate-[30deg] border-t-[0.09375rem] border-current" />
      </span>
      <span>{formatCredits(pricing.credits)}</span>
    </span>
  );
}

function formatCredits(value: number) {
  return String(value);
}

function GenerateSparkleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5"
      fill="currentColor"
    >
      <path d="M10 1.5c.2 2.8 1.7 5.2 4.2 6.5-2.5 1.3-4 3.7-4.2 6.5-.2-2.8-1.7-5.2-4.2-6.5 2.5-1.3 4-3.7 4.2-6.5Z" />
    </svg>
  );
}
