# HAR analysis — Higgsfield live product

**Status:** technical reconnaissance only. No application code. No scope decisions.

**Source:** `higgsfield.ai.har` (Chrome WebInspector HAR 1.2, 210.76 MB, 1,859 entries).

**Capture window:** `2026-09-16T13:32:33.231Z` → `2026-09-16T13:38:29.866Z` (~6 minutes).

**Documented page:** one HTML document, `GET https://higgsfield.ai/` (200). Referrer `https://www.google.com/`. User-Agent Chrome 152 / macOS. `Accept-Language: en-US,en;q=0.9`.

**Session observed:** unauthenticated. Clerk SSR state has `isAuthenticated: false`, `userId: null`. Clerk `GET /v1/client` returns `sessions: []`. `GET https://fnf-api-gw.higgsfield.ai/fnf/user` returns **401** `{"detail":"Invalid or expired token"}`.

Confidence labels used below:

- **CONFIRMED** — directly observed in this HAR (request, response, or HTML payload).
- **STRONGLY INFERRED** — multiple independent HAR signals, not a raw string of the claim.
- **UNKNOWN** — not observable from this HAR.

This file documents only HAR-supported evidence. Product behavior that was not requested in this capture is marked UNKNOWN, not guessed.

---

## 1. What this HAR actually captured

| Fact | Confidence | Evidence |
| --- | --- | --- |
| Single page: public home / Explore | CONFIRMED | `pages[0].title` = `https://higgsfield.ai/`. Only `_resourceType: document` entry is `/`. |
| No client-route HTML navigations | CONFIRMED | 1 HTML document. No other `text/html` responses. |
| Home is SSR’d, then hydrated | CONFIRMED | 580,188-byte HTML includes header, cards, JSON-LD, `$tsr` stream, then `type="module"` entry script. |
| Capture includes heavy asset prefetch | CONFIRMED | 1,187 unique JS files under `assets.higgsfield.ai/tanstack/assets/` despite staying on `/`. |
| Generation/create jobs were **not** run | CONFIRMED | No POST to `fnf-api-gw` (or any other host) that looks like a job/create/generate. All 43 POSTs are analytics, Cloudflare, Sentry, or Datadog. |
| Cookies were not recorded | CONFIRMED | Zero `Cookie` request headers and zero `Set-Cookie` response headers in the entire HAR. Auth must be inferred from Clerk JSON + CORS, not cookies. |

---

## 2. Frontend framework

| Claim | Confidence | Evidence |
| --- | --- | --- |
| App ships as TanStack file-based router with SSR | CONFIRMED | HTML contains `<script class="$tsr" id="$tsr-stream-barrier">` defining `self.$_TSR` and `$_TSR.router` with `manifest.routes.__root__` and route `/(public)/(explore)/(home)/`. JS/CSS are served from `https://assets.higgsfield.ai/tanstack/assets/c211bacd-*.{js,css}`. |
| React is used | CONFIRMED | App chunks under `assets.higgsfield.ai/tanstack/assets/` contain `@tanstack/react-router`. Clerk UI bundle contains `https://reactjs.org/docs/error-decoder.html` / “Minified React error”. |
| Bundler is Vite-family (dev leftover in prod HTML) | STRONGLY INFERRED | Inline FOUC script comments: “The Tailwind stylesheet may load after first paint (esp. in dev where Vite injects CSS via JS)”. Production assets are hashed ESM (`import {…} from "./c211bacd-….js"`). |
| Framework is specifically TanStack Start | STRONGLY INFERRED | Combination of `$_TSR` streaming hydration, `data-precedence` stylesheets, `/api/route-preload-manifest`, and `/tanstack/assets/` CDN prefix. Not independently labeled “Start” in the HTML. |
| Build identity | CONFIRMED | `window.__HF_BUILD__ = { id: "35043705786-1-production", time: 1789521721092, git: "6aaf2acbc3fca33d96047c5b4b5c7746e01c3691" }`. Timestamp = `2026-09-16T01:22:01.092Z`. |
| Not Next.js / Remix as the app shell | STRONGLY INFERRED | No `_next/`, no `buildManifest`, no Remix `__remixContext`. Entry is TanStack `$tsr` + modulepreload of tanstack assets. |

