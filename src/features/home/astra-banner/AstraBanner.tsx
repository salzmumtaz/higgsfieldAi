import { useCallback, useEffect, useId, useState, type CSSProperties } from "react";
import { useT } from "@/lib/i18n";
import "./astra-banner.css";

const PLUGIN_HREF =
  "https://chatgpt.com/plugins/plugin_asdk_app_6a3293e129088191abf0875820e839da";
const EXPLORE_HREF = "/gpt-astra";

const ARCH_PATH =
  "M2974.18 1210.2C3562.44 786.241 3792.49 328.194 3823.14 37.3223H4251.43C4282.07 328.194 4512.12 786.241 5100.39 1210.2C5689.98 1635.11 6623.13 2014.7 8037.24 2168.79L7963.41 2292.09H111.156L37.3223 2168.79C1451.43 2014.7 2384.58 1635.11 2974.18 1210.2ZM1023.67 2164.89H7050.89C5946.91 1956.49 5198.2 1614.67 4704.18 1258.64C4391.77 1033.49 4176.95 799.757 4037.28 584.56C3897.62 799.757 3682.79 1033.49 3370.39 1258.64C2876.37 1614.67 2127.66 1956.49 1023.67 2164.89Z";

const CORE_PATH =
  "M133.294 916.068C896.09 799.54 1118.71 345.665 1134.66 133.294C1150.62 345.665 1373.24 799.54 2136.04 916.068H133.294Z";

const GRID_PATH =
  "M0,0H1408V400H0Z M70.39999999999998,20H1337.6V380H70.39999999999998Z M133.76,38H1274.24V362H133.76Z M197.12,56H1210.88V344H197.12Z M253.44,72H1154.56V328H253.44Z M309.76,87.99999999999999H1098.24V312H309.76Z M359.04,102H1048.96V298H359.04Z M401.28000000000003,114H1006.72V286H401.28000000000003Z M443.52,126H964.48V274H443.52Z M478.72,136H929.28V264H478.72Z M0,0L478.72,136 M0,400L478.72,264 M70.4,0L501.248,136 M70.4,400L501.248,264 M140.8,0L523.776,136 M140.8,400L523.776,264 M211.2,0L546.304,136 M211.2,400L546.304,264 M281.6,0L568.832,136 M281.6,400L568.832,264 M352,0L591.36,136 M352,400L591.36,264 M422.4,0L613.888,136 M422.4,400L613.888,264 M492.8,0L636.4159999999999,136 M492.8,400L636.4159999999999,264 M563.2,0L658.944,136 M563.2,400L658.944,264 M633.6,0L681.472,136 M633.6,400L681.472,264 M704,0L704,136 M704,400L704,264 M774.4,0L726.528,136 M774.4,400L726.528,264 M844.8,0L749.056,136 M844.8,400L749.056,264 M915.2,0L771.5840000000001,136 M915.2,400L771.5840000000001,264 M985.6,0L794.112,136 M985.6,400L794.112,264 M1056,0L816.64,136 M1056,400L816.64,264 M1126.4,0L839.168,136 M1126.4,400L839.168,264 M1196.8,0L861.696,136 M1196.8,400L861.696,264 M1267.2,0L884.224,136 M1267.2,400L884.224,264 M1337.6,0L906.752,136 M1337.6,400L906.752,264 M1408,0L929.28,136 M1408,400L929.28,264 M0,0L478.72,136 M1408,0L929.28,136 M0,50L478.72,152 M1408,50L929.28,152 M0,100L478.72,168 M1408,100L929.28,168 M0,150L478.72,184 M1408,150L929.28,184 M0,200L478.72,200 M1408,200L929.28,200 M0,250L478.72,216 M1408,250L929.28,216 M0,300L478.72,232 M1408,300L929.28,232 M0,350L478.72,248 M1408,350L929.28,248 M0,400L478.72,264 M1408,400L929.28,264";

