import { Hero } from "@/components/hero"
import { ProblemStatement } from "@/components/problem-statement"
import { Credentials } from "@/components/credentials"
import { Solution } from "@/components/solution"
import { TechnicalCapabilities } from "@/components/technical-capabilities"
import { Results } from "@/components/results"
// import { Offer } from "@/components/offer"
import { Guarantees } from "@/components/guarantees"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Credentials />
      <Solution />
      <TechnicalCapabilities />
      <Results />
      {/* <Offer /> */}
      <Guarantees />
      {/* <Process /> */}
      <CTA />
      <Footer />
    </main>
  )
}