---

## 3. Router

| Claim | Confidence | Evidence |
| --- | --- | --- |
| File-route groups exist | CONFIRMED | Hydration route id `/(public)/(explore)/(home)/`. i18n map: `window.__I18N_ROUTES__.en.routes["/(public)/(explore)/(home)/"]`. |
| Route preload manifest is fetched | CONFIRMED | `GET https://higgsfield.ai/api/route-preload-manifest?v=c211bacd-2gZyNTmgceOfVpE0.js` → 200, ~448 KB JSON, **365 route keys** each mapped to JS/CSS URLs. |
| Public vs `_private` route trees | CONFIRMED | Manifest keys include `/(public)/…` (marketing/auth/community) and `/_private/…` (create surfaces: generate, canvas, supercomputer, etc.). |
| Locale-prefixed routing exists | CONFIRMED | Inline script: `stagedLocales = ["en","es","ja","ko","de"]`; path prefix regex `^/([a-z]{2}(?:-[a-z0-9]{2,4})?)(?=/|$)`. `<link rel="alternate" hrefLang>` for `en`, `es`, `ja`, `ko`. `de` is in staged locales + i18n assets but **not** in hreflang tags. |
| HTML uses TanStack `<a>` active state | CONFIRMED | Logo link: `href="/" data-status="active" aria-current="page"`. |

Selected manifest keys that match product domains (full list is 365 keys; this is the subset that names a surface):

**Public:** `/`, `/(public)/auth/sign-in`, `/(public)/auth/sign-up`, `/(public)/community/*`, `/(public)/effects`, `/(public)/mcp`, `/(public)/pricing/`, `/(public)/marketing-studio-community`, Soul/Sora/Seedance community routes, `/(public)/apps/$slug/view`.

**Private / app:** `/_private/ai/image`, `/_private/ai/video`, `/_private/audio`, `/_private/generate`, `/_private/generate/$mode/$modelVersion`, `/_private/canvas/$id`, `/_private/cinema-studio`, `/_private/marketing-studio`, `/_private/supercomputer/$chatId`, `/_private/edit/$projectId`, `/_private/layers/$projectId`, `/_private/effects` is **not** under `_private` (effects are ` /effects_/use_/$slug` in the manifest).

**Also present:** `/_private/3d-jutsu`, `/_private/flow/*` (avatar, fashion, photodump, mixed-media, speech, video, builder), `/_private/lipsync-studio`, `/_private/faceless-studio`, `/_private/ai-host`, `/_private/upscale`, `/_private/character`, `/_private/moodboard`, `/academy`, contests, profile `/$username/projects`.

Mapping of **visible nav hrefs** (HTML) to likely file routes is STRONGLY INFERRED: `/ai/image` ↔ `/_private/ai/image`. HAR did not fetch those documents, so the URL rewrite is not CONFIRMED by a navigation.

---

## 4. UI / styling system

| Claim | Confidence | Evidence |
| --- | --- | --- |
| Tailwind utility classes | CONFIRMED | HTML classes: `flex`, `items-center`, `md:group-hover/item:opacity-100`, `motion-reduce:transition-none`, arbitrary values `[transform:translateZ(0)]`, `[clip-path:inset(0_round_0.5rem)]`. FOUC script names “the Tailwind stylesheet”. |
| Named design system: **Quanta** | CONFIRMED | `localStorage` keys `hf:quanta:theme-override` and `hf:quanta:theme-pref`. Classes `q-button`, `q-button-brand-soft`, `q-button-marketing-primary`, `q-text-primary`, `qc-overlay-hover`, `text-q-accent-md-bold`. |
| Dark default theme | CONFIRMED | `<meta name="color-scheme" content="dark">`, `<meta name="theme-color" content="#030304">`. FOUC script: “Package default is DARK.” |
| Custom nav + logo primitives | CONFIRMED | `hfnav-*` (`hfnav-item`, `hfnav-auth-login`, `hfnav-language`, …) and `hf-logo`. |
| Fonts | CONFIRMED | Preload `assets.higgsfield.ai/fonts/inter/inter-latin-100-900.woff2` and `space-grotesk/space-grotesk-latin-300-700.woff2`. Extra request for `space-mono-latin-400.woff2`. Class `font-grotesk`. |
| Radix-like state attributes | STRONGLY INFERRED | Classes `data-[state=open]:bg-qc-overlay-hover`. String `radix` appears in payloads. Not a package import path in HTML. |
| PWA shell | CONFIRMED | `/manifest.webmanifest`: `display: standalone`, shortcuts Supercomputer `/supercomputer`, Create `/generate`, Canvas `/canvas`. `theme_color: #D1FE17`. |

