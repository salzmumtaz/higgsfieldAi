import type { MegaIconId } from "@/components/header/header.data";
import { megaIcons } from "@/assets/icons/megaMenuIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Textarea } from "@/components/ui/Textarea";
import { ImageGenerateButton } from "@/features/image/GenerateButton";
import { IMAGE_EMPTY_STATE_MEDIA, IMAGE_MODELS } from "@/features/image/models";
import {
  SHARED_IMAGE_QUANTITY,
  type ImageControlConfig,
  type ImageModelConfig,
} from "@/features/image/types";
import { cn } from "@/lib/cn";
import { t, useT } from "@/lib/i18n";
import { useAppStore } from "@/store/app-store";
import { useRouter } from "@tanstack/react-router";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type RefObject,
} from "react";

type ControlValue = string | boolean;

type PreviewFile = {
  id: string;
  url: string;
  file: File;
};

export function ImageShell({ model }: { model: ImageModelConfig }) {
  useT();
  const openAuthModal = useAppStore((state) => state.openAuthModal);
  const openUpgradeModal = useAppStore((state) => state.openUpgradeModal);
  const user = useAppStore((state) => state.user);
  const composer = model.composer;
  const quantityConfig = composer?.quantity ?? SHARED_IMAGE_QUANTITY;

  const [prompt, setPrompt] = useState("");
  const [quantity, setQuantity] = useState(quantityConfig.default);
  const [controlValues, setControlValues] = useState<
    Record<string, ControlValue>
  >(() => controlDefaults(composer?.controls));
  const [previews, setPreviews] = useState<PreviewFile[]>([]);
  const [activeModelId, setActiveModelId] = useState(model.id);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewsRef = useRef(previews);

  if (activeModelId !== model.id) {
    setActiveModelId(model.id);
    setControlValues(controlDefaults(composer?.controls));
    setQuantity(quantityConfig.default);
    setPreviews((current) => normalizePreviews(current, composer?.references));
  }

  useEffect(() => {
    previewsRef.current = previews;
  }, [previews]);

  useEffect(() => {
    return () => {
      previewsRef.current.forEach((item) => URL.revokeObjectURL(item.url));
    };
  }, []);

  function onGenerate() {
    if (!user) {
      openAuthModal("welcome");
      return;
    }
    openUpgradeModal({
      source: "image",
      productId: model.id,
      titleKey: model.upsell?.titleKey,
      descriptionKey: model.upsell?.descriptionKey,
    });
  }

  function onFilesChosen(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!files.length || !composer?.references?.enabled) return;

    const multiple = composer.references.multiple;
    setPreviews((current) => {
      const selected = multiple ? files : files.slice(0, 1);
      const added = selected.map((file) => ({
        id: `${file.name}-${file.lastModified}-${file.size}-${file.type}`,
        file,
        url: URL.createObjectURL(file),
      }));
      if (!multiple) {
        current.forEach((item) => URL.revokeObjectURL(item.url));
        return added;
      }
      return [...current, ...added];
    });
  }

  return (
    <div className="relative flex min-h-[calc(100dvh-var(--layout-header-height)-52px)] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 pt-8 pb-[244px]">
        <ImageEmptyState modelLabel={model.label} />
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-[calc(var(--layout-mobile-nav)+0.75rem)] z-40 flex justify-center px-3 md:bottom-4">
        <form
          id="image-form"
          className="pointer-events-auto w-full max-w-[70rem] rounded-[1.5rem] border border-border-card bg-[rgba(15,17,19,0.96)] p-5.5 shadow-[inset_0_0_32px_rgba(0,0,0,0.2)] backdrop-blur-[10.45px]"
          onSubmit={(event) => {
            event.preventDefault();
            onGenerate();
          }}
        >
          <fieldset
            data-model={model.engineId ?? model.id}
            className="flex min-w-0 gap-3"
          >
            <div className="min-w-0 flex-1 space-y-3">
              <div className="flex gap-3">
                {composer?.references?.enabled ? (
                  <ImageReferenceUploader
                    multiple={composer.references.multiple}
                    accept={composer.references.accept}
                    previews={previews}
                    inputRef={fileInputRef}
                    onChange={onFilesChosen}
                    onRemove={(id) => {
                      setPreviews((current) => {
                        const next = current.filter((item) => item.id !== id);
                        current
                          .filter((item) => item.id === id)
                          .forEach((item) => URL.revokeObjectURL(item.url));
                        return next;
                      });
                    }}
                  />
                ) : null}
                <Textarea
                  id="hf:tour-image-prompt"
                  rows={2}
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder={t("composer.describeSceneYouImagine")}
                  className="min-h-10 max-h-28 flex-1 resize-none border-0 bg-transparent px-0 py-1 text-sm shadow-none hover:border-0"
                />
              </div>

              <div className="flex min-w-0 items-center gap-2">
                <ImageModelPicker model={model} />
                <ImageControls
                  controls={composer?.controls ?? []}
                  values={controlValues}
                  onChange={(id, value) =>
                    setControlValues((current) => ({ ...current, [id]: value }))
                  }
                />
                <QuantityStepper
                  value={quantity}
                  max={quantityConfig.max}
                  onChange={setQuantity}
                />
              </div>
            </div>

            <aside className="flex shrink-0 items-end gap-3 self-end">
              {composer?.characterSlot?.enabled ? <CharacterSlot /> : null}
              <ImageGenerateButton pricing={composer?.pricing} />
            </aside>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

const EMPTY_STATE_CARDS = [
  {
    rotation: "-rotate-10",
    shape: "rounded-xl border-3 border-white/30 xl:border-4",
  },
  { rotation: "rotate-4", shape: "rounded-xl" },
  {
    rotation: "rotate-180 -scale-y-100",
    shape: "rounded-full border-3 border-white/30 xl:border-4",
  },
  {
    rotation: "-rotate-4",
    shape: "rounded-xl border-3 border-white/30 xl:border-4",
  },
] as const;

function ImageEmptyState({ modelLabel }: { modelLabel: string }) {
  const media = IMAGE_EMPTY_STATE_MEDIA;

  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-[clamp(16px,3vh,40px)] px-4">
      <div className="relative flex w-full flex-col items-center gap-[clamp(12px,2.5vh,32px)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-40 blur-[32px]">
          <EmptyStateCardRow media={media} />
        </div>
        <EmptyStateCardRow media={media} />

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="font-grotesk text-[clamp(20px,min(3vw,4.5vh),36px)] leading-none font-bold tracking-[-0.56px] uppercase">
            <p className="text-white">{t("image.emptyStateTitle")}</p>
            <p className="text-brand">{modelLabel}</p>
          </div>
          <p className="text-sm text-fg-secondary xl:text-base">
            {t("image.emptyStateBody")}
          </p>
        </div>
      </div>
    </div>
  );
}

