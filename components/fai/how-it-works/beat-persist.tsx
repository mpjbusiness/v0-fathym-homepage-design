const vaultEntries = [
  {
    tag: "pattern",
    tagClass: "bg-[rgba(6,182,212,0.1)] text-neon-cyan-400",
    title: "PostgreSQL for all persistence",
    detail: "\u2014 prefer over MySQL or SQLite in production contexts",
    session: "First seen session 4 \u00b7 reinforced 8 times",
  },
  {
    tag: "decision",
    tagClass: "bg-[rgba(16,185,129,0.1)] text-neon-green-400",
    title: "JWT over sessions",
    detail: " for auth \u2014 stateless architecture preferred",
    session: "Decided session 8 \u00b7 never overridden",
  },
  {
    tag: "pattern",
    tagClass: "bg-[rgba(6,182,212,0.1)] text-neon-cyan-400",
    title: "Middleware style:",
    detail:
      " thin controllers, fat services, repository pattern for data access",
    session: "Established session 12 \u00b7 14 uses",
  },
  {
    tag: "preference",
    tagClass: "bg-[rgba(52,211,153,0.08)] text-neon-green-300",
    title: "Verbose error messages",
    detail: " in dev, silent + logged in prod",
    session: "Noted session 19",
  },
]

export function BeatPersist() {
  return (
    <section id="persist" className="relative bg-background py-[100px] px-6">
      {/* Accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[300px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)",
        }}
      />

      <div className="max-w-[860px] mx-auto">
        {/* Reverse order on desktop: visual left, copy right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[72px] items-center">
          {/* Vault visual (appears first on desktop via order) */}
          <div className="order-2 md:order-1">
            <div className="bg-background-tertiary border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-border flex items-center gap-2.5 text-xs font-semibold text-muted-foreground font-mono">
                <div className="w-[22px] h-[22px] rounded-md bg-[rgba(16,185,129,0.1)] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
                  </svg>
                </div>
                vault &middot; 47 entries
              </div>
              <div className="p-[18px] flex flex-col gap-2.5">
                {vaultEntries.map((entry) => (
                  <div
                    key={entry.title}
                    className="flex items-start gap-3 p-3 bg-background border border-border rounded-[9px] text-[12.5px] hover:border-border-hover transition-colors"
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 mt-0.5 ${entry.tagClass}`}
                    >
                      {entry.tag}
                    </span>
                    <div>
                      <div className="text-muted-foreground leading-normal">
                        <strong className="text-foreground font-semibold">
                          {entry.title}
                        </strong>
                        {entry.detail}
                      </div>
                      <div className="text-[11px] text-dimmer mt-0.5">
                        {entry.session}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-green-400 mb-4 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green-400 shrink-0" />
              Step two
            </div>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-black tracking-[-1.5px] leading-[1.1] mb-5 text-foreground">
              Everything you decide{" "}
              <span className="bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
                gets kept.
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              Every session, ^AI watches. The stack choices you make. The
              patterns you settle into. The preferences you express. The
              decisions you explain once and then expect to stick.
            </p>
            <p className="text-muted-foreground text-base leading-[1.75] mb-7">
              They go into your{" "}
              <strong className="text-foreground font-semibold">vault</strong>{" "}
              {"\u2014"} a living record of how you build. Not a log. Not a chat
              history. A structured, queryable context that your AI can actually
              use.
            </p>

            {/* Detail pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Tech stack choices",
                "Code patterns",
                "Naming conventions",
                "Architectural decisions",
                "Personal preferences",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-[7px] bg-background-secondary border border-border rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-neon-green-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-neon-green-400 bg-[rgba(16,185,129,0.04)] px-5 py-4 rounded-r-lg">
              <p className="text-[15px] text-muted-foreground leading-relaxed italic">
                <strong className="text-foreground not-italic font-bold">
                  Nothing ships without your say-so.
                </strong>{" "}
                ^AI proposes vault updates. You approve, edit, or reject them.
                The context is always yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
