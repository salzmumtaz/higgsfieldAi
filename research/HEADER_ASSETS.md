# Header / mega-menu assets

**Status:** live extraction from `https://higgsfield.ai/` (logged out Home), 2026-09-17. Not Header implementation.

**Method:** pointerenter/pointermove on the actual Radix triggers (`data-nav-trigger`). Confirmed `data-state="open"` and `aria-expanded="true"`. Open content mounted in `.hfnav-viewport` (not under the trigger). Matching `aria-controls` ids:

- Image → `radix-…-content-Create Image Tab`
- Video → `radix-…-content-Create Video Tab`
- Audio → `radix-…-content-Audio Tab`
- Plugins → `radix-…-content-Plugins`

Other header items (Explore, MCP, API, ChatGPT Plugin, Genjutsu, Effects, Cinema, …) are plain links. They do **not** open a menu.

**No chevron SVG** in Image/Video/Audio/Plugins triggers at this viewport. Trigger inner HTML is the label text only. `gap-1` is on the class list; no `::before`/`::after` icon.

Cloudflare image proxy: **not used** in these menus. Audio model marks are first-party `/speech/*.svg`. Image/Video/Plugins marks are inline `<svg>`.

Live `stroke="white"` / `fill="white"` on several Feature icons. Local React copies use `currentColor` so they follow theme text.

---

## Local React SVG components (in-scope Header / reduced mega-menu)

| Component | Source | Notes |
| --- | --- | --- |
| `src/assets/icons/HiggsfieldMark.tsx` | Header `.hf-logo__glyph` | Logo glyph only. Header also uses `.hf-logo__fill` as a white square behind it (`rgb(255,255,255)` / glyph `rgb(26,26,26)`). |
| `src/assets/icons/SoulIcon.tsx` | Image Models Soul 2.0 / Soul Cinema; Video Genjutsu / Reframe / DOP | Same 16×16 path |
| `src/assets/icons/GptImageIcon.tsx` | GPT Image 2 / 2.5 Sunburst / 2.5 Flare | Same 16×16 path |
| `src/assets/icons/SeedanceIcon.tsx` | Video Models Seedance 2.5 | 16×16 bars |
| `src/assets/icons/CreateImageIcon.tsx` | Image Features Create Image | 24×24; stroke mapped to currentColor |
| `src/assets/icons/CreateVideoIcon.tsx` | Video Features Create Video | 24×24; stroke mapped to currentColor |

Do **not** convert the rest of the mega-menu icons until a row is in scope. Audio and Plugins are omitted from the rebuild slice.

---

## Inventory

