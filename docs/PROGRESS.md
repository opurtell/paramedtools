# paramedtools.com — Progress

A living reference, not a diary: condense and replace, never append dated session logs.

**Current state:** Live at paramedtools.com. Homepage pushed to
`opurtell/paramedtools` (commit `3d22cd7`), Cloudflare Workers Builds
connected by Oscar 21/11/2026, root site returns 200. Paramedic Papers is
featured at the top with a live daily preview (see below).

## Completed features

- Homepage listing the four live subtools: Clinical Recall Assistant
  (quiz), ACTAS Pay Tracker (pay), OT Calculator (otcalc), ACT EBA Reader
  (acteba), each with one line of description and its subdomain.
- Featured Paramedic Papers banner at the top, with a preview of the day's
  top paper. `public/js/papers.js` fetches `https://paramedicpapers.com/feed.xml`
  (cross-origin allowed, checked 21/11/2026) and updates the preview from the
  latest episode — title is the day's top paper, description lists the
  episode's papers. If the fetch fails, the static fallback in
  `public/index.html` (dated 21 Nov 2026) stays in place. Paramedic Papers
  no longer appears in the Related section.
- Related link to oscarpurtell.com.
- `wrangler.jsonc` for paramedtools.com and www.paramedtools.com.

## Not yet built

- Nothing pending.

## Known issues

- None yet.
