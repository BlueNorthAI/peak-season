# Razorpay Integration - Quick Start

## 🚀 5-Minute Setup

### Step 1: Install Razorpay
```bash
npm install razorpay
```

### Step 2: Get Your API Keys
1. Login: https://dashboard.razorpay.com/
   - Email: `lavanya.bnai@gmail.com`
   - Phone: `+91 9750 598035`
2. Go to: **Settings** → **API Keys**
3. Click: **Generate Test Keys**
4. Copy both keys

### Step 3: Update `.env.local`
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_YOUR_KEY_HERE"
RAZORPAY_KEY_SECRET="YOUR_SECRET_HERE"
```

### Step 4: Restart Server
```bash
npm run dev
```

### Step 5: Test Payment
1. Go to: http://localhost:3000
2. Scroll to "Choose Your Peak Season Package"
3. Click any package button
4. Use test card: **4111 1111 1111 1111**
5. Any future expiry & CVV

---

## 📋 Test Card Details

| Purpose | Card Number | Result |
|---------|-------------|--------|
| Success | 4111 1111 1111 1111 | Payment succeeds |
| Failure | 4000 0000 0000 0002 | Payment fails |
| UPI | success@razorpay | UPI succeeds |

**Expiry:** Any future date (e.g., 12/25)
**CVV:** Any 3 digits (e.g., 123)
**Name:** Any name

---

## ✅ What's Integrated

- ✅ Razorpay payment buttons on all packages
- ✅ INR pricing (₹) with USD equivalent
- ✅ Secure order creation API
- ✅ Payment verification API
- ✅ Success page redirect
- ✅ Loading states & error handling

---

## 🔑 Your Razorpay Account

**Merchant ID:** R4hT2WSDBwnH3p
**Email:** lavanya.bnai@gmail.com
**Phone:** +91 9750 598035
**Dashboard:** https://dashboard.razorpay.com/

---

## 📞 Need Help?

Full guide: `RAZORPAY_SETUP_GUIDE.md`
Razorpay Support: support@razorpay.com
Your Contact: lavanya.bnai@gmail.com

---

## 🎯 Package Prices (INR)

| Package | Price (INR) | Price (USD) |
|---------|-------------|-------------|
| Peak Essentials | ₹4,19,995 | $4,995 |
| Peak Ready | ₹6,71,995 | $7,995 |
| Peak Enterprise | ₹10,91,995 | $12,995 |

---

## ⚡ Quick Troubleshooting

**Issue:** Razorpay not loading
**Fix:** Restart dev server after adding keys

**Issue:** Payment fails
**Fix:** Use test card 4111 1111 1111 1111

**Issue:** Keys not working
**Fix:** Ensure you're in Test Mode (toggle in dashboard)

---

## 🔐 Security Notes

- ❌ Never commit `.env.local` to Git
- ✅ Key ID is safe to expose (starts with rzp_test_)
- ❌ Key Secret must stay private
- ✅ Use live keys only in production

---

**Ready to go live?** See `RAZORPAY_SETUP_GUIDE.md` for production deployment steps.
