import Link from "next/link"
import { Terminal } from "./terminal"
import { InstallCommand } from "./install-command"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-[100px]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Dual glow — cyan left, green right */}
      <div
        className="absolute pointer-events-none w-[600px] h-[400px]"
        style={{
          top: "35%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none w-[500px] h-[350px]"
        style={{
          top: "35%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Mark */}
      <div className="relative text-[clamp(80px,14vw,130px)] font-black tracking-[-5px] leading-none bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 bg-clip-text text-transparent mb-6">
        ^AI
      </div>

      {/* Hook */}
      <p className="text-[clamp(20px,2.8vw,28px)] text-foreground font-bold mb-2.5 tracking-tight">
        AI is powerful. Make it yours.
      </p>
      <p className="text-[clamp(15px,1.8vw,18px)] text-muted-foreground font-normal mb-11">
        The AI workbench that remembers — and compounds.
      </p>

      {/* Terminal */}
      <Terminal />

      {/* Install */}
      <div className="flex items-center justify-center gap-3 mb-[30px]">
        <InstallCommand />
      </div>

      {/* CTAs */}
      <div className="flex gap-3.5 justify-center flex-wrap mb-10">
        <Link
          href="#start"
          className="inline-flex items-center gap-2 bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 text-[#070A0D] px-[26px] py-[13px] rounded-[9px] font-extrabold text-[15px] hover:opacity-[0.88] transition-opacity tracking-tight"
        >
          {"Start Building \u2014 Free \u2192"}
        </Link>
        <Link
          href="#docs"
          className="inline-flex items-center gap-2 bg-transparent text-foreground border border-[rgba(255,255,255,0.1)] px-[26px] py-[13px] rounded-[9px] font-semibold text-[15px] hover:border-[rgba(255,255,255,0.2)] transition-colors"
        >
          Read the Docs
        </Link>
      </div>

      {/* Trust line */}
      <div className="flex gap-[18px] justify-center flex-wrap text-[13px] text-dimmer">
        <span>Open source</span>
        <span className="w-[3px] h-[3px] rounded-full bg-dimmer self-center" />
        <span>Your data, your vault</span>
        <span className="w-[3px] h-[3px] rounded-full bg-dimmer self-center" />
        <span>Works with any AI</span>
      </div>
    </section>
  )
}
