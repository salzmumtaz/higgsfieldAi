# Flow map — live Higgsfield walkthrough tracks

**Purpose:** a checklist for **manually** using the live product at `https://higgsfield.ai`. This is not an implementation spec and not a claim that every step below was seen in the HAR.

**HAR coverage:** one unauthenticated load of `/` on 2026-09-16. See `research/HAR_ANALYSIS.md`. Anything not observed there is **UNKNOWN** until the live walk.

**How to use:** for each track, walk the live site, fill the UNKNOWN fields, and drop screenshots into `research/evidence/` using the filenames in `research/RESEARCH_PLAN.md`. Do not invent UI that is not on screen.

Confidence in this file:

- **CONFIRMED** — HAR (HTML, nav href, route manifest, or network).
- **STRONGLY INFERRED** — HAR plus naming, still needs a live click.
- **UNKNOWN** — must be captured live.

Shared unknowns that apply to almost every create surface until proven otherwise:

- Exact logged-in vs logged-out gating (401 on `/fnf/user` proves *some* API is gated; home itself is public).
- Credit cost, queue, failure, refund.
- Project save / history / “use in canvas” type follow-ups.
- Upload limits and reference-asset behavior.

---

## Track template (repeat per flow)

Every section below uses the same fields. If a field is UNKNOWN, leave it UNKNOWN and capture it on the walk.

---

## 1. Home / Explore

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED: `GET /`. Header `data-nav-id="Motions"` also points at `/`. Google referrer observed. |
| **User goal** | Discover featured models, community media, effects, projects; enter a create surface. |
| **Steps** | UNKNOWN beyond: land on `/` → see header + main Explore. HAR shows SSR cards (viral_hub, Seedance promo, Cinema/Supercomputer/Claude/Seedance generate-block images), Visual Effects row, Recreate overlays, project list “Explore the inside of every project”. |
| **Inputs** | UNKNOWN whether home has a global prompt box vs only CTAs. i18n has “Generate AI videos” / “Generate high-quality visuals” — copy only. |
| **Model/tool selection** | STRONGLY INFERRED from cards/CTAs: Seedance 2.5, Nano Banana Pro, Cinema Studio, Supercomputer, MCP/Claude, effects presets. Not clicked. |
| **Settings/configuration** | UNKNOWN on home (likely none). |
| **Upload/reference behavior** | UNKNOWN on home. |
| **Loading/generation state** | N/A for create. Media: HLS 480p + ranged mp4 for in-page video. Canvas banner 404 for one static file. |
| **Result state** | Explore grid / hub playback. CMS multiplier feed `cursor=1&size=20` of 35 items. |
| **Follow-up actions** | CONFIRMED links: Recreate → `/effects/use/{slug}`; example → `/effects/examples/{slug}`; Visual Effects heading → `/effects`; Start generating → `/effects/use`; project URLs `/@…/projects/…`. |
| **Project/history behavior** | Public project showcase only. Personal history UNKNOWN (logged out). |
| **Auth gating** | Home allowed logged out (CONFIRMED). Whether Recreate/generate CTAs immediately demand login: UNKNOWN. |
| **Screenshots/evidence** | HAR HTML + network. Need live: `01-home-desktop.png`, `01-home-scrolled.png`, `01-home-mobile.png`. |
| **Unanswered questions** | Is “Motions” the Explore label or a distinct motions gallery? What happens on card hover vs click? Is the multiplier feed “Edit / Original / Generation” a UI toggle? |

---

