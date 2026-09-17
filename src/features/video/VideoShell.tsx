import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useRouter } from "@tanstack/react-router";
import { megaIcons } from "@/assets/icons/megaMenuIcons";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Textarea } from "@/components/ui/Textarea";
import {
  communityGenjutsuLibraryPresets,
  higgsfieldGenjutsuLibraryPresets,
  motionPresets,
  type GenjutsuLibraryPreset,
} from "@/features/video/video.presets";
import {
  VIDEO_MODELS,
} from "@/features/video/video.models";
import type {
  MotionControlWorkflow,
  MotionPreset,
  VideoControlConfig,
  VideoModelConfig,
  VideoWorkspaceTab,
} from "@/features/video/video.types";
import { cn } from "@/lib/cn";
import { useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";

export type VideoShellWorkflow =
  | { kind: "create"; model: VideoModelConfig }
  | { kind: "motion-control"; config: MotionControlWorkflow };

export function VideoShell({ workflow }: { workflow: VideoShellWorkflow }) {
  const user = useAppStore((state) => state.user);
  const openAuthModal = useAppStore((state) => state.openAuthModal);
  const openUpgradeModal = useAppStore((state) => state.openUpgradeModal);
  const workspace = workflow.kind === "create" ? workflow.model.workspace : workflow.config.workspace;
  const [workspaceTab, setWorkspaceTab] = useState(workspace.defaultTab);
  const [prompt, setPrompt] = useState("");
  const [selectedMotionPreset, setSelectedMotionPreset] =
    useState<MotionPreset | null>(null);
  const workflowKey =
    workflow.kind === "create" ? workflow.model.id : workflow.kind;
  const [activeWorkflowKey, setActiveWorkflowKey] = useState(workflowKey);

  if (activeWorkflowKey !== workflowKey) {
    setActiveWorkflowKey(workflowKey);
    setWorkspaceTab(workspace.defaultTab);
    setSelectedMotionPreset(null);
  }

  function generate() {
    if (!user) {
      openAuthModal("welcome");
      return;
    }
    openUpgradeModal({
      source: "video",
      productId:
        workflow.kind === "create" ? workflow.model.id : "kling-3-motion-control",
    });
  }

  return (
    <div className="min-h-[calc(100dvh-var(--layout-header-height))] bg-page px-3 py-3 md:px-4">
      <div className="mx-auto grid min-h-[calc(100dvh-var(--layout-header-height)-24px)] max-w-[120rem] grid-cols-1 gap-3 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <aside className="min-w-0 rounded-2xl border border-border-card bg-page-primary">
          <VideoModeTabs active={workflow.kind === "motion-control" ? "motion" : "create"} />
          <div className="p-4">
            {workflow.kind === "motion-control" ? (
              <MotionControlComposer
                config={workflow.config}
                selectedPreset={selectedMotionPreset}
                onGenerate={generate}
              />
            ) : (
              <VideoComposerRenderer
                key={workflow.model.id}
                model={workflow.model}
                prompt={prompt}
                onPromptChange={setPrompt}
                onGenerate={generate}
              />
            )}
          </div>
        </aside>

        <VideoWorkspace
          tabs={workspace.tabs}
          activeTab={workspaceTab}
          onTabChange={setWorkspaceTab}
          kind={
            workflow.kind === "motion-control"
              ? "motion-control"
              : workflow.model.workspace.libraryKind ?? "standard-create"
          }
          selectedMotionPreset={selectedMotionPreset}
          onSelectMotionPreset={setSelectedMotionPreset}
        />
      </div>
    </div>
  );
}

function VideoModeTabs({ active }: { active: "create" | "motion" }) {
  const t = useT();
  const router = useRouter();
  const tabs = [
    { id: "create", label: t("video.mode.create"), href: "/ai/video" },
    { id: "edit", label: t("video.mode.edit"), href: "/ai/video/edit" },
    { id: "motion", label: t("video.mode.motion"), href: "/ai/video/motion" },
  ] as const;

  return (
    <nav className="flex overflow-x-auto border-b border-border-subtle p-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => router.history.push(tab.href)}
          className={cn(
            "h-9 shrink-0 rounded-xl px-3 text-xs font-semibold transition-colors",
            active === tab.id
              ? "bg-white/10 text-white"
              : "text-fg-secondary hover:bg-white/5 hover:text-white",
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

function VideoComposerRenderer({
  model,
  prompt,
  onPromptChange,
  onGenerate,
}: {
  model: VideoModelConfig;
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}) {
  switch (model.composerKind) {
    case "genjutsu":
      return (
        <GenjutsuComposer
          model={model}
          prompt={prompt}
          onPromptChange={onPromptChange}
          onGenerate={onGenerate}
        />
      );
    case "standard-create":
      return (
        <StandardCreateComposer
          model={model}
          prompt={prompt}
          onPromptChange={onPromptChange}
          onGenerate={onGenerate}
        />
      );
  }
}

function StandardCreateComposer({
  model,
  prompt,
  onPromptChange,
  onGenerate,
}: {
  model: VideoModelConfig;
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}) {
  const t = useT();
  const composer = model.composer;

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onGenerate();
      }}
    >
      {composer?.presetLabel ? (
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-white/8 px-2 py-1 text-xs text-white">
            {composer.presetLabel}
          </span>
          <span className="text-sm font-semibold text-white">{model.label}</span>
        </div>
      ) : null}

      {composer?.inputStrategy ? (
        <StandardInputs strategy={composer.inputStrategy} />
      ) : null}

      <Field label={t("video.prompt")}>
        <Textarea
          rows={4}
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder={t("video.standardPrompt")}
          className="min-h-28 resize-none bg-surface-secondary"
        />
      </Field>

      <VideoControls controls={composer?.controls ?? []} />

      <Field label={t("video.model")}>
        <VideoModelPicker model={model} />
      </Field>

      <VideoGenerateButton pricing={composer?.pricing} />
    </form>
  );
}

function StandardInputs({
  strategy,
}: {
  strategy: NonNullable<VideoModelConfig["composer"]>["inputStrategy"];
}) {
  const t = useT();
  const [inputMode, setInputMode] = useState<"references" | "frames">(
    "references",
  );

  if (!strategy) return null;
  if (strategy.kind === "references-or-frames") {
    return (
      <div className="grid gap-3">
        <div className="flex rounded-xl bg-white/5 p-1">
          {(["references", "frames"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setInputMode(mode)}
              className={cn(
                "h-8 flex-1 rounded-lg text-xs font-semibold",
                inputMode === mode ? "bg-white/10 text-white" : "text-fg-secondary",
              )}
            >
              {t(`video.input.${mode}`)}
            </button>
          ))}
        </div>
        <UploadSlot
          label={
            inputMode === "references"
              ? t("video.input.addReferences")
              : t("video.input.addFrames")
          }
          guidance={t("video.input.imageOrVideo")}
          accept={strategy.accept}
          multiple={strategy.multiple}
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <UploadSlot
        label={t("video.input.startFrame")}
        guidance={t("video.optional")}
        accept={strategy.accept}
      />
      <UploadSlot
        label={t("video.input.endFrame")}
        guidance={t("video.optional")}
        accept={strategy.accept}
      />
    </div>
  );
}

function GenjutsuComposer({
  model,
  prompt,
  onPromptChange,
  onGenerate,
}: {
  model: VideoModelConfig;
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}) {
  const t = useT();
  const [mode, setMode] = useState<"motion" | "objects">("motion");
  const [freeGens, setFreeGens] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onGenerate();
      }}
    >
      <div>
        <h1 className="font-grotesk text-xl font-bold text-white">
          {model.label}
        </h1>
        <p className="text-sm text-fg-secondary">{t("video.genjutsu.tagline")}</p>
      </div>

      <Segmented
        value={mode}
        options={[
          { value: "motion", label: t("video.genjutsu.motionTransfer") },
          { value: "objects", label: t("video.genjutsu.objectsSwap") },
        ]}
        onChange={setMode}
      />

      <UploadSlot
        label={t("video.genjutsu.addVideo")}
        guidance={t("video.genjutsu.videoGuidance")}
        accept={["video/mp4", "video/quicktime"]}
      />
      <ActionWell label={t("video.genjutsu.selectPresets")} />
      <UploadSlot
        label={t("video.genjutsu.addImages")}
        guidance={t("video.genjutsu.imageGuidance")}
        accept={["image/jpeg", "image/png", "image/webp"]}
        multiple
      />

      <Field label={t("video.prompt")}>
        <Textarea
          rows={4}
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          placeholder={t("video.genjutsu.prompt")}
          className="min-h-28 resize-none bg-surface-secondary"
        />
      </Field>

      <div className="grid grid-cols-2 gap-2">
        <ValueWell label={t("video.model")} value={model.label} />
        <ValueWell label={t("video.quality")} value="720p" />
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={freeGens}
        onClick={() => setFreeGens((value) => !value)}
        className="flex h-10 items-center justify-between rounded-xl bg-white/5 px-3 text-xs text-white"
      >
        {t("video.genjutsu.freeGens")}
        <ToggleDot on={freeGens} />
      </button>

      <VideoGenerateButton />
    </form>
  );
}

