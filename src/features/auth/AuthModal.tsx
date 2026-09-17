import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";

type EntryMode = "welcome" | "signin" | "signup";

function entryFromIntent(intent: "login" | "signup" | "welcome"): EntryMode {
  if (intent === "login") return "signin";
  if (intent === "signup") return "signup";
  return "welcome";
}

export function AuthModal() {
  const t = useT();
  const open = useAppStore((state) => state.authOpen);
  const intent = useAppStore((state) => state.authIntent);
  const closeAuthModal = useAppStore((state) => state.closeAuthModal);
  const signIn = useAppStore((state) => state.signIn);
  const [step, setStep] = useState<"entry" | "email">("entry");
  const [email, setEmail] = useState("");

  const entry = entryFromIntent(intent);
  const heading =
    step === "email"
      ? t("auth.continueEmail")
      : entry === "signin"
        ? t("nav.login")
        : entry === "signup"
          ? t("nav.signUp")
          : t("auth.welcome");

  function resetLocal() {
    setStep("entry");
    setEmail("");
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (next) return;
        resetLocal();
        closeAuthModal();
      }}
    >
      <DialogContent className="max-w-[var(--layout-modal-sm)] p-0">
        <DialogHeader className="px-6 pt-8 pr-12 pb-2">
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{t("auth.signUpFree")}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 px-6 pt-4 pb-8">
          {step === "email" ? (
            <>
              <label className="sr-only" htmlFor="auth-email">
                {t("auth.continueEmail")}
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-[var(--layout-control-md)] rounded-button border border-border-default bg-surface-secondary px-4 text-fg"
              />
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  resetLocal();
                  signIn();
                }}
                disabled={email.trim().length === 0}
              >
                {t("auth.continueEmail")}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setStep("entry")}>
                {t("auth.welcome")}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  resetLocal();
                  signIn();
                }}
              >
                {t("auth.continueGoogle")}
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep("email")}
              >
                {t("auth.continueEmail")}
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
