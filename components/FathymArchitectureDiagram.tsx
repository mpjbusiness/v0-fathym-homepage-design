"use client"

export default function FathymArchitectureDiagram() {
  return (
    <div className="w-full bg-gradient-to-b from-black via-[#0F172A] to-black py-8 sm:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Diagram Container */}
        <div className="relative rounded-xl border border-[#00FFFF]/20 bg-black/60 backdrop-blur p-4 sm:p-6 lg:p-8">
          <svg
            viewBox="0 0 800 900"
            className="mx-auto w-full max-w-4xl"
            preserveAspectRatio="xMidYMid meet"
            style={{
              minHeight: "500px",
              height: "auto",
            }}
          >
            {/* AI Code Generation Box */}
            <rect x="150" y="20" width="500" height="80" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
            <text x="400" y="50" textAnchor="middle" fill="#FF00FF" fontSize="16" fontWeight="bold">
              AI CODE GENERATION
            </text>
            <text x="400" y="75" textAnchor="middle" fill="#AAAAAA" fontSize="12">
              (Cursor, Copilot, Claude, Codex)
            </text>

            {/* Arrow Down */}
            <line x1="400" y1="100" x2="400" y2="130" stroke="#00FFFF" strokeWidth="2" />
            <polygon points="400,130 395,120 405,120" fill="#00FFFF" />

            {/* Fathym Stewardship Layer Box */}
            <rect x="100" y="130" width="600" height="240" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
            <text x="400" y="160" textAnchor="middle" fill="#00FFFF" fontSize="16" fontWeight="bold">
              FATHYM STEWARDSHIP LAYER
            </text>

            {/* Three Sub-boxes: CLI, EaC Schema, Synaptic */}
            {/* CLI Box */}
            <rect x="130" y="190" width="140" height="140" fill="none" stroke="#FFFF00" strokeWidth="1.5" rx="4" />
            <text x="200" y="215" textAnchor="middle" fill="#FFFF00" fontSize="14" fontWeight="bold">
              CLI (FTM)
            </text>
            <line x1="200" y1="225" x2="200" y2="235" stroke="#FFFF00" strokeWidth="1" />
            <text x="200" y="250" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Human-AI
            </text>
            <text x="200" y="265" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Collaboration
            </text>

            {/* EaC Schema Box */}
            <rect x="330" y="190" width="140" height="140" fill="none" stroke="#FFFF00" strokeWidth="1.5" rx="4" />
            <text x="400" y="215" textAnchor="middle" fill="#FFFF00" fontSize="14" fontWeight="bold">
              EaC Schema
            </text>
            <line x1="400" y1="225" x2="400" y2="235" stroke="#FFFF00" strokeWidth="1" />
            <text x="400" y="250" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Declarative
            </text>
            <text x="400" y="265" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Configuration
            </text>

            {/* Synaptic Framework Box */}
            <rect x="530" y="190" width="140" height="140" fill="none" stroke="#FFFF00" strokeWidth="1.5" rx="4" />
            <text x="600" y="215" textAnchor="middle" fill="#FFFF00" fontSize="14" fontWeight="bold">
              Synaptic
            </text>
            <text x="600" y="235" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Framework
            </text>
            <line x1="600" y1="245" x2="600" y2="255" stroke="#FFFF00" strokeWidth="1" />
            <text x="600" y="270" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              AI Agent
            </text>
            <text x="600" y="285" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Orchestration
            </text>

            {/* Arrows from boxes down */}
            <line x1="200" y1="330" x2="200" y2="400" stroke="#00FFFF" strokeWidth="1.5" />
            <line x1="400" y1="330" x2="400" y2="400" stroke="#00FFFF" strokeWidth="1.5" />
            <line x1="600" y1="330" x2="600" y2="400" stroke="#00FFFF" strokeWidth="1.5" />

            <line x1="200" y1="400" x2="320" y2="400" stroke="#00FFFF" strokeWidth="1.5" />
            <line x1="600" y1="400" x2="480" y2="400" stroke="#00FFFF" strokeWidth="1.5" />

            {/* DFS Box */}
            <rect x="320" y="400" width="160" height="100" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
            <text x="400" y="435" textAnchor="middle" fill="#FF00FF" fontSize="14" fontWeight="bold">
              DFS (Sources)
            </text>
            <text x="400" y="460" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Local | JSR | NPM
            </text>
            <text x="400" y="475" textAnchor="middle" fill="#AAAAAA" fontSize="11">
              Azure | Remote
            </text>

            {/* Arrow Down */}
            <line x1="400" y1="510" x2="400" y2="540" stroke="#00FFFF" strokeWidth="2" />
            <polygon points="400,540 395,530 405,530" fill="#00FFFF" />

            {/* Composable Runtimes Box */}
            <rect x="100" y="540" width="600" height="140" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
            <text x="400" y="570" textAnchor="middle" fill="#00FFFF" fontSize="14" fontWeight="bold">
              COMPOSABLE RUNTIMES
            </text>
            <rect x="140" y="585" width="520" height="75" fill="none" stroke="#FFFF00" strokeWidth="1.5" rx="4" />
            <text x="400" y="610" textAnchor="middle" fill="#FFFF00" fontSize="12">
              14+ Processor Types • Custom Processors
            </text>
            <text x="400" y="630" textAnchor="middle" fill="#FFFF00" fontSize="12">
              Any Combination • Domain-Specific Configuration
            </text>

            {/* Arrow Down */}
            <line x1="400" y1="680" x2="400" y2="710" stroke="#00FFFF" strokeWidth="2" />
            <polygon points="400,710 395,700 405,700" fill="#00FFFF" />

            {/* MCP Bridge Box */}
            <rect x="300" y="710" width="200" height="60" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
            <text x="400" y="745" textAnchor="middle" fill="#FF00FF" fontSize="14" fontWeight="bold">
              MCP Bridge
            </text>

            {/* Arrow Down */}
            <line x1="400" y1="770" x2="400" y2="800" stroke="#00FFFF" strokeWidth="2" />
            <polygon points="400,800 395,790 405,790" fill="#00FFFF" />

            {/* Infrastructure Box */}
            <rect x="150" y="800" width="500" height="70" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
            <text x="400" y="825" textAnchor="middle" fill="#FF00FF" fontSize="14" fontWeight="bold">
              INFRASTRUCTURE
            </text>
            <text x="400" y="850" textAnchor="middle" fill="#AAAAAA" fontSize="12">
              Azure | Deno Deploy | Edge
            </text>
          </svg>
        </div>

        {/* Description */}
        <div className="mt-6 sm:mt-8 text-center px-2">
          <p className="text-gray-300 text-xs sm:text-sm">
            The Fathym architecture enables AI-generated code to flow through a coherent stewardship layer, with
            declarative configuration, composable runtimes, and enterprise-ready governance.
          </p>
        </div>
      </div>
    </div>
  )
}