## 2. Authentication

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED UI: header buttons `Login` / `Sign up` (no href in SSR). CONFIRMED Clerk URLs: `/auth/sign-in`, `/auth/sign-up`. Manifest also: `/auth/login`, `/auth/logout`, `/auth/sso`, `/auth/sso-callback`, `/auth/email/*`, `/sign-in`, `/oauth/consent`. |
| **User goal** | Create session so `/fnf/user` succeeds. |
| **Steps** | UNKNOWN. Must click Login and Sign up separately. Record modal vs full page. |
| **Inputs** | CONFIRMED Clerk config: email + password required; OAuth Apple, GitHub, Google, Microsoft; email code; Google One Tap scripts loaded; sign-up captcha on. Phone/username off. |
| **Model/tool selection** | N/A. |
| **Settings/configuration** | Organizations enabled in Clerk. Profile host `accounts.higgsfield.ai` — UNKNOWN if used in-app. |
| **Upload/reference behavior** | N/A. |
| **Loading/generation state** | Cloudflare challenge + DataDome may appear. Capture if they block. |
| **Result state** | UNKNOWN. Clerk `after_sign_in_url` = `https://beta.higgsfield.ai` — confirm whether production actually lands on beta, `/`, or last URL. |
| **Follow-up actions** | UNKNOWN: onboarding quiz (`/_private/onboarding`, `/(public)/welcome-quiz`), paywall, credit grant (`freegen_card_bonus` 40 credits in datetime-settings). |
| **Project/history behavior** | UNKNOWN until `/fnf/user` 200. |
| **Auth gating** | This *is* the gate. |
| **Screenshots/evidence** | `02-login.png`, `02-signup.png`, `02-oauth-options.png`, `02-after-login-home.png`. Optional HAR of login (cookies redacted). |
| **Unanswered questions** | Hosted Clerk vs embedded. Does `/fnf/user` then send `Authorization` and/or `hf-access-token`? Workspace header `X-Fnf-Workspace-Id`? |

---

## 3. Image generation

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED nav: `/ai/image?model=gpt_image_2`. Manifest `/_private/ai/image`. Other image-ish routes: `/nano-banana-pro`, `/mobile/image/gpt_image_2_5_sunburst`, Soul routes, `/_private/flow/image/*`. |
| **User goal** | Generate stills from prompt and/or references. |
| **Steps** | UNKNOWN. Walk: header Image → note default model from query → change model → submit one prompt **without** spending if gated; if gated, capture the gate. |
| **Inputs** | UNKNOWN: prompt, aspect, count, references. i18n mentions PNG/JPG/clipboard for some tools — may not be this screen. |
| **Model/tool selection** | Query param `model=gpt_image_2` CONFIRMED as entry hint. Notices mention `gemini_omni` retirement. i18n: Nano Banana Pro, GPT Image, Soul. Live picker is the source of truth. |
| **Settings/configuration** | UNKNOWN. Manifest has `/_private/generate/$mode/$modelVersion/settings` — may be a different “Generate” app. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. No job API in HAR. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | UNKNOWN: upscale (`/_private/upscale`), edit (`/layers`, `/_private/edit/canvas/$imageId`), publish to community. |
| **Project/history behavior** | UNKNOWN. |
| **Auth gating** | UNKNOWN. Expect login or credits; prove it. |
| **Screenshots/evidence** | `03-image-empty.png`, `03-image-models.png`, `03-image-settings.png`, `03-image-in-progress.png` (if any), `03-image-result.png`. |
| **Unanswered questions** | Is `/ai/image` the same shell as `/generate/...`? What does `gpt_image_2` map to in the UI name? |

---

## 4. Video generation

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED: `/ai/video`. Genjutsu: `/ai/video?model=genjutsu`. Manifest `/_private/ai/video`, `/_private/flow/video/*`. |
| **User goal** | Text-to-video / image-to-video / named models (Seedance, Kling, Veo, Sora, Wan, …). |
| **Steps** | UNKNOWN. Open `/ai/video` and `/ai/video?model=genjutsu` as two passes. |
| **Inputs** | UNKNOWN. |
| **Model/tool selection** | Notices CONFIRMED backend types: Kling 2.1 retiring, Veo 3 retiring vs 3.1, Sora 2 removal date, Seedance 2.0 Fast/Mini geo-limited (US called out; this capture geo is **PK**). i18n: Seedance 2.5 “most advanced AI video model”. |
| **Settings/configuration** | UNKNOWN: duration, resolution (1080p/4K copy in i18n), audio-sync (“Cinematic videos with synchronized audio”). |
| **Upload/reference behavior** | UNKNOWN. HLS path `cdn.higgsfield.ai/hls/video_input/{uuid}` names an input media type used in explore samples. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. Explore only showed **sample** mp4/HLS, not a job you started. |
| **Follow-up actions** | UNKNOWN: extend, upscale, lipsync, effects, cinema. |
| **Project/history behavior** | UNKNOWN. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `04-video-empty.png`, `04-video-model-list.png`, `04-genjutsu.png`, `04-video-settings.png`, `04-video-gate.png`. |
| **Unanswered questions** | Relationship to Cinema Studio `/generate`. Seedance sale banners vs actual model list. |

