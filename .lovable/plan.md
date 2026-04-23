

## Clean Same-Origin Download URL

**Goal:** Replace the `*.supabase.co` URL with a path under your own site:
- Today (preview): `https://id-preview--f76b585d-...lovable.app/download/tradeway.apk`
- After custom domain: `https://tradeway.app/download/tradeway.apk`

The user only ever sees your domain in the browser address bar and download prompt — `supabase.co` is fully hidden.

### How it works

Lovable hosting serves a SPA, so any path that isn't a real file falls back to `index.html`. We can't intercept `/download/tradeway.apk` at the hosting layer to stream a binary. Instead, we'll use a two-step pattern:

1. **`/download/tradeway.apk`** → React route that immediately triggers a client-side fetch + blob download from the Supabase storage URL behind the scenes, then redirects back to home.
2. **All Download buttons** → link to `/download/tradeway.apk` (relative path, so it stays on whatever domain is active).

The browser's download dialog shows just **`TradeWay.apk`** as the filename. The Supabase URL is fetched in JS but never appears in the address bar or download prompt.

### Implementation

**1. New route page: `src/pages/DownloadApk.tsx`**
- On mount: `fetch(SUPABASE_APK_URL)` → `response.blob()` → create object URL → programmatically click hidden `<a download="TradeWay.apk">` → revoke URL
- Show a friendly "Preparing your download…" screen with spinner + TradeWay branding while the 85 MB downloads in memory
- After download triggers, show "Download started! If it didn't, [click here]" fallback link
- Auto-redirect to `/` after 5 seconds (optional)

**2. Update `src/App.tsx`**
- Add route: `<Route path="/download/tradeway.apk" element={<DownloadApk />} />`
- Place it BEFORE the catch-all `*` NotFound route

**3. Update `src/lib/appDownload.ts`**
- Keep `SUPABASE_APK_URL` (internal, used by DownloadApk page)
- Change `APK_DOWNLOAD_URL` to the clean public path: `/download/tradeway.apk`
- Keep `APK_FILENAME = "TradeWay.apk"`

**4. Update Download buttons** (no logic change, just URL)
Files using `APK_DOWNLOAD_URL` already — they'll automatically pick up the new clean path:
- `src/components/marketing/Hero.tsx`
- `src/components/marketing/SiteHeader.tsx` (desktop + mobile)
- `src/components/marketing/CTABanner.tsx`

The `<a href={APK_DOWNLOAD_URL} download={APK_FILENAME}>` pattern stays — but now `href` is `/download/tradeway.apk` (same origin) instead of the supabase URL.

### What the user sees
- Click "Download App" → browser navigates to `tradeway.app/download/tradeway.apk`
- Branded loading screen appears: "Preparing TradeWay APK… 85 MB"
- Native download prompt opens with filename `TradeWay.apk` — **no domain shown next to the file**
- Page auto-returns to homepage

### After connecting custom domain
Zero code changes needed. The relative path `/download/tradeway.apk` automatically works on:
- `*.lovable.app` (preview)
- `tradeway.app` (your custom domain, once connected)
- `www.tradeway.app`

### Trade-off
The 85 MB APK is fetched into browser memory before the save dialog appears (1–10 seconds on good connection). The loading screen makes this feel intentional rather than broken. This is the standard pattern used by sites like Telegram, Signal, etc. for same-origin APK downloads.

### Files touched
- **New:** `src/pages/DownloadApk.tsx`
- **Edit:** `src/App.tsx` (add route)
- **Edit:** `src/lib/appDownload.ts` (split into `SUPABASE_APK_URL` + clean `APK_DOWNLOAD_URL`)
- No changes needed to Hero / SiteHeader / CTABanner — they already consume `APK_DOWNLOAD_URL`

