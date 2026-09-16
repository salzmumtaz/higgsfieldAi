# Research plan — next live walkthroughs

**Goal:** replace UNKNOWN fields in `FLOW_MAP.md` with screenshots and notes from the live site. The HAR is not a substitute for this.

**Do not:** write app code, scaffold a frontend, freeze rebuild scope, or bulk-download CDN media.

**Do:** walk in this order, desktop first (the HAR is Chrome 152 desktop). Optional mobile pass after the desktop spine is done.

Evidence folder to create when you start: `research/evidence/` (png + a short `NOTES.md` per session). Filenames below are the contract.

---

## Session 0 — setup (15 min)

1. Use a clean profile or an incognito window so the first pass matches the HAR (logged out).
2. Open DevTools → Network. Filter Fetch/XHR. Do **not** export another 200 MB media HAR unless a flow needs it; prefer a **filtered HAR** (XHR/fetch only) per flow.
3. Resolve cookie consent (Securiti) the same way a new user would; screenshot the banner once (`00-consent.png`).
4. Keep `research/FLOW_MAP.md` open and fill answers in `research/evidence/NOTES.md` rather than editing guessed behavior into analysis files until the walk is done.

---

## Session 1 — logged-out spine (highest priority)

Walk **without** signing in. This is what the HAR started and did not finish.

| # | URL to type or click | Why | Screenshots |
| --- | --- | --- | --- |
| 1.1 | `https://higgsfield.ai/` | Confirm current home vs HAR SSR. Scroll full page. Hover an effect card until Recreate appears. | `01-home-top.png`, `01-home-effects.png`, `01-home-projects.png`, `01-home-footer.png` |
| 1.2 | Header **Image** | Lands on `/ai/image?model=gpt_image_2`? Gate vs empty creator? | `03-image-logged-out.png` |
| 1.3 | Header **Video** then **Genjutsu** | `/ai/video` vs `?model=genjutsu` | `04-video-logged-out.png`, `04-genjutsu-logged-out.png` |
| 1.4 | Header **Audio** | Provider list, empty state, gate | `06-audio-logged-out.png` |
| 1.5 | Header **Effects** + heading **Visual Effects** `/effects` | Catalog vs `/effects/use` | `05-effects-use-logged-out.png`, `05-effects-catalog-logged-out.png` |
| 1.6 | One **Recreate** from home | Upload affordance vs login modal | `05-recreate-logged-out.png` |
| 1.7 | Header **Cinema Studio** | Confirm URL is `/generate` | `07-generate-logged-out.png` |
| 1.8 | Manually open `/cinematic-video-generator` | Alias or different page? | `07-cinematic-video-generator-logged-out.png` |
| 1.9 | Header **Marketing Studio** | | `08-marketing-logged-out.png` |
| 1.10 | Header **Supercomputer** | | `09-supercomputer-logged-out.png` |
| 1.11 | Header **Edit** | Confirm `/layers` | `10-layers-logged-out.png` |
| 1.12 | Header **Canvas** | Note broken banner if still 404 | `11-canvas-logged-out.png` |
| 1.13 | Header **Community** | | `12-community-logged-out.png` |
| 1.14 | One home **project** `/@…/projects/…` | Breakdown UI | `13-project-public.png` |
| 1.15 | **Login** and **Sign up** clicks (do not finish signup yet) | Modal vs `/auth/sign-in` | `02-login.png`, `02-signup.png` |
| 1.16 | `/pricing` | Compare to plans JSON | `14-pricing.png` |
| 1.17 | `/mcp`, `/gpt-astra`, `/3d-jutsu` | Adjacent surfaces | `15-mcp.png`, `15-gpt-astra.png`, `15-3d-jutsu.png` |

**Network to grab (XHR only)** if any appear: `/fnf/*` besides user/meta/plans/datetime; any models/list; any job endpoint. Save as `research/evidence/logged-out.xhr.har`.

**Stop condition:** every header item has a screenshot and a recorded URL.

---

## Session 2 — authentication (required before create APIs)