---

## 5. Effects / Recreate

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED: nav Effects → `/effects/use`. Catalog heading `/effects`. Recreate on a hub card → `/effects/use/{slug}` (example `floating-fall`). Examples `/effects/examples/{slug}`. Home listed many slugs (act-natural, burning-man, cutout, …). |
| **User goal** | Apply a named visual-effect preset to user media (Recreate) or browse examples. |
| **Steps** | UNKNOWN. Suggested: `/effects` catalog → open one example → Recreate → observe upload vs generate. |
| **Inputs** | UNKNOWN. Recreate implies a source video/image. |
| **Model/tool selection** | Preset slug is the selector (CONFIRMED in URLs). |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN — this is the critical live question for Recreate. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | UNKNOWN. |
| **Project/history behavior** | UNKNOWN. |
| **Auth gating** | UNKNOWN. Recreate buttons exist on public home (CONFIRMED). |
| **Screenshots/evidence** | `05-effects-catalog.png`, `05-effects-example.png`, `05-effects-use.png`, `05-recreate-upload.png`. |
| **Unanswered questions** | `/effects` vs `/effects/use` vs `/viral-effects` vs `/collection/effects`. Is Recreate always an effect preset? |

---

## 6. Audio

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED nav `/audio`. Manifest `/_private/audio`, `/_private/flow/speech/*`. Home requested `/speech/{elevenlabs,minimax,qwen-audio,seed-speech}.svg`. |
| **User goal** | Speech / voice (and possibly music). Product meta description includes “voice content”. |
| **Steps** | UNKNOWN. Open `/audio` logged out, then logged in if gated. |
| **Inputs** | UNKNOWN: text, voice, duration. i18n mentions Infinite Talk / talking-head — may be a different flow (`/_private/flow/avatar/preset/infinite-talk`). |
| **Model/tool selection** | Provider logos STRONGLY INFERRED: ElevenLabs, MiniMax, Qwen Audio, Seed Speech. Confirm on screen. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN (voice clone?). |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | UNKNOWN: use in video / lipsync-studio. |
| **Project/history behavior** | UNKNOWN. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `06-audio.png`, `06-audio-providers.png`, `06-audio-settings.png`. |
| **Unanswered questions** | Is Audio TTS only, or also music / SFX? Overlap with Speak / Veo speak (`veo3_speak` in notices)? |

---

## 7. Cinema Studio

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED nav label “Cinema Studio” → **`/generate`**. JSON-LD “Cinema Studio” → `/cinematic-video-generator`. Manifest `/_private/cinema-studio` **and** `/_private/generate` tree (`/$mode/$modelVersion`, folders, favorites, pricing). Home card image `cinema-studio.png`. |
| **User goal** | i18n: “Create cinematic scenes effortlessly” / Cinema Studio 4.0. |
| **Steps** | UNKNOWN. Must open **all three URLs** and record whether they alias. |
| **Inputs** | UNKNOWN. |
| **Model/tool selection** | UNKNOWN. May be a mode inside Generate rather than a separate app. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | UNKNOWN. |
| **Project/history behavior** | Generate manifest includes `folders/$folderId`, `favorites` — STRONGLY INFERRED library chrome; unproven. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `07-generate.png`, `07-cinematic-video-generator.png`, `07-cinema-studio-if-distinct.png`. |
| **Unanswered questions** | Which URL is canonical? How does this differ from `/ai/video`? |

---

## 8. Marketing Studio

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED nav `/marketing-studio`. Manifest `/_private/marketing-studio` with `favorites`, `generations`, `projects`, `p/$projectId`. Also `/(public)/marketing-studio-community`. |
| **User goal** | i18n: “See what creators and brands are making with Marketing Studio.” UGC/ad-oriented copy exists (“START YOUR VIDEO AD”, “Create stunning user-generated content promos”). |
| **Steps** | UNKNOWN. Open studio vs community. |
| **Inputs** | UNKNOWN. |
| **Model/tool selection** | UNKNOWN. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN (product shots, avatars?). |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | UNKNOWN. |
| **Project/history behavior** | Manifest explicitly has `projects` + `generations` under this studio. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `08-marketing-studio.png`, `08-marketing-projects.png`, `08-marketing-community.png`. |
| **Unanswered questions** | Separate product vs skin on `/generate`? Required brand kit? |

