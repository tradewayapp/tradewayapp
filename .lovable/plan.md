
Fix the blank screen by addressing the root-level React/provider crash first, then cleaning up the dependency setup that is likely causing it.

## What the issue appears to be

The current error points to `TooltipProvider` crashing before the app can render:

- `src/App.tsx` wraps the entire app in Radix `TooltipProvider`
- the runtime stack shows `TooltipProvider -> useRef -> null`, which is a classic symptom of a broken React runtime / duplicate React instance / stale Vite prebundle mismatch
- this project currently has both `bun.lock` and `package-lock.json`, plus committed `node_modules/` and `dist/`, which makes stale dependency state much more likely

There is also a second app-wide risk in the current tree:

- `src/components/ui/sonner.tsx` uses `useTheme()` from `next-themes`
- `src/App.tsx` does not include any `ThemeProvider`
- even if it is not the first crash, it should be fixed in the same pass to avoid another blank screen immediately after the tooltip issue is resolved

## Implementation plan

### 1) Remove the root-level crash path
Update `src/App.tsx` so the whole app is not wrapped in `TooltipProvider`.

Why:
- the blank screen happens before routing and page rendering
- tooltips do not need to be mounted globally for the entire application to boot
- this isolates the Radix crash and lets the site render again

Change:
- remove the top-level `<TooltipProvider>` around the whole app
- keep tooltip providers only where tooltip components are actually used
- the existing local provider inside `src/components/ui/sidebar.tsx` can remain, or be replaced with a safer wrapper after validation

### 2) Make the toast system safe
Fix `src/components/ui/sonner.tsx` and/or `src/App.tsx` so `Sonner` does not rely on `next-themes` without a provider.

Preferred fix:
- add a proper `ThemeProvider` in `src/App.tsx`

Alternative simpler fix:
- remove `useTheme()` from `src/components/ui/sonner.tsx`
- pass a fixed theme like `"dark"` until theming is intentionally added

Why:
- current code imports `useTheme` but no provider exists in the app root
- this can cause another runtime failure after the tooltip problem is removed

### 3) Normalize the dependency state
Clean the dependency/runtime setup so Vite is not serving mismatched React bundles.

Files involved:
- `package.json`
- `package-lock.json`
- `bun.lock`
- local `node_modules`
- Vite prebundle cache

Required work:
- choose one package manager for the project and keep only one lockfile
- delete stale install artifacts and Vite cache
- reinstall dependencies from the chosen lockfile
- restart the dev server so React, Radix, and Vite are rebuilt consistently

Why:
- the `useRef` null error in Radix strongly suggests React dispatcher mismatch rather than an ordinary component bug
- mixed lockfiles are a common source of duplicate or mismatched dependency graphs

### 4) Keep Vite React resolution explicit
Review `vite.config.ts` and preserve the current React dedupe strategy.

Current file already includes:
- `react`
- `react-dom`
- `react/jsx-runtime`
- `react/jsx-dev-runtime`

If the crash persists after reinstall:
- add explicit `optimizeDeps.include` for `react`, `react-dom`, `@radix-ui/react-tooltip`, and `@tanstack/react-query`
- verify no alias or linked-package path is pulling a second React copy

### 5) Validate the landing page boot path
After the runtime fixes, verify the app renders at `/` and that the marketing homepage loads without crashing.

Pages/components to confirm:
- `src/pages/marketing/Home.tsx`
- `src/components/marketing/Hero.tsx`
- `src/components/marketing/SiteHeader.tsx`
- `src/components/marketing/SiteFooter.tsx`

Expected result:
- the hero section renders
- navigation is visible
- no blank screen
- no root runtime error in console

## Files likely to change

- `src/App.tsx`
- `src/components/ui/sonner.tsx`
- possibly `vite.config.ts`
- lockfiles/package-manager choice cleanup at project root

## Success criteria

- `/` renders the TradeWay marketing homepage instead of a blank screen
- no `Cannot read properties of null (reading 'useRef')` from `TooltipProvider`
- no app-wide theme/provider runtime error from `Sonner`
- dependency tree is normalized to one package manager and one lockfile