function EmptyStateCardRow({ media }: { media: string[] }) {
  return (
    <div className="isolate flex items-center" aria-hidden="true">
      {media.map((src, index) => {
        const card = EMPTY_STATE_CARDS[index % EMPTY_STATE_CARDS.length];
        return (
          <div
            key={src}
            style={{ zIndex: media.length - index }}
            className={cn(
              "flex shrink-0 items-center justify-center",
              index < media.length - 1 &&
                "-mr-[clamp(16px,min(1.5vw,2vh),36px)]",
            )}
          >
            <div className={cn("flex-none", card.rotation)}>
              <div
                className={cn(
                  "relative size-[clamp(64px,min(12vw,16vh),172px)] overflow-hidden shadow-[0px_0.3px_0.3px_-0.15px_rgba(0,0,0,0.03),0px_0.9px_0.9px_-0.45px_rgba(0,0,0,0.03)]",
                  card.shape,
                )}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ImageModelPicker({ model }: { model: ImageModelConfig }) {
  const router = useRouter();

  function selectModel(id: string) {
    if (id === model.id) return;
    void router.navigate({
      to: "/ai/image",
      search: { model: id },
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          data-tour-anchor="tour-image-model"
          className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-[0.625rem] border border-white/10 bg-white/5 px-2.5 text-sm font-medium text-white"
        >
          <ModelGlyph icon={model.icon} className="size-4" />
          <span>{model.chipLabel ?? model.label}</span>
          <ChevronIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="top"
        className="z-[260] max-h-[min(45vh,22rem)] w-80 overflow-y-auto p-2"
      >
        {IMAGE_MODELS.map((entry) => (
          <DropdownMenuItem
            key={entry.id}
            className="gap-0 rounded-xl py-1.5 pr-3 pl-1.5"
            onSelect={() => selectModel(entry.id)}
          >
            <PickerRow model={entry} selected={entry.id === model.id} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function PickerRow({
  model,
  selected,
}: {
  model: ImageModelConfig;
  selected: boolean;
}) {
  const badgeColor =
    model.badge === "new" ? "lime" : model.badge === "top" ? "pink" : undefined;

  return (
    <div className="flex w-full items-center gap-2 text-start">
      <div className="relative grid size-10 shrink-0 place-items-center rounded-lg bg-white/5 text-fg-secondary">
        <ModelGlyph icon={model.icon} className="size-4" />
        {model.badge && badgeColor ? (
          <StatusBadge color={badgeColor} className="-top-2">
            {t(`badges.${model.badge}`)}
          </StatusBadge>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-white">{model.label}</p>
        <p className="text-[0.625rem] text-fg-secondary">{model.description}</p>
      </div>
      {selected ? (
        <span className="size-2 shrink-0 rounded-full bg-brand" />
      ) : (
        <span className="size-5 shrink-0" />
      )}
    </div>
  );
}

function ImageControls({
  controls,
  values,
  onChange,
}: {
  controls: ImageControlConfig[];
  values: Record<string, ControlValue>;
  onChange: (id: string, value: ControlValue) => void;
}) {
  if (!controls.length) return null;

  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto hide-scrollbar">
      {controls.map((control) => (
        <ImageControl
          key={control.id}
          control={control}
          value={values[control.id]}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

function ImageControl({
  control,
  value,
  onChange,
}: {
  control: ImageControlConfig;
  value: ControlValue | undefined;
  onChange: (id: string, value: ControlValue) => void;
}) {
  if (control.type === "action") {
    return (
      <button
        type="button"
        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 text-sm font-semibold text-white"
      >
        {control.label}
        {control.badge ? (
          <span className="font-grotesk rounded-sm bg-brand px-1 text-[0.625rem] font-bold text-fg-inverse uppercase -skew-x-12">
            {control.badge}
          </span>
        ) : null}
      </button>
    );
  }

  if (control.type === "toggle") {
    const on = Boolean(value);
    return (
      <button
        type="button"
        className="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-white"
        onClick={() => onChange(control.id, !on)}
      >
        {on ? control.onLabel : control.offLabel}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 text-sm font-medium text-white",
        control.type === "aspect-ratio" && "capitalize",
      )}
    >
      {String(value ?? control.defaultValue)}
      <ChevronIcon />
    </button>
  );
}

function QuantityStepper({
  value,
  max,
  onChange,
}: {
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1 text-fg-secondary">
      <button
        type="button"
        aria-label={t("image.decrement")}
        disabled={value <= 1}
        className="text-fg-secondary transition-colors hover:text-white disabled:opacity-40"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <MinusIcon />
      </button>
      <span className="min-w-8 text-center text-sm text-white">
        {value}/{max}
      </span>
      <button
        type="button"
        aria-label={t("image.increment")}
        disabled={value >= max}
        className="text-fg-secondary transition-colors hover:text-white disabled:opacity-40"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

function ImageReferenceUploader({
  multiple,
  accept,
  previews,
  inputRef,
  onChange,
  onRemove,
}: {
  multiple: boolean;
  accept: readonly string[];
  previews: PreviewFile[];
  inputRef: RefObject<HTMLInputElement | null>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRemove: (id: string) => void;
}) {
  const inputId = useId();

  return (
    <div className="flex shrink-0 items-start gap-2">
      <input
        ref={inputRef}
        id={inputId}
        className="sr-only"
        type="file"
        hidden
        multiple={multiple}
        accept={accept.join(",")}
        onChange={onChange}
      />
      {previews.map((item) => (
        <button
          key={item.id}
          type="button"
          className="relative size-10 overflow-hidden rounded-lg"
          onClick={() => onRemove(item.id)}
          aria-label={t("image.removeReference")}
        >
          <img src={item.url} alt="" className="size-full object-cover" />
        </button>
      ))}
      <button
        type="button"
        className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white"
        aria-label={t("image.addReference")}
        onClick={() => inputRef.current?.click()}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

function CharacterSlot() {
  return (
    <div
      data-character-panel-toggle="true"
      className="relative size-[5.25rem] shrink-0 overflow-hidden rounded-xl bg-[linear-gradient(180deg,rgba(34,34,34,0.16)_0%,rgba(136,136,136,0.16)_100%)]"
    >
      <span className="font-grotesk absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[0.75rem] font-bold">
        {t("image.character")}
      </span>
      <span className="absolute top-1.5 left-1.5 grid size-5 place-items-center rounded-md bg-white/4">
        <PlusIcon />
      </span>
    </div>
  );
}

function controlDefaults(
  controls: ImageControlConfig[] | undefined,
): Record<string, ControlValue> {
  const values: Record<string, ControlValue> = {};
  for (const control of controls ?? []) {
    if (control.type === "action") continue;
    values[control.id] = control.defaultValue;
  }
  return values;
}

function normalizePreviews(
  current: PreviewFile[],
  references?: {
    enabled: boolean;
    multiple: boolean;
  },
) {
  if (!references?.enabled) {
    current.forEach((item) => URL.revokeObjectURL(item.url));
    return [];
  }
  if (!references.multiple && current.length > 1) {
    current.slice(1).forEach((item) => URL.revokeObjectURL(item.url));
    return current.slice(0, 1);
  }
  return current;
}

function ModelGlyph({
  icon,
  className,
}: {
  icon: MegaIconId;
  className?: string;
}) {
  if (icon === "ps" || icon === "pr" || icon === "ae") return null;
  const Icon = megaIcons[icon];
  return Icon ? <Icon className={className} /> : null;
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
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

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-4"
      fill="currentColor"
    >
      <path d="M9.166 9.166V4.166h1.667v5h5v1.667h-5v5H9.166v-5h-5V9.166h5Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-4"
      fill="currentColor"
    >
      <path d="M4.166 9.166h11.667v1.667H4.166V9.166Z" />
    </svg>
  );
}
