

## Apply New TradeWay Logos

Aapne 3 sizes diye hain — perfect, koi extraction nahi chahiye, sab ready hai.

### Asset placement
| Source upload | Destination | Used by |
|---|---|---|
| `TradeWay-112-X-112.png` | `src/assets/logo-lg.png` | Splash screen, DownloadApk page |
| `TradeWay--40-X-40.png` | `src/assets/logo-md.png` | Footer, Onboarding |
| `TradeWay-32-X-32.png` | `src/assets/logo-sm.png` + `public/favicon.png` | Header, browser tab |

### Step 1 — Copy assets
- 3 files into `src/assets/` for React imports (bundled + optimized)
- 32px copy into `public/favicon.png` for browser tab
- Delete `public/favicon.ico` so browsers pick up new PNG

### Step 2 — Create `<Logo />` component
**New file:** `src/components/Logo.tsx`
- Props: `size?: "sm" | "md" | "lg"` (default `"sm"`), `showWordmark?: boolean`, `className?: string`
- Picks the right asset for crispness (sm→32, md→40, lg→112)
- Optionally renders "TradeWay" wordmark next to icon
- Single source of truth — future logo swaps = edit one file

### Step 3 — Replace inline SVGs
| File | Replace with |
|---|---|
| `src/components/marketing/SiteHeader.tsx` (desktop + mobile brand) | `<Logo size="sm" showWordmark />` — drops gradient div + SVG |
| `src/components/marketing/SiteFooter.tsx` | `<Logo size="md" showWordmark />` |
| `src/pages/Index.tsx` (splash, currently 112×112 white panel) | `<Logo size="lg" />` standalone — remove `panel-strong` container since new logo has its own circular green bg (cleaner, modern) |
| `src/pages/DownloadApk.tsx` (header SVG) | `<Logo size="lg" />` |
| `src/pages/Onboarding.tsx` (if brand SVG present) | `<Logo size="md" />` |

### Step 4 — Update `index.html`
- `<link rel="icon" type="image/png" href="/favicon.png" />` (replace `.ico` reference)
- Update `<meta property="og:image">` and `<meta name="twitter:image">` to point to `/favicon.png` (or skip OG image update if you want to keep the existing branded share preview — confirm if needed)

### Step 5 — Visual QA
- `/` splash: green circular logo crisp at 112px
- Header (1020px viewport): 32px logo + wordmark balanced
- Footer: 40px logo readable
- `/download/tradeway.apk`: large logo on prep screen
- Browser tab favicon refreshes (hard reload may be needed)

### Files touched
- **New:** `src/components/Logo.tsx`, `src/assets/logo-sm.png`, `src/assets/logo-md.png`, `src/assets/logo-lg.png`, `public/favicon.png`
- **Edit:** `SiteHeader.tsx`, `SiteFooter.tsx`, `Index.tsx`, `DownloadApk.tsx`, `Onboarding.tsx`, `index.html`
- **Delete:** `public/favicon.ico`

### Note
Aapka 112px sabse bada size hai. Splash screen pe 112 perfect hai, lekin agar future mein bigger hero placement chahiye (ya retina displays pe extra crisp), to ek **512×512 master** bhej dena — main use higher-res screens ke liye swap kar dunga. Abhi ke liye ye 3 sizes sufficient hain.

