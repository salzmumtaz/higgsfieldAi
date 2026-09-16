# Route inventory — live Higgsfield (headless pass)

**Status:** public / already-accessible routes only. Logged out. Not a substitute for `FLOW_MAP.md`.

**Access column:** `public` = HTML/app chrome loaded without a session. `auth-gated` = redirected to `/auth`. `public shell, personal data gated` = page loads, empty or Sign-in CTA for user content.

**Generate / upload / hover / Canvas / credits:** always **MANUAL VERIFICATION REQUIRED** even when the control is visible.

---

## Core create

### `/` — Explore / home

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/` |
| **Page title** | (home; HAR title is the URL; live title not re-captured this pass) |
| **Surface name** | Explore |
| **Classification** | discovery / community |
| **Entry point** | Logo, Explore nav, default landing |
| **Access** | public |
| **Important visible controls** | Primary nav; featured cards; Visual Effects / Recreate (HAR); community/project rows |
| **Obvious next actions** | Open a create surface; Recreate → effects; open a public project |
| **Related routes** | `/community`, `/effects/use`, `/ai/image`, `/ai/video`, `/generate`, `/supercomputer` |
| **Notes** | HAR `data-nav-id="Motions"`. Image mega-menu analytics still say `current_page: "Motions page"`. Home prompt box still **MANUAL**. |

### `/ai/image` — Image (two entry defaults)

| Field | Value |
| --- | --- |
| **URL** | Header: `/ai/image?model=gpt_image_2`. Mega-menu Create Image: `/ai/image?model=nano-banana-2-lite` |
| **Page title** | Create AI Images from Text & Photo \| Higgsfield |
| **Surface name** | Create Image |
| **Classification** | core generator |
| **Entry point** | Header Image (GPT Image 2); Features → Create Image (Nano Banana 2 Lite) |
| **Access** | public |
| **Important visible controls** | File input; prompt “Describe the scene you imagine”; model chip; Auto / High / 2K; count 1/4; **Generate 8.5 / 6.5**; History; How it works |
| **Obvious next actions** | Pick another `?model=` from mega-menu Models; upload; Generate (**credits / auth MANUAL**) |
| **Related routes** | Full Image mega-menu table in `PRODUCT_MAP.md`; Photodump `soul-v2` + `modal-photo-dump=true`; `/upscale`; `/layers?model=nano_banana_pro_inpaint` |
| **Notes** | **Conflict:** two Create Image defaults. Models are query engines, not separate flows. |

### `/ai/video` — Video

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/ai/video` → `?model=seedance_2_5` |
| **Page title** | Create AI Videos from Text & Image \| Higgsfield |
| **Surface name** | Create Video |
| **Classification** | core generator |
| **Entry point** | Header Video; mega-menu Create Video `/ai/video` |
| **Access** | public |
| **Important visible controls** | Tabs Create Video / Edit Video / Motion Control (these are **routes**: `/ai/video`, `/ai/video/edit`, `/ai/video/motion`); References vs Extend Video; prompt with `@`; Elements On; duration / ratio / resolution / bitrate; **Generate 80 / 45**; History; How it works; **Change** |
| **Obvious next actions** | Change model; Edit / Motion routes; Generate |
| **Related routes** | Video mega-menu in `PRODUCT_MAP.md`; `/generate?mode=video`; Draw to Video/Edit query flags |
| **Notes** | Mega-menu captured from manual DOM. Headless skipped hover. |

### `/ai/video?model=genjutsu` — Genjutsu

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/ai/video?model=genjutsu` |
| **Page title** | (same Video shell expected; not fully re-captured) |
| **Surface name** | Genjutsu |
| **Classification** | model **inside** core generator (nav shortcut) |
| **Entry point** | Primary nav “Genjutsu New” |
| **Access** | public (href confirmed) |
| **Important visible controls** | Same Video shell **STRONGLY INFERRED** |
| **Obvious next actions** | Switch model via Change |
| **Related routes** | `/ai/video` |
| **Notes** | Do not inventory as a separate product flow. |

### `/audio` — Audio

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/audio` |
| **Page title** | Higgsfield Audio - AI Voice Over & Voice Translation Tool |
| **Surface name** | Audio |
| **Classification** | core generator |
| **Entry point** | Header Audio; mega-menu Text to Speech `?voiceMode=voiceover` |
| **Access** | public |
| **Important visible controls** | Tabs Text to Speech / Voice Change / Translate; Seed Audio 1.0; script with `@`; batch 1/4; Generate; History; How it works; Filters |
| **Obvious next actions** | Switch `voiceMode`; switch `audioModel`; Generate |
| **Related routes** | Audio mega-menu models; `/lipsync-studio` |
| **Notes** | Mega-menu captured. Composer default Seed Audio 1.0; other engines are `audioModel` on Voiceover. Voice Change / Translate **MANUAL**. |

