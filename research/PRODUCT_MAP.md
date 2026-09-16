# Product map — live Higgsfield (headless pass)

**Status:** parallel reconnaissance only. Not a substitute for the manual walkthrough in `research/FLOW_MAP.md`. No application code. No implementation-scope decisions.

**Session:** 2026-09-16, Cursor browser, **logged out**. Clerk remained unauthenticated. No login, signup, upload, generation, credit spend, or access-control bypass.

**Method:** public routes only, plus routes that loaded without extra credentials. Evidence is **LIVE CONFIRMED** unless labeled otherwise. Headless viewport was small (~932×487); screenshots were often black; structure comes from accessibility snapshots and DOM text.

**Related files:** `FLOW_MAP.md` (manual checklist — do not treat this file as an override), `HAR_ANALYSIS.md`, `ROUTE_INVENTORY.md`, `REPEATED_PATTERNS.md`.

---

## Conflicts with FLOW_MAP / HAR (flagged, not resolved)

Do not auto-merge these. Capture them on the manual walk.

| Topic | FLOW_MAP / HAR | This headless pass | What to do |
| --- | --- | --- | --- |
| Explore label | HAR `data-nav-id="Motions"` on `/` | Visible label is **Explore**. Image mega-menu analytics still fire `current_page: "Motions page"` (**MANUAL DOM**, 2026-09-17) | Motions is the analytics/page id; Explore is the visible nav label |
| Image default model | HAR + header Image href `/ai/image?model=gpt_image_2` | Mega-menu **Create Image** href is `/ai/image?model=nano-banana-2-lite` | Header click vs Features “Create Image” may land on different engines |
| Cinema URLs | FLOW_MAP: open `/generate`, `/cinematic-video-generator`, `/_private/cinema-studio` and record whether they alias | **Not aliases.** Header Cinema → `/generate`. Image menu Cinematic Cameras → `/generate?mode=image&imageModel=cinematic-v1`. Video menu Cinema Studio → `/generate?mode=video`. Marketing page is `/cinematic-video-generator` | Record mode query vs bare `/generate` |
| Edit URL | FLOW_MAP: nav-id `Layer` → `/layers`; footer may use `/edit?model=…` | Primary nav **Edit** → `/layers`. Image mega-menu Inpaint → `/layers?model=nano_banana_pro_inpaint`. Footer also lists Edit Image / Inpaint (exact href **MANUAL** if not on the current page) | Record URL bar vs label |
| Library / history | FLOW_MAP: personal history UNKNOWN until login | `/library/all` **loads logged out**, empty (“Your creations will appear here”) | Confirm whether login then fills the same shell |
| Credits | FLOW_MAP: credit cost UNKNOWN | Generate CTAs show costs **logged out** (Image 8.5 / 6.5; Video and Cinema 80 / 45; Effects “1 FREE LEFT”) | Confirm whether click spends, gates, or opens Clerk |
| Effects entry | FLOW_MAP: catalog `/effects` then Recreate `/effects/use/{slug}` | `/effects/use` **is already a composer**, default preset **FLOATING FALL**; Change opens an in-page picker | Confirm `/effects` catalog vs this composer |
| Audio engines | FLOW_MAP / HAR: ElevenLabs, MiniMax, Qwen, Seed Speech logos on home | Composer showed **Seed Audio 1.0**. Audio mega-menu **Models** lists Seed Audio 1.0, Eleven v3, Qwen Audio 3.0, MiniMax Speech 2.8 HD, Seed Speech (`audioModel=` + `voiceMode=voiceover`) | Home logos = menu engines, not missing products |
| Image vs Generate | FLOW_MAP: is `/ai/image` the same shell as `/generate`? | **No.** `/ai/image` is the Image core generator; `/generate` is Cinema Studio | Treat as separate surfaces |
| Effects badge | HAR: “Effects New” | Live oscillates: **Effects New** on some pages, **Effects Free** on others (Apps, Community) | Record badge at time of screenshot |
| Auth UI | FLOW_MAP: modal vs full page UNKNOWN | `/profile` → `https://higgsfield.ai/auth` → `/auth/sign-in`. Clerk UI **did not hydrate** in this headless tab (empty body) | **MANUAL VERIFICATION REQUIRED** |
| Supercomputer gating | FLOW_MAP: high likelihood of login | `/supercomputer` **loads logged out** with composer, showcase Recreate cards, empty chat list | Confirm submit/chat gating |
| Relight | Image Features → `/apps/relight` | Video Features **Relight** (analytics Video Relight) → `/apps/video-relight`. Same visible label, different app | Treat as two apps unless a job proves they share a shell |
| Video Edit vs Image Edit | FLOW_MAP Edit → `/layers` | Video Features **Edit Video** → `/ai/video/edit`. Primary nav Edit remains `/layers` | Image edit and video edit are different surfaces |
| Upscale | Image Features + Topaz → `/upscale` | Video Features **Video Upscale** also → `/upscale` | Same URL for image and video; confirm UI mode **MANUAL** |

