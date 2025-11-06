import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("=== Razorpay Test Endpoint ===")

    // Test 1: Check environment variables
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    console.log("Key ID exists:", !!keyId)
    console.log("Key Secret exists:", !!keySecret)
    console.log("Key ID value:", keyId)

    if (!keyId || !keySecret) {
      return NextResponse.json({
        success: false,
        error: "API keys not found",
        keyId: !!keyId,
        keySecret: !!keySecret,
      })
    }

    // Test 2: Try to import Razorpay
    let Razorpay
    try {
      Razorpay = (await import("razorpay")).default
      console.log("Razorpay imported successfully")
    } catch (importError: any) {
      console.error("Failed to import Razorpay:", importError)
      return NextResponse.json({
        success: false,
        error: "Failed to import Razorpay",
        details: importError.message,
      })
    }

    // Test 3: Try to create instance
    let razorpay
    try {
      razorpay = new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
      })
      console.log("Razorpay instance created")
    } catch (instanceError: any) {
      console.error("Failed to create Razorpay instance:", instanceError)
      return NextResponse.json({
        success: false,
        error: "Failed to create Razorpay instance",
        details: instanceError.message,
      })
    }

    // Test 4: Try to create a test order
    try {
      const order = await razorpay.orders.create({
        amount: 50000, // ₹500 in paise
        currency: "INR",
        receipt: `test_${Date.now()}`,
      })

      console.log("Test order created:", order.id)

      return NextResponse.json({
        success: true,
        message: "All tests passed!",
        orderId: order.id,
        keyId: keyId.substring(0, 15) + "...",
      })
    } catch (orderError: any) {
      console.error("Failed to create test order:", orderError)
      return NextResponse.json({
        success: false,
        error: "Failed to create test order",
        details: orderError.message,
        description: orderError.error?.description,
      }, { status: 500 })
    }

  } catch (error: any) {
    console.error("Unexpected error:", error)
    return NextResponse.json({
      success: false,
      error: "Unexpected error",
      details: error.message,
    }, { status: 500 })
  }
}
