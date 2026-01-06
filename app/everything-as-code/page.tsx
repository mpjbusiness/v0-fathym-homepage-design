import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Workflow, Shield, Globe, Blocks, Cpu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FathymArchitectureDiagram from "@/components/FathymArchitectureDiagram"

export default function EverythingAsCodePage() {
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
              className="text-sm font-medium text-[#00FFFF] transition-colors hover:text-[#00FFFF]/80"
            >
              Everything as Code
            </Link>
            <Link href="/synaptic" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#FF00FF]">
              Synaptic
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E7490]/20 via-black to-[#7C3AED]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00FFFF]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#FFFF00]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          {/* Main Heading */}
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Everything as Code
            </h2>
            <p className="mt-4 text-2xl font-medium text-[#FFFF00] text-balance sm:text-3xl">
              Assembling software in the age of AI
            </p>
            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-relaxed text-pretty">
              Software systems are no longer built one application at a time. They are assembled from runtimes,
              services, workflows, data sources, identity systems, and increasingly, AI-driven logic.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-white font-medium">
              Everything as Code (EaC) defines how these parts come together – declaratively and explicitly – as
              coherent and future-proof systems.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram Section */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <FathymArchitectureDiagram />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">The problem EaC addresses</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              AI has fundamentally changed the economics of software creation. Code can now be produced faster than ever
              — often faster than teams can review, integrate, or even fully understand it.
            </p>
            <p className="mt-4 text-lg text-[#FF00FF] font-semibold">
              What has not changed is how software systems are assembled.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8">
              <h4 className="text-xl font-bold text-white">
                Today’s systems are still held together by configuration chaos.
              </h4>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  <span>YAML files scattered across tools and repositories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  <span>Weak or inconsistent schema validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  <span>Environment-specific versions that drift over time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF00FF]">•</span>
                  <span>Tribal knowledge about what connects to what</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63]/20 to-black p-8">
              <h4 className="text-xl font-bold text-[#00FFFF]">
                As systems grow and AI becomes a first-class participant, this approach breaks down.
              </h4>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                The challenge is no longer writing code. The challenge is giving both humans and AI a clear, enforceable
                system model to work within.
              </p>
              <p className="mt-4 text-lg text-white font-semibold">Everything as Code exists to solve that problem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is EaC Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">What Everything as Code is</h3>
            <p className="mt-6 text-2xl font-semibold text-[#00FFFF]">A unified, declarative system model.</p>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              EaC describes the entire software system — not just what exists, but how it is allowed to run and evolve.
            </p>
          </div>

          {/* System Components Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#00FFFF]/10 p-2">
                <Code2 className="h-5 w-5 text-[#00FFFF]" />
              </div>
              <h4 className="font-semibold text-white">Applications and APIs</h4>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#00FFFF]/10 p-2">
                <Cpu className="h-5 w-5 text-[#00FFFF]" />
              </div>
              <h4 className="font-semibold text-white">Runtimes and execution environments</h4>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#00FFFF]/10 p-2">
                <Shield className="h-5 w-5 text-[#00FFFF]" />
              </div>
              <h4 className="font-semibold text-white">Identity, tenancy, and access control</h4>
            </div>

            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#FFFF00]/10 p-2">
                <Globe className="h-5 w-5 text-[#FFFF00]" />
              </div>
              <h4 className="font-semibold text-white">Environments and deployment intent</h4>
            </div>

            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#FFFF00]/10 p-2">
                <Blocks className="h-5 w-5 text-[#FFFF00]" />
              </div>
              <h4 className="font-semibold text-white">Data sources and integrations</h4>
            </div>

            <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#CA8A04]/20 to-black p-6">
              <div className="mb-3 inline-flex rounded-lg bg-[#FFFF00]/10 p-2">
                <Workflow className="h-5 w-5 text-[#FFFF00]" />
              </div>
              <h4 className="font-semibold text-white">Workflows and event-driven logic</h4>
            </div>
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87] to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">A shared model for humans and AI</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              By giving AI a structured, explicit system model, EaC dramatically improves the quality, reusability, and
              safety of AI-assisted development.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xl font-bold text-[#00FFFF]">AI can:</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Read the system model to understand context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Assemble components compatible with the system model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Execute workflows within defined capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00FFFF]" />
                    <span>Propose system changes through governed review paths</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#FF00FF]">Organizational alignment</h4>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  EaC's structural approach to systems mirrors the way autonomous teams are structured to deliver
                  business outcomes.
                </p>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                    <span>Domain ownership reflected directly in system definition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF00FF]" />
                    <span>Autonomous teams own and assemble their components</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Runtime Architecture Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Extensible runtime architecture</h3>
            <p className="mt-6 text-lg text-[#00FFFF] font-semibold">
              Everything as Code separates system definition from system execution.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              EaC does not prescribe a fixed set of runtimes. Instead, it provides a highly modular and extensible
              runtime architecture where execution environments are composed, not hardcoded.
            </p>
          </div>

          <div className="mt-16 rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-8 lg:p-12">
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
              Fathym provides several reference runtimes — such as{" "}
              <span className="text-[#FFFF00] font-semibold">Web</span>,{" "}
              <span className="text-[#FFFF00] font-semibold">API</span>,{" "}
              <span className="text-[#FFFF00] font-semibold">Core</span>,{" "}
              <span className="text-[#FFFF00] font-semibold">Flow</span>, and{" "}
              <span className="text-[#FFFF00] font-semibold">Synaptic</span> — not as fixed products, but as examples of
              how execution environments can be composed.
            </p>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white">
                Runtime are defined by composing processors with explicit responsibilities for
              </h4>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  Request handling
                </div>
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  Data access
                </div>
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  Rendering
                </div>
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  Messaging
                </div>
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  Workflow execution
                </div>
                <div className="rounded-lg border border-[#FFFF00]/20 bg-black/50 px-4 py-3 text-gray-300">
                  AI orchestration
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-bold text-[#FFFF00]">This architecture enables</h4>
              <ul className="mt-6 space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Domain-specific runtimes tailored to real workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Independent scaling and deployment of execution contexts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Reuse of capabilities across systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>AI-assisted construction of new runtimes from known primitives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Stewardship as a structural property</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              As systems evolve faster, governance cannot be an afterthought. Stewardship defines who is allowed to
              change what, under which conditions, and with what accountability.
            </p>
            <p className="mt-4 text-lg text-[#FF00FF] font-semibold">
              In the Everything as Code model, stewardship is structural — embedded directly into how systems are
              defined and executed.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-white">Stewardship means the system can:</h4>
            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Interpret system intent consistently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Enforce governance and policy by default</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Control how change is introduced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Maintain accountability as the system evolves</span>
              </li>
            </ul>
            <p className="mt-8 text-lg text-white font-medium">
              These rules apply equally to changes made by developers, automation, or AI agents. Nothing bypasses the
              system model.
            </p>
            <p className="mt-4 text-lg text-[#FF00FF] font-semibold">
              This ensures that speed does not come at the cost of control.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">How an Everything as Code system works</h3>
            <p className="mt-6 text-lg text-[#00FFFF] font-semibold">
              Everything as Code separates intent from execution.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                1
              </span>
              <p className="text-lg text-gray-300">The system is defined declaratively using the EaC model</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                2
              </span>
              <p className="text-lg text-gray-300">That definition is validated and interpreted through stewardship</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                3
              </span>
              <p className="text-lg text-gray-300">An execution graph is resolved from the system structure</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                4
              </span>
              <p className="text-lg text-gray-300">
                Infrastructure and runtimes are reconciled to match declared intent
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                5
              </span>
              <p className="text-lg text-gray-300">Execution proceeds within explicit, governed boundaries</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#00FFFF]/30 bg-gradient-to-r from-[#164E63]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00FFFF]/20 text-lg font-bold text-[#00FFFF]">
                6
              </span>
              <p className="text-lg text-gray-300">All changes loop back through the same system model</p>
            </div>
          </div>

          <p className="mt-12 text-lg text-white font-medium max-w-3xl">
            This execution model allows systems to remain understandable and governable — even as AI increases the rate
            of change.
          </p>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87] to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">AI inside the system, not around it</h3>
            <p className="mt-6 text-lg text-[#FF00FF] font-semibold">
              Everything as Code is designed for AI participation, not containment.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xl font-bold text-[#00FFFF]">AI can:</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF]">✓</span>
                    <span>Read the system model to understand context</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF]">✓</span>
                    <span>Generate and assemble compatible components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF]">✓</span>
                    <span>Execute workflows within defined capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF]">✓</span>
                    <span>Propose system changes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#FF00FF]">AI cannot:</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF]">✕</span>
                    <span>Bypass identity or policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF]">✕</span>
                    <span>Mutate infrastructure directly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF]">✕</span>
                    <span>Operate outside declared boundaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF]">✕</span>
                    <span>Introduce untracked or unaudited changes</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-12 text-lg text-white font-medium">
              This makes AI a first-class system participant, rather than an external force acting blindly on production
              systems. This distinction is what separates AI-assisted systems from AI-governed systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Why Everything as Code matters now</h3>
            <div className="mt-8 space-y-4 text-lg">
              <p className="text-[#00FFFF] font-semibold">AI has dramatically accelerated code generation.</p>
              <p className="text-[#FF00FF] font-semibold">System assembly remains the bottleneck.</p>
              <p className="text-gray-300 leading-relaxed">
                As software systems grow more dynamic, autonomous, and AI-driven, the limiting factor becomes structure—
                not speed.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-white">
              Everything as Code provides the operating model required to
            </h4>
            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FFFF00]">•</span>
                <span>Assemble complex systems intentionally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFFF00]">•</span>
                <span>Give AI meaningful context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFFF00]">•</span>
                <span>Enable reuse at the system level</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFFF00]">•</span>
                <span>Preserve control as systems evolve</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Homepage CTA */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Learn how Fathym brings Everything as Code to life
          </h3>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/90 text-base font-semibold px-8">
                Back to Homepage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63] to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Where to go next</h3>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/synaptic">
                <Button className="bg-[#00FFFF] text-black hover:bg-[#00FFFF]/90 font-semibold">
                  Learn about Synaptic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
              >
                Read the white paper
              </Button>
              <Button
                variant="outline"
                className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
              >
                Explore the FAQ
              </Button>
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