function MotionControlComposer({
  config,
  selectedPreset,
  onGenerate,
}: {
  config: MotionControlWorkflow;
  selectedPreset: MotionPreset | null;
  onGenerate: () => void;
}) {
  const t = useT();
  const [sceneSource, setSceneSource] = useState(config.defaultSceneSource);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        onGenerate();
      }}
    >
      <div>
        <h1 className="font-grotesk text-xl font-bold text-white uppercase">
          {t("video.motion.title")}
        </h1>
        <p className="text-sm text-fg-secondary">{config.description}</p>
      </div>

      {selectedPreset ? (
        <div className="overflow-hidden rounded-xl border border-brand/40">
          <video
            src={selectedPreset.videoSrc}
            poster={selectedPreset.posterSrc}
            muted
            loop
            playsInline
            className="h-32 w-full object-cover"
          />
          <p className="px-3 py-2 text-xs text-brand">
            {t("video.motion.presetSelected")}
          </p>
        </div>
      ) : (
        <UploadSlot
          label={t("video.motion.addMotion")}
          guidance={t("video.motion.videoGuidance")}
          accept={config.videoAccept}
        />
      )}

      <UploadSlot
        label={t("video.motion.addCharacter")}
        guidance={t("video.motion.imageGuidance")}
        accept={config.imageAccept}
      />

      <div className="grid grid-cols-2 gap-2">
        <ValueWell label={t("video.model")} value={config.modelLabel} />
        <ValueWell label={t("video.quality")} value={config.quality} />
      </div>

      <Field label={t("video.motion.sceneMode")}>
        <Segmented
          value={sceneSource}
          options={[
            { value: "video", label: t("video.motion.video") },
            { value: "image", label: t("video.motion.image") },
          ]}
          onChange={setSceneSource}
        />
        <p className="mt-2 text-[11px] text-fg-secondary">
          {t("video.motion.sceneGuidance")}
        </p>
      </Field>

      <ActionWell label={t("video.motion.advanced")} />
      <VideoGenerateButton pricing={config.pricing} />
    </form>
  );
}