| Menu | Label | Asset type | Source URL / inline | Local asset | Verified |
| --- | --- | --- | --- | --- | --- |
| Header | Higgsfield logo | inline SVG + CSS fill | `.hf-logo` / `.hf-logo__glyph` viewBox `0 0 20 20` `fill=currentColor` | `HiggsfieldMark.tsx` | yes |
| Header | Image / Video / Audio / Plugins chevron | none in DOM | — | — | **UNKNOWN** (no SVG; text-only trigger) |
| Header | Explore, MCP, API, ChatGPT Plugin, Genjutsu, Effects, Cinema Studio, Marketing Studio, Supercomputer, 3D Jutsu, Edit, Academy, Community, Contests, Canvas, Originals, Pricing, Enterprise | no menu | plain `<a>` | — | yes (no mega-menu) |
| Image | Create Image | inline SVG | viewBox `0 0 24 24`, stroke white | `CreateImageIcon.tsx` | yes |
| Image | Cinematic Cameras | inline SVG | viewBox `0 0 24 24`, fill currentColor | — | yes (not localized) |
| Image | Canvas | inline SVG | viewBox `0 0 24 24`, stroke currentColor | — | yes |
| Image | Soul Moodboard | inline SVG | same Soul 16×16 | `SoulIcon.tsx` | yes |
| Image | Soul ID Character | inline SVG | same Soul 16×16 | `SoulIcon.tsx` | yes |
| Image | AI Influencer | inline SVG | viewBox `0 0 24 24`, fill currentColor | — | yes |
| Image | Photodump | inline SVG | viewBox `0 0 24 24`, stroke currentColor | — | yes |
| Image | Relight | inline SVG | viewBox `0 0 24 24`, stroke white | — | yes |
| Image | Inpaint | inline SVG | viewBox `0 0 24 24`, fill white | — | yes |
| Image | Image Upscale | inline SVG | viewBox `0 0 24 24`, stroke white | — | yes |
| Image | Face Swap | inline SVG | viewBox `0 0 24 24`, stroke currentColor | — | yes |
| Image | Character Swap | inline SVG | viewBox `0 0 24 24`, fill currentColor | — | yes |
| Image | Higgsfield Soul 2.0 | inline SVG | Soul 16×16 | `SoulIcon.tsx` | yes |
| Image | Higgsfield Soul Cinema | inline SVG | Soul 16×16 | `SoulIcon.tsx` | yes |
| Image | GPT Image 2.5 Sunburst | inline SVG | GPT 16×16 | `GptImageIcon.tsx` | yes |
| Image | GPT Image 2.5 Flare | inline SVG | GPT 16×16 | `GptImageIcon.tsx` | yes |
| Image | GPT Image 2 | inline SVG | GPT 16×16 | `GptImageIcon.tsx` | yes |
| Image | Seedream 5.0 Pro | inline SVG | viewBox `0 0 14 14`, fill currentColor (bar mark, not Seedance 16×16) | — | yes |
| Image | Nano Banana 2 Lite | inline SVG | viewBox `0 0 24 24`, stroke white | — | yes |
| Image | Nano Banana Pro | inline SVG | same Nano Banana 24×24 | — | yes |
| Image | Recraft V4 Styles | inline SVG | viewBox `0 0 24 24`, fill currentColor | — | yes |
| Image | Recraft V4.1 | inline SVG | same Recraft | — | yes |
| Image | Grok Imagine 2.0 | inline SVG | viewBox `0 0 24 24`, fill currentColor, clipPath | — | yes |
| Image | FLUX.2 | inline SVG | viewBox `0 0 16 16`, fill currentColor | — | yes |
| Image | Z-Image | inline SVG | viewBox `0 0 20 20`, fill currentColor | — | yes |
| Image | Topaz | inline SVG | viewBox `0 0 18 18`, fill currentColor (nested svg noise in one instance) | — | yes |
| Video | Create Video | inline SVG | viewBox `0 0 24 24`, stroke white | `CreateVideoIcon.tsx` | yes |
| Video | Cinema Studio | inline SVG | unique 24×24 | — | yes (not localized) |
| Video | Faceless Studio | inline SVG | unique | — | yes |
| Video | 3D Jutsu | inline SVG | unique | — | yes |
| Video | Shorts Studio | inline SVG | unique | — | yes |
| Video | Higgsfield Explainer | inline SVG | unique | — | yes |
| Video | Canvas | inline SVG | same as Image Canvas | — | yes |
| Video | Mixed Media | inline SVG | unique | — | yes |
| Video | Edit Video | inline SVG | unique | — | yes |
| Video | Higgsfield Reframe | inline SVG | Soul 16×16 | `SoulIcon.tsx` | yes |
| Video | Click to Ad | inline SVG | unique | — | yes |
| Video | Change Color Palette | inline SVG | unique | — | yes |
| Video | Relight | inline SVG | same as Image Relight | — | yes |
| Video | Lipsync Studio | inline SVG | unique | — | yes |
| Video | Draw to Video | inline SVG | unique | — | yes |
| Video | Draw to Edit | inline SVG | unique | — | yes |
| Video | UGC Factory | inline SVG | unique | — | yes |
| Video | Video Upscale | inline SVG | unique | — | yes |
| Video | Seedance 2.5 | inline SVG | viewBox `0 0 16 16` | `SeedanceIcon.tsx` | yes |
| Video | Higgsfield Genjutsu | inline SVG | Soul 16×16 | `SoulIcon.tsx` | yes |
| Video | Higgsfield DOP | inline SVG | Soul 16×16 | `SoulIcon.tsx` | yes |
| Video | Gemini Omni Flash 1.1 | inline SVG | viewBox `0 0 20 20`, fill currentColor, shared with Veo | — | yes |
| Video | Google Veo 3.1 | inline SVG | same Gemini/Veo 20×20 | — | yes |
| Video | Kling 3.0 | inline SVG | viewBox `0 0 20 20`, fill currentColor | — | yes |
| Video | Kling Motion Control | inline SVG | same Kling 20×20 | — | yes |
| Video | Kling 3.0 Omni Edit | inline SVG | same Kling 20×20 | — | yes |
| Video | FLUX.3 Video | inline SVG | viewBox `0 0 24 24`, fill currentColor, clipPath | — | yes |
| Video | MiniMax H3 | inline SVG | viewBox `0 0 20 20`, fill currentColor | — | yes |
| Video | Minimax Hailuo 2.3 | inline SVG | same MiniMax 20×20 | — | yes |
| Video | Wan 3.0 | inline SVG | same Z-Image hex mark (`0 0 20 20`) | — | yes |
| Video | Grok Imagine 1.5 | inline SVG | unique | — | yes |
| Video | Sora 2 | inline SVG | unique | — | yes |
| Video | HappyHorse | inline SVG | unique | — | yes |
| Audio | Text to Speech | inline SVG | viewBox `0 0 24 24`, stroke/fill currentColor | — | yes (not localized; Audio omitted) |
| Audio | Voice Change | inline SVG | viewBox `0 0 24 24` | — | yes |
| Audio | Translate | inline SVG | viewBox `0 0 24 24` | — | yes |
| Audio | Seed Audio 1.0 | `<img>` | `https://higgsfield.ai/speech/seed-speech.svg` (`src=/speech/seed-speech.svg`) | — | yes (URL only) |
| Audio | Eleven v3 | `<img>` | `https://higgsfield.ai/speech/elevenlabs.svg` | — | yes |
| Audio | Qwen Audio 3.0 | `<img>` | `https://higgsfield.ai/speech/qwen-audio.svg` | — | yes |
| Audio | MiniMax Speech 2.8 HD | `<img>` | `https://higgsfield.ai/speech/minimax.svg` | — | yes |
| Audio | Seed Speech | `<img>` | same file as Seed Audio 1.0 | — | yes |
| Plugins | Adobe Photoshop | text mark `Ps` | no SVG/img | — | yes |
| Plugins | Adobe Premiere Pro | text mark `Pr` | no SVG/img | — | yes |
| Plugins | Adobe After Effects | text mark `Ae` | no SVG/img | — | yes |
| Plugins | DaVinci Resolve | inline SVG | viewBox `0 0 21 19`, fill white | — | yes (not localized) |
| Plugins | Figma | inline SVG | viewBox `0 0 24 24`, fill white | — | yes |
| Plugins | Blender | inline SVG | viewBox `0 0 16 16`, fill white | — | yes |
| Plugins | Minecraft | inline SVG | viewBox `0 0 18 18`, fill white | — | yes |