---

## 9. Supercomputer

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED `/supercomputer`. PWA shortcut. Manifest: chat `$chatId`, `new`, `incognito`, `apps`, `employees`, `marketplace`, `files`, `memory`, `connectors`, `plugin`, `projects`, `gaming`, `websites`, `pricing`, `embed`. Home: “One superagent for your entire creative stack” / “Try Supercomputer” / GPT-6 Astra copy. |
| **User goal** | Agent/chat over the creative stack (marketing claim). |
| **Steps** | UNKNOWN. Open `/supercomputer` logged out first. |
| **Inputs** | UNKNOWN: chat, file upload (`files` route), connectors. |
| **Model/tool selection** | UNKNOWN. i18n “Agent powered by GPT-6 Astra”; plugin `/gpt-astra` is a **separate nav item**. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. Likely streaming; **no** chat SSE/websocket in this HAR. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | Marketplace apps/employees/skills — route names only. |
| **Project/history behavior** | `supercomputer/projects/$projectId` in manifest. |
| **Auth gating** | UNKNOWN. High likelihood of login; prove it. |
| **Screenshots/evidence** | `09-supercomputer-gate-or-empty.png`, `09-supercomputer-nav.png`, `09-supercomputer-marketplace.png`. |
| **Unanswered questions** | Chat vs “employees” vs MCP. Relationship to `/gpt-astra` and `/mcp`. |

---

## 10. Edit

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED header label “Edit” (i18n) with `data-nav-id="Layer"` → **`/layers`**. Other edit-ish routes: `/_private/edit/$projectId`, `/_private/edit/canvas/$imageId/$jobSetId`, `/_private/video-edit`, `/_private/video-editor`, i18n “Edit Image”, “Advanced video editing”. |
| **User goal** | UNKNOWN: layer-based still editor vs timeline video editor vs both. |
| **Steps** | UNKNOWN. Open `/layers` then search in-UI for “Edit” / video editor. |
| **Inputs** | UNKNOWN. |
| **Model/tool selection** | UNKNOWN. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. Versions: `/layers/$projectId/$versionId`. |
| **Follow-up actions** | UNKNOWN. |
| **Project/history behavior** | Project id in path STRONGLY INFERRED. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `10-layers.png`, `10-edit-if-different.png`, `10-video-editor-if-found.png`. |
| **Unanswered questions** | Why nav-id is `Layer` but label is Edit. Is `/edit` redirected to `/layers`? |

---

## 11. Canvas

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED `/canvas`. PWA shortcut. Manifest `/_private/canvas/$id`, `embed`, `templates/$templateId`. Home loaded `canvas-banner-bg-desktop.webp` (200) and `canvas-banner-desktop.webp` (**404**). |
| **User goal** | UNKNOWN (board / infinite canvas / multi-asset). Do not assume Figma-like until seen. |
| **Steps** | UNKNOWN. |
| **Inputs** | UNKNOWN. |
| **Model/tool selection** | UNKNOWN. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | UNKNOWN. |
| **Follow-up actions** | Embed route exists. |
| **Project/history behavior** | Canvas id in path. |
| **Auth gating** | UNKNOWN. |
| **Screenshots/evidence** | `11-canvas.png`, `11-canvas-template.png`. |
| **Unanswered questions** | Overlap with `/_private/edit/canvas/$imageId` and moodboard `/_private/moodboard`. |

---

## 12. Community

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED `/community`. Manifest: `generations`, `originals`, `posts/$publicationId`, `projects`. Related public communities: seedance, soul, sora-video, wan-video, kling-30, mixed-media, gpt-image-2, marketing-studio-community. |
| **User goal** | Browse others’ generations; open a publication; possibly remix. |
| **Steps** | UNKNOWN. Home already embeds viral_hub + project list — Community page may be larger. |
| **Inputs** | UNKNOWN: search/filters. |
| **Model/tool selection** | Filter by model? UNKNOWN. |
| **Settings/configuration** | N/A. |
| **Upload/reference behavior** | Publishing UNKNOWN. |
| **Loading/generation state** | Feed loading UNKNOWN (home used CMS + CDN). |
| **Result state** | Publication pages `/publications/$publicationId`, `/p/$id`, `/share/$id`. |
| **Follow-up actions** | Recreate from a post? UNKNOWN (home Recreate went to effects). |
| **Project/history behavior** | Community projects vs personal projects — UNKNOWN boundary. |
| **Auth gating** | Browse likely public; publish likely gated. Prove both. |
| **Screenshots/evidence** | `12-community.png`, `12-community-post.png`, `12-community-projects.png`. |
| **Unanswered questions** | Tabs vs separate URLs. Seedance community `/seedance-2-5-community` vs `/community`. |

