# Remaining Home galleries — frozen implementation reference

**Purpose:** freeze everything needed to implement the seven remaining Home galleries **without reading the HAR again**. Item records already live in the data files. This document freezes section chrome, shared families, genuine per-section differences, and interaction.

**Not in this file:** Visual Effects, Genjutsu, Featured, Quick Start, Astra, Supercomputer / One Canvas / Photodump / trailing Home trailers. Those stay in `research/HOME_SECTION_ORDER.md`.

**Do not implement UI from this review.** `GenerationCard` and `ProjectCard` are not built yet. When they are, reuse the families below — do not fork six Community variants.

---

**FROZEN: Do not inspect the HAR again during normal Home gallery implementation. Use these data files and this reference. Only return to the HAR if a genuinely missing value is identified first.**

---

## Shared Community family (six galleries)

All six use the **same** stack:

| Layer | Use |
| --- | --- |
| Chrome | `HomeGallery` (title + description + optional header action) |
| Layout | `ColumnGallery` (`maxCols: 4`) |
| Card | **one** `GenerationCard` |
| Record | `CommunityGenerationItem` (`gallery.types.ts` `GenerationItem` + `community.types.ts`) |
| Data | one file per section (below) — same shape, not six models |

Do **not** create SeedanceCard / GptImageCard / SoulCard. Per-section differences are chrome + media type + one figure class, not new components.

### Layout (`ColumnGallery` / live `G` + `Kr` / `Qs`)

- Shortest-column pack by `height / width` (`1 / aspectRatio`).
- `maxCols: 4` on every Home Community `G` call.
- Column count from viewport (`communityColumnCount`): **4** above 1280px, **3** at ≤1280, **2** at ≤1024, **2** at ≤768.
- SSR class mirror: `grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.
- Column gutter: `space-y-2` inside a column; `pr-2` except the last column.

### Aspect ratio

- Always `preview.width / preview.height` as stored on `media.aspectRatio`.
- **Never** snap to 9:16, 3:4, 16:9, etc. Keep the exact float (e.g. `1520/2688` → `0.5654761904761905`, `1920/1080` → `1.7777777777777777`).

### Clip / fade / CTA (`G` defaults)

- Clip wrapper: `relative h-224 overflow-hidden` (fixed `h-224`, not `max-h-224`).
- Bottom fade: `h-52` + `from-surface-tertiary` (`GalleryFadeCta` defaults are `h-52` / `from-page` — Community Home must use `from-surface-tertiary`).
- Fade position: `absolute -bottom-1 left-0 z-10`, `pb-5 md:pb-9`.
- CTA copy: i18n `actions.viewAllOf` → **View all of {name}**, where `{name}` is the **section title** after i18n (Lingui `RxLEzD`).
- CTA href: `/{category.slug}` (same as the title link). Live Home does **not** send View all to `/ai/image` or `/ai/video`.
- Title is an `<h2>` wrapping a link to `/{slug}`. Description is not a link.

### Section margin

- Default `G` margin: `mb-10 md:mb-16`.
- **Only Seedance 2.5** overrides: `mb-6`.

### Card interaction (Home `z0` / `ge` — not the full Community page card)

`COMPONENT_STYLE_REFERENCE.md` GenerationCard documents Recreate + Like. **Home Community tiles do not use Recreate.** Home `G` does not pass `footerSlot`.

| Action | Home behavior |
| --- | --- |
| Resting | Poster (video) or image. No Recreate bar. |
| Hover / focus | Top overlay: creator avatar + **username** (`creator.username`, not a separate display name) + Like. Bottom gradient. |
| Click card | `/publications/{id}` (`baseHref: "publications"` → `/${baseHref}/{id}`). Every item `href` in the data files already matches. |
| Like, logged out | Shared `AuthModal`. No like-state change. |
| Like, logged in | Toggle Zustand `likedGenerationIds`; `aria-pressed` + visual count. Seeded `likeCount` is the base; do not mutate the data arrays. |
| Creator click | `/@{username}` (stop card navigation). Avatar `alt` pattern: `{username}'s profile picture`. |

### Playback (Home `Kr`)

```
playOnHover = (slug === "mixed-media-community")
```

