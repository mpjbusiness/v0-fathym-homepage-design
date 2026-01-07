"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  currentPage?: "home" | "everything-as-code" | "synaptic" | "ftm-cli"
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getNavLinkClass = (page: string, hoverColor: string) => {
    const isActive = currentPage === page
    const baseClass = "font-medium transition-colors text-sm md:text-base"
    const activeClass = isActive ? `text-${hoverColor}` : "text-gray-300"
    return `${baseClass} ${activeClass} hover:text-${hoverColor}`
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative h-10 w-10">
            <Image src="/images/thinky-white.png" alt="Fathym" fill className="object-contain" />
          </div>
          <span className="text-lg md:text-2xl font-bold text-[#00FFFF]">Fathym</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/everything-as-code"
            className={`${currentPage === "everything-as-code" ? "text-[#00FFFF]" : "text-gray-300"} font-medium transition-colors hover:text-[#00FFFF]`}
          >
            Everything as Code
          </Link>
          <Link
            href="/synaptic"
            className={`${currentPage === "synaptic" ? "text-[#FF00FF]" : "text-gray-300"} font-medium transition-colors hover:text-[#FF00FF]`}
          >
            Synaptic
          </Link>
          <Link
            href="/ftm-cli"
            className={`${currentPage === "ftm-cli" ? "text-[#FFFF00]" : "text-gray-300"} font-medium transition-colors hover:text-[#FFFF00]`}
          >
            FTM CLI
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="/everything-as-code"
              className={`${currentPage === "everything-as-code" ? "text-[#00FFFF]" : "text-gray-300"} font-medium transition-colors hover:text-[#00FFFF]`}
              onClick={() => setIsOpen(false)}
            >
              Everything as Code
            </Link>
            <Link
              href="/synaptic"
              className={`${currentPage === "synaptic" ? "text-[#FF00FF]" : "text-gray-300"} font-medium transition-colors hover:text-[#FF00FF]`}
              onClick={() => setIsOpen(false)}
            >
              Synaptic
            </Link>
            <Link
              href="/ftm-cli"
              className={`${currentPage === "ftm-cli" ? "text-[#FFFF00]" : "text-gray-300"} font-medium transition-colors hover:text-[#FFFF00]`}
              onClick={() => setIsOpen(false)}
            >
              FTM CLI
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
