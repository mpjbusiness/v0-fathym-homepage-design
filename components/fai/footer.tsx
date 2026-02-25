import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-[26px] md:px-12 flex flex-col md:flex-row items-center justify-between gap-3.5 text-dimmer text-[13px]">
      <div>
        ^AI by{" "}
        <a href="#" className="text-dimmer hover:text-muted-foreground transition-colors">
          Fathym
        </a>
      </div>
      <div className="flex gap-6">
        <Link href="/how-it-works" className="text-dimmer hover:text-muted-foreground transition-colors">
          How it works
        </Link>
        <a href="#" className="text-dimmer hover:text-muted-foreground transition-colors">
          Docs
        </a>
        <a href="#" className="text-dimmer hover:text-muted-foreground transition-colors">
          GitHub
        </a>
        <a href="#" className="text-dimmer hover:text-muted-foreground transition-colors">
          Privacy
        </a>
        <a href="#" className="text-dimmer hover:text-muted-foreground transition-colors">
          Terms
        </a>
      </div>
      <div>{"\u00A9 2026 Fathym, Inc."}</div>
    </footer>
  )
}
