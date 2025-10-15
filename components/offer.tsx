import { Check, ArrowRight } from "lucide-react"
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
  { phase: "Week 1-2", task: "Assessment, data integration, and model development" },
  { phase: "Week 3-4", task: "Custom Shopify app development and testing" },
  { phase: "Week 5-6", task: "Control tower deployment and team training" },
  { phase: "Nov-Dec", task: "Active monitoring, optimization, and support" },
]

export function Offer() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl">
            Peak Season Success Package
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600 font-medium">
            Everything you need to dominate BFCM and holiday season. Enjoy 🎉
          </p>
        </div>

        <Card className="mx-auto mt-16 max-w-5xl rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-2xl shadow-gray-900/10 sm:p-12">
          <div className="text-center">
            <div className="inline-flex items-baseline gap-3">
              <span className="font-display text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">$10,000</span>
            </div>
            <div className="mt-4 text-xl font-semibold text-gray-700">Fixed price, guaranteed impact</div>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-10">What's Included</h3>
            <ul className="grid gap-6 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                    <Check className="h-5 w-5 text-white font-bold" />
                  </div>
                  <span className="text-lg leading-7 text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-10">Timeline & Deliverables</h3>
            <div className="space-y-8">
              {deliverables.map((item, index) => (
                <div key={item.phase} className="flex gap-6 items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-xl font-black text-white shadow-xl shadow-blue-500/25">
                    {index + 1}
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wider">{item.phase}</div>
                    <div className="mt-2 text-xl leading-7 text-gray-800 font-semibold">{item.task}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="group h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-12 text-lg font-bold hover:from-blue-700 hover:to-purple-700 shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
              Schedule Your Assessment Call
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Button>
            <p className="mt-8 text-lg font-semibold text-gray-600">Limited to 5 merchants for Nov-Dec 2025 season</p>
          </div>
        </Card>
      </div>
    </section>
  )
}