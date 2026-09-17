# Component style reference

**Status:** one-time normalization, 2026-09-17. Frozen raw source: `higgsfield.ai.har`.  
**Do not** re-parse the HAR during implementation. Use this file + the CSS next to it.

Theme tokens: `research/THEME_REFERENCE.md`, `research/reference/theme/tokens.dark.json`.

Confidence tags used below:

| Tag | Meaning |
| --- | --- |
| **VERIFIED FROM LIVE CSS** | Selector exists in live CSS; values copied from that rule |
| **VERIFIED FROM COMPUTED STYLE** | Measured on the live Home page (`THEME_REFERENCE.md`) |
| **APPROXIMATION** | Inferred from related tokens, HTML utilities, or empty headless tiles |

---

## Which file to open

| Work | Read |
| --- | --- |
| Promo bar, sticky header, logo, scrollable nav, nav badges, shimmer, right actions, Login/Sign up, language dropdown | `research/reference/styles/header.reference.css` **and** the Header tables below |
| Image / Video / Audio / Plugins mega menu, icon wells, TOP/NEW well badges, viewport position | `research/reference/styles/mega-menu.reference.css` |
| Home section title, gutters, strip vs grid, View all fade | `research/reference/styles/home-gallery.reference.css` |
| **GenerationCard** | `research/reference/styles/cards.reference.css` §2 + Shared |
| **PresetCard** (Effects / Genjutsu) | `research/reference/styles/cards.reference.css` §3 + Shared |
| **ProjectCard** | `research/reference/styles/cards.reference.css` §1 + Shared |
| Like, Recreate overlay, creator row, card media | `research/reference/styles/cards.reference.css` Shared |
| Colors, type, radius, motion tokens | `research/THEME_REFERENCE.md` |

Do **not** create GPT/Soul/Seedance-specific card CSS. Those galleries reuse GenerationCard.

---

## Header

| Property | Value | Confidence |
| --- | --- | --- |
| Height | 52px | VERIFIED FROM COMPUTED STYLE |
| z-index | 51 | VERIFIED FROM COMPUTED STYLE |
| Background | `#0f1113`, no blur | VERIFIED FROM COMPUTED STYLE |
| Default nav color | `#a8a8a8` (`--qc-text-tertiary`) | VERIFIED FROM LIVE CSS |
| Hover / open color | `#ffffff` + bg `#ffffff0d` | VERIFIED FROM LIVE CSS |
| Active color | `#d1fe17` | VERIFIED FROM LIVE CSS |
| Item padding | 4×8px; radius 8px; type Inter 14/500 | VERIFIED FROM LIVE CSS + HTML |
| Item-to-item gap | 0 on list; padding supplies space | VERIFIED FROM LIVE CSS |
| Separator | 1px × ~16px, `#ffffff1a`, 4px inline margin | VERIFIED FROM LIVE CSS / APPROXIMATION height |
| Scroll fade | 72px mask; `--hfnav-fade-*` | VERIFIED FROM LIVE CSS |
| Logo | 32×32, radius 8px, white fill, glyph 26×26 `#1a1a1a` | VERIFIED FROM LIVE CSS |
| Actions cluster gap | 12px between groups, 4px inside | VERIFIED FROM LIVE CSS |
| Pricing / Enterprise chip | 36px, radius 10px, **white** `#ffffff` + bg `#ffffff0d` **at rest** (not hover-only), inset `0 1.5px 3px #ffffff0d` | VERIFIED FROM LIVE CSS |
| Pricing discount | `.hfnav-discount`: 16px tall, min 56px, Grotesk 10/700/10px, pad 2×6, radius 6px, white, pink radial `#f920d1 → #ed1572`, absolute `top: calc(100% - 8px)` centered | VERIFIED FROM LIVE CSS |
| Language button | 36×36, radius 10px, **white** + bg `#ffffff0d` at rest, inset shadow, open color lime | VERIFIED FROM LIVE CSS |
| Login | lime text `#d1fe17`, wash ~8–10% lime, inset highlight | VERIFIED FROM LIVE CSS + COMPUTED STYLE |
| Sign up | lime fill `#d1fe17`, label `#1a1a1a`, lime inset shadow | VERIFIED FROM COMPUTED STYLE |
| Auth control height | **36px** on header (CSS `q-button-sm` is 40px) | VERIFIED FROM COMPUTED STYLE |
| Nav New/Free badge | 10px/700, radius 6px, pad 2×6, bg `#d1fe1733`, color `#d1fe17` | VERIFIED FROM LIVE CSS |
| ChatGPT Plugin | shimmer sweep 2s; highlight 90% white; **not** the cyan `.hfnav-item-highlight` unless that class is present | VERIFIED FROM LIVE CSS |
| Mega viewport | top 100%, `--hfnav-vp-left`, radius 24px, mt 8px, max-height `100dvh - 100px`, bg `#1c1e20`, hairline `#d9d9d90a`, shadow 20/8 | VERIFIED FROM LIVE CSS |
| Viewport alignment | JS: left = trigger.left − root.left, clamped to viewport − 8px | VERIFIED FROM LIVE CSS (script) |
| Promo bar | lime `#d1fe17`, text `#131517`, min-height 44px, z-index 3, glow `0 0 12px #d1fe1780`, collapse `grid-rows 1fr→0fr` 300ms | VERIFIED FROM LIVE CSS + HTML |

