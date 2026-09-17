import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/Dialog";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";
import { AuthShowcase } from "./AuthShowcase";
import {
  AppleMark,
  AuthCloseIcon,
  AuthLogo,
  CloudSsoIcon,
  EmailMark,
  GiftIcon,
  GoogleMark,
  MicrosoftMark,
} from "./auth-icons";

const providerClassName =
  "flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3.5 text-center text-sm font-semibold text-fg transition-colors hover:border-white md:py-5";

export function AuthModal() {
  const t = useT();
  const open = useAppStore((state) => state.authOpen);
  const closeAuthModal = useAppStore((state) => state.closeAuthModal);
  const signIn = useAppStore((state) => state.signIn);
  const [step, setStep] = useState<"entry" | "email">("entry");
  const [email, setEmail] = useState("");

  function resetAndClose() {
    setStep("entry");
    setEmail("");
    closeAuthModal();
  }

  function mockSignIn() {
    setStep("entry");
    setEmail("");
    signIn();
  }

  const heading = step === "email" ? t("auth.continueEmail") : t("auth.welcome");
  const [ssoBefore = "", ssoAfter = ""] = t("auth.ssoAvailable").split("{plans}");

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (next) return;
        resetAndClose();
      }}
    >
      <DialogContent
        showClose={false}
        className={cn(
          "top-0 right-0 bottom-0 left-0 m-auto translate-none outline-none",
          "h-155 max-h-[calc(100dvh-24px)] w-[calc(100%-24px)] max-w-88",
          "flex min-h-0 flex-row overflow-hidden rounded-[20px] border-border-card bg-page-primary p-0 !shadow-[inset_0px_0px_32px_0px_rgba(0,0,0,0.2)]",
          "md:h-175 md:max-h-[calc(100dvh-48px)] md:w-140 md:max-w-[calc(100vw-48px)] md:rounded-3xl",
          "xl:h-[min(720px,calc(100dvh-64px))] xl:max-h-[calc(100dvh-64px)] xl:w-280 xl:max-w-[calc(100vw-64px)]",
        )}
      >
        <DialogClose
          className="absolute top-3 right-3 z-10 flex size-7 cursor-pointer items-center justify-center rounded-2xl border border-white/4 bg-white/5 text-white transition-colors hover:bg-white/10 md:top-5 md:right-5 md:size-8"
          aria-label={t("auth.close")}
        >
          <AuthCloseIcon className="size-4" />
        </DialogClose>

        <AuthShowcase />

        <div className="hide-scrollbar flex min-h-0 min-w-0 flex-1 flex-col items-center overflow-y-auto px-5 py-6 md:px-22 md:py-8 xl:py-8">
          <div className="w-full">
            <div className="mb-6 flex w-full flex-col gap-4 text-center md:mb-10">
              <span className="flex w-full justify-center">
                <AuthLogo />
              </span>
              <div className="flex flex-col gap-3">
                <DialogTitle asChild>
                  <h1 className="text-xl font-semibold text-balance text-white">
                    {heading}
                  </h1>
                </DialogTitle>
                <DialogDescription className="text-sm font-normal text-fg-secondary">
                  {t("auth.signUpFree")}
                </DialogDescription>
              </div>
            </div>

            {step === "email" ? (
              <form
                className="flex w-full flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.trim().length === 0) return;
                  mockSignIn();
                }}
              >
                <label className="sr-only" htmlFor="auth-email">
                  {t("auth.continueEmail")}
                </label>
                <input
                  id="auth-email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 rounded-xl border border-border-subtle bg-transparent px-4 text-sm text-fg md:h-16"
                />
                <button
                  type="submit"
                  className={cn(providerClassName, "disabled:opacity-50")}
                  disabled={email.trim().length === 0}
                >
                  {t("auth.continueEmail")}
                </button>
                <button
                  type="button"
                  className="text-sm font-medium text-fg-secondary hover:text-fg"
                  onClick={() => setStep("entry")}
                >
                  {t("auth.back")}
                </button>
              </form>
            ) : (
              <div className="flex w-full flex-col gap-3">
                <div className="@container flex items-center justify-center gap-2.5 rounded-xl bg-brand-soft-10 p-3 text-sm font-medium text-brand">
                  <GiftIcon className="hidden size-5 shrink-0 md:block" />
                  <span className="text-[clamp(0.625rem,4cqw,0.75rem)] whitespace-nowrap md:text-sm md:whitespace-normal">
                    {t("auth.businessCredits")}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <button type="button" className={providerClassName} onClick={mockSignIn}>
                    <GoogleMark />
                    {t("auth.continueGoogle")}
                  </button>
                  <button type="button" className={providerClassName} onClick={mockSignIn}>
                    <AppleMark />
                    {t("auth.continueApple")}
                  </button>
                  <button type="button" className={providerClassName} onClick={mockSignIn}>
                    <MicrosoftMark />
                    {t("auth.continueMicrosoft")}
                  </button>
                </div>

                <div className="flex w-full items-center justify-center">
                  <span className="text-center text-xs text-fg-disabled">{t("auth.or")}</span>
                </div>

                <button type="button" className={providerClassName} onClick={() => setStep("email")}>
                  <EmailMark />
                  {t("auth.continueEmail")}
                </button>

                <div className="mt-3 flex items-center justify-center gap-1.5 border-t border-border-subtle pt-4">
                  <CloudSsoIcon className="size-4.5 text-fg-secondary [&_path]:stroke-2" />
                  <p className="text-center text-sm font-medium text-fg-secondary">
                    {ssoBefore}
                    <button type="button" className="text-fg-secondary underline">
                      {t("auth.ssoPlans")}
                    </button>
                    {ssoAfter}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
