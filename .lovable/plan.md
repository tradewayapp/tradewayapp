
# TradeWay — Premium Redesign Plan

Abhi site ek "safe dark fintech template" jaisi lagti hai — red-orange palette, flat cards, plain grid hero. Hum isko ek **cinematic, luxury AI-trading brand** me convert karenge — Linear + Robinhood Gold + Arc browser jaisa polished feel.

## 1. Visual Identity Reset (saved memory ke according)

Memory me already define hai: **gold/amber + purple gradient**, charcoal bg. Abhi site red pe hai — wo properly switch karenge.

New tokens (`src/index.css`):
- `--background`: deep charcoal `240 8% 5%` (warm-cool mix, almost black)
- `--primary`: rich gold `42 92% 58%` (amber gold)
- `--accent`: royal purple `268 78% 62%`
- `--success`: mint green `152 65% 52%`
- New surfaces: `--surface-1`, `--surface-2`, `--surface-elevated` for layered glass cards
- Two new utilities: `glass-gold` (gold-tinted blurred glass), `gradient-mesh` (multi-stop radial mesh bg), `text-gold` (gold→amber gradient text), `aurora` (animated purple/gold blobs)

Fonts already strong (Bricolage + Manrope) — keep.

## 2. New Hero — "The Engine"

Replace current split hero with a **full-bleed cinematic hero**:

```text
┌────────────────────────────────────────────────────┐
│  [aurora blobs: purple top-left, gold bottom-right]│
│  ✦ LIVE · XAU/USD 2,387.42  ▲ +0.84%               │
│                                                    │
│       Gold trades itself.                          │
│       You just collect.                            │
│       ───── (animated gold underline)              │
│                                                    │
│   AI-driven XAU/USD engine. 24/7 autonomous.       │
│   Daily payouts in USD or INR.                     │
│                                                    │
│  [⬇ Download App]   [▶ Watch 60s demo]             │
│                                                    │
│  ┌──────────── live chart strip ────────────┐      │
│  │ animated gold line + breathing pulse     │      │
│  │ floating PnL pills: +$142, +$86, +$118   │      │
│  └──────────────────────────────────────────┘      │
│                                                    │
│  ⭐ 4.8 · 12,400+ traders · ₹4.2 Cr settled today  │
└────────────────────────────────────────────────────┘
```

Key upgrades:
- Live ticker bar at top (XAU/USD price ticking with subtle animation)
- Headline becomes punchy 2-liner with animated gold gradient sweep
- Phone mockup moves DOWN into a "floating dual-device" section (phone tilted left + chart card tilted right with parallax)
- Trust strip with rolling counters

## 3. Floating Showcase (replaces current PhoneMockup placement)

New section right after hero — **layered 3D scene**:
- Center: tilted phone with live dashboard
- Left-floating card: "AI Decision · BUY XAU/USD · Confidence 94%"
- Right-floating card: "Today's PnL · +$284.50"
- Background: animated gold grid that scrolls slowly + purple aurora blob
- All cards have subtle mouse-parallax (rotateX/Y on mousemove)

## 4. "How it Works" → Timeline Rail

Convert 4-card grid into a **horizontal connected timeline** (desktop) / vertical rail (mobile):

```text
●───────●───────●───────●
│       │       │       │
Sign up  Fund   AI runs  Withdraw
2 min   ₹10K   24/7     daily
```
- Connecting line is animated gold gradient that fills as user scrolls
- Each node pulses when in view
- Numbers become large display-font ("01", "02"...) gold gradient

## 5. Features → Bento Grid

Replace symmetric 3×2 grid with a **bento layout** (Apple/Linear style):

```text
┌──────────────┬─────────┬─────────┐
│ Big: AI on   │ Daily   │ Dual    │
│ XAU/USD with │ 12 AM   │ wallet  │
│ live chart   │ payout  │ USD/INR │
├──────────────┼─────────┴─────────┤
│ KYC secured  │ 3-tier referral   │
│ (shield viz) │ (network diagram) │
├──────────────┴───────────────────┤
│ 100% hands-free (wide showcase)  │
└──────────────────────────────────┘
```
Each tile has its own micro-illustration (SVG), not just an icon.

## 6. New Section — "Live Performance"

