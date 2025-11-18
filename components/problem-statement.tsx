import { AlertTriangle, TrendingDown, Package, Clock, DollarSign, Truck } from "lucide-react"
import { Card } from "@/components/ui/card"

const problems = [
  {
    icon: DollarSign,
    title: "Trillion Lost Globally",
    description:
      "Retailers lost $1.77 trillion in 2023 due to stockouts and overstocks. During BFCM 2024, Shopify merchants generated $11.5B with sales peaking at $4.6M per minute—yet 15-20% of potential revenue is lost to inventory mismanagement.",
    stat: "$1.77T",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: AlertTriangle,
    title: "Customer Loss from Stockouts",
    description:
      "When products are unavailable during peak season, 41% of customers leave permanently. Each percentage point of forecast error represents $20K+ in lost sales or excess inventory costs for mid-market merchants.",
    stat: "41%",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: TrendingDown,
    title: "Forecast Accuracy Crisis",
    description:
      "Merchants report doubling or tripling forecasted demand during BFCM. One subscription box company planned for 2X growth but experienced 3X demand, gaining tens of thousands of unprepared customers.",
    stat: "3X",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Package,
    title: "Multi-Location Allocation Chaos",
    description:
      "Merchants must position inventory 30-45 days in advance across fulfillment centers without knowing where demand will spike. Fashion brands face exponential SKU complexity with size/color combinations.",
    stat: "30-45d",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Truck,
    title: "Real-Time Visibility Gaps",
    description:
      "Merchants cobble together 5-10 disconnected apps with no unified control tower. During the critical 72-hour BFCM window, split-second decisions about stock reallocation lack integrated predictive analytics.",
    stat: "5-10",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "$500K Per Shipping Day",
    description:
      "Each additional shipping day before Christmas translates to over $500K in revenue for mid-market merchants. Late Black Friday (Nov 28) means 5 fewer shopping days—each representing 2-3% of holiday revenue.",
    stat: "$500K",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
]

export function ProblemStatement() {
  return (
    <section className="bg-background py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Peak Season Challenges That Cost{" "}
            <span className="text-highlight text-primary">Millions in Lost Revenue</span>
          </h2>
          <p className="mt-6 text-balance text-xl leading-relaxed text-muted-foreground">
            The 6-week holiday window generates 30-40% of annual revenue. Without predictive inventory control and
            real-time monitoring, merchants lose hundreds of thousands in preventable stockouts and fulfillment chaos.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="rounded-3xl border-0 bg-white p-8 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${problem.bgColor} p-3`}>
                    <problem.icon className={`h-6 w-6 ${problem.color}`} />
                  </div>
                  <div className={`text-3xl font-black ${problem.color}`}>{problem.stat}</div>
                </div>
                <h3 className="text-xl font-bold leading-tight">{problem.title}</h3>
                <p className="text-balance text-base leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
