# Home section order

**Purpose:** final Explore / Home sequence so gallery rows and special in-between components can be assembled later without guessing. No UI in this step.

**Sources:** `higgsfield.ai.har` SSR HTML for GET `https://higgsfield.ai/`, RSC payload on that document, Home JS mapper (`Pi` / `Bi`), and i18n `home.delta.9a591db699.json` / `en.e5a380c80a.json`.

SSR HTML ends after **Supercomputer**. GPT Image 2 through the trailing banners are client-rendered inside a desktop-only wrapper (`di = gt() ? children : null`). Genjutsu mobile (`md:hidden`) is the same gallery as desktop Genjutsu, not a second dataset.

Already built above this list (not repeated as placeholders): Featured slider, Explore Quick Start, GPT-6 Astra banner.

---

## Sequence

| # | Kind | Id | Visibility | Notes |
| --- | --- | --- | --- | --- |
| 1 | Gallery | `visual-effects` | `hidden md:block` | Masonry presets. Built. |
| 2 | Gallery | `genjutsu` | Desktop `hidden md:block`; mobile `my-6 md:hidden` after Seedance 2.5 | Same 20 presets. Desktop is the framed “Reality Manipulation” block; mobile is a masonry header row. |
| 3 | Gallery | `seedance-2-5` | All breakpoints | Community `G` row. |
| — | (same as 2) | `genjutsu` mobile | `md:hidden` | Inserted in the DOM after Seedance 2.5, before Projects. |
| 4 | Gallery | `projects` | All breakpoints | Eight Higgsfield Studio projects. |
| 5 | **Banner (not built)** | `supercomputer` | All breakpoints | After Projects, before GPT Image 2. |
| 6 | Gallery | `gpt-image-2` | Desktop-only (`di`) | Community `G` row. |
| 7 | **Banner (not built)** | `one-canvas` | `hidden lg:block`, inside `di` | After GPT Image 2, before Marketing Studio. |
| 8 | Gallery | `marketing-studio` | Desktop-only (`di`) | Community `G` row. |
| 9 | Gallery | `seedance-2-0` | Desktop-only (`di`) | Community `G` row. |
| 10 | **Banner (not built)** | `photodump` | Inside `di` | After Seedance 2.0, before Soul Cinema. |
| 11 | Gallery | `soul-cinema` | Desktop-only (`di`) | Community `G` row. |
| 12 | Gallery | `soul-2-0` | Desktop-only (`di`) | Community `G` row. |
| 13 | **Banner (not built)** | `home-trailer-gn` | `mb-10 md:mb-16`, inside `di` | Minified Home mapper `(Gn, { className: "mb-10 md:mb-16" })`. Identity not resolved from the HAR (no heading/href in SSR; definition is a local import). |
| 14 | **Banner (not built)** | `home-trailer-un` | Inside `di`, last child | Minified Home mapper `(Un, {})`. Same: desktop-only trailer after Soul 2.0; exact product not identified. |

Config mirror: `src/features/home/home-section-order.ts` (`homeGallerySections` + `homePageSequence`).

---

## Gallery sections (data ready)

### 1. Visual Effects

- Data: `src/features/home/effects/visual-effects.data.ts` (15 presets, reviewed, not recreated).
- Title href: `/effects`
- Header CTA: `/effects/use` — SSR label **Start generating** (`Rwpd6z`). Rebuild currently shows **Try for free**.
- View all: `/effects` — **View all presets**
- Copy: “Visual Effects” / “Big-budget visual effects, from explosions to surreal transformations.”
- Card hrefs (already in the card): `/effects/examples/{slug}`, recreate `/effects/use/{slug}`
- HAR extras not stored (unused by the current card): preset `id`, `preview_id`, `description`, `job_set_type: viral_hub_video`. Media URLs and `600/1066` aspect match `preview_media`.

### 2. Higgsfield Genjutsu

- Data: `src/features/home/genjutsu/genjutsu.data.ts` — **20** presets (HAR page 1 of `total: 35`).
- Runtime: `GET https://cms.higgsfield.ai/higgsfield-multiplier/video-explore/v2?lang=en&source=higgsfield&size=20&cursor=1`
- Generate: `/ai/video?model=genjutsu` — SSR **Start generating**
- Learn more / title / view all: `/higgsfield-genjutsu-presets`
- Desktop copy: “Reality Manipulation — transfer motion into new scenes, or swap details while everything else stays as filmed.”
- Mobile copy: “Take the motion and recast it with your characters, locations, and products, or swap specific elements while keeping the rest untouched.”
- Badge: **New model**. Mode labels **Objects swap** / **Motion transfer**. Overlay **Open preset** (modal, URL stays `/`, keyed by preset id).
- SSR HTML has empty skeletons only; variants come from the API (typically source + edit + generated; one preset has two generated variants).

### 3. Seedance 2.5

- Data: `src/features/home/community/seedance-25.data.ts` — **16** `GenerationItem` records.
- Title / view all: `/seedance-2-5-community`
- Copy: “Seedance 2.5” / “The most advanced AI video model”
- View all label: **View all of Seedance 2.5**
- `jobSetType` / model: `seedance_2_5`
- Home figure extra: `origin-bottom scale-125` on img/video (layout note only).

### 4. Explore the inside of every project

