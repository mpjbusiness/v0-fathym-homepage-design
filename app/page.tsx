import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { EacEcosystemDiagram } from "@/components/eac-ecosystem-diagram"
import { EacSchemaDisplay } from "@/components/eac-schema-display"
import Navbar from "@/components/Navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 sm:pt-32">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E7490]/20 via-black to-[#7C3AED]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00FFFF]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FF00FF]/10 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-40">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Main Heading */}
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-7xl">
                Everything as Code
              </h2>
              <p className="mt-4 text-lg font-medium text-[#00FFFF] text-balance sm:text-2xl lg:text-3xl">
                The operating model for AI-built software systems
              </p>
              <p className="mt-6 max-w-3xl text-base text-gray-300 leading-relaxed text-pretty sm:text-lg">
                AI can now assemble software faster than teams can reason about the systems they are creating.
                Everything as Code is the operating model that makes AI-built systems deployable, governable, and
                enterprise-ready — without slowing down creation.
              </p>

              <div className="mt-8 sm:mt-12 flex flex-wrap gap-4">
                <Link href="/everything-as-code">
                  <Button
                    size="lg"
                    className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/90 text-sm sm:text-base font-semibold px-6 sm:px-8"
                  >
                    Explore Everything as Code
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center w-full overflow-hidden">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl scale-75 sm:scale-90 lg:scale-100 origin-center">
                <EacSchemaDisplay />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EaC Ecosystem Diagram Section */}
      <section className="relative border-t border-white/10 overflow-hidden">
        <EacEcosystemDiagram />
      </section>

      {/* The Gap Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-left">
              AI changed how code is created, but not how software systems are built
            </h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed text-pretty text-left">
              AI tools have made writing code easier and faster than ever. But actually making use of that code is
              another story. Production systems are still assembled through fragmented configuration,
              environment-specific scripts, and user-held context. The result is a growing gap between creation speed
              and system-level control.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed text-pretty text-left">
              AI can generate code — but it lacks full context and understanding of where that code runs, how it's
              governed, and how it's allowed to evolve.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="mt-16 rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#1E1B4B] to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-[#FF00FF] sm:text-3xl">There is no system-level contract</h4>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">Today's stacks are made up of powerful tools:</p>
            <ul className="mt-6 space-y-3 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>Application frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>AI pair programmers and app generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>Cloud platforms and infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>CI/CD pipelines and deployment automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>Agent frameworks and AI orchestration tools</span>
              </li>
            </ul>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Configuration is scattered. Environments drift. Critical assumptions live in tribal knowledge. AI can
              generate code — but it has no shared understanding of where that code runs, how it’s governed, or how it’s
              allowed to evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-6xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-left">
              Introducing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">
                Everything as Code
              </span>
            </h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed text-pretty text-left">
              Everything as Code (EaC) is a unified, declarative model for defining entire software systems —
              applications, runtimes, identity, environments, data access, and AI workflows — as a single governed
              system.
            </p>
            <p className="mt-6 text-lg text-white font-medium text-left">
              It is not another tool in the stack. It is the system definition the stack runs within.
            </p>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed text-left">
              EaC is the shared operating model that both humans and AI can understand, reason about, and safely modify
              — whether assembling systems from scratch or evolving them over time.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8 transition-all hover:border-[#00FFFF]/60">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <Code2 className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Unified Model</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Define the entire software system — not just code — in a single declarative model.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#7C3AED]/20 to-black p-8 transition-all hover:border-[#FF00FF]/60">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Shield className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Software Governance</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Structural governance embedded in the system itself, not enforced through after-the-fact process.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-8 transition-all hover:border-[#FFFF00]/60">
              <div className="mb-4 inline-flex rounded-lg bg-[#FFFF00]/10 p-3">
                <Zap className="h-6 w-6 text-[#FFFF00]" />
              </div>
              <h4 className="text-xl font-bold text-white">AI-Ready</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">
                A system model that AI can safely read, reason about, and modify — under explicit constraints.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Synaptic Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63] to-black p-8 lg:p-12">
            <div className="max-w-3xl">
              <div className="inline-block rounded-full border border-[#00FFFF]/50 bg-[#00FFFF]/10 px-4 py-1 text-sm font-semibold text-[#00FFFF]">
                Synaptic
              </div>
              <h3 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Agentic AI orchestration</h3>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Synaptic extends Everything as Code to define how AI agents operate inside your system — their
                permissions, data access, and operational boundaries.
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                By integrating through the Model Context Protocol (MCP), Synaptic allows any AI tool to participate as a
                first-class, governed actor rather than an external automation. AI executes workflows, reasons over
                system state, and proposes change — within constraints defined by the system itself.
              </p>
              <div className="mt-8">
                <Link href="/synaptic">
                  <Button
                    variant="outline"
                    className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
                  >
                    Learn about Synaptic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <h3 className="mb-16 text-4xl font-bold text-white sm:text-5xl text-left">
            What changes when software has a system contract
          </h3>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Development Teams */}
            <div>
              <h4 className="text-2xl font-bold text-[#00FFFF]">Development teams</h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                  <span className="text-gray-300">Clear system boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                  <span className="text-gray-300">Fewer one-off decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                  <span className="text-gray-300">Reproducible environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                  <span className="text-gray-300">Confident AI-assisted workflows</span>
                </li>
              </ul>
            </div>

            {/* Enterprises */}
            <div>
              <h4 className="text-2xl font-bold text-[#FF00FF]">Enterprises</h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                  <span className="text-gray-300">Governance by design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                  <span className="text-gray-300">Auditability built in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                  <span className="text-gray-300">Consistent multi-tenant isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                  <span className="text-gray-300">Confident AI adoption</span>
                </li>
              </ul>
            </div>

            {/* Systems */}
            <div>
              <h4 className="text-2xl font-bold text-[#FFFF00]">Systems</h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                  <span className="text-gray-300">Controlled evolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                  <span className="text-gray-300">Reduced configuration drift</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                  <span className="text-gray-300">Explicit ownership and intent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FFFF00]" />
                  <span className="text-gray-300">Long-term maintainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87] to-black p-8 lg:p-12">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-white sm:text-4xl">Built and used in real systems</h3>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Fathym's EaC model powers production systems today, including{" "}
                <span className="font-semibold text-[#FF00FF]">Open Industrial</span>, a platform for governed AI in
                industrial and operational environments where reliabilit, traceability and accountability are
                non-negotiable.
              </p>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10 bg-transparent"
                  asChild
                >
                  <a href="https://www.openindustrial.co/" target="_blank" rel="noopener noreferrer">
                    View Open Industrial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-center text-sm text-gray-500">© 2025 Fathym, LLC</p>
        </div>
      </footer>
    </div>
  )
}
