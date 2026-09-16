# Theme reference — live Higgsfield (2026-09-17)

**Status:** technical extraction from the loaded Home page (`https://higgsfield.ai/`), logged out. Not a product-research pass. Not application code.

**Method:** Chrome computed styles + `getComputedStyle(document.documentElement)` custom properties. Viewport ~932×487.

**Do not** copy Higgsfield’s CSS bundles into the rebuild. Use the semantic subset below.

---

## System observed

| Fact | Verified |
| --- | --- |
| Tailwind utilities + FOUC “Package default is DARK” | Live classes; `scheme-only-dark` on `body` |
| Design tokens: **`--hf-*`** (Quanta / Higgsfield) | 695 `--hf-*` properties |
| Alias layer **`--color-q-*`**, **`--qc-*`**, **`--q-*`** | Same values as `--hf-*` for colors used on Home |
| Older app aliases **`--color-page-*`**, **`--color-surface-*`**, **`--color-font-*`** | Still applied on Home (page canvas, chips) |
| `<meta name="color-scheme" content="dark">` | Yes |
| `<meta name="theme-color" content="#030304">` | Yes |
| PWA `theme_color` in prior HAR | `#D1FE17` (not re-fetched this pass) |
| `localStorage` keys `hf:quanta:theme-override` / `hf:quanta:theme-pref` | Prior HAR; not re-read this pass |
| Inline `--header-height-v2: 52px` on `<html>` | Yes |
| Sticky header area `area-[header]` | Height **52px**, `z-index: 51` |
| Largest CSS | TanStack hashed chunks on `assets.higgsfield.ai/tanstack/assets/…css` (not copied) |

`--hf-*` is the source of truth for a rebuild. `--color-q-*` / `--qc-*` are aliases used by Quanta component classes (`q-button`, `text-q-*`). `--color-page-primary` / `--color-surface-*` are a parallel semantic set still used in layout classes.

---

## Colors

Hex as returned by the live custom properties unless noted as **computed**.

### Canvas / surfaces

| Role | Token | Value | Notes |
| --- | --- | --- | --- |
| HTML/body canvas | computed `background-color` | **`#0f1113`** | Equals `--color-surface-tertiary` |
| Page primary (alias) | `--color-page-primary` | `#131517` | Close to hf primary |
| Background primary | `--hf-color-background-primary` / `--color-q-background-primary` | `#131416` | Quanta page |
| Background secondary | `--hf-color-background-secondary` | `#1c1e21` | |
| Secondary strong | `--hf-color-background-secondary-strong` | `#23262a` | Also `--hf-color-button-secondary` |
| Background tertiary | `--hf-color-background-tertiary` | `#2a2d32` | |
| Surface primary | `--color-surface-primary` | `#1c1e20` | Chip / control fill (`bg-surface-primary`) |
| Surface secondary | `--color-surface-secondary` | `#23262a` | Hover on chips |
| Surface section | `--color-surface-section` | `#18191c` | Same as elevated-end |
| Elevated gradient | `--hf-color-background-elevated-start` → `end` | `#383e46` → `#18191c` | |
| Glass | `--hf-color-background-glass` | `#23262abf` | |
| Inverse | `--hf-color-background-inverse` | `#ffffff` | |

**Approximation:** treat “app canvas” as `#0f1113` (what the browser paints) and “panels/cards” as `#1c1e20` / `#1c1e21`. Do not mix all greys; three levels are enough.

### Borders

| Role | Token | Value |
| --- | --- | --- |
| Subtle | `--hf-color-border-subtle` | `#ffffff0d` (4% white) |
| Default | `--hf-color-border-default` / `--qc-border-default` | `#ffffff1a` (10% white) |
| Strong | `--hf-color-border-strong` | `#ffffff33` (`#fff3`) |
| Focus / brand line | `--hf-color-border-focus` / `--color-separator-brand` | `#d1fe17` |
| Card hairline | `--color-separator-card` | `#d9d9d90a` |
| Error | `--hf-color-border-error` | `#fa0019` |
| Success | `--hf-color-border-success` | `#2eb844` |
| Warning | `--hf-color-border-warning` | `#ffef33` |

