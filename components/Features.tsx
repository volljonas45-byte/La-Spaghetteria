"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Holzbefeuerter\nOfen",
    description:
      "Unser 1.300 kg schwerer neapolitanischer Ofen erreicht 485 °C und erzeugt in unter 90 Sekunden den perfekten, gefleckten Rand. Gebaut von Handwerkern aus Neapel.",
    detail: "485 °C · 90 Sekunden",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M20 4C20 4 8 14 8 24a12 12 0 0024 0C32 14 20 4 20 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 16c0 0-5 4-5 9a5 5 0 0010 0c0-5-5-9-5-9z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Frische\nZutaten",
    description:
      "San-Marzano-Tomaten aus Kampanien, Fior-di-latte-Mozzarella aus Agerola, kaltgepresstes sizilianisches Olivenöl. Wöchentlich bezogen, niemals Kompromisse.",
    detail: "Wöchentlich geliefert · DOP-zertifiziert",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 10v3M20 27v3M10 20h3M27 20h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 16a4 4 0 100 8 4 4 0 000-8z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M20 6c0 0 2-4 2-4s-4 2-4 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Täglich\nhandgemacht",
    description:
      "Unser Teig wird jeden Morgen frisch zubereitet, 48 Stunden lang mit Tipo-00-Mehl, Naturhefe und sizilianischem Meersalz fermentiert. Niemals gehetzt.",
    detail: "48 Stunden Fermentierung · Tipo-00-Mehl",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path
          d="M8 28c2-6 4-10 12-14 8-4 14-2 16 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 32c4-4 8-6 12-6s8 2 8 6H14z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="16" r="3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-charcoal relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/40" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
              Unser Handwerk
            </span>
          </div>
          <h2
            className="font-display text-cream/90 max-w-lg leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            Die Kunst der
            <span className="italic font-normal text-gold"> perfekten Pizza</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-charcoal p-10 md:p-12 hover:bg-charcoal-light transition-colors duration-500 cursor-default"
            >
              <span className="absolute top-10 right-10 text-[11px] tracking-[0.2em] text-cream/15 font-light">
                {feature.number}
              </span>

              <div className="text-gold/60 group-hover:text-gold transition-colors duration-500 mb-8">
                {feature.icon}
              </div>

              <h3
                className="font-display text-cream mb-5 leading-tight whitespace-pre-line"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>

              <p className="text-cream/45 text-sm leading-relaxed mb-8 font-light">
                {feature.description}
              </p>

              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-gold/30 group-hover:w-10 transition-all duration-500 group-hover:bg-gold/60" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-gold/50 group-hover:text-gold/80 transition-colors duration-500">
                  {feature.detail}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold/40 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