function VideoControls({ controls }: { controls: VideoControlConfig[] }) {
  const t = useT();
  const [values, setValues] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      controls
        .filter(
          (
            control,
          ): control is Extract<
            VideoControlConfig,
            { type: "toggle" | "unknown-visible-control" }
          > =>
            control.type === "toggle" ||
            control.type === "unknown-visible-control",
        )
        .map((control) => [control.id, control.defaultValue]),
    ),
  );

  return (
    <div className="flex flex-wrap gap-2">
      {controls.map((control) => {
        if (
          control.type === "duration" ||
          control.type === "aspect-ratio" ||
          control.type === "resolution"
        ) {
          return (
            <span
              key={control.id}
              className="inline-flex h-8 items-center rounded-lg bg-white/5 px-2.5 text-xs text-white"
            >
              {control.defaultValue}
            </span>
          );
        }
        if (control.type === "action") {
          return (
            <button
              key={control.id}
              type="button"
              className="inline-flex h-8 items-center rounded-lg bg-white/5 px-2.5 text-xs text-white"
            >
              {control.label}
            </button>
          );
        }
        if (
          control.type !== "toggle" &&
          control.type !== "unknown-visible-control"
        ) {
          return null;
        }
        const on = values[control.id];
        return (
          <button
            key={control.id}
            type="button"
            aria-label={control.label}
            onClick={() =>
              setValues((current) => ({
                ...current,
                [control.id]: !current[control.id],
              }))
            }
            className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-white/5 px-2.5 text-xs text-white"
          >
            {control.icon === "speaker" ? <SpeakerIcon /> : null}
            {control.label ? `${control.label} ` : null}
            {on ? t("video.on") : t("video.off")}
          </button>
        );
      })}
    </div>
  );
}