---

## 1. Global information architecture

### Primary navigation (header, logged out)

Visible on almost every product page. hrefs **LIVE CONFIRMED**:

| Label | href | Notes |
| --- | --- | --- |
| Higgsfield (logo) | `/` | |
| Explore | `/` | HAR nav-id Motions |
| Image | `/ai/image?model=gpt_image_2` | Header href (HAR + headless). Mega-menu **Create Image** uses a **different** default: `nano-banana-2-lite` |
| Video | `/ai/video` | Redirects to `?model=seedance_2_5`. Mega-menu captured (manual DOM) |
| Audio | `/audio` | Mega-menu captured; Features use `?voiceMode=` |
| MCP | `/mcp` | Marketing + install surface |
| ChatGPT Plugin **New** | `/gpt-astra` | Not opened this pass |
| Genjutsu **New** | `/ai/video?model=genjutsu` | **Model shortcut in primary nav**, not a separate product |
| Effects **New** / **Free** | `/effects/use` | Badge copy inconsistent |
| Cinema Studio | `/generate` | Workspace, not the marketing URL |
| Marketing Studio | `/marketing-studio` | |
| Supercomputer | `/supercomputer` | |
| 3D Jutsu **New** | `/3d-jutsu` | |
| Edit | `/layers` | |
| Academy | `/academy` | Not opened this pass |
| Community | `/community` | |
| Contests | `/contests/higgsfield-global-film-festival` | Not opened |
| Plugins | `/plugins/after-effects` | Header default. Mega-menu has 7 host plugins (manual DOM) |
| Canvas | `/canvas` | |
| Originals | `/original-series` | Not opened |
| Pricing | `/pricing` | Copy includes **30% OFF** |
| Enterprise | `/enterprise` | Absolute URL on some pages |

Account cluster (logged out): **Login** and **Sign up** buttons (no href in DOM). Language globe. Promo chip “Get an additional discount…”. Cookie overlay (Securiti) left in place — consent click was not completed.

### Secondary navigation (surface-specific)

These are **not** one global secondary bar. Several products reuse a left rail or in-page tabs.

| Surface | Secondary items | LIVE |
| --- | --- | --- |
| Community | Explore `/community`, Projects `/community/projects`, Shots `/community/generations`, Originals `/community/originals` | Yes |
| Cinema Studio `/generate` | Home, My elements, My favorites, Community, Academy; New project; search | Yes |
| Marketing Studio | Home `/marketing-studio`, My generations `/marketing-studio/generations`, My favorites `/marketing-studio/favorites`; Ad Reference; Product Link; New project | Yes |
| Supercomputer | New chat, Search, Projects, Products (Faceless channel, Apps, Games), Customize (Skills, Connectors, Memory), Chats | Yes |
| Canvas | All Canvases, Templates Quick Start, Search canvases | Yes |
| Image / Video / Audio / Effects | **History** and **How it works** tabs beside the composer | Yes |
| Video | Headless tabs Create Video / Edit Video / Motion Control map to routes `/ai/video`, `/ai/video/edit`, `/ai/video/motion` | Yes + mega-menu |
| Audio | Text to Speech / Voice Change / Translate = `voiceMode` voiceover / change-voice / translate | Yes + mega-menu |
| Marketing canvas | UGC / Product shot / Motion / Ads / Posters / Marketplace + All media / Images only / Videos only | Yes |
| Apps catalog | Category chips (see Apps) | Yes |
| Library | Type filters: All, Video, Image, Shorts Studio, Higgsfield Explainer, Audio, Marketing Studio, Characters, Lipsync | Yes |
| MCP | MCP vs CLI; client tabs ChatGPT / Claude / Grok Bot / Cursor / Claude Code / OpenClaw / Hermes | Yes |
| Layers | Capability carousel: Relight, Inpaint, Layer Decomposition, Edit Text, Effects | Yes |