No `srcset` or `data-loaded-src` on any mega-menu `<img>`. No background-image assets on open menu rows.

Image, Video, Audio, and Plugins were all opened and inspected in the live viewport. Only in-scope marks were copied into React. Out-of-scope unique SVGs stay in the live DOM; do not approximate them.

---

## Extracted SVG (in-scope only)

Exact live markup. Local React copies keep viewBox/paths; Create Image / Create Video `stroke="white"` → `currentColor`.

### HiggsfieldMark — Header `.hf-logo__glyph`

- viewBox `0 0 20 20`
- fill `currentColor`
- path: see `src/assets/icons/HiggsfieldMark.tsx`

### SoulIcon — Soul 2.0, Soul Cinema, Genjutsu, Reframe, DOP, Soul Moodboard, Soul ID Character

- viewBox `0 0 16 16`
- fill `currentColor`
- path: see `src/assets/icons/SoulIcon.tsx`

### GptImageIcon — GPT Image 2 / 2.5 Sunburst / 2.5 Flare

- viewBox `0 0 16 16`
- fill `currentColor`
- path: see `src/assets/icons/GptImageIcon.tsx`

### SeedanceIcon — Seedance 2.5

- viewBox `0 0 16 16`
- fill `currentColor`
- path: `m3.154 12.154-2.62.655V1.2l2.62.655v10.3Zm12.668.679-2.626.656V.519l2.627.65v11.664Zm-8.509-.325-2.622.656v-6.84l2.622.655v5.53ZM9.025 5.31l2.627-.656v6.84l-2.627-.656V5.31Z`

### CreateImageIcon — Create Image

- viewBox `0 0 24 24`, fill none
- live: `stroke="white"` `stroke-linejoin="round"` (no explicit stroke-width)
- path: `M16.5 20.5L9.41421 13.4142C8.63317 12.6332 7.36684 12.6332 6.58579 13.4142L3.5 16.5M6.5 20.5H17.5C19.1569 20.5 20.5 19.1569 20.5 17.5V6.5C20.5 4.84315 19.1569 3.5 17.5 3.5H6.5C4.84315 3.5 3.5 4.84315 3.5 6.5V17.5C3.5 19.1569 4.84315 20.5 6.5 20.5ZM14.5 7L13.6667 8.66667L12 9.5L13.6667 10.3333L14.5 12L15.3333 10.3333L17 9.5L15.3333 8.66667L14.5 7Z`

### CreateVideoIcon — Create Video

- viewBox `0 0 24 24`, fill none
- live: `stroke="white"` `stroke-width="1.5"` `stroke-linejoin="round"`
- paths:
  - `M2.75 6.75C2.75 5.64543 3.64543 4.75 4.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V17.25C15.25 18.3546 14.3546 19.25 13.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V6.75Z`
  - `M15.25 10L19.8028 7.72361C20.4677 7.39116 21.25 7.87465 21.25 8.61803V15.382C21.25 16.1253 20.4677 16.6088 19.8028 16.2764L15.25 14V10Z`

Out-of-scope Feature / host / extra-model icons were **not redrawn** and **not** copied into `src/assets`. Re-extract from the live open menu (or the Video CDP dump) if a later slice needs them.

---

## Notes for Header implementation (later)

- Only Image, Video, Audio, Plugins are Radix Navigation Menu triggers.
- Rebuild slice should use a **reduced Models list** (Soul 2.0, Soul Cinema, GPT Image 2, Seedance 2.5, Genjutsu) with the local icons above. Do not ship the full live icon set.
- Header logo: white rounded square + `HiggsfieldMark` in `#1a1a1a`.
- Do not invent a chevron unless a later viewport proves one exists.