function VideoModelPicker({ model }: { model: VideoModelConfig }) {
  const router = useRouter();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex h-11 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-left text-sm text-white"
        >
          <ModelIcon model={model} />
          <span className="min-w-0 flex-1 truncate">{model.label}</span>
          <ChevronIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-[min(60vh,32rem)] w-80 overflow-y-auto p-2"
      >
        {VIDEO_MODELS.map((entry) => (
          <DropdownMenuItem
            key={entry.id}
            onSelect={() => router.history.push(entry.href)}
            className="gap-2 rounded-xl p-2"
          >
            <ModelIcon model={entry} />
            <span className="grid min-w-0">
              <span className="truncate text-xs text-white">{entry.label}</span>
              <span className="line-clamp-2 text-[10px] text-fg-secondary">
                {entry.description}
              </span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ModelIcon({ model }: { model: VideoModelConfig }) {
  if (!model.icon || model.icon === "ps" || model.icon === "pr" || model.icon === "ae") {
    return <span className="size-5 shrink-0 rounded-md bg-white/10" />;
  }
  const Icon = megaIcons[model.icon];
  return Icon ? <Icon className="size-5 shrink-0" /> : null;
}

function VideoGenerateButton({
  pricing,
}: {
  pricing?: { credits: number; originalCredits?: number };
}) {
  const t = useT();
  return (
    <Button type="submit" className="mt-1 h-11 w-full rounded-xl text-sm">
      {t("actions.generate")}
      <SparkleIcon />
      {pricing ? (
        <span className="inline-flex items-center gap-1">
          {pricing.originalCredits == null ? null : (
            <span className="relative opacity-50">
              {pricing.originalCredits}
              <span className="absolute inset-x-0 top-1/2 rotate-[25deg] border-t border-current" />
            </span>
          )}
          {pricing.credits}
        </span>
      ) : null}
    </Button>
  );
}

function VideoWorkspace({
  tabs,
  activeTab,
  onTabChange,
  kind,
  selectedMotionPreset,
  onSelectMotionPreset,
}: {
  tabs: VideoWorkspaceTab[];
  activeTab: VideoWorkspaceTab;
  onTabChange: (tab: VideoWorkspaceTab) => void;
  kind: "standard-create" | "genjutsu" | "motion-control";
  selectedMotionPreset: MotionPreset | null;
  onSelectMotionPreset: (preset: MotionPreset) => void;
}) {
  const t = useT();
  const [layout, setLayout] = useState<"list" | "grid">("grid");

  return (
    <section className="min-h-[32rem] min-w-0 overflow-hidden rounded-2xl border border-border-card bg-page-primary">
      <header className="flex min-w-0 items-center justify-between gap-2 border-b border-border-subtle p-2">
        <div className="flex min-w-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={cn(
                "h-9 shrink-0 rounded-xl px-3 text-xs font-semibold",
                activeTab === tab
                  ? "bg-white/10 text-white"
                  : "text-fg-secondary hover:text-white",
              )}
            >
              {t(`video.workspace.${tab}`)}
            </button>
          ))}
        </div>
        <div className="hidden rounded-lg bg-white/5 p-1 sm:flex">
          {(["list", "grid"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setLayout(value)}
              className={cn(
                "rounded-md px-2 py-1 text-[10px]",
                layout === value ? "bg-white/10 text-white" : "text-fg-secondary",
              )}
            >
              {t(`video.workspace.${value}`)}
            </button>
          ))}
        </div>
      </header>

      <div className="p-4 md:p-6">
        {activeTab === "history" ? <HistoryView /> : null}
        {activeTab === "motion-library" ? (
          <GenjutsuMotionLibrary layout={layout} />
        ) : null}
        {activeTab === "how-it-works" && kind === "standard-create" ? (
          <StandardHowItWorks />
        ) : null}
        {activeTab === "how-it-works" && kind === "genjutsu" ? (
          <GenjutsuHowItWorks />
        ) : null}
        {activeTab === "how-it-works" && kind === "motion-control" ? (
          <MotionPresetLibrary
            presets={motionPresets}
            selected={selectedMotionPreset}
            onSelect={onSelectMotionPreset}
          />
        ) : null}
      </div>
    </section>
  );
}

