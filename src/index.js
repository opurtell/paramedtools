// No redirects yet. Everything falls through to the static assets.
// If a subdomain ever points here but lives elsewhere, add it to a
// REDIRECTS map here (302, not 301) — see oscarpurtell.com src/index.js.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
