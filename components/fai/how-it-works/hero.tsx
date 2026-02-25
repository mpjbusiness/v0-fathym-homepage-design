export function HowItWorksHero() {
  return (
    <header className="relative pt-[160px] pb-20 px-6 text-center">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.02) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 100% at 50% 0%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 100% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative">
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-neon-cyan-400 opacity-70 mb-5">
          How it works
        </div>
        <h1 className="text-[clamp(36px,6vw,64px)] font-black tracking-[-2.5px] leading-[1.05] mb-5 text-foreground text-balance">
          Work. Persist. Compound.
        </h1>
        <p className="text-[clamp(16px,2vw,20px)] text-muted-foreground max-w-[520px] mx-auto mb-14 leading-relaxed">
          Three things happen every time you use ^AI. Together, they change what
          AI can be for you.
        </p>

        {/* Loop strip */}
        <div className="inline-flex items-center bg-background-secondary border border-border rounded-xl px-8 py-5">
          <div className="text-center px-5">
            <div className="text-lg font-black tracking-tight text-neon-cyan-400">
              Work
            </div>
            <div className="text-[11px] text-dimmer mt-[3px] uppercase tracking-wider">
              as normal
            </div>
          </div>
          <div className="text-base text-dimmer shrink-0 pb-3.5">
            {"\u2192"}
          </div>
          <div className="text-center px-5">
            <div className="text-lg font-black tracking-tight text-neon-green-400">
              Persist
            </div>
            <div className="text-[11px] text-dimmer mt-[3px] uppercase tracking-wider">
              automatically
            </div>
          </div>
          <div className="text-base text-dimmer shrink-0 pb-3.5">
            {"\u2192"}
          </div>
          <div className="text-center px-5">
            <div className="text-lg font-black tracking-tight bg-gradient-to-br from-neon-cyan-400 to-neon-green-300 bg-clip-text text-transparent">
              Compound
            </div>
            <div className="text-[11px] text-dimmer mt-[3px] uppercase tracking-wider">
              over time
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
