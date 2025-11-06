# Drizzle ORM Setup Guide

## ✅ What's Been Installed

- `drizzle-orm` - The ORM library
- `drizzle-kit` - Migration tool
- `postgres` - PostgreSQL driver
- `@paralleldrive/cuid2` - For generating unique IDs

## 📁 Files Created

1. **`drizzle.config.ts`** - Drizzle configuration
2. **`lib/db/schema.ts`** - Database schema (Payment table)
3. **`lib/db/index.ts`** - Database connection

---

## 🚀 Quick Start

### Step 1: Add Database URL

Add to `.env.local`:

```env
# Existing Razorpay keys...
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_RcONAVccpUjfNr"
RAZORPAY_KEY_SECRET="AaMhrZNRwgEV5S8EzOrItdKq"

# Add Database URL
DATABASE_URL="postgresql://username:password@localhost:5432/peakseason"
```

**Options for DATABASE_URL:**

**Option A: Neon (Recommended - Free Cloud)**
1. Sign up: https://neon.tech
2. Create project
3. Copy connection string:
   ```
   DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/dbname?sslmode=require"
   ```

**Option B: Local PostgreSQL**
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/peakseason"
```

**Option C: Supabase (Free)**
1. Sign up: https://supabase.com
2. Create project
3. Get connection string from Settings → Database
   ```
   DATABASE_URL="postgresql://postgres:pass@db.xxx.supabase.co:5432/postgres"
   ```

---

### Step 2: Generate Migration

```bash
pnpm drizzle-kit generate
```

This creates SQL migration files in `lib/db/migrations/`

---

### Step 3: Run Migration

```bash
pnpm drizzle-kit migrate
```

This applies the migration to your database (creates the payments table).

---

### Step 4: Open Drizzle Studio (Optional)

```bash
pnpm drizzle-kit studio
```

Opens a visual database browser at http://localhost:4983

---

## 📊 Database Schema

### Payments Table

| Column | Type | Description |
|--------|------|-------------|
| id | varchar(128) | Unique ID (CUID) |
| created_at | timestamp | When created |
| updated_at | timestamp | Last updated |
| razorpay_order_id | varchar(255) | Razorpay order ID (unique) |
| razorpay_payment_id | varchar(255) | Razorpay payment ID (unique) |
| razorpay_signature | varchar(500) | Payment signature |
| package_name | varchar(255) | Package name |
| package_description | varchar(1000) | Package description |
| amount | integer | Amount in paise |
| currency | varchar(10) | Currency (INR) |
| customer_name | varchar(255) | Customer name |
| customer_email | varchar(255) | Customer email |
| customer_phone | varchar(20) | Customer phone |
| status | enum | CREATED/CAPTURED/FAILED/REFUNDED |
| notes | json | Additional data |

**Indexes:**
- razorpay_order_id
- razorpay_payment_id
- customer_email
- status

---

## 💻 Using Drizzle in Your Code

### Import

```typescript
import { db } from "@/lib/db"
import { payments } from "@/lib/db/schema"
```

### Insert Payment

```typescript
import { db } from "@/lib/db"
import { payments } from "@/lib/db/schema"

const newPayment = await db.insert(payments).values({
  razorpayOrderId: "order_xxx",
  packageName: "Peak Ready",
  packageDescription: "Strategic consulting + custom app",
  amount: 671995,
  currency: "INR",
  status: "CREATED",
}).returning()
```

### Update Payment

```typescript
import { eq } from "drizzle-orm"

await db.update(payments)
  .set({
    status: "CAPTURED",
    razorpayPaymentId: "pay_xxx",
    razorpaySignature: "signature_xxx"
  })
  .where(eq(payments.razorpayOrderId, "order_xxx"))
```

### Query Payments

```typescript
import { eq, desc } from "drizzle-orm"

// Get all payments
const allPayments = await db.select().from(payments)

// Get by order ID
const payment = await db.select()
  .from(payments)
  .where(eq(payments.razorpayOrderId, "order_xxx"))