Widths: `--hf-border-width-hairline` **0.5px**, `thin` **1px**, `medium` **1.5px**.

### Text

| Role | Token | Value | Computed on Home |
| --- | --- | --- | --- |
| Primary | `--hf-color-text-primary` | `#fff` | Body also `#f7f7f8` (`--color-text-primary`) |
| Secondary | `--hf-color-text-secondary` | `#828282` | Alt `--color-font-secondary` `#898a8b` on chips |
| Tertiary | `--hf-color-text-tertiary` | `#626262` | `--qc-text-tertiary` `#a8a8a8` (different alias) |
| Disabled | `--hf-color-text-disabled` | `#484e56` | |
| Inverse (on lime) | `--hf-color-text-inverse` / `--hf-color-button-label-brand` | `#1a1a1a` | Sign up button |
| Brand | `--hf-color-text-brand` / `--color-font-brand` | `#d1fe17` | |
| Danger | `--hf-color-text-danger` | `#fa0019` | |
| Success | `--hf-color-text-success` | `#2eb844` | |
| Warning | `--hf-color-text-warning` | `#dfab01` | |
| Info | `--hf-color-text-info` | `#5b91fe` | |
| Link | `--hf-color-text-link` | `#d1fe17` | |
| On overlay | `--hf-color-text-on-overlay-secondary` | `#ffffff80` | |

### Brand / lime

| Token | Value |
| --- | --- |
| `--hf-color-brand-primary` / `--color-primary` / `--color-lime` / `--color-q-lime-500` | **`#d1fe17`** |
| `--hf-color-lime-300` | `#eeffa7` |
| `--hf-color-lime-200` | `#f6ffd1` |
| Login (computed) | `background: rgba(209, 254, 23, 0.08)`, `color: #d1fe17` |
| Recreate overlay (computed) | `background: rgba(209, 254, 23, 0.10)`, `backdrop-filter: blur(8px)` |

### Destructive / success

| Role | Token | Value |
| --- | --- | --- |
| Destructive button | `--hf-color-button-destructive` | `#fa0019` |
| Error state bg / fg | `--hf-color-state-error-bg` / `fg` | `#5c000f` / `#fa0019` |
| Success state bg / fg | `--hf-color-state-success-bg` / `fg` | `#0d4a17` / `#2eb844` |
| Warning state bg / fg | `--hf-color-state-warning-bg` / `fg` | `#523f00` / `#dfab01` |
| Surface error (alias) | `--color-surface-error` | `#e72930` — **do not prefer** over `#fa0019` |

### Overlays

| Role | Token | Value |
| --- | --- | --- |
| Scrim | `--hf-color-overlay-scrim` | `#00000080` |
| Page overlay alias | `--color-page-overlay` | `#000c` (~80% black) |
| Hover wash | `--hf-color-overlay-hover` / `--qc-overlay-hover` | `#ffffff0d` |
| Dim strong | `--hf-color-overlay-dim-strong` | `#ffffff33` |
| Wash | `--hf-color-overlay-wash` | `#ffffff80` |

---

## Typography

### Files actually preloaded

| File | URL |
| --- | --- |
| Inter (variable 100–900, latin) | `https://assets.higgsfield.ai/fonts/inter/inter-latin-100-900.woff2?v=c9407645` |
| Space Grotesk (variable 300–700, latin) | `https://assets.higgsfield.ai/fonts/space-grotesk/space-grotesk-latin-300-700.woff2?v=a0d054c4` |

`preconnect` to `fonts.googleapis.com` / `fonts.gstatic.com` is present. **Do not assume Google-hosted Inter** is what Home uses; the self-hosted `assets.higgsfield.ai` files are the ones preloaded.

### Families registered (`document.fonts`)

Used in chrome (verified computed):

- **Inter** — body, nav, buttons, most UI (`font-sans` / computed body)
- **Space Grotesk** — section titles / accent caps (`font-grotesk`, `text-q-accent-md-bold`)

Declared in tokens but **not** what body computed to:

