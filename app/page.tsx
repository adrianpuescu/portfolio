import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { WhatIDoSection } from "@/components/what-i-do-section"
import { SystemsSection } from "@/components/systems-section"
import { EarlierWorkSection } from "@/components/earlier-work-section"
import { ApproachSection } from "@/components/approach-section"
import { EvolutionSection } from "@/components/evolution-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatIDoSection />
        <SystemsSection />
        <EarlierWorkSection />
        <ApproachSection />
        <EvolutionSection />
      </main>
      <Footer />
    </>
  )
}
