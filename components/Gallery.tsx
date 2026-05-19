"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/foto-innen.jpg",
    alt: "Restaurant Innenraum — La Spaghetteria",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    aspect: "aspect-[16/9] md:aspect-auto md:h-72",
    priority: true,
  },
  {
    src: "/foto-pizza.jpg",
    alt: "Pizza Prosciutto mit Rucola",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspect: "aspect-square md:h-72",
    priority: true,
  },
  {
    src: "/foto-pasta.jpg",
    alt: "Spaghetti Bolognese mit Basilikum",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspect: "aspect-square md:h-72",
    priority: false,
  },
  {
    src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80",
    alt: "Holzofenpizza im Ofen",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    aspect: "aspect-square md:h-72",
    priority: false,
  },
  {
    src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&q=80",
    alt: "Teig-Zubereitung",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    aspect: "aspect-[16/9] md:aspect-auto md:h-72",
    priority: false,
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="bg-warm-black py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container-wide" ref={ref}>
        {/* Kopfzeile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                Die Galerie
              </span>
            </div>
            <h2
              className="font-display text-cream leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Ein Blick in
              <span className="italic font-normal text-gold"> unsere Welt</span>
            </h2>
          </div>
          <p className="text-cream/35 text-sm font-light max-w-xs text-right leading-relaxed">
            Echte Einblicke — in unsere Küche, unsere Gerichte
            und die Atmosphäre, die unsere Gäste so mögen.
          </p>
        </motion.div>

        {/* Grid mit echten + Stock-Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${img.colSpan} ${img.rowSpan} ${img.aspect}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={img.priority}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/25 transition-colors duration-500" />
              {/* Innenrahmen */}
              <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />

              {/* Label für echte Fotos */}
              {img.src.startsWith("/") && (
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-cream/60 bg-warm-black/70 px-2 py-1">
                    {img.alt}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Instagram-Hinweis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-cream/30 hover:text-gold transition-colors duration-300 group"
          >
            <span className="h-px w-6 bg-cream/20 group-hover:bg-gold transition-colors duration-300" />
            <span>Folge @laspaghetteria auf Instagram</span>
            <span className="h-px w-6 bg-cream/20 group-hover:bg-gold transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
