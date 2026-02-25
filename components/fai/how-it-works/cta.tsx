import Link from "next/link"
import { InstallCommand } from "../install-command"

export function HowItWorksCta() {
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

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] w-[600px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.06) 0%, rgba(16,185,129,0.04) 50%, transparent 70%)",
        }}
      />

      <div className="relative">
        <h2 className="text-[clamp(28px,4vw,48px)] font-black tracking-[-2px] leading-[1.1] mb-4 text-foreground">
          Ready to start compounding?
        </h2>
        <p className="text-muted-foreground text-[17px] max-w-[420px] mx-auto mb-10 leading-[1.7]">
          Install in under a minute. Your first session starts building context
          immediately.
        </p>

        <div className="flex flex-col items-center gap-3.5">
          <InstallCommand className="bg-background" />
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 text-[#070A0D] px-7 py-[13px] rounded-[9px] font-extrabold text-[15px] hover:opacity-[0.88] transition-opacity tracking-tight"
          >
            {"Start Building \u2014 Free \u2192"}
          </Link>
        </div>
      </div>
    </section>
  )
}
