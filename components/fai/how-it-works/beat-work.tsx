export function BeatWork() {
  return (
    <section id="work" className="relative bg-background-secondary py-[100px] px-6">
      {/* Accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[300px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)",
        }}
      />

      <div className="max-w-[860px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center">
          {/* Copy */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 mb-4 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan-400 shrink-0" />
              Step one
            </div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-black tracking-[-1.5px] leading-[1.1] mb-5 text-foreground">
              Work with{" "}
              <span className="bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
                any AI,
              </span>{" "}
              any tool.
            </h2>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              ^AI doesn{"'"}t replace your tools. It wraps around them.{" "}
              <strong className="text-foreground font-semibold">
                Claude Code, Codex, Cursor, Windsurf, Ollama
              </strong>{" "}
              {"\u2014"} whatever you already use keeps working exactly as it does
              today. You just run{" "}
              <code className="font-mono text-[13px] text-neon-cyan-400 bg-background-tertiary px-1.5 py-0.5 rounded">
                fai
              </code>{" "}
              first.
            </p>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              That one command loads your vault {"\u2014"} everything ^AI knows
              about how you work {"\u2014"} and hands it to whatever AI you{"'"}re
              using next. No configuration. No setup per-project. No
              re-explaining yourself.
            </p>

            {/* Detail pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Claude Code",
                "Cursor",
                "Codex",
                "Windsurf",
                "Ollama",
                "+ whatever's next",
              ].map((tool) => (
                <div
                  key={tool}
                  className="inline-flex items-center gap-[7px] bg-background border border-border rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-neon-cyan-400" />
                  {tool}
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-neon-cyan-400 bg-[rgba(6,182,212,0.04)] px-5 py-4 rounded-r-lg">
              <p className="text-[15px] text-muted-foreground leading-relaxed italic">
                Your context loads in seconds.{" "}
                <strong className="text-foreground not-italic font-bold">
                  Session 50 picks up exactly where session 49 left off.
                </strong>
              </p>
            </div>
          </div>

          {/* Terminal visual */}
          <div>
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
                  ~ fai
                </div>
              </div>
              <div className="px-[22px] py-[18px] font-mono text-[12.5px] leading-[1.9]">
                <span className="block">
                  <span className="text-dimmer">$ </span>
                  <span className="text-neon-cyan-400 font-semibold">fai</span>
                </span>
                <span className="block text-dimmer">
                  {"\u2500".repeat(28)}
                </span>
                <span className="block">
                  <span className="text-neon-green-400">&#10003;</span>{" "}
                  <span className="text-[#6A8A9A]">Loading vault...</span>
                </span>
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
                  <span className="text-muted-foreground">Ready. Using:</span>
                </span>
                <span className="block pl-4">
                  <span className="text-neon-green-300 font-semibold">
                    claude-code
                  </span>{" "}
                  <span className="text-[#6A8A9A]">
                    &middot; detected from environment
                  </span>
                </span>
                <span className="block text-dimmer">&nbsp;</span>
                <span className="block">
                  <span className="text-dimmer">{">"} </span>
                  <span className="text-neon-cyan-400 font-semibold">
                    switch to cursor for this session
                  </span>
                </span>
                <span className="block">
                  <span className="text-neon-green-400">&#10003;</span>{" "}
                  <span className="text-[#6A8A9A]">
                    Switched. Vault context re-applied.
                  </span>
                </span>
                <span className="block pl-4">
                  <span className="text-[#6A8A9A]">
                    Your 47 patterns are now active in Cursor.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