---

## Specialized workspaces

### `/generate` — Cinema Studio 4.0

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/generate` |
| **Page title** | Cinema Studio 4.0 — Direct Every Detail \| Higgsfield |
| **Surface name** | Cinema Studio |
| **Classification** | specialized workspace |
| **Entry point** | Header Cinema Studio |
| **Access** | public |
| **Important visible controls** | Sidebar Home / My elements / My favorites / Community / Academy; New project; search; Image/Video tabs; Film setup / Camera / Color / Lighting; prompt with `@`; **GENERATE 80 / 45** |
| **Obvious next actions** | New project; GENERATE; open Community/Academy from rail |
| **Related routes** | `/generate?mode=image&imageModel=cinematic-v1`; `/cinematic-video-generator` (marketing, not this UI); `/ai/video` |
| **Notes** | **Conflict:** not the same as `/cinematic-video-generator`. |

### `/cinematic-video-generator` — Cinema marketing

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/cinematic-video-generator` |
| **Page title** | Cinema Studio — AI Filmmaking Workspace \| Higgsfield |
| **Surface name** | Cinema Studio (marketing) |
| **Classification** | content / help / marketing |
| **Entry point** | Footer / JSON-LD (HAR) |
| **Access** | public |
| **Important visible controls** | Marketing page chrome (prior pass) |
| **Obvious next actions** | CTA into `/generate` **MANUAL** |
| **Related routes** | `/generate` |
| **Notes** | Do not confuse with the workspace. |

### `/marketing-studio` — Marketing Studio

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/marketing-studio` |
| **Page title** | Marketing Studio • Higgsfield |
| **Surface name** | Marketing Studio |
| **Classification** | specialized workspace |
| **Entry point** | Header Marketing Studio |
| **Access** | public |
| **Important visible controls** | Sidebar Home / My generations / My favorites; Ad Reference; Product Link; New project; modes UGC / Product shot / Motion / Ads / Posters / Marketplace; media radios; H1 “Turn any product into ready to post content”; Image/Video; prompt “Describe what you want to create…” / “Describe the scene you imagine…”; Closeup; 3:4; 1/4; AVATAR; PRODUCT; GENERATE |
| **Obvious next actions** | New project; attach avatar/product; GENERATE |
| **Related routes** | `/marketing-studio/generations`; `/marketing-studio/favorites`; `/apps/ads-products`; Supercomputer Marketing filter |
| **Notes** | Shares prompt/Generate DNA with Image; own studio rail. |

### `/layers` — Edit / Layers

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/layers` |
| **Page title** | Image Edit — Turn Flat Images Into Editable Layers \| Higgsfield • Higgsfield |
| **Surface name** | Higgsfield Layers / Edit |
| **Classification** | editing / transformation tool (workspace-like empty projects) |
| **Entry point** | Header Edit; Image menu Inpaint (`?model=nano_banana_pro_inpaint`) |
| **Access** | public shell; “My projects” empty logged out |
| **Important visible controls** | Capability carousel Relight / Inpaint / Layer Decomposition / Edit Text / Effects; Upload Media; My projects; Generate |
| **Obvious next actions** | Upload Media (**MANUAL**); open a capability |
| **Related routes** | `/apps/relight`; `/layers?model=…`; HAR `/layers/$projectId/$versionId` |
| **Notes** | Relight duplicated as app. Layer editing after upload **MANUAL**. |

