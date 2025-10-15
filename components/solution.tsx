import { Brain, BarChart3, Bell, Zap, Users } from "lucide-react"

const capabilities = [
  {
    icon: Brain,
    title: "ML-Powered Demand Forecasting",
    description:
      "Advanced machine learning models analyze historical data, seasonality, trends, and external factors to predict demand with unprecedented accuracy. Reduce forecasting errors by 30-50%.",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "Inventory Optimization Engine",
    description:
      "Simulation and optimization models determine optimal stock levels across all SKUs and locations. Minimize holding costs while maximizing service levels and revenue.",
    color: "bg-secondary",
  },
  {
    icon: Bell,
    title: "Real-Time Control Tower",
    description:
      "Intelligent alert system monitors inventory levels, service levels, procurement needs, and supply chain KPIs. Get actionable recommendations before problems become crises.",
    color: "bg-accent",
  },
  {
    icon: Zap,
    title: "Custom Shopify Plus Integration",
    description:
      "Native Shopify Plus app seamlessly integrated with your store. Real-time inventory sync, automated reorder workflows, and custom dashboards built specifically for your peak season operations.",
    color: "bg-primary/80",
  },
  {
    icon: Users,
    title: "Expert Team + AI Monitoring",
    description:
      "Our supply chain experts combined with AI-powered systems monitor your operations in real-time throughout peak season. Human expertise meets machine intelligence for proactive issue resolution.",
    color: "bg-secondary/80",
  },
]

export function Solution() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise-Grade Supply Chain Intelligence
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Combining deep supply chain expertise with cutting-edge ML models and native Shopify Plus development
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title} className="flex gap-6">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${capability.color}`}>
                <capability.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
