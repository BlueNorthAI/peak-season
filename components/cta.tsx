import { Card } from "@/components/ui/card"
import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, Shield, Clock, BarChart } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-accent shadow-2xl">
          <div className="px-6 py-16 sm:px-12 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Stop Guessing and Start Growing?
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-white/90">
                Book your free inventory audit and discover exactly where you're leaving money on the table.
                Our experts will analyze your data and show you the path to inventory peace of mind.
              </p>

              <div className="mt-10">
                <CalendlyButton
                  size="lg"
                  className="group h-16 rounded-full bg-orange-500 px-10 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all"
                >
                  Book Your Free Inventory Audit
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CalendlyButton>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="flex flex-col items-center gap-2 text-white/90">
                  <Clock className="h-6 w-6" />
                  <span className="text-sm font-medium">30-minute consultation</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-white/90">
                  <BarChart className="h-6 w-6" />
                  <span className="text-sm font-medium">Custom ROI projection</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-white/90">
                  <Shield className="h-6 w-6" />
                  <span className="text-sm font-medium">5X ROI Guaranteed</span>
                </div>
              </div>

              <p className="mt-8 text-sm text-white/70">
                Limited availability—we only take on 5 new clients per quarter to ensure exceptional results.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
