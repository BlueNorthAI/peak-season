"use client"

import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, Sparkles, Clock, AlertCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center -space-x-1">
              <div className="relative h-12 w-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                <Image src="/platforms/shopifycommerce.png" alt="Dujulu AI" width={36} height={36} className="object-contain p-1" />
              
              </div>
              <div className="relative h-12 w-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                <Image src="/platforms/bigcommerce.png" alt="BigCommerce" width={36} height={36} className="object-contain p-1" />
              </div>
              <div className="relative h-12 w-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                <Image src="/platforms/woocommerce.png" alt="WooCommerce" width={36} height={36} className="object-contain p-1" />
              </div>
              <div className="relative h-12 w-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                <Image src="/platforms/adobe-commerce.png" alt="Adobe Commerce" width={48} height={48} className="object-contain p-1" />
              </div>
            </div>
          </div>

           <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-6xl">
            Protect Your Peak Season Revenue

            <span className="text-primary">$11.5B in BFCM Sales</span> at Stake
          </h1>

          <p className="mt-8 text-balance text-center text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Supply chain experts from McKinsey, MIT, and Blue Yonder help Shopify Plus merchants eliminate stockouts and
            optimize inventory with <span className="font-semibold text-primary">ML-powered forecasting</span> and{" "}
            <span className="font-semibold text-primary">real-time control towers</span>.
          </p>

          <div className="mt-10 rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-50 to-red-50 p-6 shadow-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-1 h-6 w-6 shrink-0 text-orange-600" />
              <div>
                <p className="text-balance text-lg font-semibold leading-relaxed text-orange-900">
                  <Clock className="inline h-5 w-5 mr-2" />
                  November Implementation Deadline: Black Friday is November 28, 2025
                </p>
                <p className="mt-2 text-base text-orange-800">
                  Only 3 implementation slots remaining for pre-BFCM deployment. 2-week fast-track available.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-white px-6 py-3 shadow-sm">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="text-balance text-lg leading-relaxed">
                <span className="font-semibold text-primary">Expert team + AI monitoring</span> your operations 24/7
                throughout Nov-Dec peak season. <span className="font-semibold text-primary">Guaranteed 5X ROI</span>.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalendlyButton
              size="lg"
              className="group h-14 w-full rounded-full bg-primary px-8 text-base hover:bg-primary/90 sm:w-auto"
            >
              Schedule Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CalendlyButton>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-2 border-primary/30 bg-transparent px-8 text-base text-primary hover:bg-primary/5 sm:w-auto"
              onClick={() => {
                document.getElementById('proven-results')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Industry Results
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary">5X</div>
              <div className="mt-3 text-base text-muted-foreground">Guaranteed ROI</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-secondary">30%</div>
              <div className="mt-3 text-base text-muted-foreground">Fewer Supply Chain Errors</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-accent">$10K</div>
              <div className="mt-3 text-base text-muted-foreground">Fixed Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}