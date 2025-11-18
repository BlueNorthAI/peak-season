import { Brain, BarChart3, Bell, Zap, Users, Network } from "lucide-react"

const capabilities = [
   {
    icon: Network,
    title: "Digital Twin Simulation",
    description:
      "Create a virtual replica of your entire supply chain to test scenarios, predict bottlenecks, and optimize decisions before implementation. Run what-if analyses for peak season planning.",
    color: "bg-gradient-to-br from-teal-600 to-cyan-600",
  },
  {
    icon: Brain,
    title: "ML-Powered Demand Forecasting",
    description:
      "Advanced machine learning models analyze historical data, seasonality, trends, and external factors to predict demand with unprecedented accuracy.",
    color: "bg-gradient-to-br from-purple-600 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Inventory Optimization Engine",
    description:
      "Simulation and optimization models determine optimal stock levels across all SKUs and locations. Minimize holding costs while maximizing service levels.",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
  },
  {
    icon: Bell,
    title: "Real-Time Control Tower",
    description:
      "Intelligent alert system monitors inventory levels, service levels, procurement needs, and supply chain KPIs. Get actionable recommendations before problems become crises.",
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Custom e-commerce app Integration",
    description:
      "Native e-commerce app seamlessly integrated with your store. Real-time inventory sync, automated reorder workflows, and custom dashboards.",
    color: "bg-gradient-to-br from-orange-600 to-red-600",
  },
  {
    icon: Users,
    title: "Expert Team + AI Monitoring",
    description:
      "Our supply chain experts combined with AI-powered systems monitor your operations in real-time throughout peak season. Human expertise meets machine intelligence.",
    color: "bg-gradient-to-br from-pink-600 to-purple-600",
  },
 
]

export function Solution() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-6xl lg:text-7xl">
            How Can I{" "}
            <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(90deg, rgba(8, 65, 29, 1) 0%, rgba(36, 139, 47, 1) 70%, rgba(235, 174, 45, 1) 100%)'}}>
              Help You?
            </span>
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600 font-medium">
            Combining deep supply chain expertise with cutting-edge ML models and native e-commerce development
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="group rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-10 shadow-xl shadow-gray-900/10 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-300 hover:scale-[1.02]">
              <div className={`inline-flex rounded-2xl ${capability.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <capability.icon className="h-8 w-8 text-white font-bold" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-gray-900">{capability.title}</h3>
              <p className="mt-4 text-lg leading-7 text-gray-700 font-medium">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}