**None of these six slugs is `mixed-media-community`.** Home shows the poster/image only. Do not autoplay or hover-play Community Home video. (Video `src` + `posterSrc` are still stored so the card can render a static poster and so Recreate/publication later can use the file.)

Image sections (GPT Image 2, Soul Cinema, Soul 2.0) have no `posterSrc` and no `video` `src`.

### Fields every Community item already has

`id`, `href`, `media.type`, `media.src`, `media.width`, `media.height`, `media.aspectRatio`, `media.posterSrc` (video only), `creator.username`, `creator.avatarSrc`, `creator.href`, `likeCount`, `jobSetId`, `jobSetType`, `model`, `jobId`, truncated Home `description`.

Order in each file is Home RSC order. Do not reorder.

---

## Shared Projects family (one gallery)

| Layer | Use |
| --- | --- |
| Chrome | Own section (`flex flex-col gap-5 my-8`), **not** Community `G` |
| Layout | `GridGallery` |
| Card | **one** `ProjectCard` |
| Record | `HomeProject` in `projects.data.ts` |

**Do not convert Projects to `ColumnGallery` + `GenerationCard`.**

---

## Final Home order of these seven sections

After Visual Effects + Genjutsu (already built). Banners between them are **not** these galleries; keep them from `HOME_SECTION_ORDER.md`.

| Page order | Section | Visibility |
| --- | --- | --- |
| 1 | Seedance 2.5 | All breakpoints |
| 2 | Explore the inside of every project | All breakpoints |
| — | Supercomputer banner | All breakpoints (not this family) |
| 3 | GPT Image 2 | Desktop-only (`di` / `hidden` unless desktop) |
| — | One Canvas banner | Desktop (`hidden lg:block`, inside `di`) |
| 4 | Marketing Studio | Desktop-only |
| 5 | Seedance 2.0 | Desktop-only |
| — | Photodump banner | Inside `di` |
| 6 | Higgsfield Soul Cinema | Desktop-only |
| 7 | Higgsfield Soul 2.0 | Desktop-only |

Config mirror: `src/features/home/home-section-order.ts` (`seedance25Gallery` → `soul20Gallery`).

Copy lives in `src/locales/en.json` under `home.seedance25` / `home.projects` / `home.gptImage2` / `home.marketingStudio` / `home.seedance20` / `home.soulCinema` / `home.soul20`. View-all template: `actions.viewAllOf`. Projects CTA: `actions.exploreCommunity`. Public badge: `badges.public`.

---

