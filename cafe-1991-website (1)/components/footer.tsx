"use client"

import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservation" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Instagram, href: "https://instagram.com/cafe1991_tashkent", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[oklch(0.12_0.025_45)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.09_70)] flex items-center justify-center shadow">
                <Coffee className="w-5 h-5 text-[oklch(0.18_0.03_45)]" />
              </div>
              <span className="font-serif text-2xl font-bold">
                Cafe <span className="text-[oklch(0.72_0.09_70)]">1991</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              A cozy corner in the heart of Tashkent where great coffee meets great company. Join us for a memorable experience since 1991.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.09_70)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/55 hover:text-[oklch(0.72_0.09_70)] text-sm transition-colors duration-200 relative group text-left"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[oklch(0.72_0.09_70)] group-hover:w-full transition-all duration-300" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[oklch(0.72_0.09_70)] mt-0.5 flex-shrink-0" />
                <span className="text-white/55">14 Amir Temur Avenue,<br />Tashkent, Uzbekistan 100084</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[oklch(0.72_0.09_70)] flex-shrink-0" />
                <a href="tel:+998711234567" className="text-white/55 hover:text-[oklch(0.72_0.09_70)] transition-colors">
                  +998 71 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[oklch(0.72_0.09_70)] flex-shrink-0" />
                <a href="mailto:hello@cafe1991.uz" className="text-white/55 hover:text-[oklch(0.72_0.09_70)] transition-colors">
                  hello@cafe1991.uz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Cafe 1991, Tashkent. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Crafted with love in Tashkent, Uzbekistan
          </p>
        </div>
      </div>
    </footer>
  )
}