### Account / profile navigation

Logged out:

- Header: Login, Sign up.
- Bottom bar (seen on Library): **Home** `/`, **Community** `/community`, **Library** `/library/all`, **Profile** `/profile`.
- `/profile` is **auth-gated**: redirect chain `/profile` → `/auth` → `/auth/sign-in`.
- Canvas: extra **Sign in** CTA (“Sign in to view your canvases”).
- Supercomputer sidebar: **Log in**.
- Clerk host from HAR: `clerk.higgsfield.ai`. Headless `/auth/sign-in` did not render fields. **MANUAL VERIFICATION REQUIRED:** hosted vs embedded Clerk, OAuth list, after-sign-in landing.

Logged-in account menu, username profile, billing, workspaces: **not inspected** (no session).

### Create / Flow surfaces

Treat these as the create stack the user asked about. Models are **engines inside** these, not separate products.

| Cluster | Surfaces | Pattern |
| --- | --- | --- |
| Core generators | Image `/ai/image`, Video `/ai/video`, Audio `/audio` | Composer + model query param + History |
| Packaged apps | `/apps`, `/apps/{slug}` | Catalog card → SEO landing + specialized inputs + Generate / Try now |
| Effects | `/effects/use` (+ `/effects/use/{slug}` from HAR Recreate) | Preset picker + Character/Location/Products uploads |
| Specialized workspaces | Cinema `/generate`, Marketing `/marketing-studio`, Layers `/layers`, Canvas `/canvas`, 3D Jutsu `/3d-jutsu`, plus Video-menu: Faceless `/faceless-studio`, Shorts `/shorts-studio`, Explainer `/explainer`, Mixed Media `/mixed-media`, Lipsync `/lipsync-studio` | Own chrome; several still prompt + Generate |
| Agentic | Supercomputer `/supercomputer`; MCP/plugin marketing `/mcp`, `/gpt-astra` | Chat / skills / connectors |
| Image / Video / Audio mega-menus | Two-column **Features** vs **Models**. Inventories below. | Features = destinations; Models = engines (with exceptions) |
| Plugins mega-menu | One column of `/plugins/{host}` install pages | Not a generator; header defaults to After Effects |

`/_private/flow/*` exists in the HAR manifest (photodump, fashion, avatar, mixed-media). Photodump is Image + `modal-photo-dump=true`. Mixed Media and Faceless now have public menu URLs (`/mixed-media`, `/faceless-studio`) — **pages not opened**.

### Image mega-menu (MANUAL DOM, Explore / Motions page)

User-pasted live markup. Two-column Radix collection. Every item sends `data-layout-track` `navigation_item_clicked` with `current_page: "Motions page"`. Visible title can differ from `navigation_item`.

**Features** (not models — destinations):

