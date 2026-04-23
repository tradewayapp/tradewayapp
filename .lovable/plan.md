
## Switch APK Download Source to GitHub Release

Aapne repo public kar diya aur release publish ho gaya — ab app ka APK download source GitHub Releases par shift karna hai.

### GitHub APK URL to use

```text
https://github.com/tradewayapp/tradewayapp/releases/latest/download/trade_way.apk
```

`/latest/` ka benefit: future mein jab bhi naya APK release publish karoge, app automatically newest release se APK download karega. Code change ki zarurat nahi hogi.

### Implementation

#### 1. Update download source constant

**File:** `src/lib/appDownload.ts`

- Current internal storage URL ko replace karunga.
- Constant ka naam generic karunga so code future-proof rahe:

```ts
export const APK_SOURCE_URL =
  "https://github.com/tradewayapp/tradewayapp/releases/latest/download/trade_way.apk";
```

- Existing clean user-facing route same rahega:

```ts
export const APK_DOWNLOAD_URL = "/download/tradeway.apk";
export const APK_FILENAME = "TradeWay.apk";
```

#### 2. Update download page imports/usages

**File:** `src/pages/DownloadApk.tsx`

- `SUPABASE_APK_URL` import ko `APK_SOURCE_URL` se replace karunga.
- `fetch(...)` aur fallback direct link dono GitHub URL use karenge.
- Progress bar, filename, UI, success/error states same rahenge.

#### 3. No user-facing URL change

Users ab bhi yahi clean link dekhenge:

```text
https://tradewayapp.com/download/tradeway.apk
```

GitHub URL browser address bar mein normally nahi dikhega, kyunki app background mein APK fetch karke `TradeWay.apk` naam se download start karega.

### Files to edit

- `src/lib/appDownload.ts`
- `src/pages/DownloadApk.tsx`

### After implementation check

- `/download/tradeway.apk` route open hoga.
- APK GitHub Release se fetch hoga.
- Download filename `TradeWay.apk` rahega.
- Direct fallback link GitHub Release asset par point karega.