## 1. Seedance 2.5

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/seedance-25.data.ts` — **16** videos |
| Title | Seedance 2.5 |
| Description | The most advanced AI video model |
| Route / title href | `/seedance-2-5-community` |
| View All text + route | **View all of Seedance 2.5** → `/seedance-2-5-community` |
| Layout | Community `G`, `maxCols: 4`, variable-ratio pack |
| Ratio behavior | Variable. Exact `width/height` per item (seen: `1080/1920` → `0.5625`, `1440/1080` → `1.3333333333333333`, `1920/1080` → `1.7777777777777777`) |
| Clipping / fade | `h-224` clip; fade `h-52 from-surface-tertiary`; CTA `pb-5 md:pb-9` |
| Card interaction | Shared Community Home (Like + username hover; click `/publications/{id}`) |
| Playback | **Off** on Home (`playOnHover` false). Poster + stored MP4. |
| Special variation | **Only section** with figure class `[&>img]:origin-bottom [&>img]:scale-125 [&>video]:origin-bottom [&>video]:scale-125`. Section margin **`mb-6`** (not the Community default). Visible on mobile. `jobSetType` / `model`: `seedance_2_5`. |
| Data complete | **Yes.** IDs, hrefs, MP4s, posters, dimensions, exact ratios, usernames, avatars, like counts, job fields present. No data-file change required. |

---

## 2. Explore the inside of every project

| Field | Frozen value |
| --- | --- |
| Component family | `GridGallery` + `ProjectCard` |
| Data file | `src/features/home/projects/projects.data.ts` — **8** records |
| Title | Explore the inside of every project |
| Description | See all prompts, assets, and how each project was created |
| Route | No title href (plain `h2`, not a link) |
| View All / CTA | **Explore community** → `/community` (not a “View all of …” Community CTA) |
| Layout | CSS grid `grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`. Document order. No shortest-column pack. Section: `flex flex-col gap-5 my-8`. |
| Ratio behavior | **Fixed** Home frame `343/195` (`HOME_PROJECT_MEDIA_RATIO`). Cover the poster/video into that box. Do not use pixel aspect of the JPG. |
| Clipping / fade | Grid `max-h-152 md:max-h-100 lg:max-h-152` with overflow clip. Fade **`h-60`**, inline gradient `linear-gradient(180deg, rgba(15, 17, 19, 0.00) 0%, #0F1113 73.33%)` (not Community `h-52 from-surface-tertiary`). CTA padding `pb-5 md:pb-8`. |
| Card interaction | Whole card is a link to the project route. Footer: author avatar + truncated title + **Public**. Author name **Higgsfield Studio**, username `higgsfield.studio`, `authorHref` `/@higgsfield.studio`, `isTeam: true`. **No Like** on Home project cards. |
| Playback | Hover plays `videoSrc` (first `gallery_media` HLS). Resting poster is `posterSrc`. All eight Home records have HLS. |
| Special variation | `data-higgsfield-projects-card`. Distinct fade/CTA from Community. Visible on mobile. |
| Data complete | **Yes.** Order, IDs, slugs, posters, HLS, author, Public, descriptions match Home JSON-LD / RSC slice of 8. No data-file change required. |

Home order (already in the file):

1. `if-you-stop-loving-me-ill-die` — `/@higgsfield.studio/projects/if-you-stop-loving-me-ill-die`
2. `cully-hill-boys`
3. `red-flag`
4. `kok-boru-film`
5. `adiliada`
6. `oneiric`
7. `zephyr-special`
8. `hell-grind`

---

## 3. GPT Image 2

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/gpt-image-2.data.ts` — **12** images |
| Title | GPT Image 2 |
| Description | 4K images with near-perfect text rendering. |
| Route / title href | `/gpt-image-2-community` |
| View All text + route | **View all of GPT Image 2** → `/gpt-image-2-community` |
| Layout | Shared Community `G` |
| Ratio behavior | Variable exact pixels (not 9:16). Includes e.g. `1520/2688` → `0.5654761904761905`. |
| Clipping / fade | Shared Community (`h-224` / `h-52 from-surface-tertiary`) |
| Card interaction | Shared Community Home |
| Playback | None (still images; no `posterSrc`) |
| Special variation | Desktop-only (`di`). Default Community margin `mb-10 md:mb-16`. `model` / `jobSetType`: `imagegen_2_0`. No scale-125. |
| Data complete | **Yes.** |

---

## 4. Marketing Studio

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/marketing-studio.data.ts` — **12** videos |
| Title | Marketing Studio |
| Description | See what creators and brands are making with Marketing Studio. |
| Route / title href | `/marketing-studio-community` |
| View All text + route | **View all of Marketing Studio** → `/marketing-studio-community` |
| Layout | Shared Community `G` |
| Ratio behavior | Variable exact pixels (`0.5625`, `0.75`, `1.333…`, `1.777…`) |
| Clipping / fade | Shared Community |
| Card interaction | Shared Community Home |
| Playback | **Off** on Home. Poster + stored MP4. |
| Special variation | Desktop-only. Default margin. `model` / `jobSetType`: `marketing_studio_video`. No scale-125. |
| Data complete | **Yes.** |

---

## 5. Seedance 2.0

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/seedance-20.data.ts` — **16** videos |
| Title | Seedance 2.0 |
| Description | Browse premium AI video generations from the Higgsfield community. |
| Route / title href | `/seedance-2-community` |
| View All text + route | **View all of Seedance 2.0** → `/seedance-2-community` |
| Layout | Shared Community `G` |
| Ratio behavior | Every Home tile is `1920×1080` → **`1.7777777777777777`**. Still store width/height; do not hardcode “16:9”. |
| Clipping / fade | Shared Community |
| Card interaction | Shared Community Home |
| Playback | **Off** on Home. Poster + stored MP4. |
| Special variation | Desktop-only. Default margin. `model` / `jobSetType`: `seedance_2_0`. No scale-125. Slug is `seedance-2-community` (no `0`). |
| Data complete | **Yes.** |

---

## 6. Higgsfield Soul Cinema

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/soul-cinema.data.ts` — **16** images |
| Title | Higgsfield Soul Cinema |
| Description | Explore Higgsfield Community gallery for stunning Higgsfield Soul Cinema creations. |
| Route / title href | `/soul-cinema-community` |
| View All text + route | **View all of Higgsfield Soul Cinema** → `/soul-cinema-community` |
| Layout | Shared Community `G` |
| Ratio behavior | Every Home tile is `1920×1080` → **`1.7777777777777777`**. Images, not video. |
| Clipping / fade | Shared Community |
| Card interaction | Shared Community Home |
| Playback | None (still images) |
| Special variation | Desktop-only. Default margin. `model` / `jobSetType`: `soul_cinematic`. No scale-125. Home tiles are **images** (not Soul Cinema video). |
| Data complete | **Yes.** |

---

## 7. Higgsfield Soul 2.0

| Field | Frozen value |
| --- | --- |
| Component family | `ColumnGallery` + `GenerationCard` |
| Data file | `src/features/home/community/soul-20.data.ts` — **12** images |
| Title | Higgsfield Soul 2.0 |
| Description | A culture-native photo model built for fashion, aesthetics, and creative expression. |
| Route / title href | `/soul-community` |
| View All text + route | **View all of Higgsfield Soul 2.0** → `/soul-community` |
| Layout | Shared Community `G` |
| Ratio behavior | Variable exact pixels (Home set is `0.75` and `1.333…` only). Images. |
| Clipping / fade | Shared Community |
| Card interaction | Shared Community Home |
| Playback | None (still images) |
| Special variation | Desktop-only. Default margin. Slug is `soul-community` (not `soul-2-0-community`). `model` / `jobSetType`: `text2image_soul_v2`. No scale-125. |
| Data complete | **Yes.** |

---

## Genuine per-section differences (Community)

Everything else is shared. Only these differ:

| Section | Media on Home | Desktop-only | Margin | Figure extra |
| --- | --- | --- | --- | --- |
| Seedance 2.5 | video + poster | no | `mb-6` | `origin-bottom scale-125` on img/video |
| GPT Image 2 | image | yes | `mb-10 md:mb-16` | none |
| Marketing Studio | video + poster | yes | `mb-10 md:mb-16` | none |
| Seedance 2.0 | video + poster | yes | `mb-10 md:mb-16` | none |
| Soul Cinema | image | yes | `mb-10 md:mb-16` | none |
| Soul 2.0 | image | yes | `mb-10 md:mb-16` | none |

Pass Seedance 2.5 scale as a **figure `className` prop** on the shared `GenerationCard`, not a second card component.

---

## Implementation notes (not HAR)

- `GridGallery` does not yet apply `max-h-152 md:max-h-100 lg:max-h-152`; put clip on the Projects section wrapper when building UI.
- `HomeGallery` currently uses `mb-6 space-y-5` for every section. Community Home needs `mb-10 md:mb-16` except Seedance 2.5 `mb-6`. Apply when wiring these sections — do not “fix” `HomeGallery` in this freeze.
- `GalleryFadeCta` default `from-page` / `h-52` / `md:pb-9` matches Community except `from-*`. Projects must pass `h-60`, `md:pb-8`, and the `#0F1113` gradient.
- Live View-all destinations are `/{slug}` community landings. Product-slice routing (`IMPLEMENTATION_SCOPE.md`) can still map those hrefs later; do not change the frozen live URLs in the data/config.
- `description` / `jobId` on Community items are Home RSC snippets for Recreate identity later. Home `GenerationCard` does not show the prompt.

---

## Audit (this freeze)

Reviewed existing data files + `HOME_SECTION_ORDER.md` + i18n + Home mapper facts already extracted (`G` / `Kr` / `z0` / `zi` / Projects SSR). HAR was used only to confirm Projects fade CTA (`h-60`, `/community`, **Explore community**) and Soul RSC titles already stored in locales.

**No TypeScript data files were changed.** Item records were already complete (IDs, hrefs, media, exact ratios, creators, likes, project HLS/Public/order).

---

**FROZEN: Do not inspect the HAR again during normal Home gallery implementation. Use these data files and this reference. Only return to the HAR if a genuinely missing value is identified first.**