- Data: `src/features/home/projects/projects.data.ts` — **8** records.
- Title is not a link.
- CTA: `/community` — **Explore community**
- Copy: “See all prompts, assets, and how each project was created”
- Card hrefs: `/@higgsfield.studio/projects/{slug}`
- Author: Higgsfield Studio / `@higgsfield.studio` / Public. RSC `full_name` is `null`.
- Media frame: fixed Home `343/195`. Hover video is first `gallery_media` HLS URL.

### 6. GPT Image 2

- Data: `src/features/home/community/gpt-image-2.data.ts` — **12** records.
- Title / view all: `/gpt-image-2-community`
- Copy: “GPT Image 2” / “4K images with near-perfect text rendering.”
- Model: `imagegen_2_0`

### 8. Marketing Studio

- Data: `src/features/home/community/marketing-studio.data.ts` — **12** records.
- Title / view all: `/marketing-studio-community`
- Copy: “Marketing Studio” / “See what creators and brands are making with Marketing Studio.”
- Model: `marketing_studio_video`

### 9. Seedance 2.0

- Data: `src/features/home/community/seedance-20.data.ts` — **16** records.
- Title / view all: `/seedance-2-community`
- Copy: “Seedance 2.0” / “Browse premium AI video generations from the Higgsfield community.”
- Model: `seedance_2_0`

### 11. Higgsfield Soul Cinema

- Data: `src/features/home/community/soul-cinema.data.ts` — **16** records.
- Title / view all: `/soul-cinema-community`
- Copy from RSC category: “Explore Higgsfield Community gallery for stunning Higgsfield Soul Cinema creations.”
- Model: `soul_cinematic`

### 12. Higgsfield Soul 2.0

- Data: `src/features/home/community/soul-20.data.ts` — **12** records.
- Title / view all: `/soul-community`
- Copy from RSC category: “A culture-native photo model built for fashion, aesthetics, and creative expression.”
- Model: `text2image_soul_v2`

---

## Special non-gallery components (placeholders)

Do not implement these in the data step. Insert later between the gallery rows above.

### Supercomputer (`Rt`) — after Projects, before GPT Image 2

- Href: `/supercomputer`
- Title: Supercomputer
- Description: One superagent for your entire creative stack
- CTA: Try Supercomputer
- Assets (HAR HTML): `https://static.higgsfield.ai/spc-banner/bg-spc-banner.png`, `spc-banner-logo.png`, `spc-banner-creative.png`, `spc-banner-marketing.png`, `spc-banner-production.png`, `spc-banner-visualizing.png`
- Frame: `aspect-343/361 sm:aspect-5/2 lg:aspect-1408/429`

### One Canvas (`sr`) — after GPT Image 2, before Marketing Studio

- Desktop href: `/canvas` (`hidden lg:flex` card)
- Mobile href: `/canvas-intro` (the `sr` tree includes a mobile card, but Home mounts `sr` with `hidden lg:block`, so mobile Canvas is not shown in this Home slot)
- Aria / CTA: Try Canvas
- Title i18n: `ONE CANVAS.<0/>EVERY WORKFLOW.`
- Description i18n: `Moodboard, chain workflows, and share<0/>with your team - all on one canvas`
- Assets: `https://static.higgsfield.ai/canvas-banner-bg-desktop.webp`, `canvas-banner-desktop.webp` (HAR recorded desktop artwork **404**), plus mobile `canvas-banner-bg-mobile.webp` / `canvas-banner-mobile.webp`

### Photodump (`Mi`) — after Seedance 2.0, before Soul Cinema

- Kicker: photodump
- Title: Different Scenes / Same Star
- Description: Build your character. One click does the rest
- CTA: Try Photodump
- Desktop href: `/ai/image?model=soul-v2&modal-photo-dump=true&skip-preview=true`
- Mobile href builder in JS uses a `/mobile` path + `skip-preview=true` when `isMobile`

### Home trailer `Gn` — after Soul 2.0

- Placeholder only. Home mapper renders `<Gn className="mb-10 md:mb-16" />` inside the desktop wrapper. No SSR HTML, no confirmed href/copy in this HAR.

### Home trailer `Un` — after `Gn`, last in `di`

- Placeholder only. Home mapper renders `<Un />`. Not the site footer (`<footer id="footer">` is outside `main`). Product identity unknown from this HAR.

---

## Verified section links

Checked against SSR HTML hrefs and the Home JS category slugs (`Fi` / `Ii` / `Li` / `Ri` / `category.slug`):

| Section | Title | CTA / view all |
| --- | --- | --- |
| Visual Effects | `/effects` | CTA `/effects/use`; view all `/effects` |
| Genjutsu | `/higgsfield-genjutsu-presets` | Generate `/ai/video?model=genjutsu`; Learn more / view all `/higgsfield-genjutsu-presets` |
| Seedance 2.5 | `/seedance-2-5-community` | `/seedance-2-5-community` |
| Projects | (plain `h2`) | `/community`; cards `/@higgsfield.studio/projects/{slug}` |
| GPT Image 2 | `/gpt-image-2-community` | `/gpt-image-2-community` |
| Marketing Studio | `/marketing-studio-community` | `/marketing-studio-community` |
| Seedance 2.0 | `/seedance-2-community` | `/seedance-2-community` |
| Soul Cinema | `/soul-cinema-community` | `/soul-cinema-community` |
| Soul 2.0 | `/soul-community` | `/soul-community` |
