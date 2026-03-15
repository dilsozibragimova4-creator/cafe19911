"use client"

import { Leaf, Home, Heart } from "lucide-react"

const highlights = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "We source only the finest local and seasonal ingredients to craft every dish with care.",
  },
  {
    icon: Home,
    title: "Cozy Atmosphere",
    desc: "Our warm, inviting space is designed to feel like a second home for every guest.",
  },
  {
    icon: Heart,
    title: "Friendly Service",
    desc: "Our dedicated team treats every guest like family, ensuring a memorable experience.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-5 -left-5 z-20 w-24 h-24 rounded-full bg-[oklch(0.72_0.09_70)] flex flex-col items-center justify-center shadow-xl border-4 border-background">
              <span className="font-serif text-xs text-[oklch(0.18_0.03_45)] font-bold tracking-widest uppercase">Since</span>
              <span className="font-serif text-2xl text-[oklch(0.18_0.03_45)] font-bold leading-none">1991</span>
            </div>
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[oklch(0.88_0.02_75)]">
              <img
                src="https://placehold.co/700x800?text=Warm+cozy+cafe+interior+with+wooden+furniture+vintage+decor+soft+amber+lighting+and+bookshelves"
                alt="Warm cozy cafe interior with wooden furniture and vintage decor"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-[oklch(0.28_0.05_50)] text-white rounded-xl p-4 shadow-xl max-w-[180px]">
              <div className="font-serif text-3xl font-bold text-[oklch(0.72_0.09_70)]">30+</div>
              <div className="text-sm text-white/70 leading-tight mt-1">Unique dishes on our menu</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_45)] mt-3 mb-5 leading-tight text-balance">
                A Legacy of Flavor & Warmth
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1991 in the vibrant heart of Tashkent, Cafe 1991 was born from a simple belief: that great food shared in a warm space can bring people together. What started as a small neighborhood coffee shop has grown into one of Tashkent's most beloved dining destinations.
                </p>
                <p>
                  For over three decades, we've been crafting recipes that blend authentic Uzbek flavors with contemporary culinary techniques. Our chefs draw inspiration from both local tradition and global cuisine, creating dishes that feel both familiar and excitingly new.
                </p>
                <p>
                  Every morning, we fill our kitchen with the aroma of freshly brewed coffee, baked bread, and seasonal produce — because at Cafe 1991, we believe the best meals start with the best ingredients.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-2">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[oklch(0.93_0.015_75)] hover:bg-[oklch(0.88_0.025_75)] transition-colors duration-200 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[oklch(0.72_0.09_70)]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.09_70)]/30 transition-colors">
                    <h.icon className="w-5 h-5 text-[oklch(0.5_0.07_55)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[oklch(0.18_0.03_45)] mb-1">{h.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