| Visible label | Analytics `navigation_item` | href | Badge | Classification |
| --- | --- | --- | --- | --- |
| Create Image | Create Image | `/ai/image?model=nano-banana-2-lite` | | core generator |
| Cinematic Cameras | Cinematic Cameras | `/generate?mode=image&imageModel=cinematic-v1` | **top** | specialized workspace (Cinema, image mode) |
| Canvas | Canvas | `/canvas` | | specialized workspace |
| Soul Moodboard | Moodboard | `/moodboard` | | specialized workspace |
| Soul ID Character | Character | `/character` | | specialized workspace |
| AI Influencer | AI Influencer | `/ai-influencer-studio` | | specialized workspace |
| Photodump | Photodump Studio | `/ai/image?model=soul-v2&modal-photo-dump=true` | | core generator + modal |
| Relight | Relight | `/apps/relight` | | app / packaged workflow |
| Inpaint | Edit image | `/layers?model=nano_banana_pro_inpaint` | | editing / transformation |
| Image Upscale | Upscale | `/upscale` | | editing / transformation |
| Face Swap | Face Swap | `/apps/face-swap` | | app / packaged workflow |
| Character Swap | Character Swap | `/apps/character-swap` | | app / packaged workflow |

**Models** (engines on `/ai/image`, except Topaz):

| Visible label | Analytics `navigation_item` | href | Badge |
| --- | --- | --- | --- |
| Higgsfield Soul 2.0 | Higgsfield Soul 2.0 | `/ai/image?model=soul-v2` | **top** |
| Higgsfield Soul Cinema | Higgsfield Soul Cinema | `/ai/image?model=soul-cinematic` | |
| GPT Image 2.5 Sunburst | GPT Image 2.5 Sunburst | `/ai/image?model=gpt-image-2-5-sunburst` | **new** |
| GPT Image 2.5 Flare | GPT Image 2.5 Flare | `/ai/image?model=gpt-image-2-5-flare` | **new** |
| GPT Image 2 | GPT Image 2 | `/ai/image?model=gpt_image_2` | **top** |
| Seedream 5.0 Pro | Seedream 5.0 Pro | `/ai/image?model=seedream_v5_pro` | |
| Nano Banana 2 Lite | Nano Banana 2 Lite | `/ai/image?model=nano-banana-2-lite` | |
| Nano Banana Pro | Nano Banana Pro | `/ai/image?model=nano-banana-pro` | **top** |
| Recraft V4 Styles | Recraft V4 Styles | `/ai/image?model=recraft-v4-styles` | **new** |
| Recraft V4.1 | Recraft V4.1 | `/ai/image?model=recraft-v4-1` | |
| Grok Imagine 2.0 | Grok Imagine 2.0 | `/ai/image?model=grok-image-2-0` | **new** |
| FLUX.2 | Flux Pro | `/ai/image?model=flux_2` | |
| Z-Image | Z Image | `/ai/image?model=z-image` | |
| Topaz | Topaz GigaPixel | `/upscale` | |

**Do not walk each Model row as a flow.** Create Image and Nano Banana 2 Lite share the same `?model=`. Topaz duplicates Image Upscale (same `/upscale`). Photodump is Soul 2.0 plus a modal flag, not a new generator.

### Video mega-menu (MANUAL DOM, Explore / Motions page)

Headless **skipped this** — Video click navigated without expanding the menu. Same two-column Radix pattern; `current_page: "Motions page"`. Genjutsu also sends `place: "video_dropdown"`.

**Features:**

| Visible label | Analytics `navigation_item` | href | Badge | Classification |
| --- | --- | --- | --- | --- |
| Create Video | Create Video | `/ai/video` | | core generator |
| Cinema Studio | Cinema Studio | `/generate?mode=video` | | specialized workspace |
| Faceless Studio | Faceless Studio | `/faceless-studio` | | specialized workspace |
| 3D Jutsu | 3D Jutsu | `/3d-jutsu` | **new** | specialized workspace |
| Shorts Studio | Shorts Studio | `/shorts-studio` | | specialized workspace |
| Higgsfield Explainer | Higgsfield Explainer | `/explainer` | | specialized workspace |
| Canvas | Canvas | `/canvas` | | specialized workspace (also in Image menu) |
| Mixed Media | Mixed Media | `/mixed-media` | | specialized workspace |
| Edit Video | Edit Video | `/ai/video/edit` | | editing / transformation |
| Higgsfield Reframe | Higgsfield Reframe | `/ai/video/reframe` | | editing / transformation |
| Click to Ad | Create Click to Ad | `/apps/link-to-video-ad` | | app / packaged workflow |
| Change Color Palette | Change Color Palette | `/apps/video-rehex` | | app / packaged workflow |
| Relight | Video Relight | `/apps/video-relight` | | app / packaged workflow |
| Lipsync Studio | Lipsync Studio | `/lipsync-studio` | | specialized workspace |
| Draw to Video | Draw to Video | `/ai/video?video-inpaint=true&generationType=video` | | core generator + inpaint modal |
| Draw to Edit | Draw to Edit | `/ai/video?image-inpaint=true` | | core generator + inpaint modal |
| UGC Factory | UGC Builder | `/lipsync-studio?ugc-studio=new` | | specialized workspace + query |
| Video Upscale | Upscale | `/upscale` | | editing / transformation (same URL as Image Upscale) |

