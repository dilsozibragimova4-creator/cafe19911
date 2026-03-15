"use client"

import { useState } from "react"
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://placehold.co/800x600?text=Artisan+latte+art+coffee+cup+on+rustic+wooden+table+with+warm+amber+lighting",
    alt: "Artisan latte art coffee cup on rustic wooden table with warm amber lighting",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://placehold.co/800x500?text=Eggs+benedict+with+hollandaise+sauce+and+smoked+salmon+breakfast+plate",
    alt: "Eggs Benedict with hollandaise sauce and smoked salmon breakfast plate",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://placehold.co/800x500?text=Cozy+cafe+corner+with+plush+armchairs+vintage+books+and+warm+Edison+bulb+lighting",
    alt: "Cozy cafe corner with plush armchairs vintage books and warm Edison bulb lighting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://placehold.co/800x600?text=Traditional+Uzbek+lamb+plov+rice+pilaf+with+colorful+vegetables+and+spices",
    alt: "Traditional Uzbek lamb plov rice pilaf with colorful vegetables and spices",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://placehold.co/800x500?text=Elegant+restaurant+dining+area+with+soft+lighting+white+tablecloths+and+flowers",
    alt: "Elegant restaurant dining area with soft lighting white tablecloths and flowers",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://placehold.co/800x500?text=Chocolate+fondant+dessert+with+molten+center+and+vanilla+ice+cream+scoop",
    alt: "Chocolate fondant dessert with molten center and vanilla ice cream scoop",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://placehold.co/1200x500?text=Panoramic+view+of+cafe+1991+interior+with+exposed+brick+walls+and+cozy+seating",
    alt: "Panoramic view of Cafe 1991 interior with exposed brick walls and cozy seating",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://placehold.co/800x500?text=Fresh+seasonal+fruit+tart+pastry+with+custard+cream+and+glazed+berries",
    alt: "Fresh seasonal fruit tart pastry with custard cream and glazed berries",
    span: "col-span-1 row-span-1",
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null))
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % galleryImages.length : null))

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Moments</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_45)] mt-3 mb-4 text-balance">
            A Glimpse Inside Cafe 1991
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every corner, every dish, every cup — crafted to be a feast for the eyes as much as the palate.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-[auto] gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[oklch(0.18_0.03_45)]/0 group-hover:bg-[oklch(0.18_0.03_45)]/50 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-4xl max-h-[80vh] w-full h-auto object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-[oklch(0.72_0.09_70)] scale-125" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
