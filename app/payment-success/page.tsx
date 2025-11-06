"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PaymentSuccess() {
  const searchParams = useSearchParams()
  const paymentId = searchParams.get("payment_id")
  const packageName = searchParams.get("package")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-6 py-12">
      <div className="max-w-3xl w-full">
        <Card className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border-0">
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-14 w-14 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>

            <p className="text-xl text-gray-600 mb-2">
              Thank you for choosing
            </p>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {packageName || "Peak Season Package"}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Transaction ID</p>
            <p className="text-lg font-mono font-semibold text-gray-900 break-all">
              {paymentId || "Processing..."}
            </p>
          </div>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-600 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Confirmation email sent</span> to your registered email address
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-600 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Our team will contact you within 24 hours</span> to begin your implementation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 rounded-full bg-green-600 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Implementation starts by November 15th</span> to be ready for BFCM
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
            <div className="grid gap-4 md:grid-cols-3 text-left">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                <h4 className="font-semibold text-gray-900 mb-1">Kickoff Call</h4>
                <p className="text-sm text-gray-600">Schedule your implementation kickoff within 24 hours</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <h4 className="font-semibold text-gray-900 mb-1">Assessment</h4>
                <p className="text-sm text-gray-600">Complete Peak Season Readiness Assessment</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <h4 className="font-semibold text-gray-900 mb-1">Go Live</h4>
                <p className="text-sm text-gray-600">2-week implementation, ready for BFCM</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-base" asChild>
              <Link href="/">
                Return to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-2"
              asChild
            >
              <Link href={`mailto:lavanya.bnai@gmail.com?subject=Payment Confirmation - ${paymentId}&body=Hi, I just completed payment for ${packageName}. My transaction ID is: ${paymentId}`}>
                <Download className="mr-2 h-5 w-5" />
                Get Invoice
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Questions? Contact us at{" "}
              <a href="mailto:lavanya.bnai@gmail.com" className="text-primary font-semibold hover:underline">
                lavanya.bnai@gmail.com
              </a>
              {" "}or{" "}
              <a href="tel:+919750598035" className="text-primary font-semibold hover:underline">
                +91 9750 598035
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