**Models** (mostly `/ai/video?model=`; **exceptions are dedicated routes**):

| Visible label | Analytics `navigation_item` | href | Badge |
| --- | --- | --- | --- |
| Seedance 2.5 | Seedance 2.5 | `/ai/video?model=seedance_2_5` | **top** (gradient) |
| Higgsfield Genjutsu | Higgsfield Genjutsu | `/ai/video?model=genjutsu` | **new** |
| Gemini Omni Flash 1.1 | Gemini Omni Flash 1.1 | `/ai/video?model=gemini-omni-flash-1-1` | |
| Kling 3.0 | Kling 3.0 | `/ai/video?model=kling3_0` | |
| Kling Motion Control | Kling 3.0 Motion Control | `/ai/video/motion` | not a `?model=` |
| FLUX.3 Video | FLUX.3 Video | `/ai/video?model=flux_3_video` | |
| MiniMax H3 | MiniMax H3 | `/ai/video?model=minimax_h3` | |
| Wan 3.0 | Wan 3.0 | `/ai/video?model=wan3_0` | |
| Grok Imagine 1.5 | Grok Imagine 1.5 | `/ai/video?model=grok_video_v15` | |
| Kling 3.0 Omni Edit | Kling 3.0 Omni Edit | `/ai/video/edit?model=kling-video-reference-o3` | edit route |
| Sora 2 | Sora 2 | `/ai/video?model=open_sora_video` | |
| Google Veo 3.1 | Veo 3.1 | `/ai/video?model=veo-3-1-preview` | |
| HappyHorse | HappyHorse | `/ai/video?model=happy-horse` | |
| Minimax Hailuo 2.3 | Minimax Hailuo 2.3 | `/ai/video?model=minimax-2.3` | |
| Higgsfield DOP | Higgsfield DOP | `/ai/video?model=standard` | |

**Do not walk each Model as a flow.** Mega-menu Models is a **curated subset**; headless Video **Change** sheet listed more (Wan family, Kling family, DoP, etc.). Kling Motion Control and Omni Edit sit in Models but are **modes/routes**, not create-`?model=` only. Draw to Video / Draw to Edit are query flags on `/ai/video`. UGC Factory is Lipsync + `ugc-studio=new`. Header Genjutsu duplicates the Models Genjutsu row.

### Audio mega-menu (MANUAL DOM, Explore / Motions page)

Headless **skipped this** — menu was collapsed. Same two-column pattern. Features are `voiceMode`; Models always add `voiceMode=voiceover` plus `audioModel=`.

**Features:**

| Visible label | Analytics `navigation_item` | href | Classification |
| --- | --- | --- | --- |
| Text to Speech | Voiceover | `/audio?voiceMode=voiceover` | core generator mode |
| Voice Change | Change Voice | `/audio?voiceMode=change-voice` | core generator mode |
| Translate | Translation | `/audio?voiceMode=translate` | core generator mode |

**Models** (TTS engines — all open Voiceover, not Voice Change / Translate):

