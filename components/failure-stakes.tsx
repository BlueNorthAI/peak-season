"use client"

import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, AlertTriangle } from "lucide-react"

export function FailureStakes() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400">
            <AlertTriangle className="h-4 w-4" />
            The Stakes Are Real
          </div>

          <h2 className="mt-8 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Real Cost of "Good Enough"
            <br />
            <span className="text-red-400">Inventory Management</span>
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Every stockout isn't just a lost sale—it's a{" "}
              <span className="font-semibold text-white">customer who may never come back</span>.
            </p>
            <p>
              Every dollar tied up in excess inventory is a{" "}
              <span className="font-semibold text-white">dollar you can't spend on growth</span>.
            </p>
            <p>
              Every hour your team spends reconciling spreadsheets is an{" "}
              <span className="font-semibold text-white">hour not spent on strategy</span>.
            </p>
          </div>

          {/* The big number */}
          <div className="mt-12 rounded-2xl border border-red-500/30 bg-red-500/10 p-8">
            <div className="text-5xl font-black text-red-400 sm:text-6xl">$11.5B</div>
            <p className="mt-4 text-lg text-gray-300">
              Shopify merchants lost an estimated <span className="font-semibold text-white">$11.5 billion</span> during
              BFCM 2024 to inventory mismanagement.
            </p>
            <p className="mt-2 text-xl font-semibold text-white">How much of that was yours?</p>
          </div>

          {/* Hope message */}
          <div className="mt-12">
            <p className="text-2xl font-semibold text-primary">It doesn't have to be this way.</p>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <CalendlyButton
              size="lg"
              className="group h-14 rounded-full bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600"
            >
              Book Your Free Inventory Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  )
}
