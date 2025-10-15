import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const included = [
  "Comprehensive supply chain audit and peak season readiness assessment",
  "Custom ML demand forecasting model trained on your historical data",
  "Inventory optimization simulation with scenario planning",
  "Real-time control tower dashboard with intelligent alerts",
  "Custom Shopify Plus app development and integration",
  "Automated reorder workflows and low-stock notifications",
  "Multi-location inventory allocation optimization",
  "Weekly strategy sessions throughout Nov-Dec peak season",
  "24/7 monitoring and support during BFCM weekend",
  "Post-season performance analysis and recommendations",
]

const deliverables = [
  "Week 1-2: Assessment, data integration, and model development",
  "Week 3-4: Custom Shopify app development and testing",
  "Week 5-6: Control tower deployment and team training",
  "Nov-Dec: Active monitoring, optimization, and support",
]

export function Offer() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Peak Season Success Package</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to dominate BFCM and holiday season
          </p>
        </div>

        <Card className="mx-auto mt-16 max-w-4xl border-primary/20 p-8 shadow-lg shadow-primary/5 sm:p-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">$10,000</div>
            <div className="mt-2 text-muted-foreground">Fixed price, guaranteed impact</div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold">What's Included</h3>
            <ul className="mt-6 space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="h-6 w-6 shrink-0 text-primary" />
                  <span className="text-pretty leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold">Timeline & Deliverables</h3>
            <div className="mt-6 space-y-4">
              {deliverables.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="flex items-center">
                    <span className="text-pretty leading-relaxed">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
              Schedule Your Assessment Call
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Limited to 5 merchants for Nov-Dec 2025 season</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