A trust-builder strip with animated counters:
- Total trades executed today (ticking)
- Win rate (94.2% with circular progress)
- Avg daily payout
- Active traders
On dark glass card with gold accent borders. Adds credibility instantly.

## 7. Pricing & Referral — Premium Cards

- Pricing block: tiered cards with gold "Recommended" ribbon, glass effect, hover lift
- Referral: visualize 3 tiers as a **branching tree diagram** (you → L1 → L2 → L3) with gold connectors and percentage badges, instead of plain text

## 8. FAQ — Refined

Keep accordion but: gold left-border on open, smoother spring animation, subtle hover glow.

## 9. CTA Banner — "Final Call"

Full-width gradient mesh banner (gold→purple→charcoal) with:
- Massive headline "Your gold engine is waiting."
- Big download button + Play Store / direct APK
- Animated coin/particle field in background (CSS only, perf-safe)

## 10. Header & Footer Polish

- Header: shrinks on scroll (h-16 → h-14), adds gold underline on active link, CTA gets subtle gold glow
- Footer: 4-col with brand block, links, legal, "made with care" line. Add small live status dot ("All systems operational").

## 11. Sticky Download CTA — Refined

Current sticky banner stays but restyled to match new identity (gold gradient, glass blur, smoother slide-up animation, mobile-only by default to avoid clutter on desktop).

## 12. Micro-interactions

- Magnetic buttons (cursor-follow on hover, desktop only)
- Reveal-on-scroll for every section (already has Reveal.tsx — extend it with stagger)
- Gold cursor glow trail on hero (subtle, 8% opacity)
- Number counters that animate when scrolled into view

---

## Technical Section

**Files to edit:**
- `src/index.css` — new color tokens, mesh/aurora/glass utilities, gold text gradient
- `src/components/marketing/Hero.tsx` — full rebuild (cinematic version)
- `src/components/marketing/PhoneMockup.tsx` — restyle for new palette + floating side cards
- `src/components/marketing/FeatureGrid.tsx` — convert to bento
- `src/components/marketing/HowItWorks.tsx` — convert to animated timeline rail
- `src/components/marketing/PricingBlock.tsx` — premium card restyle
- `src/components/marketing/ReferralPanel.tsx` — branching tree visualization
- `src/components/marketing/FAQSection.tsx` — refined accordion
- `src/components/marketing/CTABanner.tsx` — full mesh banner rebuild
- `src/components/marketing/SiteHeader.tsx` — scroll-shrink + active underline
- `src/components/marketing/SiteFooter.tsx` — 4-col polish
- `src/components/marketing/StickyDownloadCTA.tsx` — restyle to new tokens, mobile-only
- `src/pages/marketing/Home.tsx` — wire in new sections (LivePerformance, Showcase)

**New files:**
- `src/components/marketing/LiveTicker.tsx` — top-of-hero animated price ticker
- `src/components/marketing/LivePerformance.tsx` — animated counters strip
- `src/components/marketing/FloatingShowcase.tsx` — 3D parallax phone + side cards
- `src/components/marketing/AuroraBackground.tsx` — reusable gold/purple blob bg
- `src/components/marketing/MagneticButton.tsx` — wrapper for cursor-follow CTA
- `src/components/marketing/AnimatedCounter.tsx` — IntersectionObserver-driven counter
- `mem://design/tokens` — update with new gold/purple values

**Libs:** `framer-motion` already installed — used for parallax, stagger reveals, counters. No new deps.

**Performance:** All animations GPU-friendly (transform/opacity only). Aurora blobs use CSS `filter: blur` on absolutely-positioned divs (no canvas). Magnetic + cursor effects desktop-only via `matchMedia`. Mobile keeps animations minimal for battery.

**Brand consistency:** All colors flow through CSS variables — no hardcoded hex. Primary CTA always gold, secondary always purple ghost, success stays mint green.

**Out of scope (will not touch):** App routes (`/dashboard`, `/wallet`, KYC flow, etc.), Supabase, edge functions, auth. Sirf marketing site (`/`, `/about`, `/contact`) ko premium banayenge.

---

**Approve karoge to main full implementation start kar du** — estimated ek hi pass me clean rollout, phir tum preview pe dekhke fine-tune bata sakte ho (specific section ya color shade).
