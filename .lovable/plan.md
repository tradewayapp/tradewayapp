## Goal
Pure website pe (har route pe) ek **Coming Soon** page dikhana, jab tak launch na ho. Launch ke time aap bolenge, main 1-line code change se asli site wapas la dunga.

## Approach

### 1. Naya page banayenge
**File:** `src/pages/ComingSoon.tsx`

Content (minimal, brand consistent):
- TradeWay logo (existing `<Logo />` component, large size)
- Headline: **"Launching Soon"**
- Tagline: *"AI-powered XAU/USD gold trading on autopilot. Going live very soon."*
- Subtle animated signal line (existing `signal-line` / `pulseLine` — same vibe as `Index.tsx` splash)
- Footer: `© TradeWay`
- Dark charcoal bg + gold/amber accents (existing design tokens — no new colors)
- Mobile-first responsive

### 2. Full takeover via single flag
**File:** `src/App.tsx`

Top pe ek constant:
```ts
const COMING_SOON = true;
```

Agar `true` ho, toh `<Routes>` ke andar sirf:
```tsx
<Route path="*" element={<ComingSoon />} />
```

Matlab `/`, `/login`, `/dashboard`, `/download/tradeway.apk` — **har URL** pe sirf Coming Soon dikhega.

Launch ke time: `COMING_SOON = false` kar dunga, sari existing routes wapas chalu — koi data/code lose nahi hoga.

> Note: Aapne "toggle" question skip kiya, main safest default le raha hu — **simple boolean flag**. Baad mein secret preview URL chahiye toh bol dena.

### 3. SEO / meta
`ComingSoon.tsx` ke andar `useEffect` se:
- `document.title = "TradeWay — Launching Soon"`
- meta description: "TradeWay AI forex trading platform launching soon."

### 4. APK download note
Full takeover ke kaaran `/download/tradeway.apk` bhi Coming Soon dikhayega. Agar APK abhi bhi public rakhna ho (testing ke liye), bata dena — exception bana dunga.

## Files
- **Create:** `src/pages/ComingSoon.tsx`
- **Edit:** `src/App.tsx` (flag + conditional routes)

## After implementation
- Har URL pe Coming Soon page
- Launch ke time bas `COMING_SOON = false` — done