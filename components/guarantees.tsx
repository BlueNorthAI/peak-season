import { Shield, Target, TrendingUp, Award, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const guarantees = [
  {
    icon: Target,
    title: "5X ROI Guarantee",
    description:
      "We guarantee at least 5X return on your investment through reduced stockouts, optimized inventory levels, and increased peak season revenue. If we don't achieve 3 of 4 guaranteed outcomes by January 15, 2026, we refund 50% of your investment.",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "10% Forecast Accuracy Improvement",
    description:
      "Our ML models will improve your demand forecasting accuracy by at least 10% compared to your current methods. Conservative guarantee given that ML models typically deliver 32-40% error reduction.",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "22% Lower Inventory Costs",
    description:
      "AI-powered demand forecasting cuts inventory costs by up to 25% while boosting customer satisfaction by 30%. We guarantee at least 22% reduction in carrying costs while maintaining service levels.",
    color: "bg-accent",
  },
  {
    icon: Award,
    title: "99%+ Availability on Top SKUs",
    description:
      "Your top 20% revenue-generating SKUs will maintain 99%+ availability throughout BFCM and holiday season with our real-time monitoring, predictive alerts, and automated reordering.",
    color: "bg-primary/80",
  },
  {
    icon: Clock,
    title: "24/7 Expert Monitoring",
    description:
      "Supply chain experts from McKinsey, MIT, and Blue Yonder backed by AI systems actively monitor your operations throughout November and December, with dedicated support during critical BFCM weekend.",
    color: "bg-secondary/80",
  },
]

export function Guarantees() {
  return (
    <section id="guarantees" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Performance Guarantees with <br />
            <span className="text-highlight text-primary">Money-Back Protection</span>
          </h2> 
          <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground">
            We don't just promise results—we guarantee them with measurable KPIs backed by industry research and our
            track record
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

        {/* Removed redundant risk-free commitment section as it's now covered in the guarantees descriptions */}
      </div>
    </section>
  )
}
