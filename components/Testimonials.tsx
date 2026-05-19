"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const reviews = [
  {
    name: "Michael",
    location: "Schwaigern",
    rating: 5,
    text: "Wir holen uns regelmäßig Pizza zum Mitnehmen. Ich mag die Pizza sehr, denn der Geschmack ist immer individuell und stimmig. Das Preis-Leistungs-Verhältnis ist auch top.",
    detail: "Pizza zum Mitnehmen",
    date: "Mai 2025",
  },
  {
    name: "Ludo",
    location: "Stammgast",
    rating: 5,
    text: "Die Pizza ist die beste, die ich je gegessen habe. Ich esse nur Margherita, daher kann ich gute Vergleiche anstellen. Unser Stammitaliener — immer wieder gerne.",
    detail: "Margherita",
    date: "Mai 2025",
  },
  {
    name: "Familie Kasper",
    location: "Kleingartach",
    rating: 5,
    text: "Viele Grüße! Wir haben noch nie so gute Pizza gegessen wie bei Ihnen. Ein Ort, an dem man sich sofort wohlfühlt und immer wieder gerne hingeht.",
    detail: "Familienessen",
    date: "Mai 2025",
  },
  {
    name: "Stefan",
    location: "Stammgast",
    rating: 5,
    text: "Kommen schon lange immer wieder zum Essen und wurden noch nie enttäuscht. Kann ich nur weiter empfehlen — herzliches Team und stets frische Küche.",
    detail: "Stammgast seit Jahren",
    date: "2025",
  },
  {
    name: "BrezZZz",
    location: "Google Bewertung",
    rating: 5,
    text: "Die Pizzen sind sehr lecker und der Preis ist fair. Immer wieder gerne! Schnell, freundlich und einfach gut.",
    detail: "4,4 / 5 · 644 Bewertungen",
    date: "Mai 2025",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const navigate = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 font-display text-[20rem] text-cream/[0.015] leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-hidden
      >
        &ldquo;
      </div>

      <div className="container-wide relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold/40" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
              Gästestimmen
            </span>
            <span className="h-px w-8 bg-gold/40" />
          </div>
          <h2
            className="font-display text-cream leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
            }}
          >
            Was unsere Gäste sagen
          </h2>
          <p className="text-cream/30 text-sm mt-3 font-light">
            4,4 / 5 Sterne · 644 Bewertungen
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              {/* Sterne */}
              <div className="flex justify-center gap-1 mb-10">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M6 1l1.18 3.09H10.5L7.94 6.02l.9 3.07L6 7.26l-2.84 1.83.9-3.07L1.5 4.09H4.82L6 1z"
                      fill="#C9A84C"
                    />
                  </svg>
                ))}
              </div>

              <blockquote
                className="font-display italic text-cream/80 leading-relaxed mb-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
                  fontWeight: 400,
                }}
              >
                &ldquo;{reviews[current].text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div
                  className="font-display text-cream font-medium text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reviews[current].name}
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-cream/30">
                  {reviews[current].location} · {reviews[current].date}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="h-px w-4 bg-gold/30" />
                  <span className="text-[10px] tracking-[0.15em] text-gold/50">
                    {reviews[current].detail}
                  </span>
                  <span className="h-px w-4 bg-gold/30" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigationspunkte */}
          <div className="flex justify-center gap-3 mt-14">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                aria-label={`Bewertung ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-1.5 bg-gold"
                    : "w-1.5 h-1.5 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
