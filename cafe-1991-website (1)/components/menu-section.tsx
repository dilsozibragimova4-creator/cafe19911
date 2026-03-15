"use client"

import { useState } from "react"

const categories = ["Breakfast", "Main Dishes", "Desserts", "Drinks"] as const
type Category = (typeof categories)[number]

const menuData: Record<Category, { name: string; desc: string; price: string }[]> = {
  Breakfast: [
    { name: "Classic Eggs Benedict", desc: "Poached eggs, hollandaise sauce, smoked salmon on toasted brioche", price: "55,000 UZS" },
    { name: "Avocado Toast", desc: "Sourdough bread, fresh avocado, cherry tomatoes, feta cheese, microgreens", price: "45,000 UZS" },
    { name: "Shakshuka", desc: "Eggs poached in spiced tomato sauce, peppers, onions, served with warm bread", price: "40,000 UZS" },
    { name: "French Toast", desc: "Thick-cut brioche, maple syrup, fresh berries, whipped cream", price: "38,000 UZS" },
    { name: "Granola Bowl", desc: "House-made granola, Greek yogurt, seasonal fruits, honey, chia seeds", price: "32,000 UZS" },
  ],
  "Main Dishes": [
    { name: "Lamb Plov", desc: "Traditional Uzbek rice pilaf with slow-cooked lamb, carrots, and spices", price: "85,000 UZS" },
    { name: "Grilled Salmon", desc: "Atlantic salmon fillet, lemon butter sauce, seasonal vegetables, herb rice", price: "95,000 UZS" },
    { name: "Pasta Carbonara", desc: "Handmade pasta, guanciale, egg yolk, Pecorino Romano, black pepper", price: "72,000 UZS" },
    { name: "Chicken Marsala", desc: "Pan-seared chicken breast, Marsala wine sauce, mushrooms, mashed potatoes", price: "78,000 UZS" },
    { name: "Beef Tenderloin", desc: "200g prime beef, red wine reduction, truffle butter, roasted asparagus", price: "120,000 UZS" },
  ],
  Desserts: [
    { name: "Tiramisu", desc: "Classic Italian dessert with espresso-soaked ladyfingers, mascarpone cream", price: "28,000 UZS" },
    { name: "Crème Brûlée", desc: "Vanilla custard with caramelized sugar crust, fresh berries on the side", price: "30,000 UZS" },
    { name: "Chocolate Fondant", desc: "Warm dark chocolate cake with molten center, vanilla ice cream", price: "32,000 UZS" },
    { name: "Baklava", desc: "Flaky pastry with walnuts, honey, and cardamom — a nod to our Uzbek roots", price: "22,000 UZS" },
    { name: "Seasonal Fruit Tart", desc: "Buttery pastry shell, vanilla custard cream, glazed seasonal fresh fruits", price: "26,000 UZS" },
  ],
  Drinks: [
    { name: "Signature Espresso", desc: "Double shot of our house blend, velvety crema, served with sparkling water", price: "18,000 UZS" },
    { name: "Flat White", desc: "Ristretto shots with silky microfoam milk, latte art", price: "22,000 UZS" },
    { name: "Cold Brew", desc: "12-hour cold-brewed coffee, served over ice with optional flavored syrups", price: "24,000 UZS" },
    { name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed oat milk, hint of honey", price: "25,000 UZS" },
    { name: "Fresh Pomegranate Juice", desc: "Freshly pressed pomegranate juice, a taste of Uzbekistan", price: "20,000 UZS" },
  ],
}

export default function MenuSection() {
  const [active, setActive] = useState<Category>("Breakfast")

  return (
    <section id="menu" className="py-24 bg-[oklch(0.93_0.015_75)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Our Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_45)] mt-3 mb-4 text-balance">
            Explore Our Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every dish is crafted with passion and the finest ingredients, blending international flavors with the warmth of Uzbek hospitality.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-[oklch(0.38_0.06_55)] text-white shadow-md scale-105"
                  : "bg-white text-[oklch(0.38_0.06_55)] border border-[oklch(0.88_0.02_75)] hover:border-[oklch(0.5_0.07_55)] hover:bg-[oklch(0.97_0.012_80)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[active].map((item, i) => (
            <div
              key={item.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Card inner — invert on hover */}
              <div className="p-6 group-hover:bg-[oklch(0.28_0.05_50)] transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-lg font-semibold text-[oklch(0.18_0.03_45)] group-hover:text-white transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <span className="flex-shrink-0 font-semibold text-[oklch(0.5_0.07_55)] group-hover:text-[oklch(0.72_0.09_70)] transition-colors text-sm whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 h-px bg-[oklch(0.88_0.02_75)] group-hover:bg-white/20 transition-colors" />
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-[oklch(0.72_0.09_70)] group-hover:text-[oklch(0.82_0.04_65)] font-medium uppercase tracking-wider">
                    {active}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[oklch(0.72_0.09_70)]/10 group-hover:bg-[oklch(0.72_0.09_70)]/30 flex items-center justify-center transition-colors">
                    <span className="text-[oklch(0.5_0.07_55)] group-hover:text-[oklch(0.72_0.09_70)] text-xs font-bold">✦</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">Ready to taste something extraordinary?</p>
          <button
            onClick={() => document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full bg-[oklch(0.38_0.06_55)] text-white font-semibold hover:bg-[oklch(0.28_0.05_50)] transition-all duration-200 hover:scale-105 shadow-md"
          >
            Reserve Your Table
          </button>
        </div>
      </div>
    </section>
  )
}