### `/canvas` — Canvas

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/canvas` |
| **Page title** | Higgsfield |
| **Surface name** | Higgsfield Canvas |
| **Classification** | specialized workspace |
| **Entry point** | Header Canvas; Image mega-menu |
| **Access** | public demo; **Sign in to view your canvases** |
| **Important visible controls** | All Canvases; Templates Quick Start; Search canvases; Sign in; Generate; sample scene caption |
| **Obvious next actions** | Sign in; Templates; interact with board (**Canvas MANUAL**) |
| **Related routes** | HAR `/_private/canvas/$id`, templates, embed |
| **Notes** | Board interaction cannot be inventoried headless. |

### `/3d-jutsu` — 3D Jutsu

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/3d-jutsu` |
| **Page title** | 3D Jutsu • Higgsfield |
| **Surface name** | 3D Jutsu |
| **Classification** | specialized workspace |
| **Entry point** | Header 3D Jutsu New |
| **Access** | public |
| **Important visible controls** | Prompt “Describe the scene you want to block out…”; Auto / Free; 15s; aspect 16:9 / 9:16 / 1:1 / 4:3 / 3:4 / 21:9; GENERATE; steps Build the set / Stage it / Export to Seedance |
| **Obvious next actions** | GENERATE; grab props/cameras (**drag MANUAL**); Export to Seedance 2.5 |
| **Related routes** | `/ai/video?model=seedance_2_5` |
| **Notes** | Seedance is the named render engine, not a separate flow. |

### `/supercomputer` — Supercomputer

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/supercomputer` |
| **Page title** | Supercomputer \| Higgsfield |
| **Surface name** | Supercomputer |
| **Classification** | agentic workflow |
| **Entry point** | Header Supercomputer |
| **Access** | public shell; “No chats yet” |
| **Important visible controls** | Sidebar New chat, Search, Projects, Products (Faceless channel, Apps, Games), Skills, Connectors, Memory, Chats; Incognito; filters All / Marketing / Explainer videos / Apps / Games; composer placeholder “Turn my podcast into 9:16 Reels”; Auto / Free / Ask mode; No project; Skills; Connectors; Try MCP; Recreate on showcases; Pricing 30% OFF; Log in |
| **Obvious next actions** | Submit a prompt (**auth/credits MANUAL**); Recreate a showcase; open MCP |
| **Related routes** | `/mcp`; `/gpt-astra`; HAR `supercomputer/$chatId`, marketplace, files |
| **Notes** | Recreate pattern reused from Explore. Chat submit **MANUAL**. |

---

## Apps

### `/apps` — Apps catalog

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/apps` |
| **Page title** | AI Tools for Creators & Marketers \| Higgsfield Apps |
| **Surface name** | Apps |
| **Classification** | discovery + index of app / packaged workflow |
| **Entry point** | Footer Apps; not a primary-nav item |
| **Access** | public |
| **Important visible controls** | Search; category links; app cards with preview video; **Try now**; Pro/New/Trending badges |
| **Obvious next actions** | Open a category; Try now → `/apps/{slug}` |
| **Related routes** | Category URLs under `/apps/{category-key}`; Supercomputer Products → Apps |
| **Notes** | Do not walk every card. Sample 1–2 per input pattern. |

### Category routes

| URL | Surface | Classification | Access |
| --- | --- | --- | --- |
| `/apps/camera-motion` | Professional | discovery | public (href) |
| `/apps/enhance-style` | Enhance & Style | discovery | public (href) |
| `/apps/face-identity` | Face & Identity | discovery | public (href) |
| `/apps/video-editing` | Video Editing | discovery | public (href) |
| `/apps/ads-products` | Ads & Products | discovery | public (href) |
| `/apps/games-characters` | Games & Characters | discovery | public (href) |
| `/apps/extras` | Extras | discovery | public (href) |
| `/apps/trending-templates` | Trending Templates | discovery | public (href) |

### Sample app: `/apps/face-swap`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/apps/face-swap` |
| **Page title** | (prior pass; SEO landing) |
| **Surface name** | Face Swap |
| **Classification** | app / packaged workflow |
| **Entry point** | Apps catalog; Image mega-menu |
| **Access** | public |
| **Important visible controls** | Breadcrumb Apps / Face Swap; two file inputs Target Image / Your Photo; Face Swap Now / Try Generate; Get Plan |
| **Obvious next actions** | Upload (**MANUAL**); generate (**credits/auth MANUAL**) |
| **Related routes** | `/apps/video-face-swap`, `/apps/character-swap`, `/apps` |

