import { useT } from "@/lib/i18n";

const ASSETS = {
  background: "https://static.higgsfield.ai/spc-banner/bg-spc-banner.png",
  logo: "https://static.higgsfield.ai/spc-banner/spc-banner-logo.png",
  creative: "https://static.higgsfield.ai/spc-banner/spc-banner-creative.png",
  visualizing: "https://static.higgsfield.ai/spc-banner/spc-banner-visualizing.png",
  marketing: "https://static.higgsfield.ai/spc-banner/spc-banner-marketing.png",
  production: "https://static.higgsfield.ai/spc-banner/spc-banner-production.png",
} as const;

export function SupercomputerBanner() {
  const t = useT();
  const title = t("home.banners.supercomputer.title");
  const description = t("home.banners.supercomputer.description");
  const cta = t("home.banners.supercomputer.cta");

  return (
    <div className="container-app flex flex-col">
      <a
        href="/supercomputer"
        className="mb-6 block"
        aria-label={`${title}. ${cta}`}
      >
        <div className="relative aspect-343/361 w-full overflow-hidden rounded-3xl bg-black shadow-[0_0_60px_-12px_rgba(209,254,23,0.45)] sm:aspect-5/2 lg:aspect-1408/429">
          <div
            aria-hidden="true"
            className="bg-brand pointer-events-none absolute inset-0 mix-blend-multiply"
          />
          <img
            src={ASSETS.background}
            alt=""
            width={4224}
            height={1287}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute top-0 left-1/2 h-full w-352 max-w-none -translate-x-1/2 object-cover mix-blend-screen sm:left-0 sm:w-full sm:translate-x-0"
            aria-hidden="true"
          />
          <img
            src={ASSETS.creative}
            alt=""
            width={729}
            height={591}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute top-[19.1%] left-[7.24%] hidden h-auto w-[18.47%] object-cover lg:block"
            aria-hidden="true"
          />
          <img
            src={ASSETS.visualizing}
            alt=""
            width={315}
            height={144}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute top-[15.85%] left-[67.9%] hidden h-auto w-[8.17%] object-cover lg:block"
            aria-hidden="true"
          />
          <img
            src={ASSETS.marketing}
            alt=""
            width={630}
            height={582}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute top-[13.75%] left-[78.48%] hidden h-auto w-[15.55%] object-cover lg:block"
            aria-hidden="true"
          />
          <img
            src={ASSETS.production}
            alt=""
            width={669}
            height={320}
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute bottom-0 left-[68.96%] hidden h-auto w-[15.84%] object-cover lg:block"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-6 text-center lg:gap-9">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <img
                src={ASSETS.logo}
                alt=""
                width={1583}
                height={345}
                loading="lazy"
                decoding="async"
                className="aspect-527/108 w-77.5 max-w-[90%] object-contain sm:w-105 sm:max-w-[70%] lg:w-[37%]"
                aria-hidden="true"
              />
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-grotesk text-[36px] leading-10 font-bold tracking-[-1.2px] text-brand uppercase sm:text-[44px] sm:leading-[1.05] lg:text-[56px]">
                  {title}
                </h2>
                <p className="text-xs font-medium tracking-normal text-[#c5d9a2] sm:text-base sm:tracking-normal">
                  {description}
                </p>
              </div>
            </div>
            <span className="relative inline-flex items-center justify-center rounded-xl bg-white px-5 pt-3 pb-3.5 text-sm font-semibold tracking-normal text-fg-inverse shadow-[0_9px_22px_0_rgba(0,0,0,0.15),inset_0_-3px_0_0_#c7c7c7] sm:text-base sm:tracking-normal">
              {cta}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
