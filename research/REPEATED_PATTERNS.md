# Repeated UX patterns — Higgsfield (headless pass)

**Purpose:** shrink the manual walk. If a pattern is shared, test it **once thoroughly**, then spot-check variants instead of repeating full flows.

**Not a substitute for `FLOW_MAP.md`.** Generation, upload, hover, drag, Canvas, credits, and auth remain **MANUAL VERIFICATION REQUIRED**.

---

## How to use this on the walk

For each pattern: capture **one golden path** with screenshots, then only record **deltas** (extra inputs, different CTA copy, different credit number) on other surfaces.

Do **not** walk every model, every app, or every effect preset as a separate user flow.

---

## 1. Global header + account cluster

**Where:** almost every public page.

**Shared:** Explore, Image, Video, Audio, MCP, ChatGPT Plugin, Genjutsu, Effects, Cinema Studio, Marketing Studio, Supercomputer, 3D Jutsu, Edit, Academy, Community, Contests, Plugins, Canvas, Originals, Pricing, Enterprise, Login, Sign up, language, pricing promo.

**Delta only:** badge text (New / Free / 30% OFF); which item is `current`; Image/Video/Audio/Plugins mega-menus.

**Image / Video / Audio mega-menus are captured** (manual DOM, 2026-09-17): two columns **Features** vs **Models**. **Plugins** is a **single** column of host install pages (`/plugins/{host}`), not Features vs Models. All four use Radix collection and `current_page: "Motions page"`.

**Manual leftover:** Login / Sign up (do not complete unless you intend to). Open **one** plugin landing if you need the install/download UI.

---

## 2. Core generator shell (Image / Video / Audio)

**Where:** `/ai/image`, `/ai/video`, `/audio`.

**Shared:**

- Prompt composer (Image/Marketing: “Describe the scene you imagine”; Video/Cinema: prompt with `@`)
- Reference / file upload slot
- Model or engine chip on the composer
- Quantity 1/4 (Image, Audio batch, Marketing 1/4)
- Primary **Generate** with a **credit number**
- **History** + **How it works** beside results
- Logged-out page still renders the full composer

**Deltas:**

| Surface | Extra |
| --- | --- |
| Image | quality/size Auto·High·2K; `?model=` |
| Video | Create / Edit / Motion are **routes** (`/ai/video`, `/edit`, `/motion`); References vs Extend; duration/ratio/resolution/bitrate; Elements On; Change → larger picker than mega-menu Models |
| Audio | TTS / Voice Change / Translate = `voiceMode`; engines = `audioModel` on Voiceover |

**Manual once:** one Image generate (or gate), one Video generate (or gate), one Audio generate (or gate). Then only switch a model / tab and note what the UI changes.

---

## 3. Model picker as query param / Change sheet

**Where:** Image/Video/Audio mega-menu **Models** columns; Video **Change** sheet (`?select=preset&for=motion`); Genjutsu header shortcut; Image `?model=`; Audio `audioModel=`; Cinema `mode` + `imageModel`; 3D Jutsu names Seedance as export engine.

**Shared:** models are **engines inside a shell**, not destinations. Features is a different column: workspaces, apps, tools, and query-flag modes.

**Do not:** treat Soul vs GPT Image vs Seedance vs Kling vs Eleven as separate assignment flows.

**Already captured:** Image + Video + Audio mega-menu lists. Video Change sheet is **wider** than the Video Models column — sample Change once, do not walk every mega-menu model.

**Exceptions that are not just `?model=`:** Kling Motion Control `/ai/video/motion`; Kling Omni Edit `/ai/video/edit?…`; Topaz/Upscale `/upscale`; Draw to Video/Edit query flags; Photodump modal; UGC Factory query on Lipsync.

---

## 4. Prompt composer + @ mentions

**Where:** Image, Video, Audio, Cinema, Marketing Studio, 3D Jutsu, Supercomputer (chat placeholder).