### Sample app: `/apps/relight`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/apps/relight` |
| **Page title** | (prior pass) |
| **Surface name** | Relight |
| **Classification** | app / packaged workflow (also Layers capability) |
| **Entry point** | Apps Enhance & Style; Image mega-menu |
| **Access** | public |
| **Important visible controls** | Upload; light direction; Soft/Hard; Brightness; Color; Generate **2**; footer sitemap |
| **Obvious next actions** | Drag light (**MANUAL**); Generate |
| **Related routes** | `/layers`; `/apps` |

Other catalog slugs (hrefs only; **not deep-inspected**):  
`virality-predictor`, `expand-image`, `angles`, `shots`, `transitions`, `skin-enhancer`, `ai-stylist`, `outfit-swap`, `style-snap`, `ai-headshot-generator`, `character-swap`, `recast`, `video-face-swap`, `clipcut`, `urban-cuts`, `video-background-remover`, `breakdown`, `japanese-show`, `link-to-video-ad`, `billboard`, `bullet-time-scene`, `truck-ad`, `bullet-time-white`, `game-dump`, `nano-strike`, `nano-theft`, `simlife`, `plushies`, `meme-generator`, `image-background-remover`, `surrounded-by-animals`, `signboard`, `paint-app`, `this-is-fine`, `skibidi`, `mukbang`, `cloud-surf`, `idol`.

---

## Effects

### `/effects/use` — Effects composer

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/effects/use` |
| **Page title** | AI Visual Effects Generator \| Higgsfield |
| **Surface name** | Effects (default **FLOATING FALL**) |
| **Classification** | app / packaged workflow |
| **Entry point** | Header Effects; HAR Recreate on home |
| **Access** | public |
| **Important visible controls** | Change; preset name; Character file (PNG/JPG required); Optional Location; Optional Products; Toggle prompt; Resolution 720p; Aspect 9:16; Use free gens; Try in ChatGPT; **Generate 1 FREE LEFT**; History; How it works; picker Search + presets (WILD RIDE, EYES IN, CUTOUT, FLOATING FALL, VANISH — list truncated by viewport) |
| **Obvious next actions** | Change preset; upload Character; Generate |
| **Related routes** | HAR `/effects/use/{slug}`, `/effects`, `/effects/examples/{slug}`, `/mcp` “Try Viral Effects in ChatGPT” |
| **Notes** | **Conflict** with FLOW_MAP assuming `/effects/use` is only a catalog. Full preset list **MANUAL**. |

---

## Community, library, profile

### `/community`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/community` |
| **Page title** | (prior pass) |
| **Surface name** | Community Explore |
| **Classification** | discovery / community |
| **Entry point** | Header Community; bottom nav |
| **Access** | public |
| **Important visible controls** | Subnav Explore / Projects / Shots / Originals |
| **Obvious next actions** | Open a card; Recreate **MANUAL** |
| **Related routes** | `/community/projects`, `/community/generations`, `/community/originals` |

### `/community/projects`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/community/projects` |
| **Page title** | Higgsfield |
| **Surface name** | Community Projects |
| **Classification** | discovery / community |
| **Entry point** | Community subnav Projects |
| **Access** | public |
| **Important visible controls** | Same subnav; image grid (little accessible text) |
| **Obvious next actions** | Open a project **MANUAL** |
| **Related routes** | HAR `/@username/projects/{slug}` |

### `/community/generations` (Shots)

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/community/generations` |
| **Page title** | (href confirmed; page not fully captured this pass) |
| **Surface name** | Community Shots |
| **Classification** | discovery / community |
| **Entry point** | Subnav Shots |
| **Access** | public (href) |
| **Important visible controls** | **MANUAL** |
| **Obvious next actions** | Recreate / open shot **MANUAL** |
| **Related routes** | `/community` |

### `/community/originals`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/community/originals` |
| **Page title** | (href confirmed) |
| **Surface name** | Community Originals |
| **Classification** | discovery / community |
| **Entry point** | Subnav Originals |
| **Access** | public (href) |
| **Related routes** | `/original-series` (header Originals — **may differ**; **MANUAL**) |