1. Complete sign-up or sign-in with a throwaway account.
2. Screenshot the **first screen after auth** (`02-after-login.png`) and the URL bar (watch for `beta.higgsfield.ai`).
3. Export a **cookie-redacted** XHR HAR of the login sequence if possible: Clerk `/v1/*` then first successful `GET /fnf/user`.
4. Record headers you can see in DevTools (names only in notes if values are secrets): `Authorization`, `hf-access-token`, `X-Fnf-Workspace-Id`, `X-Fnf-Surface`.
5. Screenshot any onboarding quiz / credit gift / paywall (`02-onboarding.png`).

If you cannot create an account, stop and document the blocker (captcha, region, payment). Do not invent the logged-in IA.

---

## Session 3 — logged-in create surfaces (do not bulk-generate)

Repeat Session 1 destinations **logged in**. Additional captures:

| Flow | Minimum live actions | Extra screenshots |
| --- | --- | --- |
| Image | Open model picker; photograph every visible model name; open settings; **do not** need a successful gen if cost is high — a disabled Generate + tooltip is evidence | `03-image-models.png`, `03-image-settings.png`, `03-image-ref-upload.png` |
| Video | Same; include Seedance/Kling/Veo/Sora presence and any retirement banners (notices in HAR) | `04-video-models.png`, `04-video-notice-banners.png` |
| Effects Recreate | Upload one small file **or** capture the dropzone if you refuse to upload | `05-recreate-dropzone.png` |
| Audio | Voice list + generate button state | `06-audio-logged-in.png` |
| Cinema / Generate | Map modes (`$mode/$modelVersion` from manifest) | `07-generate-modes.png` |
| Marketing Studio | Projects vs generations tabs | `08-marketing-logged-in.png` |
| Supercomputer | Empty chat, leftover nav (apps/marketplace/files) | `09-supercomputer-logged-in.png` |
| Layers / Edit | New project vs empty | `10-layers-logged-in.png` |
| Canvas | New canvas | `11-canvas-logged-in.png` |

**One generation (optional, last):** cheapest image or effect. Capture:

- Request URL + method + JSON keys (screenshot of DevTools, redact tokens).
- Polling/SSE/websocket if any.
- In-progress UI.
- Result UI + where it appears in history.

Save as `research/evidence/one-job.xhr.har`.

---

## Session 4 — history, projects, community publish

Still no scope freeze. Questions that change rebuild size:

1. Where is **My work / Library / History**? (i18n has “History”; mobile manifest has `/(mobile)/library` and `/(mobile)/gallery`.)
2. Can a generation be saved into **Projects**, **Canvas**, **Cinema**, **Marketing Studio** independently?
3. Community: can you publish from the result screen?
4. Profile URL `/profile/{username}` vs `/@username/projects/…`.

Screenshots: `16-history-or-library.png`, `16-profile.png`, `16-publish.png`.

---

## Session 5 — leftovers (only if time)

Academy, contests, originals, AE plugin, enterprise, upscale, character, photodump, lipsync, faceless, mixed media, language switch (`/es`), mobile viewport of home + one creator.

Screenshot prefix `17-`.

---

## Evidence standards

For each flow, NOTES.md should answer in one line each:

- URL bar
- Auth required? (yes/no/partial)
- Primary input controls
- Model/tool control
- Upload/reference
- Generate control + cost if shown
- Where output goes
- Follow-up actions visible
- API host/path if seen (`fnf-api-gw`, `cms`, other)

Screenshots: full browser chrome **including URL bar**. Desktop 1440px wide unless specified mobile.

Do not screenshot entire media carousels frame-by-frame. One representative card row is enough.

---

## Order of truth

1. Live walk + screenshots  
2. Small XHR HARs of gated/create calls  
3. Existing `higgsfield.ai.har` (home/unauthenticated platform map)

When these disagree, the live walk wins for UX; the HAR wins for hostnames already observed.

---

## After this plan (not now)

Only when Sessions 1–3 notes exist:

- Decide rebuild **slice** (still not “the whole product”).
- Then, and only then, choose stack/scope for implementation.

That decision is out of scope for this reconnaissance turn.
