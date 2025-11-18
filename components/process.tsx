import { FileSearch, Code, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    title: "Discovery & Assessment",
    description:
      "Deep dive into your current supply chain, historical data, pain points, and peak season goals. We audit your e-commerce setup and identify optimization opportunities.",
    duration: "1-2 weeks",
    color: "bg-primary",
  },
  {
    icon: Code,
    title: "Model Development & App Build",
    description:
      "Build custom ML forecasting models trained on your data. Develop and integrate your custom e-commerce app with real-time data sync and automated workflows.",
    duration: "2-3 weeks",
    color: "bg-secondary",
  },
  {
    icon: Rocket,
    title: "Deployment & Training",
    description:
      "Deploy control tower dashboard, configure alerts, and train your team. Run simulations and scenario planning to prepare for various demand scenarios.",
    duration: "1-2 weeks",
    color: "bg-accent",
  },
  {
    icon: LineChart,
    title: "Active Monitoring & Optimization",
    description:
      "Real-time monitoring throughout Nov-Dec peak season. Weekly strategy sessions, continuous model refinement, and 24/7 support during critical periods.",
    duration: "Nov-Dec 2025",
    color: "bg-primary/80",
  },
]

export function Process() {
  return (
    <section className="bg-gradient-to-br from-muted/50 to-secondary/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">How We Work Together</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A proven 6-8 week process to get you peak-season ready
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.color}`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-4 h-full w-px bg-gradient-to-b from-primary/50 to-secondary/20" />
                  )}
                </div>
                <div className="pb-12">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