| Visible label | Analytics `navigation_item` | href |
| --- | --- | --- |
| Seed Audio 1.0 | Seed Audio 1.0 | `/audio?voiceMode=voiceover&audioModel=seed_audio` |
| Eleven v3 | Eleven v3 | `…&audioModel=elevenlabs` |
| Qwen Audio 3.0 | Qwen Audio 3.0 | `…&audioModel=qwen_audio` |
| MiniMax Speech 2.8 HD | MiniMax Speech 2.8 HD | `…&audioModel=minimax` |
| Seed Speech | Seed Speech | `…&audioModel=seed_speech` |

Seed Audio 1.0 and Seed Speech share `/speech/seed-speech.svg` but different `audioModel` values. **Do not walk each engine as a flow** — one TTS generate, then swap `audioModel`. Voice Change and Translate still need **one** pass each (upload/video **MANUAL**).

### Plugins mega-menu (MANUAL DOM, Explore / Motions page)

Headless **skipped this** — menu collapsed. **Not** Features vs Models. One column labeled **Plugins**. Same Radix collection and `current_page: "Motions page"`. Header Plugins still points at After Effects.

| Visible label | Analytics `navigation_item` | href |
| --- | --- | --- |
| Adobe Photoshop | Adobe Photoshop Plugin | `/plugins/photoshop` |
| Adobe Premiere Pro | Adobe Premiere Pro Plugin | `/plugins/premiere-pro` |
| Adobe After Effects | Adobe After Effects Plugin | `/plugins/after-effects` |
| DaVinci Resolve | DaVinci Resolve Plugin | `/plugins/davinci` |
| Figma | Figma | `/plugins/figma` |
| Blender | Blender | `/plugins/blender` |
| Minecraft | Minecraft | `/plugins/minecraft` |

Classification: **content / help / marketing** (install / host-tool landings), not in-app generators. Copy pattern: “AI … tools inside {host}”. **Do not walk all seven as product flows** — open **one** Adobe page plus maybe Figma if the install UI differs. ChatGPT Plugin `/gpt-astra` and MCP `/mcp` stay **out of this menu** (separate header items).

### Apps

Catalog `/apps`. Categories are routes, not just filters:

- All `/apps`
- Professional `/apps/camera-motion`
- Enhance & Style `/apps/enhance-style`
- Face & Identity `/apps/face-identity`
- Video Editing `/apps/video-editing`
- Ads & Products `/apps/ads-products`
- Games & Characters `/apps/games-characters`
- Extras `/apps/extras`
- Trending Templates `/apps/trending-templates`

Sampled app pages (not every app): **Face Swap**, **Relight**. Shared shell: Apps breadcrumb, SEO landing, upload/generate, pricing “Get Plan”. Inputs differ (two photos vs lighting controls). Full category samples in §5.

### Community

Public. Subnav Explore / Projects / Shots / Originals. Home `/` is also a discovery feed (HAR: Recreate → effects). Community project grid on `/community/projects` rendered with almost no accessible text (image cards). **MANUAL:** hover, Recreate on community cards vs home Recreate.

### Assets / library

`/library/all` title `My Library • Higgsfield`. Logged-out empty state. Filters imply library is **cross-product** (Video, Image, Shorts Studio, Explainer, Audio, Marketing Studio, Characters, Lipsync). List/grid toggle. Generate CTA.

Cinema “My elements / favorites”, Marketing “My generations / favorites”, generator “History”, Canvas “All Canvases” look like **per-surface asset rails**, not the same as Library. Whether they sync: **MANUAL VERIFICATION REQUIRED**.

### Profile

Creator profile workspace is gated. Public creator projects exist in HAR as `/@username/projects/{slug}` — **not opened this pass**. FLOW_MAP track 13 still applies.

---

## 2. Product taxonomy

Classification of **surfaces**, not of every model.

