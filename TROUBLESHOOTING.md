# Troubleshooting Guide

## Common Issues and Solutions

### Issue: "npm is not recognized"
**Solution:** 
- Make sure Node.js is installed: https://nodejs.org/
- Restart your terminal/IDE after installing Node.js
- Try using `npx` instead: `npx npm install`

### Issue: Build/Compile Errors
**Solution:**
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear cache: `npm cache clean --force`

### Issue: Firebase Connection Errors
**Solution:**
1. Check your `.env` file exists and has correct values
2. Verify Firebase project is set up correctly
3. Check browser console for specific error messages
4. Ensure Firestore and Storage are enabled in Firebase Console

### Issue: TypeScript Errors
**Solution:**
1. Run `npm run lint` to see all errors
2. Make sure all dependencies are installed
3. Check `tsconfig.json` is correct
4. Restart TypeScript server in your IDE

### Issue: App Not Loading / Blank Screen
**Solution:**
1. Check browser console (F12) for errors
2. Verify all imports are correct
3. Check if Firebase config is set up
4. Try clearing browser cache
5. Check if port 3000 is available

### Issue: Components Not Rendering
**Solution:**
1. Check if Tailwind CSS is properly configured
2. Verify all component imports
3. Check browser console for React errors
4. Ensure all required props are passed

### Issue: Blocks Not Saving
**Solution:**
1. Check if localStorage is enabled in browser
2. Verify `useWorkspace` hook is working
3. Check browser console for errors
4. Try clearing localStorage and refreshing

### Issue: Styling Not Working
**Solution:**
1. Verify Tailwind is installed: `npm list tailwindcss`
2. Check `tailwind.config.js` is correct
3. Verify `src/styles/index.css` imports Tailwind
4. Restart dev server after config changes

### Issue: Missing Dependencies
**Solution:**
1. Run `npm install` to install all dependencies
2. Check `package.json` for all required packages
3. If specific package is missing, install it: `npm install <package-name>`

## Getting Help

1. Check the browser console (F12) for error messages
2. Check the terminal where `npm run dev` is running
3. Review the [SETUP.md](SETUP.md) guide
4. Check [GITHUB_ISSUES.md](GITHUB_ISSUES.md) for known issues
5. Open an issue on GitHub with:
   - Error message
   - Steps to reproduce
   - Browser/OS information
   - Screenshots if applicable