**Responsive:** desktop nav hidden below `md` (48rem). Instagram / language / Login are desktop-only in captured logged-out HTML. Mobile uses the 56px bottom bar (rebuild token).

---

## Mega menu

| Property | Value | Confidence |
| --- | --- | --- |
| Column min-width | 18rem | VERIFIED FROM captured HTML |
| Column padding | 8px, top 12px | VERIFIED FROM captured HTML |
| Row | grid `auto 1fr`, gap 12px, pad 8px, radius 16px | VERIFIED FROM captured HTML |
| Row hover | `bg-page-primary` `#131517` / canvas `#0f1113` | VERIFIED FROM captured HTML |
| Row active | `brightness(0.6)` | VERIFIED FROM captured HTML |
| Title | Grotesk 14/500 | VERIFIED FROM captured HTML |
| Description | 14px `#828282` | VERIFIED FROM captured HTML |
| Well | 48×48, radius 12px, fill `#23262a`, icon 24px | VERIFIED FROM captured HTML |
| NEW well border | `#d1fe173d` | VERIFIED FROM captured HTML |
| TOP well border | `#ff005b3d` | VERIFIED FROM captured HTML |
| Seedance TOP well | border `#3CD8FF` | VERIFIED FROM captured HTML |
| Badge pill | Grotesk 12/700 uppercase, skew −12°, pad-x 6px, radius 2px, `top: -12px` centered | VERIFIED FROM captured HTML |
| NEW color | bg `#d1fe17` / text `#131517` | VERIFIED FROM captured HTML |
| TOP color | bg `#ff005b` / text `#ffffff` | VERIFIED FROM captured HTML |
| Seedance TOP | 90° cyan gradient (see CSS file) | VERIFIED FROM captured HTML |

---

## Home gallery

| Property | Value | Confidence |
| --- | --- | --- |
| Page max width | 120rem (`--breakpoint-2xl`) | VERIFIED FROM LIVE CSS |
| Page gutter | 16px | VERIFIED FROM COMPUTED STYLE |
| Section title | Grotesk 26/700/30px, −1.2px tracking, uppercase, `#d1fe17` | VERIFIED FROM COMPUTED STYLE |
| Section subtitle | Inter 14/400, `#828282` | VERIFIED FROM captured HTML |
| Section spacing | pt 8/12, mb 24/32 (mobile/md) | VERIFIED FROM captured HTML |
| Horizontal strip gap | 20px | VERIFIED FROM captured HTML |
| Strip card width | 19.5rem / 25rem md / 32rem xl | VERIFIED FROM captured HTML |
| Strip media | 16:9, radius 8px | VERIFIED FROM captured HTML |
| Project gallery | 2 cols, gap 20px; &lt;640px gap 8×12 | VERIFIED FROM LIVE CSS |
| Auto-fit project grid | `minmax(230px,1fr)`, gap 16px, 2/3/4 cols | VERIFIED FROM captured HTML |
| Generation grid gap | 16px | APPROXIMATION (headless tiles empty; THEME said 8–16) |
| View all footer | 12.5rem gradient fade, button `q-button-sm` secondary | VERIFIED FROM LIVE CSS |

