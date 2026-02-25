import { Navbar } from "@/components/fai/navbar"
import { Hero } from "@/components/fai/hero"
import { ShiftSection } from "@/components/fai/shift-section"
import { OutcomesSection } from "@/components/fai/outcomes-section"
import { HowSection } from "@/components/fai/how-section"
import { DeRiskSection } from "@/components/fai/derisk-section"
import { CtaSection } from "@/components/fai/cta-section"
import { Footer } from "@/components/fai/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <ShiftSection />
      <OutcomesSection />
      <HowSection />
      <DeRiskSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
