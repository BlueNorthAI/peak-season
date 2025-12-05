import { Hero } from "@/components/hero"
import { ProblemAgitation } from "@/components/problem-agitation"
import { GuidePositioning } from "@/components/guide-positioning"
import { ThreeStepPlan } from "@/components/three-step-plan"
import { Solution } from "@/components/solution"
import { TechnicalCapabilities } from "@/components/technical-capabilities"
import { SuccessTransformation } from "@/components/success-transformation"
import { Results } from "@/components/results"
import { FailureStakes } from "@/components/failure-stakes"
import { Guarantees } from "@/components/guarantees"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero - Character enters the story */}
      <Hero />

      {/* 2. Problem/Agitation - Name the villain, address all problem levels */}
      <ProblemAgitation />

      {/* 3. Guide Positioning - Empathy + Authority */}
      <GuidePositioning />

      {/* 4. The Plan - Clear 3-step path */}
      <ThreeStepPlan />

      {/* 5. Solution - How we help (capabilities) */}
      <Solution />

      {/* 6. Technical Deep Dive */}
      <TechnicalCapabilities />

      {/* 7. Success - Paint the "after" picture */}
      <SuccessTransformation />

      {/* 8. Social Proof - Results from the ecosystem */}
      <Results />

      {/* 9. Failure/Stakes - What happens if they don't act */}
      <FailureStakes />

      {/* 10. Guarantees - Remove risk */}
      <Guarantees />

      {/* 11. Final CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
