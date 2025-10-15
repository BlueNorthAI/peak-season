import { AlertTriangle, TrendingDown, Package, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  {
    icon: AlertTriangle,
    title: "$1.2 Trillion Lost Annually",
    description:
      "Retailers lose over $1.2T globally to stockouts and overstocks. During BFCM, this problem intensifies with 10% out-of-stock rates on promotional items.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: TrendingDown,
    title: "40% of Sales Lost to Stockouts",
    description:
      "When products are unavailable during peak season, you lose nearly half of all intended purchases. 20% of cart abandonments are due to stockouts.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "Excess Inventory Kills Margins",
    description:
      "Poor forecasting leads to stale inventory, accumulating fees, and selling at steep discounts—zapping profitability when you need it most.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Clock,
    title: "Supply Chain Blind Spots",
    description:
      "Lag in inventory updates, multi-channel allocation issues, and limited real-time visibility create fulfillment bottlenecks during your busiest season.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function ProblemStatement() {
  return (
    <section className="bg-background py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Peak Season Challenges Cost <span className="text-highlight text-primary">Millions</span>
          </h2>
          <p className="mt-6 text-balance text-xl leading-relaxed text-muted-foreground">
            Black Friday, Cyber Monday, and holiday season bring massive demand surges. Without intelligent forecasting
            and real-time control towers, you're flying blind.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} className="rounded-3xl border-0 bg-white p-10 shadow-lg shadow-primary/5">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${problem.bgColor} p-3`}>
                    <problem.icon className={`h-6 w-6 ${problem.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{problem.title}</h3>
                </div>
                <p className="text-balance text-lg leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
