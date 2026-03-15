"use client"

import { useState, useEffect } from "react"
import { Menu, X, Coffee } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.18_0.03_45)]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-[oklch(0.72_0.09_70)] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-[oklch(0.18_0.03_45)]" />
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wide">
              Cafe <span className="text-[oklch(0.72_0.09_70)]">1991</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-[oklch(0.72_0.09_70)] text-sm font-medium tracking-wider uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.09_70)] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("#reservation")}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] text-sm font-semibold hover:bg-[oklch(0.65_0.08_65)] transition-all duration-200 hover:scale-105 shadow-md"
            >
              Book a Table
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[oklch(0.18_0.03_45)] shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="font-serif text-xl text-white font-bold">
              Cafe <span className="text-[oklch(0.72_0.09_70)]">1991</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-white/80 hover:text-[oklch(0.72_0.09_70)] py-3 px-2 text-base font-medium border-b border-white/5 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#reservation")}
              className="mt-6 py-3 rounded-full bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] font-semibold text-center hover:bg-[oklch(0.65_0.08_65)] transition-colors"
            >
              Book a Table
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}
