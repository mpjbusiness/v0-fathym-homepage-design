"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-[18px] md:px-12 bg-[rgba(7,10,13,0.85)] backdrop-blur-[20px] border-b border-border">
      <div className="text-[19px] font-black tracking-tight bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 bg-clip-text text-transparent">
        ^AI
      </div>
      <div className="flex items-center gap-8">
        <Link
          href="#how"
          className="hidden md:inline text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
        >
          How it works
        </Link>
        <Link
          href="#docs"
          className="hidden md:inline text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
        >
          Docs
        </Link>
        <Link
          href="#github"
          className="hidden md:inline text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="#start"
          className="bg-foreground text-background px-[18px] py-2 rounded-[7px] font-bold text-sm hover:opacity-[0.88] transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
