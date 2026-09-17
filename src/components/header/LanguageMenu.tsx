import { useRef, useState } from "react";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { cn } from "@/lib/cn";
import { locales, setLocale, t, useLocale, type LocaleId } from "@/lib/i18n";

const iconButtonClass =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-control bg-overlay-hover text-white shadow-[inset_0_1.5px_3px_#ffffff0d] transition-[filter,color] duration-150 ease-out hover:brightness-110 data-[state=open]:text-brand";

export function LanguageMenu({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number>(0);
  const current = locales.find((item) => item.id === locale) ?? locales[0];
  const isFooter = variant === "footer";

  function openMenu() {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function scheduleClose() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  }

  return (
    <div
      className={isFooter ? "relative" : "hidden md:block"}
      data-language-selector=""
      onPointerEnter={openMenu}
      onPointerLeave={scheduleClose}
    >
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger
          data-language-selector=""
          className={
            isFooter
              ? "flex items-center gap-2 whitespace-nowrap text-sm font-normal text-fg transition-colors hover:text-fg-secondary focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              : iconButtonClass
          }
          aria-label={t("header.language")}
        >
          {isFooter && current ? (
            <>
              <span className="relative block size-5 overflow-hidden rounded-full bg-surface-primary">
                <img
                  src={current.flagSrc}
                  alt={current.flagAlt}
                  className="size-full object-cover"
                />
              </span>
              <span className="flex items-center">
                <span>{current.label}</span>
                <ChevronIcon className="size-4 shrink-0" />
              </span>
            </>
          ) : (
            <LanguageIcon className="size-4" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onPointerEnter={openMenu}
          onPointerLeave={scheduleClose}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <DropdownMenuGroup className="flex flex-col gap-2">
            <DropdownMenuRadioGroup
              value={locale}
              onValueChange={(value) => setLocale(value as LocaleId)}
            >
              {locales.map((item) => (
                <DropdownMenuRadioItem key={item.id} value={item.id}>
                  <span className="relative block size-5 shrink-0 overflow-hidden rounded-full bg-surface-primary">
                    <img
                      src={item.flagSrc}
                      alt={item.flagAlt}
                      className="size-full object-cover"
                    />
                  </span>
                  <span className="min-w-0 flex-1">{item.label}</span>
                  <span
                    className={cn(
                      "ml-auto inline-flex size-6 shrink-0 items-center justify-center",
                      locale === item.id ? "text-fg" : "invisible",
                    )}
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8 10 3.646 3.646a.5.5 0 0 0 .708 0L16 10"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 13.875 9.2 18 19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
