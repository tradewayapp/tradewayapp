

## Fix APK Download 404

**Problem:** The download buttons request `app-releases/tradeway.apk` but Supabase returns 404 — meaning no object with that exact path exists in the bucket. Object names are case-sensitive and must match exactly.

**Two possible fixes — pick one:**

### Option A (recommended): Rename your uploaded file
1. Open **Cloud → Storage → `app-releases`** bucket
2. Find your uploaded APK
3. Rename it to exactly: **`tradeway.apk`** (all lowercase, no spaces, no version suffix, at the bucket root — not inside a folder)
4. Refresh the site — Download buttons will work immediately. No code change needed.

### Option B: Update the code to match your filename
If you'd rather keep your current filename (e.g. `TradeWay-v1.0.apk`), I'll update `src/lib/appDownload.ts` so `APK_DOWNLOAD_URL` points to the actual object path you uploaded.

To do this I need you to tell me the **exact filename** as shown in the Storage UI (case and extension matter), and whether it's at the bucket root or inside a folder.

### Also worth checking
- The RLS policy I set restricts public reads to **only** the object literally named `tradeway.apk`. If you go with Option B (different name), I'll also need to update that policy to allow public read for your new filename.
- Confirm the bucket is still marked **Public** (it should be — it was created public).

### Technical details
- File touched in Option B: `src/lib/appDownload.ts` — change `APK_DOWNLOAD_URL` to `https://zzsxnnfrzwtjahgdrvfu.supabase.co/storage/v1/object/public/app-releases/<your-exact-filename>`
- Migration needed in Option B: drop existing `"Public can download tradeway apk"` policy and recreate it with the new filename in the `name = '...'` clause (or broaden it to allow any object in the bucket).

**My recommendation:** Go with **Option A** — just rename the file in Storage to `tradeway.apk`. Zero code changes, takes 5 seconds, and everything works.

