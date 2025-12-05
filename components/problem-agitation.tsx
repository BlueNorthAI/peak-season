import { AlertTriangle, Brain, Heart } from "lucide-react"

export function ProblemAgitation() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Villain Personification */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            The <span className="text-highlight text-red-600">Silent Growth Killer</span> in Your Business
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-gray-700">
            Spreadsheet chaos and gut-feel planning worked when you had 50 SKUs. At{" "}
            <span className="font-semibold">$5M+ revenue with thousands of SKUs across multiple channels</span>,
            they're silently killing your growth.
          </p>
        </div>

        {/* Three Problem Levels */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {/* External Problem */}
          <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
              <AlertTriangle className="h-7 w-7 text-red-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">The Visible Chaos</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Your inventory counts never match reality. Bestsellers stockout while slow-movers collect dust.
              <span className="font-semibold text-red-600"> Reordering feels like gambling.</span>
            </p>
          </div>

          {/* Internal Problem */}
          <div className="rounded-2xl border border-orange-200 bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
              <Brain className="h-7 w-7 text-orange-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">The Hidden Toll</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              You dread peak season. You're exhausted from firefighting. You're embarrassed when customers see
              "out of stock" on your top products—
              <span className="font-semibold text-orange-600">and you know they're going to your competitors.</span>
            </p>
          </div>

          {/* Philosophical Problem */}
          <div className="rounded-2xl border border-primary/20 bg-white p-8 shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">The Unfair Trade-off</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              You shouldn't have to choose between having enough inventory and preserving your cash flow.
              <span className="font-semibold text-primary"> Growing brands deserve enterprise-grade planning without the enterprise price tag.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