Largest CSS: `c211bacd-PgjVzwQ6MZy9_BPV.css` ≈ **3.60 MB** (linked first in HTML). Additional tanstack CSS chunks + Securiti consent CSS.

---

## 5. Important routes (from HTML + manifest, not from navigations)

These URLs appear as **links in the home SSR HTML** or as **PWA/JSON-LD/Clerk URLs**. They were **not** loaded as documents in this HAR except `/`.

### Header nav (CONFIRMED hrefs)

| Label in UI | `href` | Notes |
| --- | --- | --- |
| Logo / Motions (`data-nav-id="Motions"`) | `/` | Home / Explore |
| Image (`data-nav-trigger="Create Image Tab"`) | `/ai/image?model=gpt_image_2` | Query selects a model |
| Video (`Create Video Tab`) | `/ai/video` | |
| Audio (`Audio Tab`) | `/audio` | |
| MCP / CLI | `/mcp` | |
| ChatGPT Plugin | `/gpt-astra` | |
| Genjutsu | `/ai/video?model=genjutsu` | Same video route, model query |
| Effects | `/effects/use` | Distinct from catalog `/effects` |
| Cinema Studio | `/generate` | **Not** `/cinema-studio` in this nav |
| Marketing Studio | `/marketing-studio` | |
| Supercomputer | `/supercomputer` | |
| 3D Jutsu | `/3d-jutsu` | Badge “New” in header text |
| Edit (nav-id `Layer`) | `/layers` | Label in i18n SSR is “Edit” |
| Academy | `/academy` | |
| Community | `/community` | |
| Contests | `/contests/higgsfield-global-film-festival` | |
| Plugins | `/plugins/after-effects` | |
| Canvas | `/canvas` | |
| Originals | `/original-series` | |
| Pricing | `/pricing` | |
| Enterprise | `https://higgsfield.ai/enterprise` | Absolute URL |
| Login / Sign up | **buttons**, no `href` in SSR | Clerk URLs exist (below) |

### Other home links (CONFIRMED)

- Effects catalog `/effects`; examples `/effects/examples/{slug}`; recreate CTA `/effects/use/{slug}` (example observed: `floating-fall`).
- Projects showcase `/@higgsfield.studio/projects/{slug}`.
- Legal: `/cookie-notice`, `/privacy-policy`, `/terms-of-use-agreement`.
- JSON-LD Cinema Studio URL: `/cinematic-video-generator` (differs from nav `/generate`).
- JSON-LD also: `/about`, `/apps`, `/team-plan`.
- i18n alternates: `/es`, `/ja`, `/ko`.

### Clerk-configured URLs (CONFIRMED from `GET clerk.higgsfield.ai/v1/environment`)

- Sign-in: `https://higgsfield.ai/auth/sign-in`
- Sign-up: `https://higgsfield.ai/auth/sign-up`
- Logout after: `https://higgsfield.ai/auth/logout`
- OAuth consent: `https://higgsfield.ai/oauth/consent`
- User profile: `https://accounts.higgsfield.ai/user`
- Waitlist / org: `accounts.higgsfield.ai`
- `after_sign_in_url` / `after_sign_up_url`: `https://beta.higgsfield.ai`

`beta.higgsfield.ai` was **not** requested in this HAR. Whether production still redirects there is UNKNOWN from navigation (only declared in Clerk config).

---

## 6. API hosts and endpoint families

### 6.1 Host inventory (CONFIRMED counts)

