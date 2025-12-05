"use client"

import { CalendlyButton } from "@/components/calendly-button"
import { ArrowRight, ClipboardCheck, Route, Moon } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Book your free audit",
    description:
      "We analyze your current inventory data and identify exactly where you're bleeding money.",
    color: "bg-primary",
  },
  {
    number: "2",
    icon: Route,
    title: "Get your custom roadmap",
    description:
      "Within 2 weeks, you'll have an AI-powered system showing precisely what to order, when, and where.",
    color: "bg-secondary",
  },
  {
    number: "3",
    icon: Moon,
    title: "Sleep better during peak season",
    description:
      "Watch stockouts drop 40%+ while cutting excess inventory 25%—guaranteed 5X ROI.",
    color: "bg-accent",
  },
]

export function ThreeStepPlan() {
  return (
    <section id="three-step-plan" className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your Path to{" "}
            <span className="text-highlight text-primary">Inventory Peace of Mind</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
            Three simple steps to transform your inventory management
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-16 hidden h-0.5 w-8 translate-x-full bg-gray-200 lg:block" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step number with icon */}
                  <div className={`relative flex h-24 w-24 items-center justify-center rounded-full ${step.color} shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-900 shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <CalendlyButton
            size="lg"
            className="group h-14 rounded-full bg-orange-500 px-8 text-base font-semibold text-white hover:bg-orange-600"
          >
            Book Your Free Inventory Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  )
}