- `--hf-type-family-primary` = `"Inter Display"` — registered, faces mostly `unloaded` on Home
- `--hf-type-family-mono` = `"IBM Plex Mono"`
- `--font-mono` utility = `"Space Mono"`

Also registered (marketing / generated-content / one-off, **do not load in rebuild**): Lato, Instrument Serif, Doto, Caveat, EB Garamond, DM Sans, Geist Mono, Jersey 10, JetBrains Mono, Source Serif 4, SN Pro, Pangolin.

**Rebuild:** Inter + Space Grotesk. Optional IBM Plex Mono or Space Mono only if we show code/prompt hashes.

### Weights (tokens)

`--hf-type-weight-regular` 400, `medium` 500, `semi-bold` 600, `bold` 700, `black` 900.

Live: body 400; Login/Sign up 500; Generate/Recreate/q-button 600; section titles 700.

### Hierarchy (computed)

| Role | Family | Size | Weight | Line-height | Letter-spacing | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Inter | 16px (`--hf-type-size-300`) | 400 | 24px | normal | `#f7f7f8` |
| Section title (lime caps) | Space Grotesk | 26px | 700 | 30px | **-1.2px** | `#d1fe17` uppercase |
| Banner H3 caps | Space Grotesk | 16px | 700 | 24px | **-4%** | `#f7f7f8` |
| Supporting body | Inter | 16px | 500 | 22px | normal | `#828282` |
| Caption / promo bar | Inter | 14px | 400 | 20px | normal | on lime: `#131517` |
| Label (Recreate) | Inter | 14px | 600 | 16px | normal | `#d1fe17` |
| Nav auth | Inter | 14px | 500 | 20px | normal | lime or `#1a1a1a` |
| q-button md | Inter | 16–18px | 600 | 20–22px | 0 / -0.4px | |

Token scale (`--hf-type-size-*`): 050 10px … 300 16px … 900 34px, 1000 36px, 1100 42px.

Letter-spacing tokens: tight `-0.075rem`, slight `-0.025rem`, none `0`, loose `0.00625rem`, wide `0.0125rem`. The 26px Grotesk title’s **-1.2px** is tighter than the token “slight”; treat that as a **component style**, not the token.

---

## Shape

| Token | Value | Used as |
| --- | --- | --- |
| `--hf-radius-200` | 8px | chips `md:rounded-lg` (inferred Tailwind default when `--radius-lg` empty) |
| `--hf-radius-250` | 10px | Login / Sign up / Recreate `q-button-sm` **computed 10px** |
| `--hf-radius-300` | 12px | `q-button-md` **computed 12px** |
| `--hf-radius-400` | 16px | Effect card **computed 16px** (`rounded-[inherit]`) |
| `--hf-radius-full` | 9999px | mobile chips `rounded-full` |

Modal radius: **not measured this pass**. Infer **16px** (`--hf-radius-400`) from cards; confirm on Auth modal during implementation.

Pills: `rounded-full` on small chips; `md:rounded-lg` (~8px).

---

## Spacing / layout

`--hf-space-*` (4px grid with 2px half-steps):

| Token | rem | px |
| --- | --- | --- |
| 050 | 0.125 | 2 |
| 100 | 0.25 | 4 |
| 200 | 0.5 | 8 |
| 300 | 0.75 | 12 |
| 400 | 1 | 16 |
| 500 | 1.25 | 20 |
| 600 / 650 | 1.5 | 24 |
| 800 | 2 | 32 |
| 1000 | 2.5 | 40 |
| 1200 | 3 | 48 |
| 1600 | 4 | 64 |

Layout measured:

