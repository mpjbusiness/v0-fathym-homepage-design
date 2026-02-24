"use client"

import { useState, useCallback } from "react"

export function InstallCommand({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText("deno install -A -n fai jsr:@fathym/fai")
      .catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-3.5 bg-background-secondary border border-[rgba(6,182,212,0.15)] rounded-[10px] px-[18px] py-3 font-mono text-sm text-neon-cyan-400 cursor-pointer hover:border-[rgba(6,182,212,0.3)] transition-colors ${className}`}
    >
      <span>deno install -A -n fai jsr:@fathym/fai</span>
      <span className="text-muted-foreground text-xs font-sans hover:text-foreground transition-colors">
        {copied ? "copied!" : "copy"}
      </span>
    </button>
  )
}
