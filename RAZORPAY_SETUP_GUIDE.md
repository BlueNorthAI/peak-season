# Razorpay Integration - Complete Setup Guide

This guide will walk you through integrating Razorpay payment gateway into your Peak Season Offer website.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Get Razorpay API Keys](#get-razorpay-api-keys)
3. [Install Dependencies](#install-dependencies)
4. [Configure Environment Variables](#configure-environment-variables)
5. [Test the Integration](#test-the-integration)
6. [Go Live with Production Keys](#go-live-with-production-keys)
7. [Webhook Setup (Optional but Recommended)](#webhook-setup)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Active Razorpay account (Sign up at https://dashboard.razorpay.com/signup)
- Node.js and npm installed
- Your website running locally or deployed

---

## Step 1: Get Razorpay API Keys

### 1.1 Login to Razorpay Dashboard
1. Go to https://dashboard.razorpay.com/
2. Login with your credentials:
   - Email: `lavanya.bnai@gmail.com`
   - Phone: `+91 9750 598035`

### 1.2 Get Test Mode Keys (for development)
1. In the dashboard, ensure you're in **Test Mode** (toggle in the top-left)
2. Navigate to **Settings** → **API Keys**
3. Click on **Generate Test Keys** if not already generated
4. You'll see two keys:
   - **Key ID** (starts with `rzp_test_`) - This is PUBLIC
   - **Key Secret** - This is PRIVATE (keep it secure!)
5. Copy both keys - you'll need them in the next step

### 1.3 Get Live Mode Keys (for production)
1. Complete KYC verification in your Razorpay account
2. Switch to **Live Mode** (toggle in top-left)
3. Navigate to **Settings** → **API Keys**
4. Click on **Generate Live Keys**
5. Keys will start with `rzp_live_`
6. **Important:** Only use live keys when going to production!

---

## Step 2: Install Dependencies

Open your terminal in the project directory and run:

```bash
pnpm add razorpay
```

This installs the official Razorpay Node.js SDK.

---

## Step 3: Configure Environment Variables

### 3.1 Update .env.local file

Your `.env.local` file has been prepared with placeholders. Replace them with your actual keys:

```env
# Calendly Configuration
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/shrikanthmohan/discovery-call"

# Razorpay Configuration
# Get these from your Razorpay Dashboard: https://dashboard.razorpay.com/app/keys
# IMPORTANT: Key ID is public (starts with rzp_test_ or rzp_live_)
# Key Secret is private and should NEVER be exposed to client-side
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_YOUR_KEY_ID_HERE"
RAZORPAY_KEY_SECRET="YOUR_KEY_SECRET_HERE"
```

### 3.2 Example with actual test keys:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_1DP5mmOlF5G5ag"
RAZORPAY_KEY_SECRET="thisissupersecretdonotshare"
```

### 3.3 Important Security Notes:
- ✅ `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Can be exposed to client (starts with NEXT_PUBLIC_)
- ❌ `RAZORPAY_KEY_SECRET` - Must NEVER be exposed to client-side
- ✅ Add `.env.local` to `.gitignore` (already done)
- ❌ Never commit API keys to Git

---

## Step 4: Test the Integration

### 4.1 Start Development Server

```bash
npm run dev
```

Your site should be running at http://localhost:3000

### 4.2 Test Payment Flow

1. Navigate to the "Choose Your Peak Season Package" section
2. Click on any **"Get Started"**, **"Secure Your Slot"**, or **"Book Consultation"** button
3. Razorpay checkout popup should appear
4. Use Razorpay test cards for testing:

#### Test Card Details:
- **Card Number:** 4111 1111 1111 1111
- **Expiry:** Any future date (e.g., 12/25)
- **CVV:** Any 3 digits (e.g., 123)
- **Name:** Any name

#### Other Test Cards:
- **Success:** 4111 1111 1111 1111
- **Failure:** 4000 0000 0000 0002
- **UPI:** success@razorpay (for testing UPI)

### 4.3 Verify Payment

After successful payment:
1. You should be redirected to `/payment-success` page
2. Check browser console for payment details
3. Check your Razorpay Dashboard → Payments to see the test transaction

---

## Step 5: Go Live with Production Keys

### 5.1 Prerequisites for Going Live
1. Complete KYC verification in Razorpay
2. Add business details
3. Activate your account

### 5.2 Update Environment Variables

Replace test keys with live keys in `.env.local`:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_live_YOUR_LIVE_KEY_ID"
RAZORPAY_KEY_SECRET="YOUR_LIVE_KEY_SECRET"
```

### 5.3 Deploy to Production

```bash
# Build the project
npm run build

# Deploy to your hosting provider (Vercel, Netlify, etc.)
# Make sure to add environment variables in your hosting dashboard
```

### 5.4 Add Environment Variables to Hosting Platform

**For Vercel:**
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add both variables:
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` = your live key ID
   - `RAZORPAY_KEY_SECRET` = your live key secret
4. Redeploy

**For Netlify:**
1. Site settings → Environment Variables
2. Add the same variables
3. Redeploy

---

## Step 6: Webhook Setup (Optional but Recommended)

Webhooks ensure you get notified about payment status even if the user closes the browser.

### 6.1 Create Webhook Endpoint

Create a new file: `app/api/razorpay/webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get("x-razorpay-signature")

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest("hex")

    if (signature === expectedSignature) {
      const payload = JSON.parse(body)

      // Handle different events
      switch (payload.event) {
        case "payment.captured":
          console.log("Payment captured:", payload.payload.payment.entity)
          // TODO: Update database, send confirmation email
          break
        case "payment.failed":
          console.log("Payment failed:", payload.payload.payment.entity)
          // TODO: Handle failed payment
          break
      }

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
```

### 6.2 Configure Webhook in Razorpay Dashboard

1. Go to **Settings** → **Webhooks**
2. Click **Add New Webhook**
3. Enter webhook URL: `https://yourdomain.com/api/razorpay/webhook`
4. Select events to track:
   - `payment.captured`
   - `payment.failed`
   - `order.paid`
5. Copy the **Webhook Secret**
6. Add to `.env.local`:
   ```env
   RAZORPAY_WEBHOOK_SECRET="your_webhook_secret_here"
   ```

---

## Step 7: Create Payment Success Page

Create `app/payment-success/page.tsx`:

```typescript
"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PaymentSuccess() {
  const searchParams = useSearchParams()
  const paymentId = searchParams.get("payment_id")
  const packageName = searchParams.get("package")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 px-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
        <CheckCircle className="mx-auto h-24 w-24 text-green-600 mb-6" />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Thank you for choosing <span className="font-bold text-primary">{packageName}</span>
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <p className="text-sm text-gray-500 mb-2">Payment ID</p>
          <p className="text-lg font-mono font-semibold text-gray-900">{paymentId}</p>
        </div>

        <p className="text-gray-600 mb-8">
          We've received your payment. Our team will contact you within 24 hours to begin your implementation.
          A confirmation email has been sent to your registered email address.
        </p>

        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={`mailto:lavanya.bnai@gmail.com?subject=Payment Confirmation - ${paymentId}`}>
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
```

---

## Troubleshooting

### Issue 1: "Razorpay is not defined" error
**Solution:** The Razorpay script failed to load. Check:
- Internet connection
- Browser console for script loading errors
- Firewall or ad-blockers

### Issue 2: API key not found
**Solution:**
- Verify `.env.local` file exists in root directory
- Restart development server after adding environment variables
- Check for typos in variable names

### Issue 3: Payment verification fails
**Solution:**
- Ensure `RAZORPAY_KEY_SECRET` is set correctly
- Check server logs for detailed error messages
- Verify the signature generation logic

### Issue 4: Webhook not receiving events
**Solution:**
- Ensure webhook URL is publicly accessible (not localhost)
- Use tools like ngrok for local testing
- Check webhook secret is correct
- Verify webhook is active in Razorpay dashboard

### Issue 5: Amount mismatch error
**Solution:**
- Razorpay expects amount in **paise** (smallest currency unit)
- ₹1 = 100 paise
- Multiply rupee amount by 100

---

## Testing Checklist

Before going live, test:

- ✅ Payment success flow
- ✅ Payment failure flow
- ✅ User closes popup (payment pending)
- ✅ Multiple payment methods (Card, UPI, Netbanking)
- ✅ All three packages (Essentials, Ready, Enterprise)
- ✅ Mobile responsiveness
- ✅ Email notifications
- ✅ Webhook events

---

## Security Best Practices

1. ✅ Never expose `RAZORPAY_KEY_SECRET` to client-side
2. ✅ Always verify payment signature on server-side
3. ✅ Use HTTPS in production
4. ✅ Implement rate limiting on API routes
5. ✅ Log all payment attempts for audit
6. ✅ Keep Razorpay SDK updated
7. ✅ Enable 2FA on Razorpay account

---

## Support & Resources

- **Razorpay Dashboard:** https://dashboard.razorpay.com/
- **Razorpay Docs:** https://razorpay.com/docs/
- **API Reference:** https://razorpay.com/docs/api/
- **Support:** support@razorpay.com
- **Your Support:** lavanya.bnai@gmail.com / +91 9750 598035

---

## What's Been Implemented

✅ **Components Created:**
- `components/razorpay-button.tsx` - Reusable Razorpay payment button
- `app/api/razorpay/create-order/route.ts` - Order creation API
- `app/api/razorpay/verify-payment/route.ts` - Payment verification API

✅ **Updates Made:**
- `components/offer.tsx` - Integrated Razorpay buttons with INR pricing
- `.env.local` - Added Razorpay configuration

✅ **Features:**
- INR pricing display with USD equivalent
- Secure payment processing
- Payment verification
- Error handling
- Loading states
- Success page redirect

---

## Next Steps

1. **Get your Razorpay API keys** from the dashboard
2. **Update `.env.local`** with your keys
3. **Install dependencies:** `npm install razorpay`
4. **Test the integration** using test cards
5. **Create payment success page** (template provided above)
6. **Set up webhooks** for production
7. **Complete KYC** and go live!

---

## Quick Start Commands

```bash
# Install dependencies
npm install razorpay

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

**Need Help?** Contact Lavanya at lavanya.bnai@gmail.com or +91 9750 598035
