

# TradeWay — Informative Marketing Website

A separate, public-facing marketing site that explains what TradeWay is, how it works, and drives sign-ups into the existing app. It will live at the root (`/`) as a multi-section landing experience, with the existing app flow moving behind a "Launch App" CTA.

## What you'll get

A single-page (with anchor sections + a couple sub-pages) responsive marketing website using the same TradeWay visual identity (warm dark, gold/amber primary, purple accent, Bricolage Grotesque + Manrope) so it feels like one product family — but laid out for desktop-first reading rather than mobile app screens.

### Sections

1. **Sticky top navigation** — Logo, links (Features, How it works, Pricing, Referral, FAQ, About), and a gold "Launch App" button that opens the existing onboarding flow.
2. **Hero** — Big headline ("Autonomous forex trading, in dollars and rupees."), sub-copy, dual CTA (Launch App / Watch demo), animated signal-line accent, floating stats chips (50+ pairs, 24/7 AI, 100% secure), and a mock phone preview of the app dashboard.
3. **Trust strip** — "Trusted by thousands", small KPIs (capital managed, daily settlements, average uptime).
4. **Features grid** — 6 cards: AI engine, Dual currency wallet, Daily 12 AM settlement, KYC-secured, 3-tier referrals, Real-time tracking. Each with icon, title, short copy.
5. **How it works** — 4 numbered steps: Sign up & KYC → Add capital (min ₹125) → AI trades 24/7 → Withdraw profits daily. Visual stepper with connectors.
6. **Referral program** — Highlighted gold-glass panel explaining L1 = 1%, L2 = 0.5%, L3 = 0.25% with a small calculator-style visual.
7. **Pricing / Charges** — Transparent block: "Zero subscription. 20% platform fee on profits only." Comparison-style card.
8. **Security & Compliance** — Aadhaar KYC, encrypted transactions, segregated capital, audit trail.
9. **Testimonials** — 3 user quote cards with avatar initials and earnings highlight.
10. **FAQ** — Accordion of 8 common questions (min capital, withdrawal time, KYC docs, fees, refunds, referral payout, supported pairs, support hours).
11. **Final CTA banner** — Gradient hero panel: "Start trading in under 3 minutes" + Launch App.
12. **Footer** — Brand blurb, link columns (Product, Company, Legal, Support), socials, copyright, risk disclaimer.

### Sub-pages (lightweight)

- `/about` — Mission, story, team placeholder.
- `/contact` — Email, support hours, contact form (UI only, no backend yet).
- Reuses existing `/privacy`, `/terms` pages.

### Routing change

- New `/` → marketing `Home` page.
- Existing splash moves to `/app` (or "Launch App" button routes straight to `/onboarding`).
- All existing app routes (`/dashboard`, `/wallet`, etc.) untouched.

## Technical details

- New files under `src/pages/marketing/` (`Home.tsx`, `About.tsx`, `Contact.tsx`) and `src/components/marketing/` (`SiteHeader`, `SiteFooter`, `Hero`, `FeatureGrid`, `HowItWorks`, `ReferralPanel`, `PricingBlock`, `SecuritySection`, `Testimonials`, `FAQSection`, `CTABanner`, `PhoneMockup`).
- Update `src/App.tsx` routes: `/` → marketing Home; move current `Index` splash to `/app` (or delete if redundant since onboarding already exists).
- Reuse existing design tokens (`panel`, `panel-strong`, `gradient-signal`, `text-signal`, `signal-line`, `editorial-grid`) plus add a few marketing-specific utilities (container max-width, section padding) in `src/index.css`.
- Use shadcn `Accordion` for FAQ, `Button` for CTAs, `Card` for feature/testimonial cards.
- Framer Motion for hero entrance, scroll-reveal on sections (subtle, not heavy).
- Lucide icons for features.
- Fully responsive: mobile stack → tablet 2-col → desktop 3-col grids; container `max-w-6xl` centered.
- No backend, no auth changes — purely informational. Contact form will just show a success toast.
- SEO: update `index.html` `<title>` and `<meta description>`, add Open Graph tags, set semantic `<main>`, `<section>`, `<header>`, `<footer>` landmarks and proper heading hierarchy (one h1 per page).

## Out of scope (for this step)

- Backend for the contact form, blog/CMS, live market data widgets, multi-language. These can be follow-ups.

