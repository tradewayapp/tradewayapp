
## Fix APK download failure after GitHub migration

The domain issue is fixed. The current APK problem is caused by the app trying to `fetch()` the GitHub Release APK in JavaScript, then convert it into a Blob. GitHub Release assets often block or break this browser-based fetch flow because of cross-origin redirects/download headers.

The safe fix is: do not fetch the APK in JavaScript. Let the browser open the GitHub Release asset directly, which is exactly what GitHub Releases are designed for.

### What I will change

#### 1. Replace browser `fetch()` download logic

**File:** `src/pages/DownloadApk.tsx`

Current behavior:

```ts
fetch(APK_SOURCE_URL)
```

This can fail even when the GitHub APK link itself is valid.

New behavior:

- Show “Starting your download…”
- Automatically trigger a normal browser download using the GitHub Release URL
- If automatic download does not start, show a clear manual button:
  - `Download APK now`
- Keep the “Back to home” link

This avoids CORS/redirect issues completely.

#### 2. Keep GitHub Releases as the APK source

**File:** `src/lib/appDownload.ts`

Keep this URL:

```ts
https://github.com/tradewayapp/tradewayapp/releases/latest/download/trade_way.apk
```

If the release asset filename is different from `trade_way.apk`, I will update only this constant to match the exact uploaded APK asset name.

#### 3. Improve error/fallback UI

Instead of showing “Download failed” immediately, the page will behave like this:

```text
Starting your download...
If it doesn't start automatically, tap "Download APK now".
```

This is better because browsers may block automatic downloads depending on device/browser settings, especially on mobile.

#### 4. Preserve the clean user-facing link

Users will still click:

```text
https://tradewayapp.com/download/tradeway.apk
```

That page will then start the GitHub-hosted APK download.

### Why this fixes it

GitHub Release files are reliable for direct browser downloads, but not always reliable for JavaScript `fetch()` because the final APK URL is served through GitHub’s asset CDN with redirects and download headers.

So the correct architecture is:

```text
User clicks website button
        ↓
/download/tradeway.apk opens
        ↓
Browser is redirected/downloads from GitHub Release asset
        ↓
APK downloads without using Lovable/backend bandwidth
```

### Files to edit

- `src/pages/DownloadApk.tsx`
- `src/lib/appDownload.ts` only if the GitHub asset filename needs correction

### After implementation check

- Open `/download/tradeway.apk`
- Confirm it no longer shows “Download failed”
- Confirm the manual download button points to the GitHub Release APK
- Confirm the public website and custom domain continue working
