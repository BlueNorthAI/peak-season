import { Card } from "@/components/ui/card"
import { CalendlyButton } from "@/components/calendly-button"
import { Calendar, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/20">
          <div className="px-6 py-16 sm:px-12 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Don't Leave Money on the Table This Peak Season
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90">
                With only 5 spots available for Nov-Dec 2025, we need to start by mid-September to ensure your systems
                are ready for BFCM. Every day of delay costs you potential revenue.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CalendlyButton
                  size="lg"
                  variant="secondary"
                  className="group w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </CalendlyButton>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 text-sm text-white/90 sm:flex-row sm:justify-center">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>30-minute consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Custom ROI projection</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
