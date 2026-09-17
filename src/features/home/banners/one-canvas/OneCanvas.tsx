import { Fragment, type SVGProps } from "react";
import { useT } from "@/lib/i18n";

const ASSETS = {
  mobileBg: "https://static.higgsfield.ai/canvas-banner-bg-mobile.webp",
  mobileArt: "https://static.higgsfield.ai/canvas-banner-mobile.webp",
  desktopBg: "https://static.higgsfield.ai/canvas-banner-bg-desktop.webp",
  desktopArt: "https://static.higgsfield.ai/canvas-banner-desktop-new.webp",
} as const;

const CTA_CLASSNAME =
  "inline-flex h-[var(--layout-control-md)] items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-semibold text-fg-inverse shadow-[0_2px_8px_rgba(0,0,0,0.18)]";

export function OneCanvasBanner() {
  const t = useT();
  const kicker = t("home.banners.oneCanvas.kicker");
  const title = t("home.banners.oneCanvas.title");
  const description = t("home.banners.oneCanvas.description");
  const cta = t("home.banners.oneCanvas.cta");

  return (
    <div className="container-app">
      <section className="mb-6 hidden lg:block">
        <a
          href="/canvas-intro"
          aria-label={cta}
          className="relative isolate flex h-[547px] cursor-pointer flex-col items-center overflow-hidden rounded-3xl px-3 pt-5 pb-7 lg:hidden"
          style={{
            backgroundImage: `url("${ASSETS.mobileBg}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative h-[233px] w-full shrink-0">
            <img
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute top-0 left-[calc(50%+10px)] w-94 max-w-none -translate-x-1/2 select-none"
              src={ASSETS.mobileArt}
            />
          </div>
          <div className="mt-7 flex w-full justify-center">
            <div className="relative z-1 flex w-full flex-col items-center gap-5 text-center">
              <div className="flex w-full flex-col items-center gap-4">
                <div className="font-grotesk relative bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_23.735%,#fff_50.571%,rgba(255,255,255,0.12)_77.407%)] bg-clip-text pb-4 text-base leading-none font-bold tracking-[2.56px] text-transparent uppercase after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-22 after:-translate-x-1/2 after:bg-white/22 after:content-['']">
                  {kicker}
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <h2 className="font-grotesk bg-[linear-gradient(90deg,#fff_0%,#d3fff8_100%)] bg-clip-text text-[36px] leading-10 font-bold tracking-[-1.44px] text-transparent uppercase">
                    <Lines text={title} />
                  </h2>
                  <p className="text-sm leading-5 font-normal text-white/50">
                    <Lines text={description} />
                  </p>
                </div>
              </div>
              <TryCanvasCta label={cta} />
            </div>
          </div>
        </a>
        <a
          aria-label={cta}
          href="/canvas"
          className="relative isolate hidden h-75 cursor-pointer items-center overflow-hidden rounded-3xl px-8 py-8 lg:flex"
          style={{
            backgroundImage: `url("${ASSETS.desktopBg}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-1 flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-1.5">
              <div className="font-grotesk relative text-base leading-none font-bold tracking-[2.56px] text-white uppercase">
                {kicker}
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <h2 className="font-grotesk text-[48px] leading-12.5 font-bold tracking-[-0.96px] text-white uppercase">
                  <Lines text={title} />
                </h2>
                <p className="text-sm leading-5 font-medium text-white/50">
                  <Lines text={description} />
                </p>
              </div>
            </div>
            <TryCanvasCta label={cta} />
          </div>
          <img
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute top-[-1px] right-0 z-0 h-70 w-auto max-w-none select-none xl:h-[clamp(300px,26.5vw,365px)]"
            src={ASSETS.desktopArt}
          />
        </a>
      </section>
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

function TryCanvasCta({ label }: { label: string }) {
  return (
    <span className={CTA_CLASSNAME}>
      <TryCanvasSparkleIcon className="size-4 rotate-180 text-fg-inverse" />
      {label}
    </span>
  );
}

function TryCanvasSparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.7452 4.66559C11.7023 4.28675 11.382 4.00039 11.0008 4C10.6195 3.99961 10.2986 4.28532 10.2549 4.66407C9.97088 7.12691 9.23453 8.85871 8.04662 10.0466C6.85871 11.2345 5.12691 11.9709 2.66407 12.2549C2.28532 12.2986 1.99961 12.6195 2 13.0008C2.00039 13.382 2.28675 13.7023 2.66559 13.7452C5.08772 14.0196 6.85633 14.7556 8.07245 15.9498C9.28399 17.1394 10.0357 18.8708 10.2529 21.3164C10.2873 21.7037 10.612 22.0004 11.0008 22C11.3897 21.9996 11.7137 21.7021 11.7472 21.3147C11.9554 18.9094 12.7064 17.1415 13.924 15.924C15.1415 14.7064 16.9094 13.9554 19.3147 13.7472C19.7021 13.7137 19.9996 13.3897 20 13.0008C20.0004 12.612 19.7037 12.2873 19.3164 12.2529C16.8708 12.0357 15.1394 11.284 13.9498 10.0724C12.7556 8.85633 12.0196 7.08772 11.7452 4.66559Z"
        fill="currentColor"
      />
      <path
        d="M19.7898 1.25884C19.7731 1.11151 19.6486 1.00015 19.5003 1C19.352 0.999849 19.2272 1.11096 19.2103 1.25825C19.0998 2.21602 18.8134 2.8895 18.3515 3.35146C17.8895 3.81343 17.216 4.09979 16.2582 4.21025C16.111 4.22724 15.9998 4.35203 16 4.5003C16.0002 4.64857 16.1115 4.77313 16.2588 4.78981C17.2008 4.89651 17.8886 5.18275 18.3615 5.64713C18.8327 6.10977 19.125 6.7831 19.2095 7.73414C19.2229 7.88476 19.3491 8.00017 19.5003 8C19.6515 7.99983 19.7775 7.88413 19.7906 7.73349C19.8716 6.79809 20.1636 6.11059 20.6371 5.6371C21.1106 5.16361 21.7981 4.87155 22.7335 4.79058C22.8841 4.77754 22.9998 4.65154 23 4.50033C23.0002 4.34912 22.8848 4.22286 22.7341 4.20948C21.7831 4.125 21.1098 3.83266 20.6471 3.36151C20.1827 2.88857 19.8965 2.20078 19.7898 1.25884Z"
        fill="currentColor"
      />
    </svg>
  );
}
