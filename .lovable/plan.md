## Goal
Add visitor analytics to the TradeWay marketing website so you can track who visits, where they come from, and how they use the site.

## Two options to consider

### Option A — Built-in Lovable Analytics (zero setup, recommended to start)
Lovable already provides production analytics for any published project. No code changes needed.

- **Where to view:** Open the project → top navigation → **Analytics** view (icon in the navbar). On mobile, tap the **…** button → **Analytics**.
- **What you get:** page views, unique visitors, top pages, referrers, countries, devices — for the published site (`tradewayapp.com` / `tradewayapp.lovable.app`).
- **Cost:** included.
- **Limitation:** basic metrics only. No custom events (e.g. "Download clicked", "Referral copied"), no funnels, no session replay.

If this is enough for you, we don't need to write any code — I'll just point you to the Analytics tab.

### Option B — Add a dedicated analytics tool (for richer insights)
Embed a third-party analytics script in `index.html` so you can track custom events (downloads, signups, scrolls) and get deeper reports.

Recommended choices:
1. **Google Analytics 4 (GA4)** — free, most familiar, great for traffic + conversions. Needs a Measurement ID (`G-XXXXXXX`).
2. **Plausible / Umami** — privacy-friendly, lightweight, no cookie banner needed. Paid (Plausible) or self-hosted (Umami).
3. **PostHog** — free tier, includes funnels, session replay, heatmaps, feature flags. Best if you want product-style analytics.

### Implementation (if you pick Option B)

1. **Add the tracking script** to `index.html` `<head>` (GA4 / Plausible / PostHog snippet).
2. **Create a tiny tracker helper** at `src/lib/analytics.ts` exposing `trackEvent(name, props)` so the rest of the app calls one function regardless of provider.
3. **Wire key events** on the marketing site:
   - `download_click` — Hero "Download" button + `StickyDownloadCTA`
   - `cta_click` — `CTABanner`
   - `referral_view` — `ReferralPanel`
   - `nav_click` — `SiteHeader` links
   - Page views — auto-tracked via a `useEffect` in `App.tsx` that listens to route changes (since this is an SPA, GA4 won't auto-track route changes without this).
4. **Respect themes / no layout impact** — script loads async, no UI changes.
5. **Privacy** — update `PrivacyPage.tsx` with a short line saying analytics are collected (required for GA4 in many regions).

## What I need from you

Pick one:
- **A)** Just show me the built-in Analytics tab — no code changes.
- **B)** Add **Google Analytics 4** — you'll need to share your GA4 Measurement ID (`G-XXXXXXXXXX`).
- **B)** Add **Plausible** — share your domain as configured in Plausible.
- **B)** Add **PostHog** — share your Project API key (starts with `phc_…`).

Once you confirm the choice (and share the key/ID if needed), I'll implement it.