### `/library/all` — Library

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/library/all` |
| **Page title** | My Library • Higgsfield |
| **Surface name** | Library / Assets |
| **Classification** | asset / project management |
| **Entry point** | Bottom nav Library |
| **Access** | public empty shell |
| **Important visible controls** | Filters All / Video / Image / Shorts Studio / Higgsfield Explainer / Audio / Marketing Studio / Characters / Lipsync; list/grid; Generate CTA; bottom nav Home / Community / Library / Profile |
| **Obvious next actions** | Generate; Profile (will auth-gate); login then re-check fill |
| **Related routes** | `/profile`; per-studio History |
| **Notes** | **Conflict:** FLOW_MAP assumed history unknown until login — shell is public. |

### `/profile` → auth

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/profile` → `/auth` → `/auth/sign-in` |
| **Page title** | empty in this headless load |
| **Surface name** | Profile (intended) / Sign in |
| **Classification** | creator / profile (gated) |
| **Entry point** | Bottom nav Profile |
| **Access** | **auth-gated** |
| **Important visible controls** | Clerk did **not** hydrate here (empty document body, no iframes) |
| **Obvious next actions** | Complete Clerk **MANUAL** |
| **Related routes** | `/auth/sign-in`, `/auth/sign-up` (HAR), `accounts.higgsfield.ai` (HAR) |

---

## Platform / marketing (opened or href-confirmed)

### `/mcp`

| Field | Value |
| --- | --- |
| **URL** | `https://higgsfield.ai/mcp` |
| **Page title** | Higgsfield MCP \| AI Image & Video Generation for Any Agent |
| **Surface name** | Higgsfield MCP & plugin |
| **Classification** | agentic workflow + content / help / marketing |
| **Entry point** | Header MCP |
| **Access** | public |
| **Important visible controls** | Client tabs ChatGPT / Claude / Grok Bot / Cursor / Claude Code / OpenClaw / Hermes; MCP vs CLI; Add Higgsfield plugin; Start creating; skill search; skill categories Featured / Marketing / UGC factory / Faceless content factory / Utility / Motion & Design; Recreate + Learn more; model gallery; FAQ (credits used in ChatGPT = platform credits) |
| **Obvious next actions** | Add plugin (**auth MANUAL**); Try in ChatGPT; Recreate |
| **Related routes** | `/gpt-astra`; Supercomputer Try MCP; CLI sibling on-page |

### Other header destinations not opened this pass

| URL | Surface | Classification | Access | Notes |
| --- | --- | --- | --- | --- |
| `/gpt-astra` | ChatGPT Plugin | agentic / marketing | public href | “New” badge |
| `/academy` | Academy | content / help | public href | Cinema rail also links Academy |
| `/contests/higgsfield-global-film-festival` | Contests | discovery | public href | |
| `/plugins/after-effects` | Adobe After Effects | content / integration | Plugins header default | analytics Adobe After Effects Plugin |
| `/plugins/photoshop` | Adobe Photoshop | content / integration | Plugins menu | **not opened** |
| `/plugins/premiere-pro` | Adobe Premiere Pro | content / integration | Plugins menu | **not opened** |
| `/plugins/davinci` | DaVinci Resolve | content / integration | Plugins menu | **not opened** |
| `/plugins/figma` | Figma | content / integration | Plugins menu | **not opened** |
| `/plugins/blender` | Blender | content / integration | Plugins menu | **not opened** |
| `/plugins/minecraft` | Minecraft | content / integration | Plugins menu | **not opened** |
| `/original-series` | Originals | content / discovery | public href | vs `/community/originals` |
| `/pricing` | Pricing | content / marketing | public href | 30% OFF |
| `/enterprise` | Enterprise | content / marketing | public href | |
| `/moodboard` | Soul Moodboard | specialized workspace | Image Features | analytics name **Moodboard**; **not opened** |
| `/character` | Soul ID Character | specialized workspace | Image Features | analytics name **Character**; **not opened** |
| `/ai-influencer-studio` | AI Influencer | specialized workspace | Image Features | **not opened** |
| `/upscale` | Image Upscale / Topaz | editing / transformation | Features **and** Models | same href twice; analytics Upscale vs Topaz GigaPixel; **not opened** |
| `/generate?mode=image&imageModel=cinematic-v1` | Cinematic Cameras | specialized workspace | Image Features, **top** badge | Cinema image mode |
| `/generate?mode=video` | Cinema Studio (Video menu) | specialized workspace | Video Features | vs header `/generate` |
| `/faceless-studio` | Faceless Studio | specialized workspace | Video Features | **not opened** |
| `/shorts-studio` | Shorts Studio | specialized workspace | Video Features | Library also filters this; **not opened** |
| `/explainer` | Higgsfield Explainer | specialized workspace | Video Features | Supercomputer also has explainer showcases; **not opened** |
| `/mixed-media` | Mixed Media | specialized workspace | Video Features | **not opened** |
| `/ai/video/edit` | Edit Video | editing / transformation | Video Features | Kling Omni Edit uses this + `?model=` |
| `/ai/video/reframe` | Higgsfield Reframe | editing / transformation | Video Features | **not opened** |
| `/ai/video/motion` | Kling Motion Control | model/mode | Video Models | dedicated route, not `?model=` |
| `/apps/video-relight` | Video Relight | app | Video Features | distinct from `/apps/relight` |
| `/apps/video-rehex` | Change Color Palette | app | Video Features | **not opened** |
| `/lipsync-studio` | Lipsync Studio | specialized workspace | Video Features | UGC Factory = `?ugc-studio=new` |
| `/creator-hub/help-center` | Help center | content / help | public href | |