| Host | Requests | Role in this capture |
| --- | --- | --- |
| `assets.higgsfield.ai` | 1318 | JS, CSS, fonts (`/tanstack/assets`, `/fonts`) |
| `cdn.higgsfield.ai` | 201 | Cards, viral_hub videos, HLS, multiplier variants, user mp4s |
| `images.higgs.ai` | 169 | Image resize proxy (`?url=&w=&q=&output=webp`) |
| `higgsfield.ai` | 84 | HTML, i18n, PostHog proxy `/api/i/*`, Cloudflare image/RUM, route-preload-manifest |
| `fnf-api-gw.higgsfield.ai` | 16 | Product API gateway (`/fnf/*`) |
| `clerk.higgsfield.ai` | 11 | Auth JS + `/v1/environment`, `/v1/client` |
| `d8j0ntlcm91z4.cloudfront.net` | 11 | User videos |
| `static.higgsfield.ai` | 10 | Marketing/explore static images + promo mp4 |
| `d2ol7oe51mr4n9.cloudfront.net` | 9 | User/project stills |
| `cdn-prod.securiti.ai` | 6 | Cookie consent |
| `cms.higgsfield.ai` | 5 | Notices + explore multiplier feed |
| `o4509169762697216.ingest.de.sentry.io` | 4 | Sentry envelopes |
| `cdn.growthbook.io` | 3 | Feature flags (+ SSE) |
| `analytics.google.com` / GTM / GA audiences | 5 | GA4 `G-THH13P18SS` |
| `accounts.google.com` | 3 | Google Identity Services (One Tap) |
| `dd.higgsfield.ai` | 2 | `POST /js` (Datadog-shaped) |
| `cdn.firstpromoter.com` | 1 | Referral script |
| `static.cloudflareinsights.com` | 1 | CF beacon |

### 6.2 Product API — `fnf-api-gw.higgsfield.ai`

Observed paths only:

| Method | Path | Status | Notes |
| --- | --- | --- | --- |
| GET | `/fnf/user` | 401 | `{"detail":"Invalid or expired token"}`. Preflight requested headers `authorization,content-type,x-datadome-clientid`. |
| GET | `/fnf/user/meta` | 200 | `{"country_code":"PK","region_code":"KP","cohort":"regular"}`. No Authorization preflight (only `x-datadome-clientid`). |
| GET | `/fnf/datetime-settings` | 200 | Promo/trial windows (Seedance sales, freegens, etc.). Fetched **3 times**. |
| GET | `/fnf/subscriptions/v2/plans?plan_set_key=max_v1&with_localization=true` | 200 | Plans Basic/Pro/Max/Team/Scale with credit counts and Stripe-shaped `product_id` / `price_id`. Fetched **3 times**. |

CORS (CONFIRMED): `Access-Control-Allow-Origin: https://higgsfield.ai`, `Allow-Credentials: true`. Allowed methods `GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS`.

Allowed request headers include: `Authorization`, `X-API-Key`, `X-Fnf-User-Id`, `X-Fnf-Workspace-Id`, `X-Fnf-Surface`, `hf-access-token`, `hf-workspace-id`, `hf-surface`, `Idempotency-Key`, `x-datadome-clientid`, `hf-turnstile-response`, Sentry tracing headers.

**UNKNOWN:** all other `/fnf/*` families (jobs, generations, uploads, projects, library). They were not called.

### 6.3 CMS — `cms.higgsfield.ai`

| Path | Query | Role |
| --- | --- | --- |
| `/notices` | `lang=en` | `job_set_notices` keyed by `job_set_types` |
| `/higgsfield-multiplier/video-explore/v2` | `lang=en&source=higgsfield&size=20&cursor=1` | Paginated explore presets. `total: 35`. Types observed: `hf_mult_replace_object`, `hf_mult_motion_control`. |

### 6.4 First-party origin APIs — `higgsfield.ai`

| Path family | Role |
| --- | --- |
| `/_i18n/*` | Locale catalogs |
| `/api/route-preload-manifest` | Router code-split map |
| `/api/i/*` | Reverse-proxied PostHog (`phc_…` in `/api/i/array/…/config.js`; `/api/i/e/`, `/api/i/i/v0/e/`, `/api/i/flags/`) |
| `/cdn-cgi/image/…` | Cloudflare image resizing wrapping `cdn.higgsfield.ai` / `static.higgsfield.ai` URLs |
| `/cdn-cgi/challenge-platform/…`, `/cdn-cgi/rum` | Cloudflare bot/RUM |
| `/auxiliary/notifications-sw.js` | Notification service worker |
| `/manifest.webmanifest` | PWA |

