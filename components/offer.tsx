"use client"

import { Check, ArrowRight, Zap, Star, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { CalendlyButton } from "./calendly-button"
import { RazorpayButton } from "./razorpay-button"

const tiers = [
  {
    name: "Peak Essentials",
    price: "$4,995",
    priceINR: "₹4,19,995",
    amountINR: 419995,
    description: "Survival-focused package for merchants under $5M GMV",
    features: [
      "Basic ML demand forecasting (7-day moving average)",
      "Real-time inventory dashboard",
      "Low stock and large order alerts via email",
      "2-week implementation",
      "Email support during peak season",
      "Post-season performance report",
    ],
    cta: "Get Started",
    popular: false,
    guarantee: "10% forecast improvement or 50% refund",
  },
  {
    name: "Peak Ready",
    price: "$7,995",
    priceINR: "₹6,71,995",
    amountINR: 671995,
    description: "Most popular - Strategic consulting + custom app in 2 weeks",
    features: [
      "Advanced ML forecasting (XGBoost/Prophet)",
      "Custom e-commerce app with real-time sync",
      "Control tower dashboard with intelligent alerts",
      "Multi-location inventory optimization",
      "Peak Season Readiness Assessment",
      "Inventory Planning Playbook",
      "3 training sessions with recordings",
      "Priority support through Nov-Dec",
      "Weekly check-ins during BFCM",
      "Emergency hotline during peak days",
      "Q1 planning session ($1,500 value)",
    ],
    cta: "Secure Your Slot",
    popular: true,
    guarantee: "5X ROI within 90 days or 50% refund",
    savings: "Save $1,000 if paid in full",
  },
  {
    name: "Peak Enterprise",
    price: "$12,995",
    priceINR: "₹10,91,995",
    amountINR: 1091995,
    description: "White-glove service for merchants over $20M GMV",
    features: [
      "Everything in Peak Ready, plus:",
      "MILP optimization for inventory positioning",
      "Digital twin modeling via discrete event simulation",
      "Dedicated supply chain strategist",
      "Daily check-ins during Nov-Dec",
      "Dedicated Slack channel",
      "Real-time adjustments during BFCM",
      "Custom analytics and reporting",
      "Post-season optimization roadmap",
      "Q1 implementation support",
    ],
    cta: "Book Consultation",
    popular: false,
    guarantee: "10X ROI or full refund",
  },
]

const paymentOptions = [
  { label: "Pay in Full", amount: "$6,995", note: "Save $1,000 (Peak Ready tier)" },
  { label: "50/50 Split", amount: "$3,997 + $3,998", note: "Half now, half at delivery" },
  { label: "3 Monthly Payments", amount: "$2,798/mo", note: "Total $8,394" },
]

export function Offer() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl">
            Choose Your Peak Season Package
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600 font-medium">
            From chaos to confidence in 2 weeks. Strategic consulting + custom technology with guaranteed ROI.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative rounded-3xl border p-8 shadow-xl ${
                tier.popular
                  ? "border-primary/50 bg-white ring-2 ring-primary/20 shadow-2xl shadow-primary/20"
                  : "border-gray-200/50 bg-white/80 backdrop-blur-sm shadow-gray-900/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-bold text-white shadow-lg">
                    <Star className="mr-1 h-4 w-4 inline" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                <div className="mt-6 flex flex-col items-center justify-center gap-1">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {tier.priceINR}
                  </span>
                  <span className="text-sm text-gray-500">({tier.price} USD)</span>
                </div>
                {tier.savings && <p className="mt-2 text-sm font-semibold text-green-600">{tier.savings}</p>}
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 border border-green-200/50">
                  <p className="text-xs font-semibold text-green-900">
                    <Shield className="inline h-4 w-4 mr-1" />
                    {tier.guarantee}
                  </p>
                </div>
              </div>

              <RazorpayButton
                amount={tier.amountINR}
                packageName={tier.name}
                packageDescription={tier.description}
                size="lg"
                className={`mt-8 w-full h-14 rounded-2xl text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-blue-500/25"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                {tier.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </RazorpayButton>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-xl">
            <h3 className="text-center text-2xl font-bold text-gray-900">Flexible Payment Options</h3>
            <p className="mt-2 text-center text-gray-600">Choose the payment structure that works for your business</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {paymentOptions.map((option) => (
                <div
                  key={option.label}
                  className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center"
                >
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider">{option.label}</div>
                  <div className="mt-2 text-2xl font-black text-gray-900">{option.amount}</div>
                  <div className="mt-2 text-xs text-gray-600">{option.note}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-50 to-red-50 p-8 text-center shadow-xl">
          <Zap className="mx-auto h-12 w-12 text-orange-600" />
          <p className="mt-4 text-2xl font-bold text-orange-900">November-Only Pricing - 3 Slots Remaining</p>
          <p className="mt-3 text-lg text-orange-800">
            Implementation must start by November 15th to be ready for BFCM. Rates increase $2,000 after November 20th.
          </p>
          <CalendlyButton
            size="lg"
            className="mt-6 h-14 rounded-2xl bg-orange-600 px-12 text-lg font-bold hover:bg-orange-700 shadow-xl"
          >
            Book Your November Implementation Slot
            <ArrowRight className="ml-3 h-6 w-6" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}