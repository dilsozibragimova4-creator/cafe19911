"use client"

import { useState } from "react"
import { CheckCircle, Loader2, Calendar, Clock, Users, Phone, User } from "lucide-react"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "17:00", "18:00", "19:00", "20:00", "21:00",
]

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", guests: "2",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.phone.trim()) e.phone = "Phone is required"
    if (!form.date) e.date = "Date is required"
    if (!form.time) e.time = "Please select a time"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({ name: "", phone: "", date: "", time: "", guests: "2" })
    }, 2000)
  }

  const inputClass = (field: keyof typeof form) =>
    `w-full bg-white/10 border ${errors[field] ? "border-red-400" : "border-white/20"} rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[oklch(0.72_0.09_70)] focus:bg-white/15 transition-all duration-200 text-sm`

  return (
    <section id="reservation" className="py-24 bg-[oklch(0.18_0.03_45)] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[oklch(0.72_0.09_70)]/5 -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[oklch(0.5_0.07_55)]/10 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-[oklch(0.72_0.09_70)] font-medium tracking-widest uppercase text-sm">Reservations</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-5 leading-tight text-balance">
                Reserve Your <span className="text-[oklch(0.72_0.09_70)] italic">Perfect</span> Table
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                Whether it's a romantic dinner, a family celebration, or a casual coffee meetup — we have the perfect spot for you. Book in advance and we'll have everything ready.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Clock, label: "Opening Hours", value: "Mon–Fri: 08:00 – 22:00\nSat–Sun: 09:00 – 23:00" },
                { icon: Phone, label: "Reservations", value: "+998 71 123 4567" },
                { icon: Calendar, label: "Advance Booking", value: "Up to 30 days in advance" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.09_70)]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[oklch(0.72_0.09_70)]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Booking Confirmed!</h3>
                <p className="text-white/60 leading-relaxed">
                  Thank you for your reservation. We'll contact you shortly to confirm your table at Cafe 1991.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] font-semibold text-sm hover:bg-[oklch(0.65_0.08_65)] transition-colors"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">Book a Table</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-white/70 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white/70 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+998 __ ___ ____"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass("phone")}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={inputClass("date")}
                      />
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="text-white/70 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Guests
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className={inputClass("guests")}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n} className="bg-[oklch(0.28_0.05_50)] text-white">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Time slots */}
                  <div>
                    <label className="text-white/70 text-xs font-medium uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Time Slot
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, time: t })}
                          className={`py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                            form.time === t
                              ? "bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] shadow-md"
                              : "bg-white/10 text-white/70 hover:bg-white/20 border border-white/10"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[oklch(0.72_0.09_70)] text-[oklch(0.18_0.03_45)] font-semibold text-base hover:bg-[oklch(0.65_0.08_65)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Confirming Reservation...
                      </>
                    ) : (
                      "Confirm Reservation"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
