# paramedtools.com

Homepage for paramedtools.com, listing the paramedic tools on its subdomains.

## Status

Started 21/11/2026. See `docs/PROGRESS.md`.

## Layout

| Path | What |
|---|---|
| `public/index.html` | The homepage |
| `public/css/style.css` | The one stylesheet |
| `src/index.js` | Thin Worker, currently just serves the static assets |
| `wrangler.jsonc` | Cloudflare Worker config, routes for paramedtools.com and www |

## Stack

Static HTML/CSS, no build step, no JS. Same shape as `oscarpurtell.com`:
`public/index.html` + `public/css/style.css`, served as a static-assets-only
Cloudflare Worker (`wrangler.jsonc`).

```bash
python3 -m http.server 8765 --directory public   # local preview
npx wrangler@4 deploy --dry-run                   # check what would upload
```

Deploy: Cloudflare Workers Builds from `main`, or `npx wrangler deploy`.
Only `public/` is uploaded; docs and config stay out of the site.

Adding a tool = one `<li>` in `public/index.html`. Only live tools go on
the page — no status tags, no in-progress section.

## Tools listed

- Clinical Recall Assistant — https://quiz.paramedtools.com
- ACTAS Pay Tracker — https://pay.paramedtools.com
- OT Calculator — https://otcalc.paramedtools.com
- ACT EBA Reader — https://acteba.paramedtools.com
