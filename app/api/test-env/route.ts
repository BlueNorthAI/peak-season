import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    razorpayKeyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
      ? `✓ Found (${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID.substring(0, 15)}...)`
      : "✗ Missing",
    razorpaySecret: process.env.RAZORPAY_KEY_SECRET
      ? "✓ Found (hidden for security)"
      : "✗ Missing",
    nodeEnv: process.env.NODE_ENV,
  })
}
