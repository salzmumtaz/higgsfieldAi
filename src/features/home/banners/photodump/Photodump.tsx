import { Fragment } from "react";
import { AppLink } from "@/components/navigation/AppLink";
import { useT } from "@/lib/i18n";

const ASSETS = {
  mobile: "https://static.higgsfield.ai/public/photodump/cta-mobile.png",
  desktop: "https://static.higgsfield.ai/public/photodump/cta-desktop.png",
} as const;

const MOBILE_HREF = "/photodump/mobile?skip-preview=true";
const DESKTOP_HREF =
  "/ai/image?model=soul-v2&modal-photo-dump=true&skip-preview=true";

export function PhotodumpBanner() {
  const t = useT();
  const kicker = t("home.banners.photodump.kicker");
  const title = t("home.banners.photodump.title");
  const description = t("home.banners.photodump.description");
  const cta = t("home.banners.photodump.cta");

  return (
    <div className="container-app relative mb-8 transition hover:opacity-80 md:mb-16">
      <div
        className="relative overflow-hidden rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:rounded-4xl"
        style={{
          backgroundImage:
            "linear-gradient(rgb(160, 170, 183) 0%, rgb(46, 52, 58) 100%)",
        }}
      >
        <AppLink
          aria-label={cta}
          href={MOBILE_HREF}
          className="absolute inset-0 z-20 rounded-[20px] md:hidden"
        >
          <span className="sr-only">{cta}</span>
        </AppLink>
        <AppLink
          aria-label={cta}
          href={DESKTOP_HREF}
          className="absolute inset-0 z-20 hidden rounded-4xl md:block"
        >
          <span className="sr-only">{cta}</span>
        </AppLink>
        <div className="relative -mb-20 aspect-[1.46] h-auto w-full md:absolute md:bottom-0 md:left-50 md:mb-0 md:aspect-[5.55] md:h-70 md:w-auto xl:left-84">
          <img
            sizes="calc(100vw - 32px)"
            alt=""
            width={722}
            height={494}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover md:hidden"
            src={ASSETS.mobile}
            aria-hidden="true"
          />
          <img
            sizes="1554px"
            alt=""
            width={2268}
            height={408}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 hidden size-full object-cover md:block"
            src={ASSETS.desktop}
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-5 px-4 pb-5 md:max-w-1/2 md:gap-5 md:px-6 md:pt-5 md:pb-6">
          <div className="flex flex-col gap-2.5 md:gap-3.5">
            <div>
              <span className="bg-brand font-grotesk inline-block -skew-x-[11deg] rounded px-2 py-0.5 text-xs font-bold text-fg-inverse uppercase md:rounded-md md:px-3 md:py-1 md:text-sm">
                {kicker}
              </span>
            </div>
            <div className="mb-1 flex flex-col gap-1 md:gap-1.5">
              <h2 className="font-grotesk text-[1.625rem] leading-none font-bold whitespace-nowrap text-white/90 uppercase md:text-[44px]">
                <Lines text={title} />
              </h2>
              <p className="text-sm whitespace-nowrap text-white/60 md:text-lg">
                {description}
              </p>
            </div>
          </div>
          <span className="pointer-events-none inline-flex h-14 w-full items-center justify-center self-start rounded-xl bg-white px-3.5 text-sm font-semibold text-fg-inverse md:w-auto md:px-5 md:text-base">
            {cta}
          </span>
        </div>
      </div>
    </div>
  );
}

function Lines({ text }: { text: string }) {
  return text.split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}