| Classification | Surfaces observed | Notes |
| --- | --- | --- |
| **model** | Soul, GPT Image 2, Seedream, Nano Banana, Recraft, Grok Image, FLUX.2, Z-Image, Seedance, Kling, Veo, Sora, Wan, MiniMax, DoP, HappyHorse, Genjutsu, Seed Audio, Cinematic v1, Topaz (Upscale), etc. | Appear as **selectable engines** (`?model=`, Change picker, footer “Video Models / Image Models”). Do not treat each as a user flow. |
| **core generator** | Image `/ai/image`, Video `/ai/video`, Audio `/audio` | Shared composer: prompt, uploads, settings, Generate, History |
| **app / packaged workflow** | `/apps/{slug}`, Effects `/effects/use`, many Image-menu items that deep-link into apps | One-click / constrained inputs; catalog “Try now” |
| **editing / transformation tool** | Layers `/layers`, Upscale `/upscale`, Image Inpaint, Image Relight `/apps/relight`, Video Relight `/apps/video-relight`, Face/Character swap, `/ai/video/edit`, `/ai/video/reframe`, `/ai/video/motion`, Draw to Video/Edit query flags | Relight is **two apps** (image vs video). Upscale is **one URL** for both. |
| **specialized workspace** | Cinema, Marketing, Canvas, 3D Jutsu, Faceless `/faceless-studio`, Shorts `/shorts-studio`, Explainer `/explainer`, Mixed Media `/mixed-media`, Lipsync `/lipsync-studio` (+ UGC Factory query) | Several were footer-only until Video mega-menu |
| **agentic workflow** | Supercomputer `/supercomputer`; MCP/CLI `/mcp`; ChatGPT Plugin `/gpt-astra` | Chat, skills, connectors, Recreate showcases |
| **discovery / community** | `/`, `/community/*`, contests, Originals | Cards, Recreate, project showcases |
| **creator / profile** | `/profile` (gated), `/@…/projects/…` (HAR public) | |
| **asset / project management** | Library `/library/all`; Cinema folders/favorites; Marketing generations; Canvas list; Supercomputer Projects | |
| **content / help / marketing** | `/cinematic-video-generator`, `/mcp`, `/academy`, `/pricing`, `/enterprise`, `/original-series`, `/gpt-astra`, `/plugins/{host}`, footer *-intro URLs, help center | Plugin menu is install landings, not the Image/Video composer |

---

## 3. Apps (inventory, not a full walk)

**Do not deep-inspect every app.** Catalog is enough to see they share a storefront.

### Categories (LIVE)

See IA table. H1: “Welcome to Higgsfield apps” / “One-click AI effects…”. Search box. “See all” per section. Badges: Pro, New, Trending, PRO.

### Representative apps (catalog + two opened)

| Category | Sample slugs (not exhaustive) |
| --- | --- |
| Professional | `virality-predictor`, `expand-image`, `angles`, `shots`, `transitions` |
| Enhance & Style | `skin-enhancer`, `ai-stylist`, `relight`, `outfit-swap`, `style-snap` |
| Face & Identity | `face-swap`, `ai-headshot-generator`, `character-swap`, `recast`, `video-face-swap` |
| Video Editing | `clipcut`, `urban-cuts`, `video-background-remover`, `breakdown`, `japanese-show` |
| Ads & Products | `link-to-video-ad`, `billboard`, `bullet-time-scene`, `truck-ad`, `bullet-time-white` |
| (Video menu, not catalog-sampled) | `video-relight`, `video-rehex` |
| Games & Characters | `game-dump`, `nano-strike`, `nano-theft`, `simlife`, `plushies` |
| Extras | `meme-generator`, `image-background-remover`, `surrounded-by-animals`, `signboard`, `paint-app` |
| Trending Templates | `this-is-fine`, `skibidi`, `mukbang`, `cloud-surf`, `idol` |

Opened:

- **Face Swap** `/apps/face-swap`: breadcrumb Apps / Face Swap; two file inputs (Target Image, Your Photo); Face Swap Now / Try Generate; SEO + Get Plan. **MANUAL:** upload, generate, credits.
- **Relight** `/apps/relight`: upload; light direction (**drag — MANUAL**); Soft/Hard; Brightness; Color; Generate **2**. Footer sitemap (intro vs product URLs).