| Item | Value | Confidence |
| --- | --- | --- |
| Header height | **52px** (`--header-height-v2`) | Verified |
| Page container | `.container.max-w-8xl` → max-width **1536px**, padding-left **16px** | Verified |
| Breakpoints | `--hf-breakpoint-mobile` 20rem, `tablet` 48rem, `desktop` 80rem, `wide` 120rem | Verified tokens |
| `--q-modal-width-sm/md/lg` | 29.3125 / 40 / 44.25 rem | Verified tokens |
| Header auth button | 36×, padding 0 12px | Verified |
| q-button-sm | 40px tall, padding 8×12 | Verified |
| q-button-md | 48px tall, padding 16px | Verified |
| Chip | 32px tall, padding-x 12px | Verified |
| Icon sizes | `--hf-icon-sm/md/lg` 16 / 20 / 24px | Verified |
| Nav item gap | 8px | Verified |
| Section body `max-w-2xl` | 672px | Verified |

Card gaps / Home gallery gutters: **not fully measured** (headless cards often empty). Approximate 8–16px from `--hf-space-200/400`.

---

## Effects

### Shadows (tokens; `/**/` is CSS comment noise in computed `box-shadow` shorthands)

| Token | Intent |
| --- | --- |
| `--hf-shadow-raised-sm` | `0 2px 4px #0000001a` |
| `--hf-shadow-modal` | inset 2px highlight `#ffffff0d` + small drop |
| `--hf-shadow-overlay` / `--hf-shadow-raised` | inset highlight + larger drop `#00000026` |

**Computed lime primary button:**

`inset 0 -3px 0 rgb(130, 155, 25)`, `0 6px 4px rgba(0,0,0,0.25)`, `0 32px 24px rgba(0,0,0,0.15)`

**Computed Login:** `inset 0 2px 3px rgba(255,255,255,0.03)`

**Tertiary marketing button:** `inset 0 2px 3px rgba(255,255,255,0.05)` + `backdrop-filter: blur(12px)` + border `1px solid rgba(255,255,255,0.1)`

### Blur

- Recreate overlay: `blur(8px)`
- Tertiary CTA: `blur(12px)`
- Sticky header: **no** blur (transparent)

### Gradients

`--hf-gradient-special-gloss-lime`: `linear-gradient(#ffff1400 0%, #ffff14 100%)`

Promo header uses `bg-font-brand` (solid lime), not the gloss gradient.

### Hover overlays

`qc-overlay-hover` / `--hf-color-overlay-hover` = 4% white. Recreate uses `opacity 0 → 1` over **0.2s** `cubic-bezier(0,0,0.2,1)`.

### Focus

`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-separator-brand` → 2px lime outline, 2px offset.

### Motion

| Token | Value |
| --- | --- |
| `--hf-duration-fast` | 0.1s |
| `--hf-duration-normal` | 0.2s |
| `--hf-duration-slow` | 0.3s |
| `--hf-ease-out` | `cubic-bezier(0,0,.2,1)` |
| `--hf-ease-swift` | `cubic-bezier(.2,0,0,1)` |

q-button-md transform: **0.18s** `cubic-bezier(0.215, 0.61, 0.355, 1)`. Auth buttons: **0.15s** filter + **0.3s** color/background.

`motion-reduce:transition-none` exists in the live class set — honor `prefers-reduced-motion`.

---

## Asset / CSS references (do not copy)

- Token CSS lives in TanStack chunks: `https://assets.higgsfield.ai/tanstack/assets/a5796319-*.css`
- Fonts: `https://assets.higgsfield.ai/fonts/inter/…`, `…/space-grotesk/…`
- Component classes to **imitate**, not import: `q-button`, `q-button-marketing-primary`, `q-button-brand-soft`, `q-button-sm|md`, `hfnav-*`, `text-q-accent-md-bold`, `text-q-body-*-medium`, `bg-surface-primary`, `text-font-brand`

Machine-readable subset: `research/reference/theme/tokens.dark.json`

---

## Verified vs inferred

**Verified:** all `--hf-*` / `--color-q-*` values tabulated; fonts preloaded; header 52px; button heights/radii; lime `#d1fe17`; canvas `#0f1113`; card 16px; Recreate overlay blur; focus outline pattern; container 1536 / 16.

**Inferred / approximate:** modal radius; Home card-grid gap; exact section vertical rhythm; Inter Display as “primary” (token says so, Home chrome uses Inter); which mono file we should ship; `--color-surface-error` vs `#fa0019` (prefer hf danger).
