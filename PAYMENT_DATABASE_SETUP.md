# Payment Database Schema & Setup Guide

## Overview

This guide will help you set up a database to store payment information and generate payment statements.

---

## Option 1: Using Prisma with PostgreSQL (Recommended)

### Step 1: Install Dependencies

```bash
pnpm add @prisma/client prisma
pnpm add @prisma/adapter-neon
```

### Step 2: Initialize Prisma

```bash
npx prisma init
```

This creates:
- `prisma/schema.prisma` - Database schema
- `.env` - Database connection URL

### Step 3: Database Schema

Create/update `prisma/schema.prisma`:

```prisma
// This is your Prisma schema file

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Payment {
  id                  String   @id @default(cuid())
  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  // Razorpay Details
  razorpayOrderId     String   @unique
  razorpayPaymentId   String?  @unique
  razorpaySignature   String?

  // Package Details
  packageName         String
  packageDescription  String?
  amount              Int      // Amount in paise
  currency            String   @default("INR")

  // Customer Details
  customerName        String?
  customerEmail       String?
  customerPhone       String?

  // Payment Status
  status              PaymentStatus @default(CREATED)

  // Additional Notes
  notes               Json?

  @@index([razorpayOrderId])
  @@index([razorpayPaymentId])
  @@index([customerEmail])
  @@index([status])
}

enum PaymentStatus {
  CREATED      // Order created, payment pending
  AUTHORIZED   // Payment authorized
  CAPTURED     // Payment successful
  FAILED       // Payment failed
  REFUNDED     // Payment refunded
}
```

### Step 4: Add Database URL

Update `.env` file:

```env
# Existing keys...
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_RcONAVccpUjfNr"
RAZORPAY_KEY_SECRET="AaMhrZNRwgEV5S8EzOrItdKq"

# Database URL
# For PostgreSQL (local):
DATABASE_URL="postgresql://username:password@localhost:5432/peakseason?schema=public"

# For PostgreSQL (Neon - free tier):
DATABASE_URL="postgresql://user:password@ep-xxx-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require"

# For MySQL:
DATABASE_URL="mysql://username:password@localhost:3306/peakseason"
```

### Step 5: Create Database Tables

```bash
npx prisma migrate dev --name init
```

This creates the database tables based on your schema.

### Step 6: Generate Prisma Client

```bash
npx prisma generate
```

---

## Implementation: Save Payments to Database

### Update Create Order API

File: `app/api/razorpay/create-order/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // Check if API keys are configured
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay API keys not configured")
      return NextResponse.json(
        { error: "Razorpay not configured. Please add API keys to environment variables." },
        { status: 500 }
      )
    }

    // Dynamically import Razorpay
    const Razorpay = (await import("razorpay")).default

    // Initialize Razorpay instance with keys
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    const { amount, packageName, packageDescription, customerEmail, customerName, customerPhone } = await request.json()

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      )
    }

    console.log("Creating Razorpay order:", { amount, packageName })

    // Create order
    const options = {
      amount: amount, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        packageName,
        packageDescription,
      },
    }

    const order = await razorpay.orders.create(options)

    console.log("Razorpay order created successfully:", order.id)

    // Save to database
    const payment = await prisma.payment.create({
      data: {
        razorpayOrderId: order.id,
        packageName,
        packageDescription,
        amount: order.amount,
        currency: order.currency,
        customerName,
        customerEmail,
        customerPhone,
        status: "CREATED",
        notes: options.notes,
      },
    })

    console.log("Payment record saved to database:", payment.id)

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error: any) {
    console.error("Razorpay order creation error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
```

### Update Verify Payment API

File: `app/api/razorpay/verify-payment/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      packageName,
    } = await request.json()

    // Create signature for verification
    const text = razorpay_order_id + "|" + razorpay_payment_id
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest("hex")

    // Verify signature
    if (generated_signature === razorpay_signature) {
      console.log("Payment verified successfully:", {
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        package: packageName,
      })

      // Update payment in database
      await prisma.payment.update({
        where: { razorpayOrderId: razorpay_order_id },
        data: {
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          status: "CAPTURED",
        },
      })

      console.log("Payment status updated in database")

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id,
      })
    } else {
      // Mark as failed in database
      await prisma.payment.update({
        where: { razorpayOrderId: razorpay_order_id },
        data: {
          status: "FAILED",
        },
      })

      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      )
    }
  } catch (error: any) {
    console.error("Payment verification error:", error)
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Payment verification failed",
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
```

---

## Creating Payment Statements/Invoices

### Create Invoice API

File: `app/api/payments/invoice/[id]/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: params.id },
    })

    if (!payment) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 })
    }

    // Generate invoice data
    const invoice = {
      invoiceNumber: `INV-${payment.id.substring(0, 8).toUpperCase()}`,
      date: payment.createdAt.toLocaleDateString(),
      customerName: payment.customerName || "Guest",
      customerEmail: payment.customerEmail,
      items: [
        {
          description: payment.packageName,
          details: payment.packageDescription,
          amount: (payment.amount / 100).toFixed(2),
        },
      ],
      subtotal: (payment.amount / 100).toFixed(2),
      tax: "0.00",
      total: (payment.amount / 100).toFixed(2),
      currency: payment.currency,
      status: payment.status,
      razorpayPaymentId: payment.razorpayPaymentId,
    }

    return NextResponse.json(invoice)
  } catch (error: any) {
    console.error("Invoice generation error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to generate invoice" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
```

---

## View All Payments (Admin)

### Create Payments List API

File: `app/api/payments/list/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const limit = parseInt(searchParams.get("limit") || "50")

    const where = status ? { status: status as any } : {}

    const payments = await prisma.payment.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
    })

    const summary = {
      total: payments.length,
      captured: payments.filter((p) => p.status === "CAPTURED").length,
      failed: payments.filter((p) => p.status === "FAILED").length,
      pending: payments.filter((p) => p.status === "CREATED").length,
      totalAmount: payments
        .filter((p) => p.status === "CAPTURED")
        .reduce((sum, p) => sum + p.amount, 0) / 100,
    }

    return NextResponse.json({
      payments,
      summary,
    })
  } catch (error: any) {
    console.error("Payments list error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to fetch payments" },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
```

---

## Quick Setup Commands

```bash
# 1. Install dependencies
npm install @prisma/client prisma --legacy-peer-deps

# 2. Initialize Prisma
npx prisma init

# 3. Update schema (copy from above)

# 4. Create database
npx prisma migrate dev --name init

# 5. Generate client
npx prisma generate

# 6. Test the connection
npx prisma studio
```

This opens Prisma Studio where you can view/edit database records visually!

---

## Free Database Options

### 1. **Neon (PostgreSQL)** - Recommended
- Free tier: 3 GB storage
- Serverless PostgreSQL
- Sign up: https://neon.tech

### 2. **PlanetScale (MySQL)**
- Free tier: 10 GB storage
- Sign up: https://planetscale.com

### 3. **MongoDB Atlas**
- Free tier: 512 MB storage
- Sign up: https://www.mongodb.com/cloud/atlas

---

## Next Steps

1. Choose a database provider
2. Get connection URL
3. Add to `.env`
4. Run migrations
5. Update API routes
6. Test payment flow

Need help with any of these steps? Let me know!