**Shared:** large prompt field; Generate/Ask nearby; quality/ratio chips.

**Deltas:** Supercomputer has Auto / Free / **Ask mode** / Skills / Connectors / Try MCP — chat, not a single Generate. Marketing adds AVATAR + PRODUCT slots. 3D Jutsu copy is “block out” a scene.

**Manual:** `@` mention picker (people/elements) needs a real keystroke — **MANUAL VERIFICATION REQUIRED**.

---

## 5. Upload / reference input

**Where:** Image file input; Video References / Extend; Effects Character + optional Location/Products; Face Swap two images; Relight one image; Layers Upload Media; Marketing Ad Reference / Product Link / AVATAR / PRODUCT.

**Shared:** “Select a PNG or JPG from your device” (Effects); drag-or-click implied.

**Deltas:** count of slots; required vs optional; image vs video vs product URL.

**Manual once:** one required upload (Effects Character or Face Swap) through validation. Relight **light-direction drag** is a different pattern — test separately. Do not upload the whole media library.

---

## 6. Generate / Run / Try now / GENERATE

**Where:**

- Generators: **Generate** + credits (8.5/6.5 Image; 80/45 Video & Cinema)
- Effects: **Generate 1 FREE LEFT** + “Use free gens”
- Relight: **Generate 2**
- 3D Jutsu / Cinema / Marketing: **GENERATE**
- Apps catalog: **Try now** (navigates to app, does not run a job)
- Face Swap: Face Swap Now / Try Generate
- Supercomputer: send on composer (not labeled Generate in the sidebar extract)

**Shared:** primary CTA; cost visible **logged out**.

**Manual once:** click Generate on **one** cheap/free path (Effects “1 FREE LEFT” is the obvious candidate) and capture gate vs job vs Clerk. Then assume other Generate buttons share the job/credit system unless the gate UI differs.

**Do not** run N paid jobs to map N models.

---

## 7. Result cards, Recreate, Publish

**Recreate — LIVE on:** home (HAR), Supercomputer showcases, MCP showcases. Home Recreate → `/effects/use/{slug}` (HAR). Supercomputer/MCP Recreate on **agentic templates**, not necessarily effects.

**Publish:** not observed logged out. **MANUAL** after a successful job.

**Result cards:** Explore/community/app catalog use video/image cards with overlay CTAs. Community Projects grid had almost no accessible text (media cards).

**Manual:** one home Recreate, one Supercomputer Recreate, one community card click. Confirm whether Recreate always lands on Effects vs Supercomputer chat vs an app.

---

## 8. App cards + catalog categories

**Where:** `/apps`.

**Shared card:** looping preview + title + one-line promise + Try now + optional Pro/New/Trending.

**Shared app page (Face Swap vs Relight):** SEO/marketing block + input well + generate CTA + pricing Get Plan + Apps breadcrumb.

**Deltas:** input schema only.

**Manual:** 2–3 apps with **different input types** (two-image swap, lighting drag, maybe link-to-video-ad). Skip the rest of the catalog.

---

## 9. Community cards + subnav

**Where:** `/community` Explore / Projects / Shots / Originals.

**Shared:** four-tab subnav; card grid.

**Conflict to check manually:** header **Originals** → `/original-series` vs community **Originals** → `/community/originals`.

**Manual:** one card in Shots and one in Projects (open + any Recreate). Hover states **MANUAL**.

---

## 10. Profile / account tabs

**Logged out:** Login / Sign up; Profile bottom-nav **redirects to Clerk**.

**Not seen:** profile tabs, public `/@user` layout, settings.

**Manual after login:** Profile tabs, username URL, relationship to Library.

---

## 11. Filter / category navigation

Repeated chip rows:

| Place | Chips |
| --- | --- |
| Apps | All + 8 categories (real routes) |
| Library | All, Video, Image, Shorts Studio, Higgsfield Explainer, Audio, Marketing Studio, Characters, Lipsync |
| Supercomputer | All, Marketing, Explainer videos, Apps, Games |
| Marketing Studio | UGC, Product shot, Motion, Ads, Posters, Marketplace + All/Images/Videos |
| MCP skills | Featured, Marketing, UGC factory, Faceless, Utility, Motion & Design |
| Effects Change | Search + preset names |
| Layers | Relight / Inpaint / Layer Decomposition / Edit Text / Effects carousel |

**Manual once:** click 2 chips in Apps and 2 in Library; confirm URL vs in-page filter.

---

## 12. Generation history / assets (several rails, maybe not one store)

| Rail | Where | Logged-out behavior |
| --- | --- | --- |
| History | Image, Video, Audio, Effects | Tab visible; contents **MANUAL** |
| Library | `/library/all` | Empty copy: “Your creations will appear here.” |
| My projects | Layers | “Your edit projects will appear here.” |
| My elements / favorites | Cinema | Rail present |
| My generations / favorites | Marketing | Routes exist |
| All Canvases | Canvas | “Sign in to view your canvases” |
| Chats / Projects | Supercomputer | “No chats yet” |
| Folders | HAR generate tree | **not live-confirmed** |

**Highest-value manual check:** after **one** successful generation, see which of Library / History / studio rail / Supercomputer chat actually receives it. That single check replaces guessing N history UIs.

---

## 13. Studio left rail (Cinema vs Marketing)

**Shared idea:** collapse/expand sidebar; Home; a personal collection; favorites; New project; Pricing/Login.

**Deltas:** Cinema has My **elements** + Community + Academy. Marketing has My **generations** + Ad Reference + Product Link.

**Manual:** New project on one studio only; then see if the other studio’s New project is the same modal.

---

## 14. Agentic showcase row (Supercomputer = MCP)

Supercomputer and MCP both show the same kind of **prompt cards** (Ad Multiplier, Editorial Motion Graphics, faceless/UGC, explainers) with **Recreate** + **Learn more**.

**Manual:** Recreate one card from Supercomputer and one from MCP; if they land in the same chat/job shell, do not retest every showcase.

---

## 15. Marketing vs product URL pair

Footer/nav split: `/generate` vs `/cinematic-video-generator`; `/ai/video` vs `/ai-video`; Supercomputer vs `*-intro`.

**Manual:** from a footer “Cinema Studio” link, note whether you land in the workspace or the SEO page. One check per pair is enough.

---

## 16. Free / Auto / credit chrome

Visible logged out: Auto/Free on Supercomputer and 3D Jutsu; “Use free gens” on Effects; numbered credits on Generate.

**Manual:** whether Free Mode actually runs a job without Clerk; whether Auto is a model router. **Do not assume.**

---

## Pattern → fewer FLOW_MAP tracks

| FLOW_MAP track | Collapse using |
| --- | --- |
| 3 Image + 4 Video as many models | Pattern 2 + 3 (one shell, many `?model=`) |
| 5 Effects every slug | Pattern 6 + Effects Change picker (one composer) |
| 14 Apps every slug | Pattern 8 (catalog + 2–3 input variants) |
| 7 Cinema vs 8 Marketing | Pattern 13 (same rail family, different slots) |
| 9 Supercomputer vs MCP vs ChatGPT Plugin | Pattern 14 + `/mcp` vs `/gpt-astra` as install surfaces |
| 13 Projects vs Library vs History | Pattern 12 (one generation, trace destinations) |

Still unique (do not collapse into one Video generate): **Canvas**, **3D Jutsu**, **Layers**, **Cinema** (`mode=video` vs `mode=image`), **Faceless / Shorts / Explainer / Mixed Media / Lipsync** (open one if the assignment cares about studios), **Auth**, **a real generation’s async states**. Video Relight vs Image Relight. Plugins: one install landing, not seven product flows. MCP / ChatGPT Plugin are separate from `/plugins/*`.