function StandardHowItWorks() {
  const t = useT();
  const steps = [
    {
      title: t("video.guide.addImage"),
      body: t("video.guide.addImageBody"),
      kind: "image" as const,
      src: "https://static.higgsfield.ai/feed/step-1-v2.webp",
    },
    {
      title: t("video.guide.choosePreset"),
      body: t("video.guide.choosePresetBody"),
      kind: "video" as const,
      src: "https://static.higgsfield.ai/feed/step-2.mp4",
    },
    {
      title: t("video.guide.getVideo"),
      body: t("video.guide.getVideoBody"),
      kind: "video" as const,
      src: "https://static.higgsfield.ai/feed/step-3.mp4",
    },
  ];

  return (
    <div className="grid gap-5">
      <div>
        <h2 className="font-grotesk text-2xl font-bold text-white">
          {t("video.guide.title")}
        </h2>
        <p className="mt-1 text-sm text-fg-secondary">
          {t("video.guide.description")}
        </p>
      </div>
      <div className="grid gap-3 xl:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="overflow-hidden rounded-2xl border border-white/5 bg-surface-secondary"
          >
            {step.kind === "image" ? (
              <img src={step.src} alt="" className="aspect-video w-full object-cover" />
            ) : (
              <video
                src={step.src}
                muted
                loop
                playsInline
                className="aspect-video w-full object-cover"
              />
            )}
            <div className="p-4">
              <span className="text-xs text-brand">0{index + 1}</span>
              <h3 className="mt-1 font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-xs text-fg-secondary">{step.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function GenjutsuMotionLibrary({ layout }: { layout: "list" | "grid" }) {
  const t = useT();
  const [source, setSource] = useState<"higgsfield" | "community">("community");
  const presets =
    source === "community"
      ? communityGenjutsuLibraryPresets
      : higgsfieldGenjutsuLibraryPresets;

  return (
    <div className="grid gap-4">
      <div>
        <h2 className="font-grotesk text-2xl font-bold text-white">
          {t("video.genjutsu.libraryTitle")}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-fg-secondary">
          {t("video.genjutsu.libraryBody")}
        </p>
      </div>
      <Segmented
        value={source}
        options={[
          { value: "higgsfield", label: "Higgsfield" },
          { value: "community", label: t("nav.community") },
        ]}
        onChange={setSource}
      />
      <div
        className={cn(
          "grid gap-2",
          layout === "grid"
            ? "sm:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1",
        )}
      >
        {presets.map((preset) => (
          <GenjutsuLibraryCard key={preset.id} preset={preset} />
        ))}
      </div>
    </div>
  );
}

function GenjutsuLibraryCard({ preset }: { preset: GenjutsuLibraryPreset }) {
  const t = useT();
  return (
    <article className="group relative isolate min-w-0 overflow-hidden rounded-xl bg-surface-secondary">
      <video
        src={preset.videoSrc}
        poster={preset.posterSrc}
        muted
        loop
        playsInline
        preload="none"
        className="aspect-video w-full object-cover"
      />
      <span className="absolute top-2 left-2 rounded-md bg-black/50 px-2 py-1 text-[10px] text-white">
        {preset.modeLabel}
      </span>
      <button
        type="button"
        className="absolute inset-0 z-10"
        aria-label={t("actions.openPreset")}
      />
      <div className="absolute inset-x-2 bottom-2 z-20 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="rounded-lg bg-black/50 px-2 py-1 text-xs text-white">
          {preset.likeCount ?? ""}
        </span>
        <button
          type="button"
          className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-black"
        >
          {t("actions.recreate")}
        </button>
      </div>
    </article>
  );
}

function GenjutsuHowItWorks() {
  const t = useT();
  return (
    <div className="grid min-h-80 place-items-center text-center">
      <div className="max-w-lg">
        <h2 className="font-grotesk text-2xl font-bold text-white">
          {t("video.genjutsu.libraryTitle")}
        </h2>
        <p className="mt-2 text-sm text-fg-secondary">
          {t("video.genjutsu.libraryBody")}
        </p>
      </div>
    </div>
  );
}

function MotionPresetLibrary({
  presets,
  selected,
  onSelect,
}: {
  presets: MotionPreset[];
  selected: MotionPreset | null;
  onSelect: (preset: MotionPreset) => void;
}) {
  const t = useT();
  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-2xl bg-surface-secondary p-6">
        <h2 className="font-grotesk max-w-md text-3xl font-bold text-white">
          {t("video.motion.libraryTitle")}
        </h2>
        <p className="mt-2 max-w-lg text-sm text-fg-secondary">
          {t("video.motion.libraryBody")}
        </p>
      </div>
      <p className="text-sm font-semibold text-white">
        {t("video.motion.startFromLibrary")}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {presets.map((preset, index) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelect(preset)}
            aria-pressed={selected?.id === preset.id}
            className={cn(
              "relative overflow-hidden rounded-xl border",
              selected?.id === preset.id
                ? "border-brand"
                : "border-transparent hover:border-white/20",
            )}
          >
            <video
              src={preset.videoSrc}
              poster={preset.posterSrc}
              muted
              loop
              playsInline
              preload="none"
              aria-label={String(index + 1)}
              style={{ aspectRatio: preset.aspectRatio }}
              className="size-full object-cover"
            />
            <span className="absolute right-2 bottom-2 grid size-8 place-items-center rounded-full bg-black/40 text-white">
              <SpeakerMutedIcon />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function HistoryView() {
  const t = useT();
  return (
    <div className="grid min-h-96 place-items-center text-center">
      <div>
        <HistoryIcon />
        <p className="mt-3 text-sm font-semibold text-white">
          {t("video.history.empty")}
        </p>
        <p className="mt-1 text-xs text-fg-secondary">
          {t("video.history.body")}
        </p>
      </div>
    </div>
  );
}

function UploadSlot({
  label,
  guidance,
  accept,
  multiple,
}: {
  label: string;
  guidance?: string;
  accept: readonly string[];
  multiple?: boolean;
}) {
  const [previews, setPreviews] = useState<
    { id: string; url: string; type: string }[]
  >([]);
  const previewsRef = useRef(previews);

  useEffect(() => {
    previewsRef.current = previews;
  }, [previews]);
  useEffect(
    () => () => {
      previewsRef.current.forEach((preview) => URL.revokeObjectURL(preview.url));
    },
    [],
  );

  function onFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length) return;
    setPreviews((current) => {
      if (!multiple) {
        current.forEach((preview) => URL.revokeObjectURL(preview.url));
      }
      const selected = multiple ? files : files.slice(0, 1);
      const added = selected.map((file) => ({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        url: URL.createObjectURL(file),
        type: file.type,
      }));
      return multiple ? [...current, ...added] : added;
    });
  }

  return (
    <label className="grid min-h-24 cursor-pointer place-items-center overflow-hidden rounded-xl border border-dashed border-white/15 bg-white/5 p-3 text-center hover:border-white/30">
      {previews.length ? (
        <div className="flex max-w-full gap-2 overflow-x-auto">
          {previews.map((preview) =>
            preview.type.startsWith("video/") ? (
              <video
                key={preview.id}
                src={preview.url}
                muted
                className="size-16 rounded-lg object-cover"
              />
            ) : (
              <img
                key={preview.id}
                src={preview.url}
                alt=""
                className="size-16 rounded-lg object-cover"
              />
            ),
          )}
        </div>
      ) : (
        <span>
          <span className="block text-xs font-semibold text-white">{label}</span>
          {guidance ? (
            <span className="mt-1 block text-[10px] text-fg-secondary">
              {guidance}
            </span>
          ) : null}
        </span>
      )}
      <input
        type="file"
        className="sr-only"
        accept={accept.join(",")}
        multiple={multiple}
        onChange={onFiles}
      />
    </label>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-medium text-fg-secondary">{label}</span>
      {children}
    </label>
  );
}

function ValueWell({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-xl bg-white/5 p-3">
      <span className="block text-[10px] text-fg-secondary">{label}</span>
      <span className="mt-1 block truncate text-xs font-semibold text-white">
        {value}
      </span>
    </div>
  );
}

function ActionWell({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex min-h-11 items-center justify-between rounded-xl bg-white/5 px-3 text-left text-xs font-semibold text-white"
    >
      {label}
      <ChevronIcon />
    </button>
  );
}

function Segmented<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex rounded-xl bg-white/5 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "h-8 flex-1 rounded-lg px-2 text-xs font-semibold",
            value === option.value
              ? "bg-white/10 text-white"
              : "text-fg-secondary",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function ToggleDot({ on }: { on: boolean }) {
  return (
    <span
      className={cn(
        "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
        on ? "bg-brand" : "bg-white/15",
      )}
    >
      <span
        className={cn(
          "size-4 rounded-full bg-white transition-transform",
          on && "translate-x-4",
        )}
      />
    </span>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="m5 6 3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 6h2l3-2.5v9L5 10H3V6Zm7.5-.5a4 4 0 0 1 0 5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeakerMutedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 6h2l3-2v8l-3-2H4V6Zm7-1 3 6m0-6-3 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-5" fill="currentColor" aria-hidden>
      <path d="M10 1.5c.2 2.8 1.7 5.2 4.2 6.5-2.5 1.3-4 3.7-4.2 6.5-.2-2.8-1.7-5.2-4.2-6.5 2.5-1.3 4-3.7 4.2-6.5Z" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      className="mx-auto text-white/30"
      aria-hidden
    >
      <path
        d="M4 12a8 8 0 1 0 2.34-5.66L4 8.67M4 4v4.67h4.67M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
