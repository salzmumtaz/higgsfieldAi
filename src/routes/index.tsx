import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { RecreateOverlay } from "@/components/ui/RecreateOverlay";
import { Surface } from "@/components/ui/Surface";
import { Textarea } from "@/components/ui/Textarea";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: FoundationPage,
});

const swatches = [
  ["page", "var(--bg-page)"],
  ["surface-primary", "var(--bg-surface-primary)"],
  ["surface-secondary", "var(--bg-surface-secondary)"],
  ["surface-tertiary", "var(--bg-surface-tertiary)"],
  ["brand", "var(--brand)"],
  ["danger", "var(--danger)"],
  ["success", "var(--success)"],
  ["overlay", "var(--overlay)"],
] as const;

function FoundationPage() {
  const [chipOn, setChipOn] = useState(true);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="container-app flex flex-col gap-10 py-8">
      <div>
        <p className="type-accent">{t("nav.explore")}</p>
        <h1 className="type-page-title mt-2">Foundation</h1>
        <p className="type-body-secondary mt-2 max-w-2xl">
          Shared visual system only. This is not Home.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="type-section-title">Color</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {swatches.map(([name, color]) => (
            <div key={name} className="flex flex-col gap-2">
              <div
                className="h-16 rounded-button border border-border-default"
                style={{ background: color }}
              />
              <span className="type-caption">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="type-section-title">Typography</h2>
        <p className="type-accent">Accent heading</p>
        <p className="type-page-title">Page title / Inter</p>
        <p className="type-section-title">Section title</p>
        <p className="type-body">Body copy uses Inter at 16px.</p>
        <p className="type-body-secondary">Secondary body</p>
        <p className="type-label">{t("actions.recreate")}</p>
        <p className="type-caption">{t("library.empty")}</p>
        <p className="type-button">{t("actions.generate")}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="type-section-title">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">{t("nav.signUp")}</Button>
          <Button
            variant="ghost"
            size="sm"
            className="bg-brand-soft text-brand shadow-[var(--shadow-soft-inset)]"
          >
            {t("nav.login")}
          </Button>
          <Button>{t("actions.generate")}</Button>
          <Button variant="secondary">{t("actions.upgrade")}</Button>
          <Button variant="ghost">{t("actions.like")}</Button>
          <Button variant="icon" size="sm" aria-label="Icon button">
            +
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="type-section-title">Controls</h2>
        <Surface className="flex max-w-xl flex-col gap-3">
          <label className="type-label" htmlFor="foundation-input">
            {t("composer.describeScene")}
          </label>
          <Input
            id="foundation-input"
            placeholder={t("composer.describeSceneYouImagine")}
          />
          <Textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={t("composer.describeSceneYouImagine")}
          />
          <div className="flex flex-wrap gap-2">
            <Chip pressed={chipOn} onClick={() => setChipOn((value) => !value)}>
              Auto
            </Chip>
            <Chip>{t("badges.new")}</Chip>
            <Chip>{t("badges.free")}</Chip>
          </div>
        </Surface>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="type-section-title">Recreate overlay</h2>
        <div className="relative h-40 max-w-sm overflow-hidden rounded-card bg-surface-tertiary">
          <div className="absolute inset-0 bg-[var(--overlay-hover)]" />
          <RecreateOverlay className="absolute right-3 bottom-3" />
        </div>
      </section>

      <section className="flex flex-col gap-3 pb-8">
        <h2 className="type-section-title">Dialog</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">{t("auth.welcome")}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t("auth.welcome")}</DialogTitle>
                <DialogDescription className="mt-1">
                  {t("auth.signUpFree")}
                </DialogDescription>
              </DialogHeader>
              <DialogBody>
                <p className="type-caption">
                  Default DialogContent width. Auth and Upgrade are not built
                  yet.
                </p>
              </DialogBody>
              <DialogFooter>
                <Button variant="secondary" size="sm">
                  {t("nav.login")}
                </Button>
                <Button size="sm">{t("nav.signUp")}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">{t("actions.upgrade")}</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[var(--layout-modal-lg)] max-h-[85dvh]">
              <DialogHeader>
                <DialogTitle>{t("actions.upgrade")}</DialogTitle>
                <DialogDescription className="mt-1">
                  Same Dialog primitive with a wider, scrollable className
                  override.
                </DialogDescription>
              </DialogHeader>
              <DialogBody>
                {Array.from({ length: 12 }, (_, index) => (
                  <p key={index} className="type-caption py-2">
                    Scrollable body row {index + 1}
                  </p>
                ))}
              </DialogBody>
              <DialogFooter>
                <Button size="sm">{t("actions.upgrade")}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}
