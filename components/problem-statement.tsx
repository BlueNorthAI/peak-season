import { AlertTriangle, TrendingDown, Package, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  {
    icon: AlertTriangle,
    title: "$1.2 Trillion Lost Annually",
    description:
      "Retailers lose over $1.2T globally to stockouts and overstocks. During BFCM, this problem intensifies with 10% out-of-stock rates on promotional items.",
    color: "text-destructive",
  },
  {
    icon: TrendingDown,
    title: "40% of Sales Lost to Stockouts",
    description:
      "When products are unavailable during peak season, you lose nearly half of all intended purchases. 20% of cart abandonments are due to stockouts.",
    color: "text-primary",
  },
  {
    icon: Package,
    title: "Excess Inventory Kills Margins",
    description:
      "Poor forecasting leads to stale inventory, accumulating fees, and selling at steep discounts—zapping profitability when you need it most.",
    color: "text-secondary",
  },
  {
    icon: Clock,
    title: "Supply Chain Blind Spots",
    description:
      "Lag in inventory updates, multi-channel allocation issues, and limited real-time visibility create fulfillment bottlenecks during your busiest season.",
    color: "text-accent",
  },
]

export function ProblemStatement() {
  return (
    <section className="bg-gradient-to-br from-muted/50 to-secondary/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Peak Season Challenges Cost Shopify Plus Merchants Millions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Black Friday, Cyber Monday, and holiday season bring massive demand surges. Without intelligent forecasting
            and real-time control towers, you're flying blind.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} className="border-primary/10 p-8 shadow-sm shadow-primary/5">
              <problem.icon className={`h-10 w-10 ${problem.color}`} />
              <h3 className="mt-4 text-xl font-semibold">{problem.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
