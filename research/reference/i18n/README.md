# i18n source dumps

Live English catalogs captured 2026-09-17 from `https://higgsfield.ai/`.

| File | Source URL | Role |
| --- | --- | --- |
| `en.e5a380c80a.json` | `/_i18n/en.e5a380c80a.json` | Full English catalog (`selfContained`, ~32k keys, ~1.9 MB) |
| `root.fd6ca28b22.json` | `/_i18n/routes/en/root.fd6ca28b22.json` | Route-scoped root strings |
| `home.delta.9a591db699.json` | `/_i18n/routes/en/delta.9a591db699.json` | Home route delta |
| `rebuild-ui.en.json` | derived | Semantic keys for our rebuild — **use this**, not the hashed catalogs |

Keys in the live files are 6-character hashes. Values are message arrays (Lingui-style), including interpolation `["discount"]` and rich-text `<0>…</0>` tags.

Do not load the hashed catalogs in the rebuild. Do not commit secrets; these files are copy-only.
