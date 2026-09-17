import { GalleryFadeCta } from "@/features/home/gallery/GalleryFadeCta";
import { HomeGallery } from "@/features/home/gallery/HomeGallery";
import { MasonryGallery } from "@/features/home/gallery/layouts/MasonryGallery";
import { useT } from "@/lib/i18n";
import { EffectPresetCard } from "./EffectPresetCard";
import { visualEffects } from "./config/visual-effects";

function presetKey(preset: (typeof visualEffects)[number]) {
  return preset.slug;
}

function presetAspectRatio(preset: (typeof visualEffects)[number]) {
  return preset.aspectRatio;
}

export function VisualEffectsSection() {
  const t = useT();
  return (
    <div className="container-app md:pt-2">
      <HomeGallery
        title={t("home.visualEffects.title")}
        titleHref="/effects"
        description={t("home.visualEffects.description")}
        action={{
          href: "/effects/use",
          label: t("actions.tryForFree"),
        }}
        desktopOnly
      >
        <div className="relative max-h-224 overflow-hidden">
          <div className="relative min-h-96 pb-20">
            <MasonryGallery
              items={visualEffects}
              getKey={presetKey}
              getAspectRatio={presetAspectRatio}
            >
              {(preset, index) => (
                <EffectPresetCard preset={preset} eager={index === 0} />
              )}
            </MasonryGallery>
          </div>
          <GalleryFadeCta href="/effects" label={t("actions.viewAllPresets")} />
        </div>
      </HomeGallery>
    </div>
  );
}