---

## GenerationCard

| Property | Value | Confidence |
| --- | --- | --- |
| Radius | 16px | VERIFIED FROM COMPUTED STYLE |
| Fill | `#1c1e20` | APPROXIMATION (same as ProjectCard) |
| Media | cover, inherit radius | APPROXIMATION |
| Hover | Recreate + Like opacity 0→1 in 0.2s ease-out | VERIFIED FROM COMPUTED STYLE |
| Active | brightness 0.6 | VERIFIED FROM captured HTML (discovery tiles) |
| Click | `/publications/:id` | product research, not CSS |
| Recreate | see Recreate overlay | VERIFIED FROM COMPUTED STYLE |
| Like | see Like control | JS class names in HAR |

Same card for Soul / GPT Image / Seedance community rows.

---

## PresetCard

| Property | Value | Confidence |
| --- | --- | --- |
| Radius | 16px | VERIFIED FROM COMPUTED STYLE |
| Recreate overlay | same as GenerationCard | VERIFIED FROM COMPUTED STYLE |
| Click | example `/effects/examples/{slug}`; Recreate `/effects/use/{slug}` | product research |

---

## ProjectCard

| Property | Value | Confidence |
| --- | --- | --- |
| Layout | column, gap 4px, pad 4px | VERIFIED FROM captured HTML |
| Radius | 16px | VERIFIED FROM captured HTML |
| Fill | `#1c1e20`; hover `#2a2d32` (gray-12 mapped) | VERIFIED FROM captured HTML / APPROXIMATION hover hex |
| Hairline | inset 1px `white/10`; focus 2px lime | VERIFIED FROM LIVE CSS |
| Hit target | absolute inset, z-20, inherit radius | VERIFIED FROM LIVE CSS |
| Author | z-40, pointer-events auto | VERIFIED FROM LIVE CSS |
| Info hide when selected | opacity 0 | VERIFIED FROM LIVE CSS |

---

## Recreate overlay

| Property | Value | Confidence |
| --- | --- | --- |
| Height | 40px | VERIFIED FROM COMPUTED STYLE |
| Radius | 10px | VERIFIED FROM COMPUTED STYLE |
| Pad-x | 12px | VERIFIED FROM COMPUTED STYLE |
| Type | Inter 14 / 600 / 16px lh | VERIFIED FROM COMPUTED STYLE |
| Color | `#d1fe17` | VERIFIED FROM COMPUTED STYLE |
| Background | `rgba(209,254,23,0.10)` | VERIFIED FROM COMPUTED STYLE |
| Blur | 8px | VERIFIED FROM COMPUTED STYLE |
| Resting opacity on card | 0 | VERIFIED FROM COMPUTED STYLE |
| Hover opacity | 1 over 0.2s `cubic-bezier(0,0,0.2,1)` | VERIFIED FROM COMPUTED STYLE |

---

## Like control

| Property | Value | Confidence |
| --- | --- | --- |
| Shape | pill | JS in HAR |
| Background | `white/8` | JS in HAR |
| Blur | 2rem | JS in HAR |
| Border | 0 | JS in HAR |
| Pressed | `aria-pressed`; color lime | APPROXIMATION (behavior confirmed; fill not a dedicated LIVE rule) |
| Logged out | Auth modal, no like-state change | architecture, not CSS |

---

## Still missing (do not HAR-hunt unless implementing this exact gap)

- Exact GenerationCard masonry / video-tile aspect per breakpoint (headless tiles were empty).
- Exact Like count type (size/weight) and heart icon metrics.
- `q-button-secondary` full rule (View all). Use header ghost/secondary + `q-button-sm`.
- Modal radii (Auth/Upgrade): infer 16px from cards until those modals are built.

If a value is missing: say what is missing, then open the HAR only for that selector.
