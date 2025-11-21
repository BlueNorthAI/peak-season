"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Loader2 } from "lucide-react"

interface RazorpayButtonProps {
  amount: number // Amount in rupees
  packageName: string
  packageDescription: string
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

// Extend Window interface to include Razorpay
declare global {
  interface Window {
    Razorpay: any
  }
}

export function RazorpayButton({
  amount,
  packageName,
  packageDescription,
  children,
  className,
  size = "default",
}: RazorpayButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      console.log("Starting payment process for:", packageName, "Amount:", amount)

      // Create order on your backend
      const response = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          packageName,
          packageDescription,
        }),
      })

      console.log("API Response status:", response.status)

      let orderData
      try {
        orderData = await response.json()
        console.log("Order data received:", orderData)
      } catch (jsonError) {
        console.error("Failed to parse response as JSON:", jsonError)
        throw new Error("Invalid response from server. Please check server logs.")
      }

      if (!response.ok) {
        console.error("Order creation failed:", orderData)
        const errorMessage = orderData.error || orderData.message || "Failed to create order"
        alert(`Payment Error: ${errorMessage}\n\nPlease check:\n1. Server is running\n2. Check browser console (F12)\n3. Check server terminal for errors`)
        throw new Error(errorMessage)
      }

      // Get Razorpay Key ID
      const razorpayKeyId = "rzp_test_RcONAVccpUjfNr"

      if (!razorpayKeyId) {
        throw new Error("Razorpay Key ID not configured")
      }

      console.log("Using Razorpay Key ID:", razorpayKeyId)

      // Configure Razorpay options
      const options = {
        key: razorpayKeyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Supply Chain Guru",
        description: packageDescription,
        order_id: orderData.id,
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#3b82f6", // Primary blue color
        },
        handler: function (response: any) {
          // Payment successful
          handlePaymentSuccess(response)
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false)
          },
        },
      }

      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const script = document.createElement("script")
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        script.async = true
        script.onload = () => {
          const rzp = new window.Razorpay(options)
          rzp.open()
        }
        document.body.appendChild(script)
      } else {
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    } catch (error: any) {
      console.error("Payment error:", error)
      const errorMessage = error.message || "Failed to initiate payment"
      alert(`Payment Error: ${errorMessage}\n\nPlease:\n1. Ensure you're running dev server (npm run dev)\n2. Check browser console (F12) for details\n3. Try refreshing the page`)
      setIsLoading(false)
    }
  }

  const handlePaymentSuccess = async (response: any) => {
    try {
      // Verify payment on backend
      const verifyResponse = await fetch("/api/razorpay/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          packageName,
        }),
      })

      const verifyData = await verifyResponse.json()

      if (verifyData.success) {
        // Redirect to success page or show success message
        window.location.href = `/payment-success?payment_id=${response.razorpay_payment_id}&package=${encodeURIComponent(packageName)}`
      } else {
        alert("Payment verification failed. Please contact support.")
      }
    } catch (error) {
      console.error("Verification error:", error)
      alert("Payment verification failed. Please contact support.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      size={size}
      className={className}
      onClick={handlePayment}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
