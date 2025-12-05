"use client"

import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Platform logos */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center -space-x-1">
              <div className="relative h-12 w-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden flex items-center justify-center">
                <Image src="/platforms/shopifycommerce.png" alt="Shopify" width={36} height={36} className="object-contain p-1" />
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

          {/* Main Headline */}
          <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-highlight text-primary">Stop Losing Sales to Stockouts.</span>
            <br />
            Know Exactly What Inventory to Have, Where.
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl">
            E-commerce merchants doing $5M-$100M use our AI-powered control tower to eliminate guesswork and{" "}
            <span className="font-semibold text-primary">protect peak season revenue.</span>
          </p>

          {/* Supporting line with social proof */}
          <div className="mt-8 rounded-2xl border border-primary/20 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-center text-lg leading-relaxed">
                Join <span className="font-bold text-primary">50+ brands</span> who've cut stockouts 40% and reduced excess inventory 25%—
                <span className="font-bold text-primary">guaranteed 5X ROI or your money back.</span>
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CalendlyButton
              size="lg"
              className="group h-14 w-full rounded-full bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600 sm:w-auto"
            >
              Book Your Free Inventory Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </CalendlyButton>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-2 border-primary bg-transparent px-8 text-base font-semibold text-primary hover:bg-primary/5 sm:w-auto"
              onClick={() => {
                document.getElementById('three-step-plan')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div>

          {/* Key metrics */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary sm:text-6xl">40%</div>
              <div className="mt-2 text-base text-muted-foreground">Stockout Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary sm:text-6xl">25%</div>
              <div className="mt-2 text-base text-muted-foreground">Less Excess Inventory</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent sm:text-6xl">5X</div>
              <div className="mt-2 text-base text-muted-foreground">Guaranteed ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
