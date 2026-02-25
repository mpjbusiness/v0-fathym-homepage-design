"use client"

import { useEffect, useRef, useState } from "react"

interface TerminalLine {
  id: string
  content: string
  delay: number
  type: "type" | "instant"
  speed?: number
}

const terminalSequence: TerminalLine[] = [
  { id: "cmd1", content: "fai", delay: 300, type: "type", speed: 70 },
  { id: "sep1", content: "\u2500".repeat(32), delay: 900, type: "instant" },
  {
    id: "line2",
    content: "CHECK Loading vault from previous sessions...",
    delay: 1100,
    type: "instant",
  },
  {
    id: "line3",
    content: "CHECK_VAL 47 patterns \u00b7 12 decisions \u00b7 3 agents",
    delay: 1800,
    type: "instant",
  },
  { id: "sep2", content: "\u2500".repeat(32), delay: 2400, type: "instant" },
  {
    id: "line4",
    content: "PROMPT Build me a REST API for user auth",
    delay: 2900,
    type: "instant",
  },
  {
    id: "line5",
    content: "DESC Using your established patterns:",
    delay: 4000,
    type: "instant",
  },
  {
    id: "line6",
    content: "PREF PostgreSQL \u00b7 your preference since session 12",
    delay: 4700,
    type: "instant",
  },
  {
    id: "line7",
    content: "PREF JWT tokens \u00b7 established session 8",
    delay: 5300,
    type: "instant",
  },
]

function renderLine(content: string) {
  if (content.startsWith("CHECK_VAL ")) {
    const text = content.slice(10)
    return (
      <span>
        <span className="text-neon-green-400">&#10003;</span>{" "}
        <span className="text-neon-green-300 font-semibold">{text}</span>
      </span>
    )
  }
  if (content.startsWith("CHECK ")) {
    const text = content.slice(6)
    return (
      <span>
        <span className="text-neon-green-400">&#10003;</span>{" "}
        <span className="text-[#7A9BAA]">{text}</span>
      </span>
    )
  }
  if (content.startsWith("PROMPT ")) {
    const text = content.slice(7)
    return (
      <span>
        <span className="text-dimmer">{">"} </span>
        <span className="text-neon-cyan-400 font-semibold">{text}</span>
      </span>
    )
  }
  if (content.startsWith("DESC ")) {
    const text = content.slice(5)
    return <span className="text-[#7A9BAA]">{text}</span>
  }
  if (content.startsWith("PREF ")) {
    const rest = content.slice(5)
    const parts = rest.split(" \u00b7 ")
    return (
      <span>
        {"  "}
        <span className="text-neon-green-300 font-semibold">{parts[0]}</span>
        {parts[1] && (
          <span className="text-[#7A9BAA]"> &middot; {parts[1]}</span>
        )}
      </span>
    )
  }
  return <span className="text-dimmer">{content}</span>
}

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<Record<string, string>>({})
  const [typingText, setTypingText] = useState("")
  const [showCursor, setShowCursor] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      const all: Record<string, string> = {}
      terminalSequence.forEach((s) => {
        all[s.id] = s.content
      })
      setVisibleLines(all)
      return
    }

    terminalSequence.forEach((step) => {
      setTimeout(() => {
        if (step.type === "instant") {
          setVisibleLines((prev) => ({ ...prev, [step.id]: step.content }))
        } else {
          setShowCursor(true)
          let i = 0
          const iv = setInterval(() => {
            i++
            setTypingText(step.content.slice(0, i))
            if (i >= step.content.length) {
              clearInterval(iv)
              setShowCursor(false)
              setVisibleLines((prev) => ({ ...prev, [step.id]: step.content }))
              setTypingText("")
            }
          }, step.speed || 70)
        }
      }, step.delay)
    })
  }, [])

  return (
    <div className="w-full max-w-[600px] mx-auto mb-9">
      <div
        className="bg-[#060A0C] border border-[rgba(6,182,212,0.18)] rounded-xl overflow-hidden text-left"
        style={{
          boxShadow:
            "0 0 0 1px rgba(6,182,212,0.04), 0 40px 80px rgba(0,0,0,0.7), 0 0 80px rgba(6,182,212,0.04), 0 0 40px rgba(16,185,129,0.03)",
        }}
      >
        {/* Title bar */}
        <div className="bg-background-secondary px-4 py-[10px] flex items-center gap-[7px] border-b border-[rgba(255,255,255,0.05)]">
          <div className="w-[11px] h-[11px] rounded-full bg-[#FF5F57]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#28C840]" />
          <div className="text-dimmer text-xs mx-auto font-mono tracking-wider">
            ~ fai
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-6 font-mono text-[13px] leading-8 min-h-[200px]">
          {/* Command line */}
          <span className="block">
            <span className="text-dimmer">$ </span>
            <span className="text-neon-cyan-400 font-semibold">
              {visibleLines["cmd1"] || typingText}
            </span>
            {showCursor && (
              <span className="inline-block w-[2px] h-[13px] bg-neon-cyan-400 align-middle animate-pulse" />
            )}
          </span>

          {/* Separator 1 */}
          {visibleLines["sep1"] && (
            <span className="block text-dimmer">{visibleLines["sep1"]}</span>
          )}

          {/* Lines 2-3 */}
          {visibleLines["line2"] && (
            <span className="block">{renderLine(visibleLines["line2"])}</span>
          )}
          {visibleLines["line3"] && (
            <span className="block">{renderLine(visibleLines["line3"])}</span>
          )}

          {/* Separator 2 */}
          {visibleLines["sep2"] && (
            <span className="block text-dimmer">{visibleLines["sep2"]}</span>
          )}

          {/* Lines 4-7 */}
          {visibleLines["line4"] && (
            <span className="block">{renderLine(visibleLines["line4"])}</span>
          )}
          {visibleLines["line5"] && (
            <span className="block">{renderLine(visibleLines["line5"])}</span>
          )}
          {visibleLines["line6"] && (
            <span className="block">{renderLine(visibleLines["line6"])}</span>
          )}
          {visibleLines["line7"] && (
            <span className="block">{renderLine(visibleLines["line7"])}</span>
          )}
        </div>
      </div>
    </div>
  )
}
