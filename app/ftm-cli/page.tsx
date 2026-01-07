import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, CheckCircle2, Shield, Zap, Eye, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FtmCliDiagram from "@/components/FtmCliDiagram" // Assuming FtmCliDiagram is imported from this path

export default function FtmCliPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative h-10 w-10">
              <Image src="/images/thinky-white.png" alt="Fathym" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-[#00FFFF]">Fathym</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/everything-as-code"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-[#00FFFF]"
            >
              Everything as Code
            </Link>
            <Link href="/synaptic" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#FF00FF]">
              Synaptic
            </Link>
            <Link
              href="/ftm-cli"
              className="text-sm font-medium text-[#FFFF00] transition-colors hover:text-[#FFFF00]/80"
            >
              FTM CLI
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#CA8A04]/20 via-black to-[#7C3AED]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFFF00]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FF00FF]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          {/* Main Heading */}
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
              FTM CLI
            </h2>
            <p className="mt-4 text-2xl font-medium text-[#FFFF00] text-balance sm:text-3xl">
              The command interface for stewarding AI-built systems
            </p>
            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-relaxed text-pretty">
              AI accelerates how software is created. The FTM CLI governs how software is changed.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-white font-medium">
              FTM is the primary human–AI interface to the Everything as Code operating model. It is where system intent
              is defined, changes are proposed, reviewed, and applied, and where AI operates under explicit control.
            </p>
          </div>
        </div>
      </section>

      {/* CLI Stage Gates and Governance Layer Diagram Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12 max-w-4xl">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">FTM CLI governs AI-driven change</h3>
            <p className="mt-4 text-lg text-gray-300">
              FTM CLI implements a stage-gated workflow where every change — AI-proposed or human-initiated —passes through explicit approval gates before execution.
            </p>
          </div>
          <FtmCliDiagram />
        </div>
      </section>

      {/* Why FTM Matters Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why a CLI still matters in the age of AI
            </h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Modern AI tools can generate applications, services, and workflows in minutes. What they cannot do safely
              is decide <span className="text-white font-semibold">how a system should change</span>.
            </p>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Production software still requires explicit intent, deterministic guarantees, reviewable change, and
              traceability over time.
            </p>
          </div>
        </div>
      </section>

      {/* What FTM Does Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">What the FTM CLI does</h3>
            <p className="mt-6 text-xl font-semibold text-[#FFFF00]">
              FTM allows teams to author, inspect, evolve, and govern Everything as Code systems.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FFFF00]/10 p-3">
                <Eye className="h-6 w-6 text-[#FFFF00]" />
              </div>
              <h4 className="text-xl font-bold text-white">Define system intent</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Describe applications, runtimes, environments, identity, and AI workflows as a single declarative system
                model.
              </p>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Validate and analyze change</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Understand what a proposed change will affect before it is applied — across runtimes, tenants, and
                environments.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Lock className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Stage and gate evolution</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Move systems through explicit lifecycle phases where human approval is required and enforced.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FFFF00]/10 p-3">
                <Zap className="h-6 w-6 text-[#FFFF00]" />
              </div>
              <h4 className="text-xl font-bold text-white">Collaborate with AI safely</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Allow AI to propose system changes without granting it unchecked authority.
              </p>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <Shield className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Maintain provenance and auditability</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Track who changed what, when, why — whether human or AI initiated.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Terminal className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Command-line control surface</h4>
              <p className="mt-4 text-gray-300 leading-relaxed">
                The enforcement mechanism for system-level contracts that all components operate within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It's Not Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Not a DevOps tool. Not a chatbot.</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              FTM does not replace cloud CLIs, CI/CD pipelines, IDEs, or AI copilots. It sits{" "}
              <span className="text-[#00FFFF] font-semibold">above them</span>, enforcing a system-level contract they
              all operate within.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">How it works</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              FTM operates directly on Everything as Code definitions. Every command reads, validates, and writes
              against the same declarative system model that drives execution.
            </p>
            <div className="mt-8 space-y-4 text-lg text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-[#FFFF00] font-bold">1.</span>
                <span>Establish current state</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#FFFF00] font-bold">2.</span>
                <span>Analyze impact</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#FFFF00] font-bold">3.</span>
                <span>Design and propose change</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#FFFF00] font-bold">4.</span>
                <span>Require approval</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#FFFF00] font-bold">5.</span>
                <span>Apply deterministically</span>
              </p>
            </div>
            <p className="mt-8 text-lg text-white font-semibold">
              AI agents interact through the same workflow — never bypassing it. The CLI is not just a trigger. It is
              the enforcement mechanism.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Humans and AI Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87] to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">
              Built for humans <span className="text-[#FF00FF]">and</span> AI
            </h3>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xl font-bold text-[#00FFFF]">Humans use it to</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Define intent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Approve change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Understand consequences</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#FFFF00]">AI uses it to</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                    <span>Read full system context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                    <span>Generate compliant proposals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                    <span>Operate within scoped authority</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-12 text-lg text-white font-semibold">Both operate against the same system model.</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Who this is for</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <h4 className="text-xl font-bold text-[#00FFFF]">Platform teams</h4>
              <p className="mt-4 text-gray-300">
                Define reference architectures and enforce consistency without blocking innovation.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-8">
              <h4 className="text-xl font-bold text-[#FFFF00]">Architects and engineers</h4>
              <p className="mt-4 text-gray-300">Understand and evolve complex systems without tribal knowledge.</p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8">
              <h4 className="text-xl font-bold text-[#FF00FF]">AI-forward teams</h4>
              <p className="mt-4 text-gray-300">Let agents contribute meaningfully without risking integrity.</p>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <h4 className="text-xl font-bold text-[#00FFFF]">Enterprises</h4>
              <p className="mt-4 text-gray-300">Adopt AI at scale with confidence instead of caution tape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part of Operating Model Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">FTM CLI is part of the operating model</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              FTM is not a standalone product. It is a core surface of the Everything as Code operating model. Together
              with EaC and Synaptic, it defines how software systems are assembled, governed, and evolved in the age of
              AI.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/everything-as-code">
                <Button
                  size="lg"
                  className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/90 text-base font-semibold px-8"
                >
                  Explore Everything as Code
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/synaptic">
                <Button
                  size="lg"
                  className="bg-[#FF00FF] text-black hover:bg-[#FF00FF]/90 text-base font-semibold px-8"
                >
                  Learn About Synaptic
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-sm text-gray-400">← Back to homepage</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