// Get latest 10 payments
const recentPayments = await db.select()
  .from(payments)
  .orderBy(desc(payments.createdAt))
  .limit(10)

// Get by status
const capturedPayments = await db.select()
  .from(payments)
  .where(eq(payments.status, "CAPTURED"))
```

---

## 🔧 Update API Routes

### Update `app/api/razorpay/create-order/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { payments } from "@/lib/db/schema"

export async function POST(request: NextRequest) {
  try {
    // ... existing Razorpay setup code ...

    const { amount, packageName, packageDescription } = await request.json()

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { packageName, packageDescription },
    })

    // Save to database
    await db.insert(payments).values({
      razorpayOrderId: order.id,
      packageName,
      packageDescription,
      amount: order.amount,
      currency: order.currency,
      status: "CREATED",
      notes: { packageName, packageDescription },
    })

    console.log("Payment saved to database")

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error: any) {
    console.error("Order creation error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    )
  }
}
```

### Update `app/api/razorpay/verify-payment/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { db } from "@/lib/db"
import { payments } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json()

    // Verify signature
    const text = razorpay_order_id + "|" + razorpay_payment_id
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest("hex")

    if (generated_signature === razorpay_signature) {
      // Update payment in database
      await db.update(payments)
        .set({
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          status: "CAPTURED",
        })
        .where(eq(payments.razorpayOrderId, razorpay_order_id))

      console.log("Payment status updated to CAPTURED")

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id,
      })
    } else {
      // Mark as failed
      await db.update(payments)
        .set({ status: "FAILED" })
        .where(eq(payments.razorpayOrderId, razorpay_order_id))

      return NextResponse.json(
        { success: false, message: "Payment verification failed" },
        { status: 400 }
      )
    }
  } catch (error: any) {
    console.error("Verification error:", error)
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}
```

---

## 📝 Common Drizzle Commands

```bash
# Generate migration from schema
pnpm drizzle-kit generate

# Apply migrations to database
pnpm drizzle-kit migrate

# Open visual database browser
pnpm drizzle-kit studio

# Push schema directly (no migration files)
pnpm drizzle-kit push

# Drop all tables (careful!)
pnpm drizzle-kit drop
```

---

## 🎯 Complete Setup Steps

```bash
# 1. Add DATABASE_URL to .env.local
# (see options above)

# 2. Generate migration
pnpm drizzle-kit generate

# 3. Apply migration
pnpm drizzle-kit migrate

# 4. Start dev server
pnpm dev

# 5. Test payment flow
# Payments will now be saved to database!

# 6. View database (optional)
pnpm drizzle-kit studio
```

---

## 🔍 Verify Database Setup

Create test file: `lib/db/test.ts`

```typescript
import { db } from "./index"
import { payments } from "./schema"

async function testDatabase() {
  try {
    console.log("Testing database connection...")

    const result = await db.select().from(payments).limit(1)

    console.log("✅ Database connected successfully!")
    console.log("Payments count:", result.length)
  } catch (error) {
    console.error("❌ Database error:", error)
  }
}

testDatabase()
```

Run: `tsx lib/db/test.ts`

---

## 📚 Resources

- **Drizzle Docs:** https://orm.drizzle.team/docs/overview
- **Drizzle Examples:** https://github.com/drizzle-team/drizzle-orm/tree/main/examples
- **PostgreSQL Tutorial:** https://www.postgresql.org/docs/

---

## ✅ Benefits of Drizzle

- **TypeScript First** - Full type safety
- **Performance** - Faster than Prisma
- **SQL-like API** - Easy to learn
- **Lightweight** - Small bundle size
- **Migrations** - Full control
- **Studio** - Visual database browser

---

## 🎉 You're Ready!

1. Add DATABASE_URL to `.env.local`
2. Run `pnpm drizzle-kit generate`
3. Run `pnpm drizzle-kit migrate`
4. Update your API routes (examples above)
5. Test payment flow!

Your payments will now be saved to the database automatically! 🚀
