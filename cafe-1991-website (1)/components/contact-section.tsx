"use client"

import { Phone, Clock, Instagram } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "We're always happy to take your calls and help with any inquiries.",
    value: "+998 71 123 4567",
    link: "tel:+998711234567",
    linkLabel: "Call Now",
  },
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Follow us for daily specials, behind-the-scenes, and mouth-watering content.",
    value: "@cafe1991_tashkent",
    link: "https://instagram.com/cafe1991_tashkent",
    linkLabel: "Follow Us",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    desc: "Come visit us any day of the week — we're always ready to welcome you.",
    value: "Mon–Fri: 08:00–22:00\nSat–Sun: 09:00–23:00",
    link: "#reservation",
    linkLabel: "Book a Table",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.18_0.03_45)] mt-3 mb-4 text-balance">
            We'd Love to Hear From You
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a question, a special request, or just want to say hello? Reach out — we respond quickly.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="group text-center p-8 rounded-3xl bg-[oklch(0.93_0.015_75)] hover:bg-[oklch(0.18_0.03_45)] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.09_70)]/15 group-hover:bg-[oklch(0.72_0.09_70)]/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                <item.icon className="w-7 h-7 text-[oklch(0.5_0.07_55)] group-hover:text-[oklch(0.72_0.09_70)] transition-colors" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[oklch(0.18_0.03_45)] group-hover:text-white transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/60 transition-colors leading-relaxed mb-4">
                {item.desc}
              </p>
              <p className="font-semibold text-[oklch(0.38_0.06_55)] group-hover:text-[oklch(0.72_0.09_70)] transition-colors text-sm whitespace-pre-line mb-5">
                {item.value}
              </p>

              {/* Button */}
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border-2 border-[oklch(0.72_0.09_70)] text-[oklch(0.5_0.07_55)] group-hover:bg-[oklch(0.72_0.09_70)] group-hover:text-[oklch(0.18_0.03_45)] group-hover:border-[oklch(0.72_0.09_70)] transition-all duration-200"
              >
                {item.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
