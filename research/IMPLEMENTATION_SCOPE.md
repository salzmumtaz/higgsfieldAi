# Implementation Scope (final)

**Status:** final rebuild slice. Based on `PRODUCT_FLOW_GRAPH.md`, `PRODUCT_MAP.md`, `ROUTE_INVENTORY.md`, `REPEATED_PATTERNS.md`, and the Home / Explore discovery pass. `FLOW_MAP.md` is a live-walk checklist, not a build list.

**Not application code.** Do not expand this file just because more Higgsfield routes exist.

---

## Goal

Rebuild a focused, coherent slice of Higgsfield that demonstrates the product’s main interaction model.

The loop that must feel real:

Explore
→ discover a preset or generation
→ Recreate / Create
→ land in an **existing shell** with model/preset/state
→ configure
→ Generate
→ auth gate (logged out) or upgrade gate (logged in)
→ stay in that shell

The assignment is judged on speed, product judgement, and UX/UI. Depth and polish beat route count.

No AI backend. No Clerk. No checkout. No real jobs.

---

## Research constraints (do not violate)

These are product facts from the mapping, not preferences.

1. **Models are engines, not products.** `?model=` / preset slug changes configuration inside a shell.
2. **Home galleries and `*-community` URLs are discovery**, not new workflows.
3. **Soul Cinema Recreate enters Image** (`/ai/image?model=soul-cinematic`), not Cinema Studio (`/generate`).
4. **Genjutsu is Video** (`/ai/video?model=genjutsu`) with extra slots, not a separate generator.
5. **Video Create / Edit / Motion are modes of one Video shell**, not three products. Live they are routes; the rebuild should **look** like tabs and only **implement Create**.
6. **Effects catalog (`/effects`) and Effects composer (`/effects/use`) are different.** Header Effects lands on the composer. Home Recreate lands on `/effects/use/{slug}`. Card click lands on `/effects/examples/{slug}`.
7. **Publications are pages** (`/publications/:id`). Genjutsu Home cards open a **modal on `/`**, not a publication.
8. **Like is Like.** Logged-out Like opens the Welcome auth modal. Do not rename it Favorite/Save.
9. **Marketing Studio and public project pages are not creation shells.** Marketing Recreate was not present on the inspected Product Showcase publication. Cully Hill Boys had assets/process and **no Recreate**.

---

## What this slice is

Three creation shells, fed by Home / Community / publications:

| Shell | Route | In-scope engines / presets |
| --- | --- | --- |
| **Image** | `/ai/image` | GPT Image 2, Soul 2.0 (`soul-v2`), Soul Cinema (`soul-cinematic`) |
| **Video** | `/ai/video` | Seedance 2.5 (default), Genjutsu. Seedance 2.0 is an optional picker chip only. |
| **Effects** | `/effects/use/:slug` | A handful of representative presets (include Floating fall) |

Discovery objects that point at those shells:

- Home / Explore
- Publication detail
- Thin Effects example page
- Community feed
- Library (empty logged out, seeded when mocked-authenticated)

---

# 1. Product slice

## Primary loop

Home `/`
→ gallery card
→ publication **or** Effects example **or** Genjutsu preset overlay
→ Recreate
→ Image / Video / Effects
→ configure
→ Generate
→ Auth modal or Upgrade modal

## Secondary loop

Community or Library
→ open generation
→ Recreate
→ same shells

Public project cards on Home are **social discovery** (open a thin project page). They are not a Recreate door.

---

# 2. Routes to build

Build only these. Everything else is header chrome, omitted, or a redirect into one of these.

## Required

### `/`

Home / Explore.

Sections to implement (enough cards to show each **pattern**, not every live row):

