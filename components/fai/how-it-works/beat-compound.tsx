const models = [
  { name: "Claude Code", desc: "Anthropic", status: "Active", active: true },
  { name: "Codex", desc: "OpenAI", status: "Active", active: true },
  { name: "Cursor", desc: "Anysphere", status: "Active", active: true },
  { name: "Windsurf", desc: "Codeium", status: "Active", active: true },
  { name: "Ollama", desc: "Local models", status: "Active", active: true },
  {
    name: "Whatever's next",
    desc: "Your vault is ready",
    status: "Model-agnostic",
    active: false,
  },
]

export function BeatCompound() {
  return (
    <section
      id="compound"
      className="relative bg-background-secondary py-[100px] px-6"
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[300px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.2) 30%, rgba(16,185,129,0.2) 70%, transparent)",
        }}
      />

      <div className="max-w-[860px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center">
          {/* Copy */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-green-300 mb-4 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green-300 shrink-0" />
              Step three
            </div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-black tracking-[-1.5px] leading-[1.1] mb-5 text-foreground">
              Every session makes{" "}
              <span className="bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
                the next one smarter.
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              This is the part most AI tools skip. Session one and session fifty
              feel identical {"\u2014"} you{"'"}re still re-explaining the same
              context, the same preferences, the same way you think.
            </p>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              With ^AI, the vault compounds. Patterns get reinforced. Decisions
              stop being relitigated. Your AI develops a model of{" "}
              <strong className="text-foreground font-semibold">
                how you specifically work
              </strong>{" "}
              {"\u2014"} and applies it without being asked.
            </p>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              And when the underlying model changes {"\u2014"} Claude releases a
              new version, you switch to a different tool {"\u2014"}{" "}
              <strong className="text-foreground font-semibold">
                your context survives.
              </strong>{" "}
              You own the intelligence, not the model vendor.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-neon-cyan-400 bg-[rgba(6,182,212,0.04)] px-5 py-4 rounded-r-lg">
              <p className="text-[15px] text-muted-foreground leading-relaxed italic">
                The vault outlasts any single AI model.{" "}
                <strong className="text-foreground not-italic font-bold">
                  Your professional knowledge is portable, forever.
                </strong>
              </p>
            </div>
          </div>

          {/* Visuals */}
          <div className="flex flex-col gap-3">
            {/* Terminal */}
            <div
              className="bg-[#060A0C] border border-[rgba(6,182,212,0.15)] rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(6,182,212,0.03), 0 32px 64px rgba(0,0,0,0.6)",
              }}
            >
              <div className="bg-background-secondary px-4 py-[10px] flex items-center gap-[7px] border-b border-[rgba(255,255,255,0.05)]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
                <div className="text-dimmer text-[11px] mx-auto font-mono tracking-wider">
                  ~ fai &middot; session 50
                </div>
              </div>
              <div className="px-[22px] py-[18px] font-mono text-[12.5px] leading-[1.9]">
                <span className="block">
                  <span className="text-neon-green-400">&#10003;</span>{" "}
                  <span className="text-neon-green-300 font-semibold">
                    47 patterns &middot; 12 decisions &middot; 3 agents
                  </span>
                </span>
                <span className="block text-dimmer">
                  {"\u2500".repeat(28)}
                </span>
                <span className="block">
                  <span className="text-dimmer">{">"} </span>
                  <span className="text-neon-cyan-400 font-semibold">
                    Build me a REST API for user auth
                  </span>
                </span>
                <span className="block text-dimmer">&nbsp;</span>
                <span className="block">
                  <span className="text-[#6A8A9A]">
                    Applying your established context:
                  </span>
                </span>
                <span className="block pl-4">
                  <span className="text-neon-green-300 font-semibold">
                    PostgreSQL
                  </span>{" "}
                  <span className="text-[#6A8A9A]">
                    &middot; your preference since session 4
                  </span>
                </span>
                <span className="block pl-4">
                  <span className="text-neon-green-300 font-semibold">
                    JWT tokens
                  </span>{" "}
                  <span className="text-[#6A8A9A]">
                    &middot; decided session 8, never overridden
                  </span>
                </span>
                <span className="block pl-4">
                  <span className="text-neon-green-300 font-semibold">
                    Repository pattern
                  </span>{" "}
                  <span className="text-[#6A8A9A]">
                    &middot; 14 prior uses
                  </span>
                </span>
                <span className="block pl-4">
                  <span className="text-neon-green-300 font-semibold">
                    Verbose dev errors
                  </span>{" "}
                  <span className="text-[#6A8A9A]">
                    &middot; noted session 19
                  </span>
                </span>
                <span className="block text-dimmer">&nbsp;</span>
                <span className="block">
                  <span className="text-neon-green-400">{"\u2192"}</span>{" "}
                  <span className="text-[#6A8A9A]">
                    Scaffolding with your standards...
                  </span>
                </span>
              </div>
            </div>

            {/* Model grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {models.map((model) => (
                <div
                  key={model.name}
                  className="bg-background p-5 hover:bg-background-tertiary transition-colors"
                >
                  <div className="text-sm font-bold text-foreground mb-1">
                    {model.name}
                  </div>
                  <div className="text-xs text-dimmer">{model.desc}</div>
                  <div
                    className={`mt-2.5 text-[11px] font-semibold uppercase tracking-wider ${
                      model.active ? "text-neon-cyan-400" : "text-dimmer"
                    }`}
                  >
                    {model.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
