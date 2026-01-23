# Render Build Fix - Rollup Optional Dependencies

## Problem
Render build fails with error:
```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

## Root Cause
npm's optional dependencies bug on Linux systems. Rollup requires native modules that aren't being installed.

## Solution

### Option 1: Update Build Command in Render Dashboard (RECOMMENDED)

1. Go to your Render dashboard: https://dashboard.render.com
2. Select your WorkLin service
3. Go to **Settings** tab
4. Find **Build Command** field
5. Change it from:
   ```
   npm install; npm run build
   ```
   To:
   ```
   npm install --include=optional && npm run build
   ```
6. Click **Save Changes**
7. Click **Manual Deploy** → **Deploy latest commit**

### Option 2: Use Custom Build Script

If Option 1 doesn't work, use this build command instead:
```
npm run build:render
```

This uses the custom script in `package.json` that ensures optional dependencies are installed.

### Option 3: Clean Install (If still failing)

If the above don't work, try this build command:
```
rm -rf node_modules package-lock.json && npm install --include=optional && npm run build
```

## Files Already Configured

✅ `.npmrc` - Configured to install optional dependencies  
✅ `package.json` - Added `build:render` script  
✅ `render.yaml` - Configuration file (only works with Blueprint feature)

## Verification

After updating the build command, the build should succeed. You'll see:
- ✅ `npm install` completes successfully
- ✅ `tsc` (TypeScript compilation) succeeds
- ✅ `vite build` completes successfully
- ✅ Build artifacts created in `dist/` folder

## Why This Happens

- Vite uses Rollup for bundling
- Rollup has platform-specific native modules (`.node` files)
- These are marked as "optional dependencies" in npm
- npm has a bug where optional dependencies aren't always installed on Linux
- The `--include=optional` flag forces npm to install them

## Still Having Issues?

1. Check Render build logs for the exact error
2. Verify `.npmrc` file is in the repository root
3. Make sure you're using Node.js 18+ (Render default is 22.22.0, which is fine)
4. Try the clean install command from Option 3

---

**Last Updated**: January 23, 2025
