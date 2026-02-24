const outcomes = [
  {
    icon: "\u26A1",
    iconBg: "bg-[rgba(6,182,212,0.1)]",
    title: "Build anything",
    description:
      "Works with Claude Code, Codex, Cursor, Windsurf. Bring your tools \u2014 ^AI wraps around them, not the other way round.",
  },
  {
    icon: "\uD83E\uDDE0",
    iconBg: "bg-[rgba(16,185,129,0.1)]",
    title: "Keep everything",
    description:
      "Decisions, patterns, preferences \u2014 captured as you work. Your vault grows with every session. Nothing is lost.",
  },
  {
    icon: "\uD83D\uDE80",
    iconBg: "bg-[rgba(13,148,136,0.1)]",
    title: "Ship with confidence",
    description:
      "Guardrails that reflect how you actually work. Your AI learns your standards \u2014 so you stop catching the same mistakes twice.",
  },
  {
    icon: "\u221E",
    iconBg: "bg-[rgba(52,211,153,0.08)]",
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
                className={`w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-lg mb-[18px] ${item.iconBg}`}
              >
                {item.icon}
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
