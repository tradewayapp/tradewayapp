# Puri Website Live Karna

Abhi `COMING_SOON = true` hai, isliye sirf Coming Soon page aur `/delete-account` accessible hai. Live karne ke liye is flag ko `false` kar denge — sari original routes (Home, Login, Dashboard, Wallet, Privacy, Terms, KYC, etc.) wapas chalu ho jayengi.

## Changes

**`src/App.tsx`**
- `const COMING_SOON = true;` → `const COMING_SOON = false;`
- Bas yehi ek line change. Coming Soon page code as-is rahega taaki future me dobara enable kar sako agar zarurat pade.

## Result

Live hone ke baad ye sab routes accessible ho jayengi:
- `/` — Marketing Home
- `/about`, `/contact`
- `/login`, `/otp`, `/onboarding`, `/profile-setup`
- `/dashboard`, `/wallet`, `/refer`, `/more`, `/kyc`, `/notifications`
- `/help-center`, `/faq`, `/support`, `/learn`, `/ai-guide`
- `/privacy`, `/terms` (Play Store ke liye ab public)
- `/delete-account` (already public, kaam karta rahega)
- `/download/tradeway.apk`

## Important — Publish Karna Mat Bhulna

Ye sirf code change hai. Live hone ke liye **Publish button** dabana padega (top-right desktop / bottom-right '...' menu mobile → Publish → Update). Publish kiye bina change `tradewayapp.com` par live nahi jayega.
