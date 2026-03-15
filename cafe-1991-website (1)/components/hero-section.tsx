"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToReservation = () => {
    document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080?text=Steaming+coffee+cup+and+artisan+pastries+on+warm+wooden+table+with+soft+cafe+lighting+bokeh+background"
          alt="Steaming coffee cup and artisan pastries on warm wooden table with soft cafe lighting"
          className="w-full h-full object-cover scale-105"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.02_45)]/70 via-[oklch(0.12_0.03_50)]/60 to-[oklch(0.08_0.02_40)]/80" />
        {/* Warm tint */}
        <div className="absolute inset-0 bg-[oklch(0.5_0.07_55)]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[oklch(0.72_0.09_70)]/50 bg-[oklch(0.72_0.09_70)]/10 text-[oklch(0.72_0.09_70)] text-sm font-medium mb-6 backdrop-blur-sm transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.09_70)] animate-pulse" />
          Est. 1991 · Tashkent, Uzbekistan
        </div>

        {/* Headline */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 text-balance transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Welcome to{" "}
          <span className="text-[oklch(0.72_0.09_70)] italic">Cafe 1991</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Delicious food and a cozy atmosphere in the heart of Tashkent.
          Where every cup tells a story and every dish becomes a memory.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 rounded-full bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] font-semibold text-base hover:bg-[oklch(0.65_0.08_65)] transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Menu
          </button>
          <button
            onClick={scrollToReservation}
            className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:border-white hover:bg-white/10 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
          >
            Book a Table
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-bounce-scroll" />
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
