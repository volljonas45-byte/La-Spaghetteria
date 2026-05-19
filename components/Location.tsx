"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Dienstag – Freitag", time: "11:30 – 14:00 · 17:30 – 22:00 Uhr" },
  { day: "Samstag", time: "11:30 – 22:00 Uhr (durchgehend)" },
  { day: "Sonntag", time: "11:30 – 21:30 Uhr" },
  { day: "Montag", time: "Ruhetag · Geschlossen" },
];

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="bg-warm-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Google Maps — Schwaigern */}
      <div className="relative h-[480px] md:h-[540px] overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=La+Spaghetteria,+Theodor-Heuss-Stra%C3%9Fe+15,+74193+Schwaigern&output=embed&z=17"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter:
              "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="La Spaghetteria Schwaigern"
        />
        <div className="absolute inset-0 bg-warm-black/20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-warm-black to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-black to-transparent pointer-events-none" />
      </div>

      {/* Info-Bereich */}
      <div className="relative z-10 -mt-16 pb-24" ref={ref}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5"
          >
            {/* Adresse & Kontakt */}
            <div className="bg-warm-black p-10 md:p-12 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-gold/40" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                  Wo wir sind
                </span>
              </div>

              <h2
                className="font-display text-cream text-3xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Besuche uns
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={16} className="text-gold/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-cream/80 text-sm font-light leading-relaxed">
                      Theodor-Heuss-Straße 15
                      <br />
                      74193 Schwaigern
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={16} className="text-gold/60 mt-0.5 shrink-0" />
                  <div>
                    <a
                      href="tel:+4971384974"
                      className="text-cream/80 text-sm font-light hover:text-gold transition-colors block"
                    >
                      07138 / 49 74
                    </a>
                    <p className="text-cream/30 text-[11px] mt-1 font-light">
                      Auch zum telefonischen Bestellen
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+4971384974"
                className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-pizza-red text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-pizza-red-light transition-colors duration-300 font-medium"
              >
                Jetzt anrufen
              </a>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-charcoal p-10 md:p-12 lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Clock size={14} className="text-gold/50" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                  Öffnungszeiten
                </span>
              </div>

              <h3
                className="font-display text-cream text-2xl font-semibold mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Wann wir für dich da sind
              </h3>

              <div className="space-y-0">
                {hours.map((h, i) => (
                  <motion.div
                    key={h.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                    className={`flex items-center justify-between py-5 border-b border-white/6 ${
                      h.time.includes("Ruhetag")
                        ? "opacity-40"
                        : "hover:border-gold/20 transition-colors group"
                    }`}
                  >
                    <span className="text-cream/60 text-sm font-light group-hover:text-cream/80 transition-colors">
                      {h.day}
                    </span>
                    <span
                      className={`text-sm font-light tracking-wide ${
                        h.time.includes("Ruhetag")
                          ? "text-cream/30 italic"
                          : "text-cream/80"
                      }`}
                    >
                      {h.time}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/6 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold/50 mb-2">
                    Außer Haus
                  </div>
                  <p className="text-cream/40 text-[13px] font-light leading-relaxed">
                    Alle Gerichte auch zum Mitnehmen erhältlich — einfach anrufen und vorbestellen.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold/50 mb-2">
                    Im Sommer
                  </div>
                  <p className="text-cream/40 text-[13px] font-light leading-relaxed">
                    Genießt unsere überdachte Terrasse — gemütlich und zwanglos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
