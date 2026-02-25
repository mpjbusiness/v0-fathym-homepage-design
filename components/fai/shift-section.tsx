export function ShiftSection() {
  return (
    <section id="shift" className="bg-background-secondary py-[100px] px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 opacity-70 text-center mb-5">
          What changed
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] border border-border rounded-[14px] overflow-hidden">
          {/* Left — Right now */}
          <div className="p-8 md:p-12 bg-background md:border-r border-border">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-dimmer mb-5">
              Right now
            </div>
            <p className="text-[clamp(18px,2.2vw,24px)] font-extrabold leading-[1.4] tracking-tight text-muted-foreground">
              AI creates everything. Nothing persists. You start over every
              session. You explain yourself a hundred times.
            </p>
          </div>

          {/* Right — With ^AI */}
          <div className="p-8 md:p-12 bg-background border-t md:border-t-0 border-border">
            <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-neon-cyan-400 opacity-80 mb-5">
              With ^AI
            </div>
            <p className="text-[clamp(18px,2.2vw,24px)] font-extrabold leading-[1.4] tracking-tight text-foreground">
              Your AI{" "}
              <span className="bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
                remembers.
              </span>{" "}
              Your patterns{" "}
              <span className="bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
                compound.
              </span>{" "}
              Every session builds on the last — automatically.
            </p>
          </div>
        </div>

        {/* Session bar */}
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          <div className="text-center">
            <div className="text-[clamp(32px,4vw,48px)] font-black tracking-[-2px] leading-none bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 bg-clip-text text-transparent">
              Session 1
            </div>
            <div className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">
              Start from scratch
            </div>
          </div>
          <div className="text-[28px] text-dimmer font-light leading-none pb-5">
            {"\u2192\u2192\u2192"}
          </div>
          <div className="text-center">
            <div className="text-[clamp(32px,4vw,48px)] font-black tracking-[-2px] leading-none bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 bg-clip-text text-transparent">
              Session 50
            </div>
            <div className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-wider">
              AI knows you completely
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