---

## Image / Video / Audio / Plugins mega-menus (MANUAL DOM)

Image / Video / Audio: two columns Features vs Models. Plugins: **one** column. Do **not** inventory each Model or each plugin host as a flow. Full tables in `PRODUCT_MAP.md`. Headless skipped Video, Audio, and Plugins hover.

**Plugins:** `/plugins/photoshop`, `/plugins/premiere-pro`, `/plugins/after-effects` (header default), `/plugins/davinci`, `/plugins/figma`, `/plugins/blender`, `/plugins/minecraft`. Adobe analytics names append “Plugin”; Figma/Blender/Minecraft do not.

**Image Features:** Create Image `nano-banana-2-lite`; Cinematic Cameras `/generate?mode=image&imageModel=cinematic-v1`; `/canvas`; `/moodboard`; `/character`; `/ai-influencer-studio`; Photodump `soul-v2` + `modal-photo-dump=true`; `/apps/relight`; Inpaint `/layers?model=nano_banana_pro_inpaint`; `/upscale`; `/apps/face-swap`; `/apps/character-swap`.

**Video Features:** `/ai/video`; `/generate?mode=video`; `/faceless-studio`; `/3d-jutsu`; `/shorts-studio`; `/explainer`; `/canvas`; `/mixed-media`; `/ai/video/edit`; `/ai/video/reframe`; `/apps/link-to-video-ad`; `/apps/video-rehex`; `/apps/video-relight`; `/lipsync-studio`; Draw to Video `?video-inpaint=true&generationType=video`; Draw to Edit `?image-inpaint=true`; UGC Factory `/lipsync-studio?ugc-studio=new`; Video Upscale `/upscale`.

**Audio Features:** `?voiceMode=voiceover` (analytics Voiceover); `change-voice`; `translate`.

**Image Models `?model=`:** `soul-v2`, `soul-cinematic`, `gpt-image-2-5-sunburst`, `gpt-image-2-5-flare`, `gpt_image_2`, `seedream_v5_pro`, `nano-banana-2-lite`, `nano-banana-pro`, `recraft-v4-styles`, `recraft-v4-1`, `grok-image-2-0`, `flux_2`, `z-image`. Topaz → `/upscale`.

**Video Models:** `seedance_2_5`, `genjutsu`, `gemini-omni-flash-1-1`, `kling3_0`, `/ai/video/motion`, `flux_3_video`, `minimax_h3`, `wan3_0`, `grok_video_v15`, `/ai/video/edit?model=kling-video-reference-o3`, `open_sora_video`, `veo-3-1-preview`, `happy-horse`, `minimax-2.3`, `standard` (DOP). Change sheet (headless) listed additional family variants.

**Audio Models `audioModel=`:** `seed_audio`, `elevenlabs`, `qwen_audio`, `minimax`, `seed_speech` (all with `voiceMode=voiceover`).

Visible vs analytics mismatches (additions): Click to Ad / Create Click to Ad; Relight / Video Relight; UGC Factory / UGC Builder; Google Veo 3.1 / Veo 3.1; Kling Motion Control / Kling 3.0 Motion Control; Text to Speech / Voiceover; Voice Change / Change Voice; Translate / Translation.

---

## HAR-only / still unopened

Public menu hrefs now exist for lipsync, faceless, mixed-media, shorts, explainer, and seven `/plugins/{host}` pages — **pages not walked**. Still HAR/footer-only until seen: fashion factory product URL, popcorn/storyboard, `/effects` catalog, `/@user/projects/…`, onboarding/welcome-quiz.
