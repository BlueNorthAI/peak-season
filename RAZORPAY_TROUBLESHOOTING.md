# Razorpay Troubleshooting Guide

## Error: "SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

This error means the API is returning HTML instead of JSON. Here's how to fix it:

### Solution Steps:

#### 1. Restart Your Development Server

After adding environment variables or making API changes, **you must restart the dev server**:

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

**Important:** Environment variables are only loaded when the server starts!

#### 2. Verify Environment Variables Are Loaded

Check if your environment variables are accessible:

Create a test file: `app/api/test-env/route.ts`

```typescript
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ? "✓ Found" : "✗ Missing",
    razorpaySecret: process.env.RAZORPAY_KEY_SECRET ? "✓ Found" : "✗ Missing",
  })
}
```

Visit: `http://localhost:3000/api/test-env`

You should see:
```json
{
  "razorpayKeyId": "✓ Found",
  "razorpaySecret": "✓ Found"
}
```

If you see "✗ Missing", your `.env.local` file is not being read properly.

#### 3. Check .env.local File Location

The `.env.local` file **MUST** be in the project root directory:

```
v0-shopify-peak-season-offer/
├── .env.local          ← Should be here
├── app/
├── components/
├── package.json
└── ...
```

**Not** inside `app/` or `components/` folders!

#### 4. Verify .env.local Contents

Open `.env.local` and verify:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_RcONAVccpUjfNr"
RAZORPAY_KEY_SECRET="AaMhrZNRwgEV5S8EzOrItdKq"
```

**Important:**
- No spaces around `=`
- Values in quotes
- No trailing spaces
- File ends with a newline

#### 5. Check Console for Error Messages

Open browser DevTools (F12) and check:

1. **Console tab** - Look for error messages
2. **Network tab** - Check the failing API request
   - Look for `/api/razorpay/create-order`
   - Check the Response tab
   - If you see HTML, the route isn't working

#### 6. Check Server Terminal for Logs

Look at your terminal where `npm run dev` is running. You should see:

```
Creating Razorpay order: { amount: 419995, packageName: 'Peak Essentials' }
```

If you see:
```
Razorpay API keys not configured
```

Then environment variables aren't being loaded.

### Common Mistakes:

❌ **Wrong File Name**
- `.env` (wrong)
- `env.local` (wrong)
- `.env.local` (✓ correct)

❌ **Wrong Location**
- `app/.env.local` (wrong)
- `components/.env.local` (wrong)
- `.env.local` (✓ correct - in root)

❌ **Server Not Restarted**
- Environment variables only load on server start
- Always restart after changing `.env.local`

❌ **Syntax Errors in .env.local**
```env
# Wrong:
NEXT_PUBLIC_RAZORPAY_KEY_ID = "rzp_test_xxx"  # spaces around =
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxx      # missing quotes

# Correct:
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_xxx"
```

### Step-by-Step Debug Process:

1. **Stop the dev server** (Ctrl+C)

2. **Verify `.env.local` exists in root**:
   ```bash
   ls .env.local
   # or on Windows:
   dir .env.local
   ```

3. **Check file contents**:
   ```bash
   cat .env.local
   # or on Windows:
   type .env.local
   ```

4. **Start the dev server**:
   ```bash
   npm run dev
   ```

5. **Test environment variables**:
   - Visit `http://localhost:3000/api/test-env`
   - Should show "✓ Found" for both keys

6. **Test payment button**:
   - Click any package button
   - Check browser console for errors
   - Check server terminal for logs

### Still Not Working?

If you've tried all the above and it's still not working:

1. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   # or on Windows:
   rmdir /s .next
   ```

2. **Reinstall node_modules**:
   ```bash
   rm -rf node_modules
   npm install --legacy-peer-deps
   ```

3. **Try a fresh browser session**:
   - Open incognito/private window
   - Clear browser cache
   - Try again

### Manual Test of Razorpay API

You can test if your Razorpay keys work using curl:

```bash
curl -u rzp_test_RcONAVccpUjfNr:AaMhrZNRwgEV5S8EzOrItdKq \
  -X POST https://api.razorpay.com/v1/orders \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 50000,
    "currency": "INR",
    "receipt": "test_receipt"
  }'
```

If this works, your keys are valid. The issue is with Next.js configuration.

### Contact Support

If nothing works:
- Email: lavanya.bnai@gmail.com
- Include:
  - Screenshot of `.env.local` (hide the secret!)
  - Browser console errors
  - Server terminal logs

---

## Other Common Errors

### "Cannot read properties of null (reading 'matches')"

This is an npm installation error. Fix:

```bash
npm install --legacy-peer-deps
```

### "Razorpay is not defined"

The Razorpay script didn't load. Fix:
- Check internet connection
- Disable ad-blockers
- Check browser console for script loading errors

### "Payment verification failed"

The signature doesn't match. Fix:
- Ensure `RAZORPAY_KEY_SECRET` is correct
- Check for trailing spaces in `.env.local`
- Restart the server

---

## Quick Checklist

- [ ] `.env.local` file exists in project root
- [ ] Contains correct API keys
- [ ] No syntax errors in `.env.local`
- [ ] Dev server restarted after adding keys
- [ ] Visit `/api/test-env` shows "✓ Found"
- [ ] Browser console shows no errors
- [ ] Razorpay package installed (`node_modules/razorpay` exists)

---

**Most Common Solution:** Just restart the dev server! 🔄