---

## 7. Authentication

| Claim | Confidence | Evidence |
| --- | --- | --- |
| Clerk is the auth provider | CONFIRMED | `<meta name="hf-clerk-mode" content="hosted">`. Scripts `@clerk/clerk-js@6.25.10` and `@clerk/ui@1.26.1` from `clerk.higgsfield.ai`. `window.__clerk_init_state` present. |
| Hosted Clerk Frontend API | CONFIRMED | `preconnect` + all Clerk traffic to `https://clerk.higgsfield.ai`. Publishable key is a live `pk_live_…` bound to that host (value omitted here). |
| Unauthenticated home is allowed | CONFIRMED | Full SSR home, Clerk `isAuthenticated: false`, empty client sessions. |
| Authenticated product API requires a token | CONFIRMED | `/fnf/user` 401 without a valid token. Preflight includes `Authorization`. |
| Sign-in strategies | CONFIRMED | Clerk `identification_strategies`: email, Apple, GitHub, Google, Microsoft. `preferred_sign_in_strategy: password`. `first_factors` also include `email_code`, `google_one_tap`, `enterprise_sso`, `saml`. Phone/username off. Password required. Captcha enabled on sign-up. Organizations enabled in Clerk settings. |
| Google One Tap assets loaded | CONFIRMED | `accounts.google.com/gsi/client`, `/gsi/status`, `/gsi/style`. |
| Bot/fraud: DataDome | CONFIRMED | Request header `x-datadome-clientid` (11 times). CORS allows `x-datadome-clientid`. |
| Cloudflare JS challenge | CONFIRMED | `/cdn-cgi/challenge-platform/…` GET + POST. |
| How Login/Sign up buttons navigate | UNKNOWN | They are `<button>`s, not links. Click was not recorded. |
| Session cookie names / JWT shape | UNKNOWN | Cookies stripped from HAR. No `Authorization` value captured on the 401 (header likely omitted by DevTools privacy or never attached). |

---

## 8. Data loading

Home data loading that **was** observed:

1. **SSR HTML** already contains Explore layout, nav, effect cards, project list, JSON-LD.
2. **i18n JSON** after paint: root + home delta + full `en` catalog (~2.0 MB).
3. **CMS** notices + multiplier feed (cursor pagination).
4. **FNF gateway** user (fail), user/meta, datetime-settings, subscription plans.
5. **GrowthBook** encrypted feature payload + SSE `text/event-stream` `/sub/sdk-…`.
6. **Clerk** environment + client.
7. **Media**: Cloudflare-resized webp, `images.higgs.ai` proxy, `cdn.higgsfield.ai` mp4/HLS.

| Claim | Confidence | Evidence |
| --- | --- | --- |
| Home is not an empty SPA shell | CONFIRMED | 580 KB HTML with real cards and copy. |
| Explore video presets are CMS-driven | CONFIRMED | `/higgsfield-multiplier/video-explore/v2` items include `title`, `job_set_type`, `original_video`, `variants[]` of types `edit` / `original` / `generation`. |
| Job-set catalog is **not** fully loaded on home | STRONGLY INFERRED | Notices mention many `job_set_types`, but no models/list endpoint was called. |
| React Query / TanStack Query | UNKNOWN | Not identified by name in HTML. Duplicate GET of plans/datetime (3×) could be multiple mounts; not proof of a library. |
| Authenticated library/history feeds | UNKNOWN | Not requested. Manifest has `/_private/debug/library-feed-states` which only names the concept. |

---

## 9. Media / CDN architecture

