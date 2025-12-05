import Image from "next/image"
import { Briefcase, GraduationCap, Building2, Users } from "lucide-react"

const authorityPoints = [
  {
    icon: Briefcase,
    text: "8 years solving supply chain at McKinsey",
  },
  {
    icon: Building2,
    text: "Built forecasting systems at Blue Yonder and Oracle",
  },
  {
    icon: GraduationCap,
    text: "MIT Supply Chain Management certified",
  },
  {
    icon: Users,
    text: "Trusted by 50+ growing e-commerce brands",
  },
]

export function GuidePositioning() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Empathy Opener */}
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              We've <span className="text-highlight text-primary">Been There</span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-gray-700">
              We've seen it hundreds of times: smart operators drowning in spreadsheets, losing sleep before BFCM,
              watching competitors win orders they should have fulfilled.
            </p>
          </div>

          {/* Authority Credentials */}
          <div className="mt-16 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12">
            <h3 className="text-center text-2xl font-bold text-gray-900">Our Team's Background</h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {authorityPoints.map((point) => (
                <div key={point.text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-base font-medium text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>

            {/* Logo strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-primary/10 pt-8">
              <div className="flex h-12 items-center justify-center rounded-lg bg-white px-4 shadow-sm">
                <Image src="/mckinsey.png" alt="McKinsey & Company" width={120} height={40} className="h-8 w-auto object-contain" />
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg bg-white px-4 shadow-sm">
                <Image src="/MIT-Logo.png" alt="MIT" width={80} height={40} className="h-8 w-auto object-contain" />
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg bg-white px-4 shadow-sm">
                <Image src="/Blue_Yonder.png" alt="Blue Yonder" width={120} height={40} className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Keep focus on them */}
          <div className="mt-12 text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              We built BlueNorth because{" "}
              <span className="font-semibold text-primary">
                growing e-commerce brands deserve the same tools the giants use
              </span>
              —without the complexity or cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
