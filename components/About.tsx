"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="bg-charcoal relative overflow-hidden py-24 md:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container-wide">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          ref={ref}
        >
          {/* Bild-Seite */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            ref={imageRef}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-[-8%] w-[116%] h-[116%]"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/foto-innen.jpg`}
                  alt="La Spaghetteria — Innenraum"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Bewertungs-Karte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-warm-black border border-white/8 p-8 max-w-[220px]"
            >
              <div
                className="font-display text-5xl font-bold text-gold leading-none mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                4,4
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <path
                      d="M6 1l1.18 3.09H10.5L7.94 6.02l.9 3.07L6 7.26l-2.84 1.83.9-3.07L1.5 4.09H4.82L6 1z"
                      fill={s <= 4 ? "#C9A84C" : "#C9A84C80"}
                    />
                  </svg>
                ))}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-cream/40">
                644 Bewertungen
              </div>
              <div className="mt-4 pt-4 border-t border-white/8 text-[11px] text-cream/30 font-light leading-relaxed">
                Unser Stammitaliener seit Jahren
              </div>
            </motion.div>

            {/* Terrassen-Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -top-6 -left-6 bg-pizza-red/90 p-5"
            >
              <div className="text-[9px] tracking-[0.3em] uppercase text-cream/70 mb-1">
                Im Sommer
              </div>
              <div
                className="font-display text-cream text-sm font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Überdachte Terrasse
              </div>
            </motion.div>
          </motion.div>

          {/* Text-Seite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                Über uns
              </span>
            </div>

            <h2
              className="font-display text-cream leading-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Ehrlicher Geschmack,
              <br />
              <span className="italic font-normal text-gold">
                ohne großes Tamtam
              </span>
            </h2>

            <div className="space-y-5 text-cream/50 leading-relaxed font-light text-[15px]">
              <p>
                La Spaghetteria heißt Sie willkommen zu ehrlichem italienischen
                Geschmack ohne großes Tamtam. Hier kommen Klassiker — von
                knuspriger Margherita bis zur cremigen Carbonara — frisch
                zubereitet auf den Tisch oder zum Mitnehmen.
              </p>
              <p>
                Das Ambiente ist gemütlich und zwanglos, das Team herzlich und
                aufmerksam. Im Sommer lockt die überdachte Terrasse zum
                Verweilen. Ob schneller Mittagsimbiss, entspanntes Abendessen
                mit Freunden oder Familienessen.
              </p>
              <p>
                La Spaghetteria setzt auf gute Zutaten, faire Preise und viel
                Pasta-Liebe. Ein Ort, an dem man sich sofort wohlfühlt und
                immer wieder gerne hingeht.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-0 mt-14 border-t border-white/8 pt-10">
              {[
                { value: "Seit 1987", label: "In Schwaigern" },
                { value: "Frisch", label: "Täglich zubereitet" },
                { value: "Zum", label: "Mitnehmen möglich" },
              ].map((stat) => (
                <div key={stat.label} className="pr-4">
                  <div
                    className="font-display text-gold text-xl font-bold mb-1 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-cream/30 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