| Layer | Host / pattern | Confidence |
| --- | --- | --- |
| Edge HTML + image transform | `higgsfield.ai/cdn-cgi/image/fit=scale-down,format=webp,onerror=redirect,width={w},quality=85/{absolute-url}` | CONFIRMED |
| App static CDN | `assets.higgsfield.ai` | CONFIRMED |
| Marketing/product static | `static.higgsfield.ai` (`/explore/image-generate-block/…`, `/promotions/…`, `/public/…`) | CONFIRMED |
| Generated/catalog media CDN | `cdn.higgsfield.ai` paths: `/card/`, `/viral_hub/`, `/hls/video_input/{uuid}/index.m3u8`, `/higgsfield_multiplier_*`, `/genjutsu/`, `/user_{id}/hf_{timestamp}_{uuid}_min.mp4` | CONFIRMED |
| Image optimizer proxy | `images.higgs.ai/?default=1&output=webp&url={encoded}&w={}&q=85` wrapping CloudFront or cdn URLs | CONFIRMED |
| User object storage via CloudFront | `d2ol7oe51mr4n9.cloudfront.net/user_{id}/{uuid}.{jpg,png}` and `d8j0ntlcm91z4.cloudfront.net/user_{id}/hf_….mp4` (some `_wm3` filenames) | CONFIRMED |
| HLS playback | `application/vnd.apple.mpegurl` + `video/mp2t` at 480p (`index_480p.m3u8`, `_000.ts`, `_001.ts`). Range requests status **206**. | CONFIRMED |
| Progressive mp4 | Many `206 video/mp4` (range). Some viral_hub URLs also logged status `0` / `x-unknown` then 206 — cancelled/replayed media requests. | CONFIRMED |

Upload / signed-PUT destinations: **UNKNOWN** (no uploads).

---

## 10. Generation-related requests

**No user-initiated generation was observed.**

What *is* generation-adjacent in the HAR:

| Signal | Confidence | What it is |
| --- | --- | --- |
| CMS notices `job_set_types` | CONFIRMED | Names models/tools the backend knows: `ai_influencer`, `veo3`, `veo3_speak`, `gemini_omni`, `sora2_video`, `sora2_video_deflicker`, `sora2_video_upscale`, `sora-2-max`, `kling` (+ `kling-v2-1`, `kling-v2-1-master`), `seedance_2_0`, `seedance_2_0_mini`. |
| Multiplier explore `job_set_type` | CONFIRMED | `hf_mult_replace_object`, `hf_mult_motion_control`. Variants include `type: "generation"` pointing at already-rendered CDN mp4s — **playback of samples**, not a live job. |
| i18n copy names models | CONFIRMED | Seedance 2.5 / 2.0, Nano Banana Pro, Kling 3.0, Cinema Studio 4.0, Soul / Soul 2.0, GPT-6 Astra, Gemini Omni Flash, Infinite Talk, etc. Copy ≠ a live request. |
| Create endpoints | UNKNOWN | No `/fnf/…/jobs`, `/generate`, `/predictions`, websocket, or polling URL besides GrowthBook SSE. |

---

## 11. Localization

| Claim | Confidence | Evidence |
| --- | --- | --- |
| Default document locale `en` | CONFIRMED | `<html lang="en">`. |
| Catalog files | CONFIRMED | `window.__HF_I18N__.assets`: `en`, `es`, `ja`, `ko`, `de` under `/_i18n/{lang}.{hash}.json`, all `selfContained: true`. |
| Route-scoped catalogs | CONFIRMED | `window.__I18N_ROUTES__` for this page: `root.fe1ab0ce22.json` + `delta.ed88324bfd.json` for home. Both preloaded as `fetch` with `fetchPriority="high"`. |
| Only English fetched | CONFIRMED | Network: `/_i18n/en.d2d422acd2.json` (~2.01 MB), plus the two route files. No `de`/`es`/`ja`/`ko` JSON requests. |
| Language UI chrome | CONFIRMED | `/country-flags/English.png`; `hfnav-language` skeleton in header. |
| CMS `lang=en` | CONFIRMED | notices + multiplier queries. |

UI of the language switcher (open menu, persist locale): **UNKNOWN**.

---

## 12. Prefetching

