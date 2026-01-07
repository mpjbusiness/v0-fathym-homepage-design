import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Shield, Workflow, Lock, Cloud, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SynapticPage() {
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
            <Link
              href="/synaptic"
              className="text-sm font-medium text-[#FF00FF] transition-colors hover:text-[#FF00FF]/80"
            >
              Synaptic
            </Link>
            <Link href="/ftm-cli" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#FFFF00]">
              FTM CLI
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-black to-[#0E7490]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF00FF]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#00FFFF]/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          {/* Main Heading */}
          <div className="max-w-4xl">
            <h2 className="text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Synaptic
            </h2>
            <p className="mt-4 text-2xl font-medium text-[#FF00FF] text-balance sm:text-3xl">
              Composable, governed AI execution for production systems
            </p>
            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-relaxed text-pretty">
              AI can generate code, execute workflows, reason over data, makes decisions, and propose updates.
            </p>
            <p className="mt-6 text-lg text-white font-semibold">The challenge is not enabling AI execution.</p>
            <p className="mt-2 text-lg text-[#FF00FF] font-semibold">
              The challenge is enabling AI execution as part of a system.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              Synaptic makes AI execution composable, governed, and system-aware.
            </p>
          </div>
        </div>
      </section>

      {/* The Gap Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">The gap in today's agentic AI</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Most agent frameworks focus on orchestrating logic.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black px-6 py-4 text-center">
              <p className="text-gray-300">Chaining prompts and tools</p>
            </div>
            <div className="rounded-xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black px-6 py-4 text-center">
              <p className="text-gray-300">Coordinating steps and state</p>
            </div>
            <div className="rounded-xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black px-6 py-4 text-center">
              <p className="text-gray-300">Managing agent flows</p>
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-300 max-w-3xl">
            They are powerful, but they operate largely outside the system they affect.
          </p>

          <div className="mt-12 rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87] to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-[#FF00FF]">This results in a structural gap</h4>
            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>AI workflows lack structural context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Execution boundaries are implicit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Identity and tenancy are bolted on</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Deployment and portability are left to surrounding infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Reuse across systems is limited</span>
              </li>
            </ul>
            <p className="mt-8 text-lg text-white font-semibold">
              Synaptic addresses this by treating AI execution as a first-class runtime concern, not an application
              feature.
            </p>
          </div>
        </div>
      </section>

      {/* What is Synaptic Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">What Synaptic is</h3>
            <p className="mt-6 text-lg text-[#00FFFF] font-semibold">
              Synaptic is Fathym's AI orchestration framework and execution runtime, built on top of the Everything as
              Code model.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <Workflow className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Declarative workflows</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">A declarative way to define AI workflows</p>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <Brain className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Agentic runtime</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">A runtime for executing agentic logic</p>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#00FFFF]/10 p-3">
                <Layers className="h-6 w-6 text-[#00FFFF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Composable primitives</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">Composable execution primitives</p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#7C3AED]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Shield className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Built-in governance</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">Governed execution with explicit boundaries</p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#7C3AED]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Lock className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">System-aware</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">Identity, tenancy, and access control scoping</p>
            </div>

            <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#7C3AED]/20 to-black p-8">
              <div className="mb-4 inline-flex rounded-lg bg-[#FF00FF]/10 p-3">
                <Cloud className="h-6 w-6 text-[#FF00FF]" />
              </div>
              <h4 className="text-xl font-bold text-white">Portable by design</h4>
              <p className="mt-3 text-gray-300 leading-relaxed">Cloud, edge, or regulated environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neurons and Circuits Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-[#0F172A] via-black to-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">Neurons and Circuits</h3>
            <p className="mt-6 text-lg text-[#FF00FF] font-semibold">
              Synaptic structures AI execution using two core primitives: neurons and circuits.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-[#00FFFF] mb-4">Neurons</h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Small, focused units of AI behavior — such as prompting, reasoning, or invoking a capability. Each
                  neuron has defined inputs, outputs, and scope.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-[#FF00FF] mb-4">Circuits</h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Compose neurons into explicit execution flows. They define how AI behavior progresses, how state
                  moves, and where decisions are made.
                </p>
              </div>

              <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8">
                <h4 className="text-xl font-bold text-white mb-4">This structure makes AI workflows</h4>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF] font-bold">•</span>
                    <span>Explicit rather than implicit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF] font-bold">•</span>
                    <span>Composable rather than entangled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF] font-bold">•</span>
                    <span>Reusable across systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00FFFF] font-bold">•</span>
                    <span>Governable by design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#7C3AED]/20 to-black p-8 lg:p-12">
                <h4 className="text-2xl font-bold text-[#FF00FF] mb-6">Circuits are system artifacts</h4>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  In Synaptic, circuits are declared as part of Everything as Code.
                </p>
                <p className="text-lg text-white font-semibold mb-6">That means AI workflows can be</p>
                <ul className="space-y-3 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF] font-bold">•</span>
                    <span>Versioned and reviewed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF] font-bold">•</span>
                    <span>Executed under identity and policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF] font-bold">•</span>
                    <span>Audited like any other system component</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF00FF] font-bold">•</span>
                    <span>Reused across environments and runtimes</span>
                  </li>
                </ul>
              </div>

              {/* Circuit Diagram */}
              <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F] to-black p-8">
                <svg className="w-full" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Circuit label at bottom */}
                  <text x="150" y="190" textAnchor="middle" className="text-xs" fill="#FFFF00" fontSize="12">
                    └────────────── Circuit ──────────────┘
                  </text>

                  {/* Neuron boxes */}
                  <rect x="10" y="50" width="70" height="80" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
                  <text x="45" y="75" textAnchor="middle" fill="#00FFFF" fontSize="13" fontWeight="bold">
                    Neuron
                  </text>
                  <text x="45" y="95" textAnchor="middle" fill="#999999" fontSize="11">
                    (Input)
                  </text>

                  <rect x="115" y="50" width="70" height="80" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
                  <text x="150" y="75" textAnchor="middle" fill="#00FFFF" fontSize="13" fontWeight="bold">
                    Neuron
                  </text>
                  <text x="150" y="95" textAnchor="middle" fill="#999999" fontSize="11">
                    (Reason)
                  </text>

                  <rect x="220" y="50" width="70" height="80" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
                  <text x="255" y="75" textAnchor="middle" fill="#00FFFF" fontSize="13" fontWeight="bold">
                    Neuron
                  </text>
                  <text x="255" y="95" textAnchor="middle" fill="#999999" fontSize="11">
                    (Action)
                  </text>

                  {/* Arrows connecting neurons */}
                  <line x1="80" y1="90" x2="115" y2="90" stroke="#FF00FF" strokeWidth="2" />
                  <polygon points="115,90 110,87 110,93" fill="#FF00FF" />

                  <line x1="185" y1="90" x2="220" y2="90" stroke="#FF00FF" strokeWidth="2" />
                  <polygon points="220,90 215,87 215,93" fill="#FF00FF" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#0E7490]/20 to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-white mb-6">What this allows Synaptic to move AI execution</h4>

            <ul className="space-y-3 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] font-bold">•</span>
                <span>Between systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] font-bold">•</span>
                <span>Across environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF] font-bold">•</span>
                <span>Without losing control or context</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-[#00FFFF]/40 bg-black/50 p-6">
              <p className="text-lg text-white font-semibold">AI operates inside the system model, not alongside it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F] to-black p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Integration with existing AI frameworks</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
              Synaptic works alongside best-in-class AI tools like{" "}
              <span className="text-[#FFFF00] font-semibold">LangChain</span> and{" "}
              <span className="text-[#FFFF00] font-semibold">LangGraph</span>.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-3xl">
              Synaptic doesn't replace these frameworks, but constrains and contextualizes them inside real systems.
            </p>

            <div className="mt-12">
              <h4 className="text-2xl font-bold text-[#FFFF00]">Synaptic adds</h4>
              <ul className="mt-6 space-y-4 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Explicit execution boundaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Runtime composition and execution context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Identity and tenancy scoping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>Policy enforcement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFFF00]">•</span>
                  <span>System-level portability</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-lg text-white font-medium">
              This separation allows teams to adopt best-in-class AI tooling while maintaining control.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          {/* Increased max-w-4xl to max-w-6xl to allow heading to fit on one line */}
          <div className="max-w-6xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Governance as a property of execution</h3>
            <p className="mt-6 text-lg text-[#FF00FF] font-semibold">
              In Synaptic, governance is not layered on top of AI execution.
            </p>
            <p className="mt-4 text-lg text-white font-semibold">It is a property of the runtime itself.</p>
          </div>

          <div className="mt-12 rounded-2xl border border-[#FF00FF]/30 bg-gradient-to-br from-[#581C87]/20 to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-white">AI agents</h4>
            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Operate only within declared capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Access data through defined interfaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Execute under explicit identity and tenant scopes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF00FF]">•</span>
                <span>Produce auditable actions, decisions, and outcomes</span>
              </li>
            </ul>
            <div className="mt-12 rounded-xl border border-[#FF00FF]/40 bg-black/50 p-6">
              <p className="text-lg text-white font-semibold">AI cannot bypass the system model.</p>
              <p className="mt-2 text-lg text-[#FF00FF] font-semibold">
                Execution is safe because structure and governance are always explicit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Model Context Protocol (MCP) integration</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Synaptic integrates with the Model Context Protocol (MCP) to expose system capabilities to AI in a
              structured way.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63] to-black p-8 lg:p-12">
            <h4 className="text-2xl font-bold text-white">Through MCP</h4>
            <ul className="mt-6 space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>Available actions are explicitly declared</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>Context is scoped and governed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00FFFF]">•</span>
                <span>AI tools can discover and use capabilities safely</span>
              </li>
            </ul>
            <p className="mt-8 text-lg text-white font-medium">
              This allows Synaptic-powered systems to work with a broad ecosystem of AI tools without tight coupling.
            </p>
          </div>
        </div>
      </section>

      {/* Portability Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">Portable by design</h3>
            <p className="mt-6 text-lg text-[#FFFF00] font-semibold">
              Synaptic defines circuits as portable Everything-as-Code artifacts that execute across environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-6 text-center">
              <p className="text-gray-300">In cloud environments</p>
            </div>
            <div className="rounded-xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-6 text-center">
              <p className="text-gray-300">At the edge</p>
            </div>
            <div className="rounded-xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-6 text-center">
              <p className="text-gray-300">Alongside app runtimes</p>
            </div>
            <div className="rounded-xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F]/20 to-black p-6 text-center">
              <p className="text-gray-300">In regulated systems</p>
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-300 max-w-3xl">
            Because circuits declare intent, structure, and boundaries, execution adapts to the runtime without changing
            the workflow. One Synaptic circuit can run simultaneously across different runtimes.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">How Synaptic executes</h3>
          </div>

          <div className="mt-12 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-[#FF00FF]/30 bg-gradient-to-r from-[#581C87]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/20 text-lg font-bold text-[#FF00FF]">
                1
              </span>
              <p className="text-lg text-gray-300">Everything as Code defines system intent</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#FF00FF]/30 bg-gradient-to-r from-[#581C87]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/20 text-lg font-bold text-[#FF00FF]">
                2
              </span>
              <p className="text-lg text-gray-300">
                Stewardship validates intent, policy, and scope, and resolves the execution graph
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#FF00FF]/30 bg-gradient-to-r from-[#581C87]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/20 text-lg font-bold text-[#FF00FF]">
                3
              </span>
              <p className="text-lg text-gray-300">Synaptic workflows are composed from declared processors</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#FF00FF]/30 bg-gradient-to-r from-[#581C87]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/20 text-lg font-bold text-[#FF00FF]">
                4
              </span>
              <p className="text-lg text-gray-300">AI agents execute within governed runtime boundaries</p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#FF00FF]/30 bg-gradient-to-r from-[#581C87]/20 to-black p-6">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#FF00FF]/20 text-lg font-bold text-[#FF00FF]">
                5
              </span>
              <p className="text-lg text-gray-300">Outputs and proposed changes flow back through stewardship</p>
            </div>
          </div>

          <p className="mt-12 text-lg text-white font-medium max-w-3xl">
            This ensures AI execution remains predictable, auditable, and controllable.
          </p>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h3 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">When to use Synaptic</h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">Synaptic is designed for systems where</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63]/20 to-black p-8">
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF]">•</span>
                  <span>AI is part of the architecture, not an experiment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF]">•</span>
                  <span>Workflows must be reusable and evolvable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF]">•</span>
                  <span>Access control and auditability matter</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#00FFFF]/30 bg-gradient-to-br from-[#164E63]/20 to-black p-8">
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF]">•</span>
                  <span>Multi-tenant isolation is required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00FFFF]">•</span>
                  <span>AI interacts with real data and services</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-[#FFFF00]/30 bg-gradient-to-br from-[#78350F] to-black p-8 lg:p-12">
            <p className="text-xl text-white font-semibold">
              Synaptic is particularly suited for enterprise, operational, and regulated environments.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Homepage CTA */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-black to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Learn how Synaptic makes AI a governed participant in software systems
          </h3>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="bg-[#FF00FF] text-black hover:bg-[#FF00FF]/90 text-base font-semibold px-8">
                Back to Homepage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="mt-6">
              <Link href="/everything-as-code">
                <Button
                  variant="outline"
                  className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
                >
                  Learn About Everything as Code
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