const SIGNALS = [
  {
    transform: "translate(281.6 0) rotate(25.3368)",
    distance: "243.1079px",
    delay: "-1.8s",
    duration: "6.4s",
  },
  {
    transform: "translate(780.032 128) rotate(-43.4398)",
    distance: "130.1569px",
    delay: "-4.2s",
    duration: "7.2s",
  },
  {
    transform: "translate(1408 100) rotate(171.9155)",
    distance: "370.6401px",
    delay: "-0.9s",
    duration: "6.8s",
  },
  {
    transform: "translate(872.96 280) rotate(25.3368)",
    distance: "224.4137px",
    delay: "-3.7s",
    duration: "7.6s",
  },
  {
    transform: "translate(492.79999999999995 400) rotate(-43.4398)",
    distance: "124.3395px",
    delay: "-5.4s",
    duration: "8.2s",
  },
  {
    transform: "translate(450.56 236) rotate(171.9155)",
    distance: "399.0828px",
    delay: "-2.6s",
    duration: "7.4s",
  },
] as const;

export function AstraBanner() {
  const t = useT();
  const reactId = useId().replace(/:/g, "");
  const archId = `${reactId}-arch`;
  const coreId = `${reactId}-core`;
  const softId = `${reactId}-soft`;
  const signalId = `${reactId}-signal`;
  const metalId = `${reactId}-metal`;

  const [node, setNode] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || !document.hidden,
  );

  const setRef = useCallback((element: HTMLElement | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0;
        setInView(visible);
        if (visible) setRevealed(true);
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden);
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  const running = inView && pageVisible;

  return (
    <section
      ref={setRef}
      className="gpt-astra-banner my-6 hidden md:block"
      data-motion={running ? "running" : "paused"}
      data-revealed={revealed ? "true" : undefined}
    >
      <div className="gpt-astra-banner-body">
        <div
          className="gpt-astra-banner-scene"
          data-motion={running ? "running" : "paused"}
          aria-hidden="true"
        >
          <svg
            className="gpt-astra-banner-light gpt-astra-banner-light-top"
            viewBox="0 0 1408 400"
            preserveAspectRatio="xMidYMin slice"
            fill="none"
          >
            <defs>
              <linearGradient
                id={archId}
                x1="0"
                y1="0"
                x2="0"
                y2="2300"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--astra-ice)" stopOpacity="0.7" />
                <stop offset="0.35" stopColor="var(--astra-ice)" stopOpacity="0.3" />
                <stop offset="1" stopColor="var(--astra-ice)" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id={coreId}
                x1="0"
                y1="180"
                x2="0"
                y2="920"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--astra-ice)" stopOpacity="0.65" />
                <stop offset="0.45" stopColor="var(--astra-ice)" stopOpacity="0.16" />
                <stop offset="1" stopColor="var(--astra-ice)" stopOpacity="0" />
              </linearGradient>
              <filter
                id={softId}
                filterUnits="userSpaceOnUse"
                x="-40"
                y="-40"
                width="1488"
                height="480"
              >
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>
            <g filter={`url(#${softId})`} fill={`url(#${archId})`} fillRule="evenodd">
              <path
                d={ARCH_PATH}
                transform="translate(704 -620) scale(.72) translate(-4037.28 -37.3223)"
                opacity="0.4"
              />
              <path
                d={ARCH_PATH}
                transform="translate(704 -450) scale(.57) translate(-4037.28 -37.3223)"
                opacity="0.55"
              />
              <path
                d={ARCH_PATH}
                transform="translate(704 -300) scale(.44) translate(-4037.28 -37.3223)"
                opacity="0.7"
              />
            </g>
            <g filter={`url(#${softId})`}>
              <path
                d={CORE_PATH}
                transform="translate(704 -280) scale(1.15) translate(-1134.66 -133.294)"
                fill={`url(#${coreId})`}
              />
            </g>
          </svg>
          <div className="gpt-astra-banner-light gpt-astra-banner-light-floor" />
          <svg
            className="gpt-astra-banner-grid"
            viewBox="0 0 1408 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d={GRID_PATH} vectorEffect="non-scaling-stroke" />
          </svg>
          <svg
            className="gpt-astra-banner-signals"
            viewBox="0 0 1408 400"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <linearGradient
                id={signalId}
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="56"
                y2="0"
              >
                <stop stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.8" stopColor="currentColor" stopOpacity="0.55" />
                <stop offset="1" stopColor="currentColor" />
              </linearGradient>
            </defs>
            {SIGNALS.map((signal) => (
              <g key={signal.transform} transform={signal.transform}>
                <g
                  className="gpt-astra-banner-signal"
                  style={
                    {
                      "--signal-distance": signal.distance,
                      animationDelay: signal.delay,
                      animationDuration: signal.duration,
                    } as CSSProperties
                  }
                >
                  <path
                    d="M0,0H56"
                    stroke={`url(#${signalId})`}
                    strokeWidth="5"
                    opacity="0.08"
                  />
                  <path
                    d="M0,0H56"
                    stroke={`url(#${signalId})`}
                    strokeWidth="1.2"
                  />
                </g>
              </g>
            ))}
          </svg>
        </div>
        <div className="gpt-astra-banner-content">
          <div className="gpt-astra-banner-copy">
            <h2
              className="gpt-astra-banner-heading"
              aria-label={t("home.astra.heading")}
            >
              <svg width="0" height="0" aria-hidden="true" className="absolute">
                <defs>
                  <linearGradient id={metalId} x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="var(--astra-metal-start)" />
                    <stop offset="0.42308" stopColor="var(--astra-metal-highlight)" />
                    <stop offset="1" stopColor="var(--astra-silver)" />
                  </linearGradient>
                </defs>
              </svg>
              <span aria-hidden="true" className="gpt-astra-banner-kicker">
                {t("home.astra.kicker")}
              </span>
              <span aria-hidden="true" className="gpt-astra-banner-title">
                <AstraWord>GPT-6</AstraWord>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="gpt-astra-banner-logo"
                  style={{ "--astra-logo-fill": `url(#${metalId})` } as CSSProperties}
                >
                  <path
                    fill="currentColor"
                    d="M9.796 9.348V7.495c0-.156.059-.273.195-.35L13.716 5c.507-.293 1.112-.43 1.736-.43 2.34 0 3.822 1.814 3.822 3.745 0 .136 0 .292-.02.448l-3.861-2.262a.65.65 0 0 0-.702 0zm8.698 7.215v-4.427a.65.65 0 0 0-.352-.604l-4.894-2.847 1.599-.917a.36.36 0 0 1 .39 0l3.725 2.145c1.072.624 1.794 1.95 1.794 3.237 0 1.482-.878 2.848-2.262 3.413m-9.848-3.9-1.599-.936c-.136-.078-.195-.195-.195-.35v-4.29C6.852 5 8.451 3.42 10.616 3.42c.819 0 1.579.273 2.223.76L8.997 6.405a.65.65 0 0 0-.35.604zm3.442 1.989-2.292-1.287v-2.73l2.292-1.287 2.29 1.287v2.73zm1.472 5.928a3.65 3.65 0 0 1-2.223-.76l3.841-2.224a.65.65 0 0 0 .351-.604v-5.655l1.619.936c.137.078.195.195.195.35v4.29c0 2.087-1.619 3.667-3.783 3.667m-4.622-4.348-3.724-2.145c-1.073-.624-1.794-1.95-1.794-3.237 0-1.502.897-2.847 2.281-3.413v4.446c0 .273.117.468.351.605l4.875 2.827-1.599.917a.35.35 0 0 1-.39 0m-.214 3.198c-2.203 0-3.822-1.658-3.822-3.705 0-.156.02-.312.039-.468l3.841 2.223a.65.65 0 0 0 .702 0l4.895-2.828v1.853c0 .156-.059.273-.195.35l-3.725 2.146c-.507.292-1.111.429-1.735.429m4.836 2.32a4.876 4.876 0 0 0 4.778-3.9c2.183-.566 3.588-2.613 3.588-4.7a4.93 4.93 0 0 0-1.638-3.646c.097-.41.156-.82.156-1.228 0-2.789-2.262-4.875-4.875-4.875-.527 0-1.034.077-1.54.253a4.89 4.89 0 0 0-3.413-1.404 4.876 4.876 0 0 0-4.778 3.9c-2.184.566-3.588 2.613-3.588 4.7 0 1.365.585 2.69 1.638 3.646-.098.41-.156.819-.156 1.228 0 2.789 2.262 4.875 4.875 4.875.526 0 1.033-.077 1.54-.253a4.89 4.89 0 0 0 3.413 1.404"
                  />
                </svg>
                <AstraWord>ASTRA</AstraWord>
              </span>
            </h2>
            <p className="gpt-astra-banner-description">
              {t("home.astra.description")}
            </p>
          </div>
          <div className="gpt-astra-banner-actions">
            <a
              href={PLUGIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="gpt-astra-banner-cta gpt-astra-banner-cta-primary"
            >
              <PluginIcon />
              <span className="gpt-astra-banner-cta-label">
                {t("home.astra.installPlugin")}
              </span>
            </a>
            <a href={EXPLORE_HREF} className="gpt-astra-banner-cta gpt-astra-banner-cta-tertiary">
              <ExploreIcon />
              <span className="gpt-astra-banner-cta-label">
                {t("home.astra.exploreUseCases")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AstraWord({ children }: { children: string }) {
  return (
    <span className="gpt-astra-banner-word">
      {Array.from(children).map((letter, index) => (
        <span key={`${letter}-${index}`} className="gpt-astra-banner-letter-window">
          <span className="gpt-astra-banner-letter">{letter}</span>
        </span>
      ))}
    </span>
  );
}

function PluginIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="gpt-astra-banner-cta-icon"
    >
      <path
        fill="currentColor"
        d="m20.35 11.844-.016-.173c-.15-1.654-1.238-4.766-4.252-4.766-2.238 0-3.927 2.187-5.419 4.116-1.19 1.544-2.221 2.868-3.356 2.868-.301-.03-.69-.18-.928-.517-.214-.306-.27-.698-.159-1.168.175-.745 1.175-1.434 2.23-2.171.579-.392 1.174-.808 1.586-1.208 1.19-1.136 1.793-1.96 1.793-3.284 0-1.325-.737-1.984-1.356-2.266-1.238-.564-3.054-.235-4.213.753-.174.157-.349.306-.508.447C4.586 5.502 3.801 6.2 2 5.666v2.148c2.388 1.043 4.395-.948 5.157-1.866.587-.603 1.206-.956 1.666-.956h.024c.206.008.38.086.508.227q.307.355.245.816c-.087.643-.761 1.395-1.999 2.218-1.452.965-3.88 2.58-4.07 4.61-.143 1.458.619 2.916 1.81 3.48 2.776 1.302 4.466-.94 6.258-3.308 1.373-1.826 2.674-3.559 4.483-3.559 1.626 0 2.229 1.333 2.229 2.172v.164l-.159.032c-3.943.69-6.093 4.343-6.093 6.028 0 1.686 1.444 3.128 3.221 3.128 2.079 0 4.65-1.756 5.062-6.695l.016-.18H22v-2.281zm-2.15 2.532c-.317 2.955-1.849 4.335-2.777 4.335-.42 0-1.007-.345-1.007-.988 0-.721 1.087-2.908 3.53-3.559l.286-.07z"
      />
    </svg>
  );
}

function ExploreIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="gpt-astra-banner-cta-icon"
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.465 17.153a1 1 0 0 0 .687-.687l3.6-12.6a.5.5 0 0 0-.618-.619l-12.6 3.6a1 1 0 0 0-.687.687l-3.6 12.6a.5.5 0 0 0 .618.619z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
}
