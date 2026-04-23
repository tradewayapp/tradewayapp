

## Fix "File wasn't available on site" error

**Root cause:** Marketing buttons use `<a href="/download/tradeway.apk" download="TradeWay.apk">`. The `download` attribute tells the browser to treat that URL as a binary file. Lovable's SPA hosting returns `index.html` for that path (since no real file exists there) — so the browser sees an HTML response where it expected a file and shows **"File wasn't available on site"**. Our React `DownloadApk` page never even gets a chance to mount and trigger the blob download.

### Fix
Remove the `download` attribute from same-origin SPA links. Replace `<a href download>` with React Router `<Link>` (or plain `<a href>` without the `download` attribute) so the browser performs a normal SPA navigation. The `DownloadApk` page then mounts, fetches the APK as a blob, and triggers the actual save dialog (which already sets `download="TradeWay.apk"` on the dynamically created `<a>` — that part works because the `href` is a `blob:` URL, not a route path).

### Files to edit
1. **`src/components/marketing/Hero.tsx`** (line ~64) — change `<a href={APK_DOWNLOAD_URL} download={APK_FILENAME}>` → `<Link to={APK_DOWNLOAD_URL}>`
2. **`src/components/marketing/SiteHeader.tsx`** (lines ~49 and ~81) — same change for desktop and mobile buttons
3. **`src/components/marketing/CTABanner.tsx`** (line ~22) — same change

Add `import { Link } from "react-router-dom"` where missing. Drop the now-unused `APK_FILENAME` import in those three files (keep it in `DownloadApk.tsx` where it's actually used on the blob anchor).

### What stays the same
- `src/lib/appDownload.ts` — no changes
- `src/pages/DownloadApk.tsx` — no changes (already correct: fetches blob, triggers download with proper filename)
- `src/App.tsx` — route already registered

### Result
- Click "Download App" → SPA navigates to `/download/tradeway.apk`
- Branded "Preparing your download…" screen appears with progress
- Native save dialog opens with filename **`TradeWay.apk`** — no error, no Supabase domain visible