| Section | Card pattern | Primary CTA / View all |
| --- | --- | --- |
| Visual Effects | Preset: hover Recreate, click example | View all → `/effects`. Try → `/effects/use` |
| Higgsfield Genjutsu | Preset: **Open preset** overlay | Start generating → `/ai/video?model=genjutsu` |
| Seedance 2.5 | Community generation + Like | View all / Start generating → `/ai/video?model=seedance_2_5` |
| GPT Image 2 | Community generation + Like | View all → `/community`. Start generating → `/ai/image?model=gpt_image_2` |
| Soul Cinema | Community generation + Like | Start generating → `/ai/image?model=soul-cinematic` |
| Soul 2.0 | Community generation + Like | Start generating → `/ai/image?model=soul-v2` |
| Public projects | Project card | Open thin project page. Section CTA → `/community` |

Do **not** rebuild `/seedance-2-5-community`, `/gpt-image-2-community`, `/soul-cinema-community`, `/soul-community`, `/higgsfield-genjutsu-presets`, or other marketing landings. View all that would have gone there should enter the **shell** or **Community**.

Do **not** add a Marketing Studio Home row. That gallery has no in-scope create shell (Marketing workspace is omitted; inspected publication had no Recreate).

Do **not** add a Seedance 2.0 Home row. It is the same Video discovery pattern as 2.5.

Not every card needs unique art. Three to six cards per section is enough.

---

### `/ai/image`

One Image generator shell. Model is search-param state.

Required:

- `?model=gpt_image_2` (header default)
- `?model=soul-v2`
- `?model=soul-cinematic`
- `?recreateId=` (or equivalent mock) hydrates prompt + settings from seeded data
- model picker (in-scope Image engines only)
- prompt
- reference upload **preview** (local object URL; no cloud)
- quality / size / aspect (representative chips: Auto, High, 2K)
- quantity 1/4 chrome
- credit-labeled Generate (e.g. 8.5 / 6.5)
- History + How it works tabs (History uses seeded items when authenticated; How it works can be static copy)
- auth / upgrade on Generate

No other Image models. No Photodump modal. No Cinema Studio.

---

### `/ai/video`

One Video generator shell. Default `?model=seedance_2_5`.

Required:

- Create mode that actually works (prompt, references/extend chrome, duration/ratio/resolution/bitrate chips, Generate 80/45 for Seedance 2.5)
- Visible **Create / Edit / Motion** tabs. Edit and Motion may be empty-state panels (“Add a video to edit”) — **do not** build full Edit or Motion composers, Reframe, or Draw-to-Video
- `?model=genjutsu` shows Genjutsu slots (reference video + image refs, Motion transfer / Object swap) inside **Create**, not a new page
- optional picker entry Seedance 2.0 (credit label 48/36) if it is cheap to add as data
- Recreate hydration from seeded data
- History + How it works
- auth / upgrade on Generate

Do not add Kling, Veo, Sora, or other Video engines.

---

### `/effects`

Thin preset catalog. Representative presets only. Cards reuse the Effects preset pattern (example + Recreate).

---

### `/effects/examples/:slug`

Thin example/detail for a preset (media, name, Try for free / Recreate → `/effects/use/:slug`).

This is the live card-click path. Do not skip it by sending every Effects card straight to the composer; Home hover Recreate **may** skip to the composer.

---

### `/effects/use` and `/effects/use/:slug`

Effects composer. Bare `/effects/use` selects a default preset (Floating fall).

Required:

- preset name
- Change-preset picker (in-page, in-scope presets only)
- Character / Location / Products upload slots (preview only)
- Generate **1 FREE LEFT**
- auth / upgrade (even the free label should demonstrate the gate in the demo: logged out → Auth; logged in → result **or** upgrade, pick one consistent rule and use it)

Effects is **not** the Image/Video composer with a different title. Share upload/Generate/gate primitives; keep the slot layout distinct.

---

### `/publications/:id`

Generation detail page.

Required: media, creator, prompt, model, quality/size, Like, Recreate, Share (copy URL is enough).

Recreate must route into the correct shell with hydrated state:

| Publication model | Destination |
| --- | --- |
| GPT Image 2 | `/ai/image?model=gpt_image_2&recreateId=…` |
| Soul Cinema | `/ai/image?model=soul-cinematic&recreateId=…` |
| Soul 2.0 | `/ai/image?model=soul-v2&recreateId=…` |
| Seedance 2.5 | `/ai/video?model=seedance_2_5&recreateId=…` |
| Genjutsu | `/ai/video?model=genjutsu&recreateId=…` |

Do **not** implement publication **Video / Upscale / Edit** actions. Those enter omitted transform shells.

Download can be a non-functional or `download` on the seeded file.

---

### `/community`

One seeded feed (no Explore / Projects / Shots / Originals subnav unless it is cheap visual chrome).

Cards: media, creator hover, Like, open `/publications/:id`.

---

### `/library/all`

Live behavior: the route **loads logged out** and is empty.

Rebuild:

- logged out: empty copy (“Your creations will appear here”) + sign-in CTA that opens Auth
- mocked-authenticated: seeded All / Image / Video grid (do not implement Shorts Studio, Explainer, Audio, Marketing, Characters, Lipsync filters)
- open item → publication or generator Recreate

No persistence backend. Likes and demo auth live in client state.

---

### `/@higgsfield.studio/projects/:slug` (thin, one or two slugs)

Only enough to not 404 from Home project cards.

Include: title, Public, creator, hero media, short about, Like, Share.

Do **not** rebuild asset groups, acts, regenerations, shotlists, comment threads, or related-project rails.

No Recreate unless a seeded project actually maps to a generation (the inspected live project did not).

---

## Header destinations (in-scope)

| Header item | Rebuild behavior |
| --- | --- |
| Logo / Explore | `/` |
| Image | `/ai/image?model=gpt_image_2` |
| Video | `/ai/video` (default Seedance 2.5) |
| Genjutsu | `/ai/video?model=genjutsu` |
| Effects | `/effects/use` |
| Community | `/community` |
| Login / Sign up | Auth modal (not a full Clerk page) |
| Pricing | Upgrade modal **or** a thin static pricing view that reuses Upgrade plan cards — do not build checkout |

Image / Video **mega-menus**: reduced **Models** list for in-scope engines only. Do not implement Features destinations (Canvas, Relight, Inpaint, Cinema, …). A Features column that looks populated but those links are omitted is worse than a short honest menu.

Other header items (Audio, MCP, Cinema, Marketing, Supercomputer, …) may be visible as inactive/omitted so the bar still reads as Higgsfield. Do not stub-build those products.

Mobile: Home / Community / Library / Profile bottom bar. Profile opens Auth when logged out; a one-screen demo profile when authenticated.

---

# 3. Shared architecture

Prefer **data + a few shells** over per-gallery pages.

## A. Creation shells

Image and Video share primitives, not one mega-component:

- `GeneratorLayout` (composer + result/history column)
- `ModelPicker` driven by `src/data/models.ts`
- `PromptComposer`
- `ReferenceUploader` (preview only)
- settings chips from the model record
- `GenerateButton` (label includes credit numbers from the model)
- `HistoryPanel` / `HowItWorksPanel`

Effects uses the same Generate, upload preview, and gates. It does **not** use the Image/Video settings row.

Video Edit/Motion are tab chrome inside this layout, not additional routes unless routing them is cheaper than faking tabs. If routed, `/ai/video/edit` and `/ai/video/motion` must not become a second implementation pass.

## B. Discovery objects

One generation record in mock data should power:

- Home community cards
- Community grid
- Library items
- Publication page
- Recreate hydration

Shape (illustrative): `id`, `kind: image | video`, `modelId`, `title`, `prompt`, `settings`, `media`, `creator`, `likeCount`, `recreate: { path, model, extra }`.

Preset records power Effects + Genjutsu:

- Effects: `slug`, example media, composer slots
- Genjutsu: overlay copy, object-swap vs motion-transfer, Recreate → Video

Do not create per-section page types for GPT vs Soul vs Seedance.

## C. Auth gate

One **Welcome to Higgsfield** modal for:

- Generate (logged out)
- Like (logged out)
- Recreate when the live product gated it (Genjutsu overlay)
- header Login / Sign up
- Library / Profile when logged out

Visual OAuth rows (Google / Apple / Microsoft) + Continue with Email. Mock success sets `authenticated = true` and closes the modal. No Clerk.

Live also has full-page `/auth/sign-in`. Do not build it unless the modal is insufficient.

## D. Upgrade gate

Authenticated Generate opens one Upgrade modal.

Reusable body: Monthly / Annual toggle, Basic / Pro / Max / Teams cards, credits, representative model-access copy.

Heading may vary (“Unlock GPT Image 2”, “Upgrade Plan to buy credits”). No payment.

## E. Recreate

First-class. Always:

1. resolve the seeded record
2. navigate to the shell + model query
3. hydrate prompt/settings (the live logged-out Image Recreate often left the prompt empty — **the rebuild should hydrate**, because that is the product meaning of Recreate)

Deterministic mock ids. No real `recreateJobSetId` API.

## F. Like

- Logged out → Auth modal; `aria-pressed` stays off
- Authenticated → toggle `aria-pressed`, update count in client state
- Do not invent a Favorites product. Library is not “liked items” unless we later prove that live; default Library is **creations**

---

# 4. Seeded content

Local structured mocks, not JSX:

- `src/data/models.ts`
- `src/data/generations.ts`
- `src/data/effects.ts`
- `src/data/homeSections.ts`
- `src/data/projects.ts` (one or two)
- `src/data/creators.ts`

Use research screenshots/composition as a visual target. Use local placeholder media if live assets cannot be copied.

---

# 5. State

## URL

- `model`
- effect `slug`
- `recreateId`
- publication `id`
- project `slug`

## React local UI

Dialogs, pickers, prompt text, upload previews, tab chrome.

## Tiny shared client state

- `authenticated`
- billing cycle for the Upgrade modal
- likes
- optional: “demo user” display name

No Redux-scale store. No backend.

---

# 6. Must work vs representative

## Must actually work

- routing and header current-state
- Home section patterns (community card, preset card, project card, Genjutsu overlay)
- model query + picker
- prompt editing
- upload preview
- Image / Video Create / Effects Generate
- Auth modal + mock sign-in
- Upgrade modal + Monthly / Annual
- publication Recreate hydration
- Effects example → composer
- Like (auth gate + authenticated toggle)
- Community → publication
- Library empty vs seeded
- desktop and mobile navigation

## Representative only

- AI output
- credits as real balances
- checkout
- cloud uploads
- async jobs
- Clerk / SSO
- History filling from a real Generate
- Comments, Follow, Share sheets
- How it works essays
- Video Edit / Motion / Reframe / Draw-to-Video
- mega-menu Features

---

# 7. Deliberately omitted

Do not implement. Do not create shallow fake products for these. They may appear as inert header labels.

**Omitted because they are other shells / businesses**

- Audio
- Cinema Studio (`/generate`) — including Cinematic Cameras
- Marketing Studio workspace and `/marketing-studio-community`
- Canvas, Layers/Edit, Upscale
- Supercomputer, MCP, ChatGPT Plugin, API console
- Host plugins, Minecraft, 3D Jutsu
- Faceless, Shorts, Explainer, Mixed Media, Lipsync / UGC Factory
- AI Influencer, Moodboard, Soul ID Character
- Apps catalog and individual apps (Relight, Face Swap, …)
- Creation Hub `/flow`
- Photodump modal
- Teams, billing backend, real publishing, project authoring

**Omitted because they are discovery duplicates of in-scope shells**

- `/gpt-image-2-community`, `/soul-community`, `/soul-cinema-community`, `/seedance-2-5-community`, `/seedance-2-community`
- `/higgsfield-genjutsu-presets`
- `/soul-cinema`, `/soul-intro`, `/seedance/2.5`, `/gpt-2`, `/marketing-studio-intro`
- extra Image/Video models
- Seedance 2.0 Home gallery
- Marketing Studio Home gallery
- Community subroutes (`/community/projects`, `/generations`, `/originals`)
- Library type filters beyond All / Image / Video
- Publication Upscale / Edit / Video
- Full public-project asset browser
- Full `/pricing` checkout page
- Full `/auth/*` Clerk pages
- `/profile` as a real settings app

