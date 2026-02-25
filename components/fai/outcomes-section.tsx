const outcomes = [
  {
    iconBg: "bg-[rgba(6,182,212,0.1)]",
    iconColor: "#22D3EE",
    iconPath: (
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    ),
    title: "Build anything",
    description:
      "Works with Claude Code, Codex, Cursor, Windsurf. Bring your tools \u2014 ^AI wraps around them, not the other way round.",
  },
  {
    iconBg: "bg-[rgba(16,185,129,0.1)]",
    iconColor: "#10B981",
    iconPath: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </>
    ),
    title: "Keep everything",
    description:
      "Decisions, patterns, preferences \u2014 captured as you work. Your vault grows with every session. Nothing is lost.",
  },
  {
    iconBg: "bg-[rgba(13,148,136,0.1)]",
    iconColor: "#0D9488",
    iconPath: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    title: "Ship with confidence",
    description:
      "Guardrails that reflect how you actually work. Your AI learns your standards \u2014 so you stop catching the same mistakes twice.",
  },
  {
    iconBg: "bg-[rgba(52,211,153,0.08)]",
    iconColor: "#34D399",
    iconPath: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
    title: "Compound forever",
    description:
      "Session 50 is smarter than session 1. When AI models change, your context doesn\u2019t. You own the intelligence.",
  },
]

export function OutcomesSection() {
  return (
    <section id="outcomes" className="bg-background py-[100px] px-6">
      <div className="max-w-[1040px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 opacity-70 text-center mb-5">
          What you get
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-[14px] overflow-hidden">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-background-secondary p-7 md:p-9 transition-colors hover:bg-background-tertiary"
            >
              <div
                className={`w-[38px] h-[38px] rounded-[9px] flex items-center justify-center mb-[18px] ${item.iconBg}`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={item.iconColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.iconPath}
                </svg>
              </div>
              <h3 className="text-base font-extrabold mb-2.5 tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-[13.5px] leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
