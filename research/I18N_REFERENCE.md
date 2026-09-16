# i18n reference — live Higgsfield (2026-09-17)

**Status:** technical extraction from the loaded Home page. Not product research. Not application code.

---

## Runtime observed

| Fact | Evidence |
| --- | --- |
| Document locale | `<html lang="en">` |
| Alternate locales | `hreflang`: `en`, `es`, `ja`, `ko`, `de`, `x-default` → `/`, `/es`, `/ja`, `/ko`, `/de` |
| Catalog map | `window.__HF_I18N__.assets` |
| Catalogs marked self-contained | `window.__HF_I18N__.selfContained.{en,es,ja,ko,de} = true` |
| Scope | `window.__I18N_CATALOG_SCOPE__ = "all"` |
| Route manifests | `window.__I18N_ROUTES__.en` |
| SSR payload | `window.__I18N_SSR__.en` — **98** keys on Home (nav + meta) |
| Preloads | `rel="preload" as="fetch"` for root + home delta JSON |

This is **not** i18next namespaced JSON. It is a **compiled message catalog** with hashed IDs (Lingui / similar: 6-character keys, ICU-like arrays, rich-text `<0>` tags).

No `i18next` / `react-intl` global was present on `window`. TanStack Start serves `/_i18n/{locale}.{hash}.json` plus per-route `root` + `delta` files.

### Assets (this capture)

```
en  /_i18n/en.e5a380c80a.json
es  /_i18n/es.e6c341d212.json
ja  /_i18n/ja.aec511b3c3.json
ko  /_i18n/ko.e9aafc26e8.json
de  /_i18n/de.85fcad9c38.json
```

Hashes **change with deploys**. Do not hardcode them in the rebuild.

### Route files (Home)

```
/_i18n/routes/en/root.fd6ca28b22.json     (~63 KB, 863 keys)
/_i18n/routes/en/delta.9a591db699.json    (~46 KB, 931 keys)
```

`window.__I18N_ROUTES__.en.routes["/(public)/(explore)/(home)/"] = "delta.9a591db699.json"`.

Other locales were **not** fetched on this English Home load (same as prior HAR).

---

## Message shape

Every entry: hashed key → **array of parts**.

```json
"8tjQCz": ["Explore"]
"-MGzHx": [["discountPercent"], "% OFF"]
"0SZ7gn": ["<0>Nano Banana Pro & 2 UNLIMITED on ", ["plan"], ".</0> …"]
```

- String parts concatenate.
- Nested one-element arrays are **interpolation placeholders**.
- `<0>…</0>` / `<1>…</1>` are rich-text wrappers (Lingui `Trans`).

There is **no namespace tree** (`nav.explore`). A key `__nm2_` in the home delta happens to be `["Models"]` — that is a message, not a namespace table.

Fallback: English is the default (`x-default` + `lang="en"`). Path prefix `/es|ja|ko|de` selects another self-contained catalog. Untranslated keys were not observed (would need a missing-key experiment).

---

## Saved reference files

Under `research/reference/i18n/`:

| File | What |
| --- | --- |
| `en.e5a380c80a.json` | Full English catalog (~32 238 keys, ~1.9 MB) |
| `root.fd6ca28b22.json` | Root route English |
| `home.delta.9a591db699.json` | Home delta English |
| `rebuild-ui.en.json` | **Semantic** strings for our slice, with `sourceKey` back to hashes |
| `README.md` | Dump index |

No cookies, tokens, or auth payloads.

Do **not** ship the hashed catalogs in the rebuild. They are research-only and will drift.

---

## Useful live strings for the slice

| UI | Live English | Hash (when found) |
| --- | --- | --- |
| Explore | Explore | `8tjQCz` |
| Image / Video | Image / Video | `hG89Ed` / `vSJd18` |
| Community | Community | `chL5IG` |
| Generate | Generate | `ziAjHi` |
| Recreate | Recreate | `fYb726` |
| Like | Like | `W9FRBT` |
| Try for free | Try for free | `XjMylT` |
| Start generating | Start generating | `Rwpd6z` |
| Create / Edit / Motion | Create Video, Edit Video, Motion Control | `pHdgjO` / `RYPluM` / `quJjCp` |
| Describe the scene | Describe the scene | `8C8ku6` |
| Welcome modal | Welcome to Higgsfield | `NTbq9U` |
| Sign up subtitle | Sign up and generate for free | `JTUQz_` |
| Continue with Google / Email | … | `oZyG4C` / `RvVi9c` |
| Library empty | Your creations will appear here. | `8GDV22` |
| Sign Up | Sign Up | `j76BX_` |

Header **Login** was not a single-key exact match in the small route files (button label is still “Login” in the DOM).

---

## Recommendation for our rebuild

1. **English only** at first. Do not implement `/es` routing.
2. **Semantic JSON** (`rebuild-ui.en.json` as the seed), loaded through a tiny wrapper (`t('nav.explore')`). `i18next` or a 20-line dict is enough. **Do not** clone Lingui hashed catalogs.
3. Wire `t()` **before** composing screens so strings are not hardcoded in components.
4. Copy wording from the live English values above (Like, Recreate, Generate, Welcome to Higgsfield). Do not rename Like → Favorite.
5. Interpolation (`{model}`, `{discount}`) only when we actually need those sentences (Upgrade modal).
6. If a second locale is added later, keep the same semantic keys; do not import Higgsfield’s hashes.
