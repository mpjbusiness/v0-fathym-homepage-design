export function HowSection() {
  return (
    <section id="how" className="bg-background-secondary py-[100px] px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 opacity-70 text-center mb-5">
          How it works
        </div>

        {/* Loop: Work → Persist → Compound */}
        <div className="flex items-center justify-center max-w-[560px] mx-auto mb-7">
          <div className="text-center px-3 md:px-6">
            <span className="block text-[clamp(22px,3vw,32px)] font-black tracking-[-1.5px] text-neon-cyan-400">
              Work
            </span>
            <small className="block text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">
              as normal
            </small>
          </div>
          <div className="text-lg text-dimmer shrink-0 pb-[18px]">
            {"\u2192"}
          </div>
          <div className="text-center px-3 md:px-6">
            <span className="block text-[clamp(22px,3vw,32px)] font-black tracking-[-1.5px] text-neon-green-400">
              Persist
            </span>
            <small className="block text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">
              automatically
            </small>
          </div>
          <div className="text-lg text-dimmer shrink-0 pb-[18px]">
            {"\u2192"}
          </div>
          <div className="text-center px-3 md:px-6">
            <span className="block text-[clamp(22px,3vw,32px)] font-black tracking-[-1.5px] bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
              Compound
            </span>
            <small className="block text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">
              over time
            </small>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-base max-w-[360px] mx-auto leading-relaxed">
          Each session builds on the last.
          <br />
          <strong className="font-extrabold bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
            {"Session 50 >> Session 1."}
          </strong>
        </p>
      </div>
    </section>
  )
}
