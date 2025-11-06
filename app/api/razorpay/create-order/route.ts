import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { payments } from "@/lib/db/schema"

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

    console.log("Razorpay API Keys loaded successfully")
    console.log("Key ID:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)

    // Dynamically import Razorpay
    const Razorpay = (await import("razorpay")).default

    // Initialize Razorpay instance with keys
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    })

    console.log("Razorpay instance created successfully")

    const { amount, packageName, packageDescription } = await request.json()

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
    try {
      await db.insert(payments).values({
        razorpayOrderId: order.id,
        packageName,
        packageDescription,
        amount: order.amount,
        currency: order.currency,
        status: "CREATED",
        notes: { packageName, packageDescription },
      })
      console.log("✅ Payment saved to database")
    } catch (dbError) {
      console.error("❌ Database error (continuing):", dbError)
      // Continue even if database fails - don't block payment
    }

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
  }
}
