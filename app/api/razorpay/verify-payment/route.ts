import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

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
      // Payment is verified
      // Here you can:
      // 1. Save payment details to database
      // 2. Send confirmation email
      // 3. Trigger any post-payment workflows

      console.log("Payment verified successfully:", {
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        package: packageName,
      })

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id,
      })
    } else {
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
  }
}
