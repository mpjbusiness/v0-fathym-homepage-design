const items = [
  {
    checkClass: "bg-[rgba(6,182,212,0.1)] text-neon-cyan-400",
    title: "Nothing ships without your say-so.",
    description:
      "^AI proposes. You approve. Every context update, every vault change \u2014 you stay in control. The guardrails are yours, not ours.",
  },
  {
    checkClass: "bg-[rgba(16,185,129,0.1)] text-neon-green-400",
    title: "Bring any AI \u2014 today\u2019s or tomorrow\u2019s.",
    description:
      "Claude, Codex, Cursor, Ollama, whatever comes next. ^AI is model-agnostic by design. Your vault outlasts any single model.",
  },
  {
    checkClass: "bg-[rgba(52,211,153,0.08)] text-neon-green-300",
    title: "Fire us and keep running.",
    description:
      "Open source. Your data lives in your vault \u2014 portable, exportable, yours. No lock-in. Ever.",
  },
]

export function DeRiskSection() {
  return (
    <section id="derisk" className="bg-background py-[100px] px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 opacity-70 text-center mb-5">
          No catch
        </div>

        <div className="flex flex-col border border-border rounded-[14px] overflow-hidden max-w-[660px] mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`bg-background-secondary px-8 py-7 flex gap-5 items-start transition-colors hover:bg-background-tertiary ${
                i < items.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-[13px] font-bold mt-0.5 ${item.checkClass}`}
              >
                {"\u2713"}
              </div>
              <div>
                <h4 className="text-[15px] font-extrabold mb-1 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-[13.5px] leading-[1.65]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