| Mechanism | Confidence | Evidence |
| --- | --- | --- |
| Image preload in `<head>` | CONFIRMED | Multiple `<link rel="preload" as="image">` for explore cards, viral_hub, Seedance poster, logos (Seedance, Claude, Cinema Studio, Supercomputer). |
| Font preload | CONFIRMED | Inter + Space Grotesk woff2 `crossorigin`. |
| i18n preload | CONFIRMED | `rel="preload" as="fetch"` for en root + delta JSON. |
| Modulepreload of entry graph | CONFIRMED | 7 `rel="modulepreload"` tanstack JS files + entry `<script type="module">`. |
| Clerk script preload | CONFIRMED | `@clerk/ui@1.26.1/dist/ui.browser.js` `as="script" fetchPriority="high"`. |
| DNS/preconnect | CONFIRMED | `clerk.higgsfield.ai`, `assets.higgsfield.ai`, `cdn-prod.securiti.ai`, Google fonts (fonts themselves not fetched in this HAR). |
| Route-level JS prefetch | STRONGLY INFERRED | `/api/route-preload-manifest` (~448 KB) plus **1,187 unique** tanstack JS files while remaining on `/`. `_priority: Low` on 1,072 requests. Consistent with hover/idle route preloading, not with visiting 1,187 pages. |
| Intent prefetch vs eager dump | UNKNOWN | HAR cannot show hover vs timer. Volume is far beyond the home modulepreload list (7 files). |

---

## 13. Major JS / CSS payloads

Decoded body sizes from HAR `content.size` (transfer size often `-1` / not stored):

| Asset | Size | Role |
| --- | --- | --- |
| `c211bacd-PgjVzwQ6MZy9_BPV.css` | ~3.60 MB | Primary stylesheet (HTML head) |
| `c211bacd-ZaUa5pSVVRPOjGv-.js` | ~1.10 MB ×2 requests | Large runtime chunk (modulepreloaded) |
| `c211bacd-C0IuXZcGnVOqPtXz.js` | ~620 KB ×2 | Runtime (modulepreloaded) |
| Securiti `cookie-consent-sdk-1.150.0.js` | ~598 KB | Consent |
| GTM `gtag/js?id=G-THH13P18SS` | ~572 KB | Analytics |
| `c211bacd-MNUNRkRO4PIBal6y.js` | ~564 KB | Runtime (modulepreloaded) |
| `c211bacd-jRaKKRuXa7_XQUss.js` | ~474 KB | Appears on FNF API initiator stacks |
| `/api/route-preload-manifest` | ~447 KB | Route → chunk map |
| Clerk `ui-common_*.js` | ~443 KB | Clerk UI |
| `clerk.browser.js` | ~285 KB | Clerk |
| Home HTML | ~580 KB | SSR document |
| `/_i18n/en.….json` | ~2.01 MB | Full English catalog (`scope=all`) |

Totals (approx.): tanstack JS unique files **1,187**; tanstack CSS unique **57**; JS content bytes summed across requests ~**19.1 MB** (includes duplicates). This is the captured session, not a minimum home bundle.

---

## 14. Major product domains visible from routes and requests

Observed as **nav, copy, routes, or CMS**, not as walked flows:

| Domain | HAR visibility |
| --- | --- |
| Home / Explore / Motions | SSR page + viral_hub + multiplier CMS |
| Image create | Nav `/ai/image?model=gpt_image_2`; i18n Nano Banana Pro / GPT Image |
| Video create | Nav `/ai/video`; Genjutsu query; Seedance promo media |
| Audio | Nav `/audio`; speech logos `elevenlabs`, `minimax`, `qwen-audio`, `seed-speech` |
| Effects + Recreate | `/effects`, `/effects/use`, `/effects/examples/*`, Recreate overlay → `/effects/use/{slug}` |
| Cinema Studio | Nav → `/generate`; JSON-LD `/cinematic-video-generator`; manifest `/_private/cinema-studio` |
| Marketing Studio | Nav `/marketing-studio`; i18n “See what creators and brands are making…” |
| Supercomputer | Nav `/supercomputer`; PWA shortcut; large `/_private/supercomputer/*` tree (chat, apps, employees, marketplace, files, gaming, memory, plugin) |
| Edit | Header “Edit” → `/layers`; also `/_private/edit/*` and `/_private/video-edit`, `/_private/video-editor` |
| Canvas | `/canvas`; PWA shortcut; `/_private/canvas/$id` |
| Community | `/community` + community subroutes in manifest |
| Projects | Home “Explore the inside of every project”; `/@user/projects/slug`; `/community/projects`; profile projects |
| MCP / CLI / ChatGPT plugin | `/mcp`, `/gpt-astra` |
| 3D Jutsu | `/3d-jutsu` |
| Academy, Contests, Plugins, Originals, Pricing, Enterprise | Nav links |
| Auth / billing | Clerk + `/fnf/subscriptions/v2/plans` |
| Agent / Astra | i18n “Agent powered by GPT-6 Astra”; `/gpt-astra`; `/start/agent` in manifest |

