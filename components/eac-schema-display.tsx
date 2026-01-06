"use client"

export function EacSchemaDisplay() {
  return (
    <div className="rounded-lg overflow-hidden border border-white/20 bg-black shadow-2xl max-w-2xl">
      {/* Editor Title Bar */}
      <div className="bg-gray-900 border-b border-white/10 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-gray-400 ml-2">EverythingAsCode Schema</span>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0A0E27]">
        <div className="text-gray-400">
          <div>
            <span className="text-[#FF00FF]">const</span>
            <span className="text-white"> eac</span>
            <span className="text-gray-500">:</span>
            <span className="text-cyan-400"> EverythingAsCode</span>
            <span className="text-white"> = {"{"}</span>
          </div>

          <div className="mt-4">
            <div className="text-gray-600"> // Identity</div>
            <div className="text-green-400"> EnterpriseLookup</div>
            <span className="text-gray-500">:</span>
            <span className="text-yellow-300"> "ent-abc-123"</span>
            <span className="text-gray-500">,</span>
          </div>

          <div className="mt-2">
            <div className="text-green-400"> Details</div>
            <span className="text-gray-500">: {"{"} </span>
            <div className="ml-4">
              <div>
                <span className="text-cyan-400">Name</span>
                <span className="text-gray-500">:</span> <span className="text-yellow-300">"My Application"</span>{" "}
                <span className="text-gray-500">{"}"}</span>
                <span className="text-gray-500">,</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
            <div className="text-gray-600"> // │ ORGANIZATION</div>
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
          </div>

          <div className="mt-3">
            <div>
              <span className="text-green-400"> Projects</span>
              <span className="text-gray-500">: {"{"} </span>
              <span className="text-yellow-300">"proj-1"</span>
              <span className="text-gray-500">: {"{"} </span>
              <span className="text-cyan-400">Details</span>
              <span className="text-gray-500">,</span> <span className="text-cyan-400">ApplicationResolvers</span>{" "}
              <span className="text-gray-500">
                {"}"} {"}"}
              </span>
              <span className="text-gray-500">,</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
            <div className="text-gray-600"> // │ APPLICATIONS</div>
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
          </div>

          <div className="mt-3">
            <div>
              <span className="text-green-400"> Applications</span>
              <span className="text-gray-500">: {"{"} </span>
            </div>
            <div className="ml-4">
              <div>
                <span className="text-yellow-300">"app-web"</span>
                <span className="text-gray-500">: {"{"} </span>
                <span className="text-cyan-400">Processor</span>
                <span className="text-gray-500">:</span> <span className="text-cyan-400">PreactAppProcessor</span>{" "}
                <span className="text-gray-500">{"}"}</span>
                <span className="text-gray-500">,</span>
              </div>
              <div>
                <span className="text-yellow-300">"app-api"</span>
                <span className="text-gray-500">: {"{"} </span>
                <span className="text-cyan-400">Processor</span>
                <span className="text-gray-500">:</span> <span className="text-cyan-400">APIProcessor</span>{" "}
                <span className="text-gray-500">{"}"} </span>
              </div>
            </div>
            <div>
              <span className="text-gray-500"> {"}"}</span>
              <span className="text-gray-500">,</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
            <div className="text-gray-600"> // │ AI CIRCUITS</div>
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
          </div>

          <div className="mt-3">
            <div>
              <span className="text-green-400"> Circuits</span>
              <span className="text-gray-500">: {"{"} </span>
              <span className="text-yellow-300">"circuit-support"</span>
              <span className="text-gray-500">: {"{"} </span>
              <span className="text-cyan-400">Neurons</span>
              <span className="text-gray-500">,</span> <span className="text-cyan-400">Edges</span>{" "}
              <span className="text-gray-500">{"}"} </span>
              <span className="text-gray-500">{"}"}</span>
              <span className="text-gray-500">,</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
            <div className="text-gray-600"> // │ GOVERNANCE</div>
            <div className="text-gray-600"> // ─────────────────────────────────────</div>
            <div className="text-gray-600"> // RBAC · Quotas · Audit · Multi-tenant</div>
          </div>

          <div className="mt-4">
            <span className="text-gray-500">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
