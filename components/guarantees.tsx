import { Shield, Target, TrendingUp, Award, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const guarantees = [
  {
    icon: Target,
    title: "5X ROI Guarantee",
    description:
      "We guarantee at least 5X return on your $10K investment through reduced stockouts, optimized inventory levels, and increased peak season revenue. If we don't deliver, we refund 50% of your investment.",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "30% Forecasting Improvement",
    description:
      "Our ML models will improve your demand forecasting accuracy by at least 30% compared to your current methods, reducing both stockouts and excess inventory.",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "22% Lower Inventory Costs",
    description:
      "Optimization models will reduce your inventory carrying costs by 22% while maintaining or improving service levels—backed by industry benchmarks and our track record.",
    color: "bg-accent",
  },
  {
    icon: Award,
    title: "Zero Stockouts on Top SKUs",
    description:
      "Your top 20% revenue-generating SKUs will maintain 99%+ availability throughout BFCM and holiday season with our real-time monitoring and automated reordering.",
    color: "bg-primary/80",
  },
  {
    icon: Clock,
    title: "24/7 Expert Monitoring",
    description:
      "Our supply chain experts backed by AI systems actively monitor your operations throughout November and December, with dedicated support during critical BFCM weekend.",
    color: "bg-secondary/80",
  },
]

export function Guarantees() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Performance Guarantees</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We don't just promise results—we guarantee them with measurable KPIs and money-back protection
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((guarantee) => (
            <Card key={guarantee.title} className="border-primary/10 p-8 shadow-sm shadow-primary/5">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${guarantee.color}`}>
                <guarantee.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{guarantee.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{guarantee.description}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center shadow-sm shadow-primary/5">
          <p className="text-pretty text-lg leading-relaxed">
            <strong className="text-primary">Risk-Free Commitment:</strong> If we don't achieve at least 3 of these 4
            guaranteed outcomes by January 15, 2026, we'll refund 50% of your investment. Your success is our success.
          </p>
        </div>
      </div>
    </section>
  )
}