### Shared shell vs what differs

**Shared (LIVE on catalog + two apps):** `/apps` card with video preview + name + one-line promise + **Try now**; app page with marketing copy, upload, primary generate CTA, pricing upsell.

**Differs per app:** number of file inputs, whether lighting/geometry controls exist, credit number on the button, Pro badge, image vs video output. **MANUAL:** whether result/Recreate/Publish chrome is identical after a job.

---

## 4. Models (engines, not flows)

Record **where they appear**, not a per-model walk.

| Where | How they show up |
| --- | --- |
| Image URL | Header Image → `gpt_image_2`. Mega-menu Create Image → `nano-banana-2-lite`. Models column is `?model=` engines; **Topaz is listed as a model but routes to `/upscale`**. |
| Video URL | Header `/ai/video` → `seedance_2_5`. Mega-menu Models are `?model=` engines **except** Kling Motion Control (`/ai/video/motion`) and Kling Omni Edit (`/ai/video/edit?model=…`). Change sheet is a **larger** picker than the mega-menu. DOP = `model=standard`. |
| Audio | Features = `voiceMode`. Models = `voiceMode=voiceover&audioModel=` (seed_audio, elevenlabs, qwen_audio, minimax, seed_speech). |
| Cinema | Header `/generate`; Image menu `?mode=image&imageModel=cinematic-v1`; Video menu `?mode=video`. |
| 3D Jutsu | Prompted 3D block-out; **Export to Seedance 2.5** named as the render engine. |
| Supercomputer / MCP | Copy: “Every creative model, inside ChatGPT”; listed Nano Banana Pro, Google Omni Flash, Seedance 2.5/2.0, Seedream 5.0 Lite, Kling 3, GPT Image 2, Soul 2.0. |
| Footer sitemap | Separate **Video Models** and **Image Models** columns, often **intro/marketing URLs**, not the generator. |
| Effects | Preset name (FLOATING FALL, CUTOUT, …) is the selector, not a foundation-model picker. |

**Implication for manual research:** walk **one Image generate, one Video generate, one model-switch**, not N model landing pages.

---

## 5. Footer sitemap (product vs marketing URL split)

Seen on Relight and MCP. **LIVE CONFIRMED pattern:** intro/marketing path ≠ workspace path.

Examples (from live footer labels; exact hrefs **MANUAL** if not captured on that page):

| Label cluster | Product-ish | Marketing-ish |
| --- | --- | --- |
| Video / Image | `/ai/video`, `/ai/image` | `/ai-video`, model “Introduction” pages |
| Cinema | `/generate` | `/cinematic-video-generator` |
| Supercomputer | `/supercomputer` | `/supercomputer-intro` (prior Relight extract) |
| Studios listed | Cinema, Marketing, Lipsync, Photodump, Fashion Factory, UGC Factory, Popcorn / storyboard-generator, Canvas | Canvas intro, Marketing Studio Intro, Soul Intro |

Studios named in footer that were **not** primary-nav items now have Video-menu product URLs: Lipsync `/lipsync-studio`, Photodump (Image menu), UGC Factory (`/lipsync-studio?ugc-studio=new`), Faceless `/faceless-studio`. Fashion Factory and Popcorn still footer-only until seen in a menu.

---

## 6. What this pass cannot replace

Marked **MANUAL VERIFICATION REQUIRED** everywhere they apply:

- Hover mega-menus: **Image, Video, Audio, and Plugins are captured from manual DOM.**
- Drag/drop (Relight light direction; Canvas; 3D Jutsu staging)
- Upload and file validation
- Generate / Run / job progress / failure / refund
- Credit deduction vs login wall vs paywall
- Authentication (Clerk UI, OAuth, after-login home)
- Canvas interaction and templates
- Async job states, Recreate after own result, Publish
- Logged-in Library, Profile tabs, project ownership
- Cookie consent (overlay left in place)
- Mobile bottom-nav vs desktop header
- Community card Recreate vs Effects Recreate
- Whether Marketing/Cinema “My generations” == Library
