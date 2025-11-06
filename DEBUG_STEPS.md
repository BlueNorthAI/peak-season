# Quick Debug Steps for Razorpay Error

## The Error You're Seeing:
```
Error: Failed to create order
```

## Follow These Steps:

### Step 1: Restart the Dev Server ⚡
```bash
# Stop the server (Ctrl+C)
# Then start again:
npm run dev
```

**This is the most important step!** Environment variables only load when the server starts.

---

### Step 2: Open Browser Console
1. Open your browser (Chrome/Edge/Firefox)
2. Press **F12** to open DevTools
3. Click the **Console** tab
4. Keep this open while testing

---

### Step 3: Test the Payment
1. Go to http://localhost:3000
2. Scroll down to "Choose Your Peak Season Package"
3. Click any "Get Started" / "Secure Your Slot" / "Book Consultation" button
4. Watch the Console tab for messages

---

### Step 4: Check Console Messages

You should see messages like:

✅ **Success - What you should see:**
```
Starting payment process for: Peak Ready Amount: 671995
API Response status: 200
Razorpay API Keys loaded successfully
Creating Razorpay order: { amount: 67199500, packageName: 'Peak Ready' }
Razorpay order created successfully: order_xxxxx
```

❌ **Error - What you might see:**
```
API Response status: 500
Order creation failed: { error: "Razorpay not configured..." }
```

---

### Step 5: Check Server Terminal

Look at your terminal where `npm run dev` is running.

✅ **Success - What you should see:**
```
Razorpay API Keys loaded successfully
Creating Razorpay order: { amount: 67199500, packageName: 'Peak Ready' }
Razorpay order created successfully: order_xxxxx
```

❌ **Error - What you might see:**
```
Razorpay API keys not configured
```

---

### Step 6: Verify Environment Variables

Visit this URL in your browser:
```
http://localhost:3000/api/test-env
```

✅ **Success - You should see:**
```json
{
  "razorpayKeyId": "✓ Found (rzp_test_RcONAV...)",
  "razorpaySecret": "✓ Found (hidden for security)"
}
```

❌ **Error - You might see:**
```json
{
  "razorpayKeyId": "✗ Missing",
  "razorpaySecret": "✗ Missing"
}
```

If you see "✗ Missing", your `.env.local` file is not being loaded.

---

## Common Solutions:

### Solution 1: Restart Server (Most Common!)
```bash
# Stop with Ctrl+C, then:
npm run dev
```

### Solution 2: Check .env.local Location
Make sure `.env.local` is in the root folder:
```
v0-shopify-peak-season-offer/
├── .env.local          ← Must be here!
├── app/
├── components/
└── package.json
```

### Solution 3: Clear Next.js Cache
```bash
# Windows:
rmdir /s .next
npm run dev

# Mac/Linux:
rm -rf .next
npm run dev
```

### Solution 4: Verify .env.local Contents
Open `.env.local` and check:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_RcONAVccpUjfNr"
RAZORPAY_KEY_SECRET="AaMhrZNRwgEV5S8EzOrItdKq"
```

Make sure:
- No spaces around `=`
- Values are in quotes
- No typos in variable names

---

## Test Card Details

Once it's working, use these test details:

- **Card Number:** 4111 1111 1111 1111
- **Expiry:** Any future date (e.g., 12/25)
- **CVV:** Any 3 digits (e.g., 123)
- **Name:** Any name

---

## Still Not Working?

1. Take a screenshot of:
   - Browser Console (F12)
   - Server Terminal output
   - http://localhost:3000/api/test-env

2. Check the full troubleshooting guide: `RAZORPAY_TROUBLESHOOTING.md`

3. Contact: lavanya.bnai@gmail.com

---

**Quick Checklist:**
- [ ] Server restarted with `npm run dev`
- [ ] Browser console open (F12)
- [ ] `/api/test-env` shows "✓ Found"
- [ ] Clicked payment button
- [ ] Checked console messages
- [ ] Checked server terminal logs

**90% of the time, just restarting the server fixes it!** 🎯
