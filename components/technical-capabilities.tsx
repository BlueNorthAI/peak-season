import { Brain, Cpu, Activity, Boxes } from "lucide-react"
import { Card } from "@/components/ui/card"

const capabilities = [
    {
    icon: Activity,
    title: "Digital Twin Modeling",
    tech: "Discrete Event Simulation",
    description:
      "Creates a virtual replica of your entire fulfillment operation to test peak season readiness before going live. Models orders, pickers, packing stations, conveyors, and shipping docks through discrete event simulation to validate capacity under extreme conditions.",
    results: [
      "Identifies bottlenecks before peak season",
      "Tests scenarios at 2-3X normal volume",
      "Optimizes picker and station allocation",
      "Prevents costly capacity shortfalls",
    ],
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: Boxes,
    title: "Control Tower",
    tech: "Real-Time Monitoring",
    description:
      "Unified visibility across all systems with predictive alerting, automated actions, and collaboration tools. Detects anomalies, calculates business impact, and triggers specific corrective actions.",
    results: [
      "63% reduction in 'where is my order' inquiries",
      "Issues resolved in hours versus days",
      "24-48 hour stockout warnings",
      "Cross-functional collaboration on shared data",
    ],
    color: "from-orange-600 to-red-600",
  },
  {
    icon: Brain,
    title: "ML Demand Forecasting",
    tech: "XGBoost & Prophet",
    description:
      "32-40% forecast error reduction versus traditional rolling mean methods. Handles multiple variables simultaneously including previous BFCM performance, weather forecasts, promotional calendar, and social media engagement trends.",
    results: [
      "35% reduction in stockouts during peak period",
      "23% revenue growth versus traditional forecasting",
      "45% improvement in inventory turnover",
      "78% fewer out-of-stock situations",
    ],
    color: "from-purple-600 to-indigo-600",
  },
  {
    icon: Cpu,
    title: "MILP Optimization",
    tech: "Google OR-Tools",
    description:
      "Multi-location inventory positioning that minimizes total costs (holding + ordering + fulfillment) while meeting service level targets. Solves problems with 100+ locations and 1,000+ orders in under 1 second.",
    results: [
      "15-25% reduction in fulfillment costs",
      "90%+ in-region fulfillment versus 70% baseline",
      "40% reduction in split shipments",
      "3-5% margin improvement through optimized positioning",
    ],
    color: "from-blue-600 to-cyan-600",
  }
]

export function TechnicalCapabilities() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Advanced Analytics That <span className="text-highlight text-primary">Justify Our Pricing</span>
          </h2>
          <p className="mt-6 text-balance text-xl leading-relaxed text-muted-foreground">
            Enterprise-grade supply chain optimization delivered in 2 weeks at 10% of traditional cost
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <Card key={capability.title} className="rounded-3xl border-0 bg-white p-10 shadow-2xl shadow-gray-900/10">
              <div className={`inline-flex rounded-2xl bg-gradient-to-br ${capability.color} p-4 shadow-lg w-15 h-15 items-center justify-center`}>
                <capability.icon className="h-8 w-8 text-white" />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-gray-900">{capability.title}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {capability.tech}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{capability.description}</p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Proven Results</div>
                {capability.results.map((result) => (
                  <div key={result} className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl rounded-2xl border border-primary/20 bg-white p-8 shadow-xl">
          <h3 className="text-center text-2xl font-bold text-gray-900">Why This Matters for Your Business</h3>
          <p className="mt-4 text-center text-lg text-gray-700">
            Current enterprise control tower solutions (IBM Sterling, o9 Solutions, GEP NEXXE) require 6-12 month
            implementations costing $100K-$500K. We deliver{" "}
            <span className="font-bold text-primary">
              80% of enterprise value in 10% of the time at 10% of the cost
            </span>
            —specifically designed for the 6-week holiday sprint.
          </p>
        </div>
      </div>
    </section>
  )
}