If time remains after polish, the only optional add that still teaches the architecture is **one more Image or Video engine chip**, not a new shell.

---

# 8. Components (keep the set small)

## Global

AppHeader, reduced MegaMenu, MobileNav, Modal, LikeButton, CreatorBadge, CreditBadge

## Discovery

HomeSection, GenerationCard, PresetCard, ProjectCard, PublicationPage, GenjutsuPresetOverlay (Publication-like body, no new route)

## Creation

GeneratorLayout, ModelPicker, PromptComposer, ReferenceUploader, SettingsChips, GenerateButton, HistoryPanel, EffectComposer

## Gating

AuthModal, UpgradeModal, BillingToggle, PlanCard

Do not invent Masonry/PublicationModal/SignInView/SignUpView/EffectPresetPicker as separate products if a simpler composition covers it.

---

# 9. Implementation order

Vertical slices. Stop adding breadth when polish slips.

1. **Foundation** — Vite/React/TS, tokens, fonts, layout, header, routing, responsive shell.
2. **Home** — sections, card patterns, Genjutsu overlay, CTAs into shells (even if composers are still empty frames).
3. **Image** — first complete shell: model, prompt, settings, Recreate query hydration.
4. **Gating** — Auth + mock session + Upgrade. Wire Generate and logged-out Like.
5. **Publication + Recreate** — detail page, Home/Community cards open it, Recreate hydrates Image.
6. **Video** — reuse primitives; Seedance Create; Genjutsu slots; Edit/Motion chrome only.
7. **Effects** — catalog, example, composer.
8. **Community + Library + thin project** — lightweight, same generation data.
9. **Polish** — hover Recreate overlay, focus, motion, empty/skeletons, a11y, visual match.

Gating is not optional decoration; without it Generate is a dead button.

---

# 10. Time budget

Approximate:

| Slice | Time |
| --- | --- |
| Foundation | 1–1.5h |
| Home | 2–2.5h |
| Image | 1.5–2h |
| Auth + upgrade | 1.5–2h |
| Publication + Recreate | 1–1.5h |
| Video (Create + Genjutsu + tab chrome) | 1.5–2h |
| Effects | 1–1.5h |
| Community / Library / thin project | 1h |
| Responsive / polish / QA | 2–3h |
| Deploy / walkthrough | 1h |

**Target ~14–16 hours.**

Cuts that protect this budget: no Marketing shell, no `*-community` landings, no Video Edit/Motion implementation, no project asset browser, no extra models.

---

# 11. Definition of done

An evaluator can:

1. Open the live rebuild and recognize Higgsfield immediately
2. Browse Home galleries
3. Open a generation (publication) and Like it (auth if logged out; toggle if logged in)
4. Recreate into Image with the right model and a filled prompt
5. Recreate or Open preset into Video (Seedance or Genjutsu)
6. Open an Effect example, then the Effects composer
7. Change in-scope models/settings
8. Generate logged out → Auth; mock sign-in
9. Generate logged in → Upgrade; switch Monthly / Annual
10. Browse Community and Library (empty vs seeded)
11. Use the same loop on a mobile viewport

The product should feel like **one system** (discovery → shell → gate), not a pile of screenshots.

---

# 12. Decision rule

When choosing:

- another route **vs** polish on Image / Recreate / gates → polish
- another model **vs** working Recreate hydration → Recreate
- a `*-community` landing **vs** Community + `?model=` → Community / shell
- full Video Edit **vs** a convincing Create tab → Create
- Marketing or Cinema **vs** proving Soul Cinema is Image → Image

The rebuild should show that we understood Higgsfield’s architecture: a few shells, many discovery doors.
