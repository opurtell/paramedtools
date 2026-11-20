# paramedtools.com

Homepage for paramedtools.com, listing the paramedic tools on its subdomains.

## Status

Page built 21/11/2026: plain static `public/index.html` + `public/css/style.css`,
a list (not a table) so each tool reads as a link with one line of description.
Served as a static-assets-only Cloudflare Worker (`wrangler.jsonc`) on
paramedtools.com and www.
Design rule from Oscar: clean and simple, no "vibe coded" tells (see
oscarpurtell.com `docs/DESIGN_BRIEF.md`). One accent colour, structure does
the work. The list, slightly warmer paper and larger type are the only
differences from the oscarpurtell.com table — no gradients, glows, hover
lifts, coloured cards, illustrations, emoji, pill badges, giant hero type,
tagline copy, or decorative motifs.

## How we work

- A phase is Done only when Oscar has checked the deployed/running build.
  "Code complete" is not Done.
- Record decisions in `docs/DECISIONS.md` the moment the obvious approach
  is rejected.

## Things that will bite

1. `custom_domain` routes fail if the hostname already has a DNS record.
   paramedtools.com had no root site on 21/11/2026 (only subdomains), so the
   first deploy should create the root record cleanly. Don't touch the
   subdomain DNS records.

## Conventions

- Australian English in UI copy and docs; dates as DD/MM/YYYY in prose.
- Secrets live only in `.env` (gitignored); `.env.example` lists every key
  with no values.
- Comments explain *why*, not *what*.

## Commands

```bash
python3 -m http.server 8765 --directory public   # local preview
npx wrangler@4 deploy --dry-run                   # check what would upload
```

**Every push to `main` deploys to the live site** (Cloudflare Workers Builds;
deploy command `npx wrangler deploy`). Work on a branch and merge when it's
ready. Manual `wrangler deploy` is no longer needed once Workers Builds is
connected.

Only `public/` is uploaded; docs and config stay out of the site.

Adding a tool = one `<li>` in `public/index.html`. Only live tools go on
the page (no status tags, no in-progress section).