---

## 13. Projects

| Field | Notes |
| --- | --- |
| **Entry point** | CONFIRMED public examples: `/@higgsfield.studio/projects/{slug}` and other `@user/projects/...` in `$tsr` payload. Manifest: `/_private/profile/$username/projects/$projectSlug`, community projects, marketing-studio projects, supercomputer projects. i18n key “Projects”. **No header “Projects” item** on logged-out home. |
| **User goal** | Inspect how a featured project was made (“See all prompts, assets, and how each project was created”). Personal project workspace UNKNOWN. |
| **Steps** | Open one home showcase project logged out. After login, find where *my* projects live (header? Supercomputer? profile?). |
| **Inputs** | UNKNOWN for create-project. |
| **Model/tool selection** | Showcase may list models used — capture, don’t assume. |
| **Settings/configuration** | UNKNOWN. |
| **Upload/reference behavior** | UNKNOWN. |
| **Loading/generation state** | UNKNOWN. |
| **Result state** | Project page with media (CloudFront user assets already on home). |
| **Follow-up actions** | UNKNOWN: clone, remix, open in cinema. |
| **Project/history behavior** | This track *is* that question. |
| **Auth gating** | Public showcase CONFIRMED. Owner tools UNKNOWN. |
| **Screenshots/evidence** | `13-project-public.png`, `13-projects-mine-or-missing.png`. |
| **Unanswered questions** | Is there a first-class Projects app or only per-surface project lists? |

---

## 14. Other major surfaces discovered (HAR)

Walk these at least once so they are not silently in-scope later. Do not treat them as required rebuild targets yet.

| Surface | Entry (CONFIRMED or manifest) | Walk goal |
| --- | --- | --- |
| MCP / CLI | `/mcp` | What the page offers vs ChatGPT plugin |
| ChatGPT Plugin / Astra | `/gpt-astra` | Install vs in-app agent |
| 3D Jutsu | `/3d-jutsu` | Distinct product vs video mode |
| Academy | `/academy` | Courses vs marketing |
| Contests | `/contests/higgsfield-global-film-festival` | |
| Plugins | `/plugins/after-effects` | |
| Originals | `/original-series` | |
| Pricing | `/pricing` | Match `/fnf/subscriptions/v2/plans` (Basic 120 / Pro 600–900 / Max 1800–5400 credits, Team, Scale) |
| Enterprise | `/enterprise` | |
| Upscale | `/_private/upscale` | Find real URL |
| Character | `/character`, `/_private/character/upload` | |
| Photodump | i18n + `/_private/flow/photodump` | |
| Lipsync / avatar / Infinite Talk | `/_private/lipsync-studio`, flow avatar presets | |
| Faceless studio / AI host | `/_private/faceless-studio`, `/_private/ai-host` | |
| Mixed media | `/_private/mixed-media`, public mixed-media community | |
| Moodboard | `/_private/moodboard` | |
| Apps | JSON-LD `/apps`; `/_private/apps/$slug` (skin-enhancer, shots, zooms, link-to-video-ad) | |
| Legal | cookie/privacy/terms | Only if needed for auth/consent |

---

## Cross-cutting capture rules

1. For every create surface, record **logged-out first**, then **logged-in**, even if the first click immediately opens Clerk.
2. Do not run expensive generations unless needed to see in-progress/result UI. One cheap/failed/gated attempt is enough for reconnaissance.
3. Do not download the media library; screenshot the UI.
4. Note URL bar vs nav label whenever they disagree (Cinema Studio, Edit/Layers).
5. Keep a mini HAR or Network screenshot of the **first** job-create call when it happens — that is the evidence the current HAR lacks.