---

## 15. Third-party / platform services (CONFIRMED)

- **Clerk** — auth.
- **Cloudflare** — HTML host, image resizing, challenge, insights, RUM.
- **Sentry** — `ingest.de.sentry.io` envelopes; Sentry debug IDs prepended to JS chunks.
- **GrowthBook** — encrypted features + SSE.
- **PostHog** — proxied at `/api/i/` (project key prefix `phc_`).
- **Google Analytics 4** — `G-THH13P18SS`.
- **Google Identity Services**.
- **Securiti** — cookie banner.
- **FirstPromoter** — `fpr.js`.
- **DataDome** — client id header on API.
- **Datadog** — STRONGLY INFERRED from `dd.higgsfield.ai/js`.
- **Stripe** — STRONGLY INFERRED from `prod_` / `price_` ids on plans (Clerk `commerce_settings.billing.stripe_publishable_key` is `null` in this environment payload, so billing may be custom via FNF, not Clerk Billing).

---

## 16. Errors observed

| Status | URL | Meaning in this capture |
| --- | --- | --- |
| 401 | `fnf-api-gw…/fnf/user` | Expected for logged-out session |
| 404 | `static.higgsfield.ai/canvas-banner-desktop.webp` | Missing static asset; `canvas-banner-bg-desktop.webp` 200 |
| 302 | `/cdn-cgi/challenge-platform/scripts/jsd/main.js` | Cloudflare redirect to hashed script |

---

## 17. What this HAR cannot tell us

Explicit gaps (do not fill from memory of the marketing site):

1. **Any logged-in UX** — library, credits widget, settings, teams, history.
2. **Actual create/generation pipelines** — request schema, job polling, websockets, progress UI, failure/refund.
3. **Upload / reference-image / video-input** — storage host, signed URLs, size limits (i18n mentions PNG/JPG/clipboard; not observed).
4. **Model picker contents and defaults** beyond the single query `model=gpt_image_2` / `model=genjutsu` on nav links.
5. **Auth click path** — modal vs `/auth/sign-in` vs Clerk hosted components; SSO completion; `beta.higgsfield.ai` redirect in real navigation.
6. **Client-side routers for `/_private/*` URL mapping** — whether the browser path drops the `_private` prefix (very likely, not proven by a document request).
7. **Cinema Studio vs `/generate` vs `/cinematic-video-generator` vs `/_private/cinema-studio`** — three URL families, one nav click target.
8. **Edit vs Layers vs video-editor** — nav goes to `/layers`; other edit routes unused.
9. **Supercomputer internals** — chat, employees, marketplace, connectors: routes only.
10. **Cookie/session header names** — stripped.
11. **GrowthBook flag names** — payload encrypted.
12. **Whether prefetch is hover-based** — only volume + Low priority.
13. **Mobile app / `(mobile)/*` routes** — in manifest, not loaded (`user-agent` is desktop Chrome).
14. **Non-English UI** — declared, not exercised.
15. **Payment checkout** — plan JSON only; no Stripe.js, no `/pricing` document.
16. **WebSockets** — none. EventSource is GrowthBook only.
17. **Screenshot-level layout, empty/error states, keyboard flows, accessibility beyond SSR attributes.**
18. **Rate limits, credit debit timing, commercial-use enforcement** — i18n claims exist; no transaction.

Treat the HAR as a map of **hosts, routes, and the unauthenticated home network**, not as a substitute for walking the product.
