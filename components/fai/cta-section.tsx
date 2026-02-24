import Link from "next/link"
import { InstallCommand } from "./install-command"

export function CtaSection() {
  return (
    <section
      id="start"
      className="relative bg-background-secondary text-center py-[120px] px-6 overflow-hidden"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #22D3EE 40%, #10B981 60%, transparent)",
        }}
      />

      {/* Dual glows */}
      <div
        className="absolute pointer-events-none w-[400px] h-[300px]"
        style={{
          top: 0,
          left: "30%",
          transform: "translate(-50%, -30%)",
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.07), transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none w-[350px] h-[280px]"
        style={{
          top: 0,
          left: "70%",
          transform: "translate(-50%, -30%)",
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.06), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative">
        <div className="text-[clamp(56px,9vw,88px)] font-black tracking-[-4px] bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 bg-clip-text text-transparent mb-4">
          ^AI
        </div>

        <h2 className="text-[clamp(26px,3.5vw,40px)] font-black tracking-[-1.2px] leading-[1.15] mb-3.5 text-foreground">
          AI is powerful.
          <br />
          Make it yours.
        </h2>

        <p className="text-muted-foreground text-[17px] max-w-[440px] mx-auto mb-10 leading-[1.7]">
          Install in under a minute. Your first session starts building context
          immediately.
        </p>

        <div className="flex flex-col items-center gap-3.5">
          <InstallCommand className="bg-background" />
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 text-[#070A0D] px-[26px] py-[13px] rounded-[9px] font-extrabold text-[15px] hover:opacity-[0.88] transition-opacity tracking-tight mt-1"
          >
            {"Start Building \u2014 Free \u2192"}
          </Link>
        </div>
      </div>
    </section>
  )
}
