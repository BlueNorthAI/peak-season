import { CheckCircle, Quote } from "lucide-react"

const transformations = [
  "Knowing—not hoping—that your bestsellers will stay in stock through Cyber Weekend",
  "Freeing up 25% of the cash trapped in slow-moving inventory",
  "Your ops team focusing on growth instead of firefighting",
  "Sleeping better, spending less time on inventory decisions",
  "Confidently scaling without the fear of stockouts or overstock disasters",
]

const testimonial = {
  quote: "Before BlueNorth, I dreaded every peak season. Now I actually look forward to it.",
  author: "Sarah Chen",
  company: "Director of Operations, Growing DTC Brand",
}

export function SuccessTransformation() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            What Life Looks Like{" "}
            <span className="text-highlight text-primary">After Inventory Chaos</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-xl leading-relaxed text-gray-700">
            Imagine checking your dashboard and{" "}
            <span className="font-semibold text-primary">knowing—not hoping</span>—that your bestsellers will stay
            in stock through Cyber Weekend. Imagine freeing up 25% of the cash trapped in slow-moving inventory.
            Imagine your ops team focusing on growth instead of firefighting.
          </p>
        </div>

        {/* Transformation checklist */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-primary/20 bg-white p-8 shadow-lg">
            <h3 className="text-center text-xl font-bold text-gray-900">Our Merchants Report:</h3>
            <ul className="mt-6 space-y-4">
              {transformations.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl bg-primary p-8 text-white shadow-xl">
            <Quote className="h-10 w-10 opacity-50" />
            <blockquote className="mt-4 text-xl font-medium leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm opacity-80">{testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
