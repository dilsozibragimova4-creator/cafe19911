"use client"

import { MapPin, Phone, Clock, Calendar } from "lucide-react"

const infoCards = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["14 Amir Temur Avenue", "Tashkent, Uzbekistan 100084"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+998 71 123 4567", "+998 90 987 6543"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon – Fri: 08:00 – 22:00", "Sat – Sun: 09:00 – 23:00"],
  },
  {
    icon: Calendar,
    title: "Reservations",
    lines: ["Walk-ins welcome", "Table bookings recommended"],
  },
]

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[oklch(0.93_0.015_75)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Find Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_45)] mt-3 mb-4 text-balance">
            Visit Cafe 1991
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Nestled in the heart of Tashkent on the iconic Amir Temur Avenue. Easy to find, impossible to forget.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white border border-[oklch(0.88_0.02_75)] rounded-2xl p-6 hover:bg-[oklch(0.28_0.05_50)] transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[oklch(0.72_0.09_70)]/15 group-hover:bg-[oklch(0.72_0.09_70)]/30 flex items-center justify-center mb-4 transition-colors">
                <card.icon className="w-6 h-6 text-[oklch(0.5_0.07_55)] group-hover:text-[oklch(0.72_0.09_70)] transition-colors" />
              </div>
              <h3 className="font-semibold text-[oklch(0.18_0.03_45)] group-hover:text-white transition-colors mb-2">
                {card.title}
              </h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[420px] relative">
          <iframe
            title="Cafe 1991 Location in Tashkent"
            src="https://www.openstreetmap.org/export/embed.html?bbox=69.2300%2C41.2900%2C69.2700%2C41.3100&layer=mapnik&marker=41.2995%2C69.2401"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
          />
          {/* Map overlay badge */}
          <div className="absolute bottom-4 left-4 bg-[oklch(0.18_0.03_45)]/90 backdrop-blur-sm text-white rounded-xl px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[oklch(0.72_0.09_70)]" />
              <div>
                <div className="font-semibold text-sm">Cafe 1991</div>
                <div className="text-white/60 text-xs">14 Amir Temur Ave, Tashkent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
