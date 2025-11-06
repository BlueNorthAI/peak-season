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
      console.log("✅ Payment verified successfully:", {
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
        package: packageName,
      })

      // Update payment in database
      try {
        await db
          .update(payments)
          .set({
            razorpayPaymentId: razorpay_payment_id,
            razorpaySignature: razorpay_signature,
            status: "CAPTURED",
          })
          .where(eq(payments.razorpayOrderId, razorpay_order_id))

        console.log("✅ Payment status updated to CAPTURED in database")
      } catch (dbError) {
        console.error("❌ Database update error:", dbError)
        // Continue even if database fails
      }

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        payment_id: razorpay_payment_id,
      })
    } else {
      // Mark as failed in database
      try {
        await db
          .update(payments)
          .set({ status: "FAILED" })
          .where(eq(payments.razorpayOrderId, razorpay_order_id))
        console.log("❌ Payment marked as FAILED in database")
      } catch (dbError) {
        console.error("Database update error:", dbError)
      }

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
