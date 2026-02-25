import { Navbar } from "@/components/fai/navbar"
import { HowItWorksHero } from "@/components/fai/how-it-works/hero"
import { BeatWork } from "@/components/fai/how-it-works/beat-work"
import { BeatPersist } from "@/components/fai/how-it-works/beat-persist"
import { BeatCompound } from "@/components/fai/how-it-works/beat-compound"
import { HowItWorksCta } from "@/components/fai/how-it-works/cta"
import { Footer } from "@/components/fai/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "^AI \u2014 How It Works",
  description:
    "Three things happen every time you use ^AI: Work, Persist, Compound. Together, they change what AI can be for you.",
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <HowItWorksHero />
      <BeatWork />
      <BeatPersist />
      <BeatCompound />
      <HowItWorksCta />
      <Footer />
    </main>
  )
}
