"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["Alle", "Pizza", "Spaghetti", "Pasta", "Vorspeise"];

const items = [
  // ── PIZZA ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    nr: "30",
    name: "Margherita",
    category: "Pizza",
    description: "Mit Käse",
    price: "7,00",
    tag: "Klassiker",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
  },
  {
    id: 2,
    nr: "41",
    name: "Speciale",
    category: "Pizza",
    description: "Mit allen Zutaten",
    price: "10,00",
    tag: "Beliebt",
    image: "/foto-pizza.jpg",
  },
  {
    id: 3,
    nr: "40",
    name: "Quattro Stagione",
    category: "Pizza",
    description: "Salami, Artischocken, frische Champignons, Paprika",
    price: "9,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=600&q=80",
  },
  {
    id: 4,
    nr: "39",
    name: "Frutti di Mare",
    category: "Pizza",
    description: "Mit Meeresfrüchten",
    price: "9,50",
    tag: null,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
  },
  {
    id: 5,
    nr: "38",
    name: "Don Carlo",
    category: "Pizza",
    description: "Spinat, Lachs, Mozzarella",
    price: "10,00",
    tag: "Empfehlung",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=600&q=80",
  },
  {
    id: 6,
    nr: "460",
    name: "Quattro Formaggi",
    category: "Pizza",
    description: "4 verschiedene Käsesorten",
    price: "9,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=600&q=80",
  },
  {
    id: 7,
    nr: "42",
    name: "Calzone",
    category: "Pizza",
    description: "Gefüllt mit Vorderschinken, Salami, Artischocken",
    price: "10,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80",
  },
  {
    id: 8,
    nr: "35",
    name: "Romana",
    category: "Pizza",
    description: "Mit Sardellen, Oliven und Kapern",
    price: "8,50",
    tag: null,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80",
  },
  // ── SPAGHETTI ───────────────────────────────────────────────────────────────
  {
    id: 9,
    nr: "8",
    name: "Carbonara",
    category: "Spaghetti",
    description: "Speck, Ei und Sahnesauce",
    price: "9,00",
    tag: "Klassiker",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
  },
  {
    id: 10,
    nr: "1",
    name: "Bolognese",
    category: "Spaghetti",
    description: "Mit Hackfleischsauce",
    price: "7,50",
    tag: null,
    image: "/foto-pasta.jpg",
  },
  {
    id: 11,
    nr: "10",
    name: "della Riviera",
    category: "Spaghetti",
    description: "Vorderschinken, Champignons, Pinienkerne, Tomaten-Sahnesauce (scharf)",
    price: "8,50",
    tag: "Scharf",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
  },
  {
    id: 12,
    nr: "3",
    name: "Frutti di Mare",
    category: "Spaghetti",
    description: "Mit Meeresfrüchten",
    price: "9,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
  },
  {
    id: 13,
    nr: "23",
    name: "della Nonna",
    category: "Spaghetti",
    description: "Frische Champignons, Vorderschinken, Hackfleisch-Sahnesauce",
    price: "8,50",
    tag: "Empfehlung",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
  },
  {
    id: 14,
    nr: "28",
    name: "Aglio e Olio",
    category: "Spaghetti",
    description: "Mit Knoblauch und Öl (scharf)",
    price: "7,00",
    tag: "Scharf",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80",
  },
  // ── PASTA ───────────────────────────────────────────────────────────────────
  {
    id: 15,
    nr: "84",
    name: "Penne Arrabbiata",
    category: "Pasta",
    description: "Mit Knoblauch und Tomatensauce (scharf)",
    price: "7,50",
    tag: "Scharf",
    image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&q=80",
  },
  {
    id: 16,
    nr: "83",
    name: "Penne al Gorgonzola",
    category: "Pasta",
    description: "Mit Gorgonzolasauce",
    price: "8,50",
    tag: null,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },
  {
    id: 17,
    nr: "86",
    name: "Farfalle Prosciutto",
    category: "Pasta",
    description: "Zucchini und Vorderschinken in Tomaten-Sahnesauce",
    price: "8,50",
    tag: null,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80",
  },
  {
    id: 18,
    nr: "56",
    name: "Gnocchi al Forno",
    category: "Pasta",
    description: "Tomatensauce, Basilikum, Mozzarella",
    price: "8,50",
    tag: "Empfehlung",
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&q=80",
  },
  // ── VORSPEISE ───────────────────────────────────────────────────────────────
  {
    id: 19,
    nr: "93",
    name: "Caprese",
    category: "Vorspeise",
    description: "Frische Tomaten, Mozzarella, Basilikum",
    price: "7,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=600&q=80",
  },
  {
    id: 20,
    nr: "491",
    name: "Pizzabrot",
    category: "Vorspeise",
    description: "Knuspriges Pizzabrot aus dem Ofen",
    price: "4,00",
    tag: null,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=80",
  },
];

export default function Menu() {
  const [active, setActive] = useState("Alle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "Alle" ? items : items.filter((p) => p.category === active);

  return (
    <section id="menu" className="bg-warm-black py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="container-wide" ref={ref}>
        {/* Kopfzeile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                Die Speisekarte
              </span>
            </div>
            <h2
              className="font-display text-cream leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 700,
              }}
            >
              Unsere Gerichte
            </h2>
            <p className="text-cream/35 text-sm mt-3 font-light">
              Alle Preise inkl. MwSt. · Jede weitere Zutat 0,50 € – 1,00 € Aufpreis
            </p>
          </div>

          {/* Kategorie-Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  active === cat
                    ? "bg-gold text-warm-black font-medium"
                    : "border border-white/10 text-cream/40 hover:border-gold/30 hover:text-cream/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gericht-Raster */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative bg-warm-black hover:bg-charcoal transition-colors duration-500 overflow-hidden"
              >
                {/* Bild */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-warm-black/10 to-transparent" />

                  {/* Nummer */}
                  <div className="absolute top-3 right-3 text-[10px] tracking-[0.2em] text-cream/40 bg-warm-black/60 px-2 py-0.5">
                    Nr. {item.nr}
                  </div>

                  {item.tag && (
                    <div className={`absolute top-3 left-3 px-2.5 py-1 text-cream text-[9px] tracking-[0.2em] uppercase font-medium ${item.tag === "Scharf" ? "bg-pizza-red" : item.tag === "Empfehlung" ? "bg-gold/80" : "bg-pizza-red"}`}>
                      {item.tag}
                    </div>
                  )}
                </div>

                {/* Inhalt */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="font-display text-cream text-lg font-semibold group-hover:text-gold transition-colors duration-300 leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="font-display text-gold text-lg font-medium whitespace-nowrap mt-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.price} €
                    </span>
                  </div>
                  <p className="text-cream/40 text-[13px] leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                    <span className="h-px w-4 bg-gold/30" />
                    <span className="text-[9px] tracking-[0.25em] uppercase text-gold/40">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Hinweis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-cream/25 text-sm mb-6 font-light">
            Die vollständige Speisekarte ist im Restaurant oder telefonisch erhältlich
          </p>
          <a
            href="tel:+4971384974"
            className="inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
          >
            <span className="h-px w-6 bg-gold group-hover:w-2 transition-all duration-300" />
            <span>Telefonisch bestellen: 07138 / 49 74</span>
            <span className="h-px w-6 bg-gold group-hover:w-2 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
