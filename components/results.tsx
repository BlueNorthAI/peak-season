import { TrendingUp, Package, DollarSign, Clock, Users, BarChart } from "lucide-react"
import { Card } from "@/components/ui/card"

const results = [
  {
    company: "Caden Lane",
    metric: "132% Revenue Growth",
    description:
      "Reached 8-figure revenue status through accurate demand forecasting that eliminated guesswork for new product launches.",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    company: "Leading Fashion Retailer",
    metric: "4% → 1% Stockouts",
    description:
      "Decreased stockouts from 4% to 1% in just 2 months with predictive analytics, unlocking hundreds of thousands in additional annual revenue.",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    company: "Personal Care Brand",
    metric: "30 Hours Saved Monthly",
    description:
      "Advanced forecasting technology saved 30 hours per month in procurement time with 20-40% improvement in accuracy.",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    company: "Beachwaver Co.",
    metric: "$2M+ Additional Revenue",
    description:
      "Strategic peak season fulfillment planning captured 4-5 additional shipping days, each worth $500K+, totaling over $2M in revenue.",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    company: "TB12",
    metric: "25% Cost Reduction",
    description:
      "Optimized fulfillment operations reduced costs by 25% while making the holiday season completely manageable.",
    icon: BarChart,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    company: "Fauve & Co",
    metric: "10,000% ROI",
    description:
      "Personalized automated marketing flows achieved 100X return with 1,195 average monthly orders through data-driven customer engagement.",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

const expectedResults = [
  {
    metric: "$1M+",
    label: "Revenue Protection",
    description: "Through prevented stockouts and better inventory positioning",
  },
  {
    metric: "$200K-$300K",
    label: "Cost Savings",
    description: "From optimized fulfillment and reduced emergency shipping",
  },
  { metric: "95%+", label: "On-Time Delivery", description: "Versus 85% industry average during peak season" },
  {
    metric: "125-335%",
    label: "First-Year ROI",
    description: "Including implementation costs, 435-1,180% in subsequent years",
  },
]

export function Results() {
  return (
    <section id="proven-results" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Proven Results from the <span className="text-highlight text-primary">e-commerce ecosystem</span>
          </h2>
          <p className="mt-6 text-balance text-xl leading-relaxed text-muted-foreground">
            Real merchants achieving extraordinary outcomes with supply chain optimization and predictive analytics
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Card key={result.company} className="rounded-3xl border-0 bg-white p-8 shadow-lg shadow-primary/5">
              <div className={`inline-flex rounded-2xl ${result.bgColor} p-4 w-15 h-15 items-center justify-center`}>
                <result.icon className={`h-8 w-8 ${result.color}`} />
              </div>
              <div className="mt-6">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{result.company}</div>
                <h3 className="mt-2 text-3xl font-black text-gray-900">{result.metric}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{result.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-12">
            <h3 className="text-center text-3xl font-bold text-gray-900">
              Expected Results for $20M Holiday Quarter Merchant
            </h3>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {expectedResults.map((item) => (
                <div key={item.label} className="text-center w-full">
                  <div className="text-3xl font-black text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, rgba(8, 65, 29, 1) 0%, rgba(36, 139, 47, 1) 70%, rgba(235, 174, 45, 1) 100%)'}}>
                    {item.metric}
                  </div>
                  <div className="mt-3 text-lg font-bold text-gray-900">{item.label}</div>
                  <div className="mt-2 text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
