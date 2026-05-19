"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

const sections = [
  {
    id: "vorspeise",
    label: "Vorspeise",
    labelIt: "Antipasti",
    items: [
      { nr: "93",  name: "Caprese",        desc: "Frische Tomaten, Mozzarella, Basilikum",  price: "7,00" },
      { nr: "930", name: "Tonno e Cipolle", desc: "Thunfisch, Zwiebeln",                     price: "7,00" },
    ],
  },
  {
    id: "spaghetti",
    label: "Spaghetti",
    labelIt: "Spaghetti",
    note: "Alle Spaghetti-Gerichte auch als Tagliatelle erhältlich",
    items: [
      { nr: "1",  name: "Bolognese",     desc: "Mit Hackfleischsauce",                                                              price: "7,50" },
      { nr: "2",  name: "Napoli",        desc: "Mit Tomatensauce",                                                                  price: "6,50" },
      { nr: "3",  name: "Frutti di Mare",desc: "Mit Meeresfrüchten",                                                               price: "9,00" },
      { nr: "6",  name: "al Salmone",    desc: "Lachs in Tomaten-Sahnesauce",                                                      price: "9,00" },
      { nr: "8",  name: "Carbonara",     desc: "Speck, Ei und Sahnesauce",                                                         price: "9,00", tag: "Beliebt" },
      { nr: "9",  name: "Abruzzese",     desc: "Mit verschiedenen Käsesorten",                                                     price: "9,00" },
      { nr: "10", name: "della Riviera", desc: "Vorderschinken, Champignons, Pinienkerne, Tomaten-Sahnesauce (scharf)",            price: "8,50", tag: "Scharf" },
      { nr: "11", name: "Tonno",         desc: "Thunfisch und Zwiebeln in Tomatensauce",                                           price: "9,00" },
      { nr: "12", name: "Siciliana",     desc: "Sardellen, Kapern, Oliven, Knoblauch, Tomatensauce (scharf)",                      price: "8,50", tag: "Scharf" },
      { nr: "13", name: "Milanese",      desc: "Vorderschinken, Champignons, Erbsen, Käse und Sahnesauce",                        price: "9,00" },
      { nr: "15", name: "Sportivo",      desc: "Spinat, Parmesankäse und Sahnesauce",                                             price: "8,50" },
      { nr: "16", name: "Matriciana",    desc: "Tomatensauce, Zwiebeln, Speck (scharf)",                                          price: "8,50", tag: "Scharf" },
      { nr: "17", name: "della Norma",   desc: "Tomatensauce, Auberginen, Basilikum und Käse",                                    price: "9,00" },
      { nr: "18", name: "Paesana",       desc: "Tomatensauce, Kartoffeln, Speck, Zwiebeln",                                       price: "8,50" },
      { nr: "20", name: "Carrozza",      desc: "Tomatensauce, Mozzarella, Basilikum und Erbsen",                                  price: "8,50" },
      { nr: "21", name: "Chef",          desc: "Bolognesesauce und frische Champignons",                                           price: "8,50" },
      { nr: "23", name: "della Nonna",   desc: "Frische Champignons, Vorderschinken, Hackfleisch-Sahnesauce",                     price: "8,50", tag: "Empfehlung" },
      { nr: "26", name: "Mare e Monti",  desc: "Krabben, frische Champignons, Tomaten-Sahnesauce",                                price: "9,50" },
      { nr: "27", name: "Pizzaiola",     desc: "Oliven, Knoblauch, Tomatensauce",                                                 price: "7,50" },
      { nr: "28", name: "Aglio e Olio",  desc: "Knoblauch und Öl (scharf)",                                                       price: "7,00", tag: "Scharf" },
    ],
  },
  {
    id: "farfalle",
    label: "Farfalle",
    labelIt: "Farfalle",
    items: [
      { nr: "86", name: "Con Zucchine e Prosciutto", desc: "Zucchini und Vorderschinken in Tomaten-Sahnesauce", price: "8,50" },
      { nr: "87", name: "Con Gamberetti",             desc: "Shrimps in Tomaten-Sahnesauce",                    price: "9,00" },
    ],
  },
  {
    id: "penne",
    label: "Penne",
    labelIt: "Penne",
    items: [
      { nr: "83",  name: "al Gorgonzola",    desc: "Mit Gorgonzolasauce",                              price: "8,50" },
      { nr: "830", name: "Spinaci",           desc: "Spinat und Gorgonzolasauce",                       price: "9,00" },
      { nr: "84",  name: "al Arrabbiata",    desc: "Knoblauch und Tomatensauce (scharf)",               price: "7,50", tag: "Scharf" },
      { nr: "840", name: "Salmone e Spinaci",desc: "Lachs und Spinat in Tomaten-Sahnesauce",            price: "9,00" },
      { nr: "72",  name: "al Forno",         desc: "Auberginen, Mozzarella, Tomatensauce",              price: "9,00" },
    ],
  },
  {
    id: "gnocchi",
    label: "Gnocchi",
    labelIt: "Gnocchi",
    items: [
      { nr: "55", name: "Gorgonzola",  desc: "Mit Gorgonzolasauce",                    price: "9,00" },
      { nr: "56", name: "al Forno",    desc: "Tomatensauce, Basilikum, Mozzarella",    price: "8,50", tag: "Empfehlung" },
      { nr: "57", name: "Con Spinaci", desc: "Spinat in Tomaten-Sahnesauce",           price: "9,00" },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    labelIt: "Pizza",
    note: "Jede weitere Zutat 0,50 € – 1,00 € Aufpreis",
    items: [
      { nr: "29",  name: "Mozzarella e Basilico",              desc: "Mozzarella und Basilikum",                                    price: "8,00" },
      { nr: "30",  name: "Margherita",                         desc: "Mit Käse",                                                    price: "7,00", tag: "Klassiker" },
      { nr: "31",  name: "Funghi",                             desc: "Mit frischen Champignons",                                    price: "7,50" },
      { nr: "32",  name: "Salami",                             desc: "",                                                            price: "7,50" },
      { nr: "33",  name: "Prosciutto",                         desc: "Mit Vorderschinken",                                          price: "7,50" },
      { nr: "34",  name: "Paesana",                            desc: "Paprika und Vorderschinken",                                  price: "8,00" },
      { nr: "35",  name: "Romana",                             desc: "Sardellen, Oliven, Kapern",                                   price: "8,50" },
      { nr: "36",  name: "Contadina",                          desc: "Vorderschinken und Ei",                                       price: "8,00" },
      { nr: "37",  name: "Rustica",                            desc: "Peperoni, Zwiebeln, Oliven",                                  price: "7,50" },
      { nr: "38",  name: "Don Carlo",                          desc: "Spinat, Lachs, Mozzarella",                                   price: "10,00", tag: "Empfehlung" },
      { nr: "39",  name: "Frutti di Mare",                     desc: "Mit Meeresfrüchten",                                          price: "9,50" },
      { nr: "40",  name: "Quattro Stagione",                   desc: "Salami, Artischocken, Champignons, Paprika",                  price: "9,00" },
      { nr: "41",  name: "Speciale",                           desc: "Mit allen Zutaten",                                           price: "10,00", tag: "Beliebt" },
      { nr: "42",  name: "Calzone",                            desc: "Gefüllt mit Vorderschinken, Salami, Artischocken",            price: "10,00" },
      { nr: "43",  name: "Hawaii",                             desc: "Vorderschinken, Ananas",                                      price: "8,50" },
      { nr: "430", name: "Vegetarisch",                        desc: "Artischocken, Champignons, Paprika, Oliven",                  price: "9,00" },
      { nr: "44",  name: "Prosciutto, Salami e Funghi",        desc: "Vorderschinken, Salami und frische Champignons",              price: "8,50" },
      { nr: "45",  name: "Prosciutto e Funghi",                desc: "Vorderschinken und frische Champignons",                     price: "8,00" },
      { nr: "46",  name: "Tonno e Cipolle",                    desc: "Thunfisch und Zwiebeln",                                      price: "9,00" },
      { nr: "460", name: "Quattro Formaggi",                   desc: "4 verschiedene Käsesorten",                                   price: "9,00" },
      { nr: "47",  name: "Gorgonzola",                         desc: "",                                                            price: "8,50" },
      { nr: "470", name: "Gorgonzola e Broccoli",              desc: "Gorgonzola und Broccoli",                                     price: "9,00" },
      { nr: "48",  name: "Caprese",                            desc: "Frische Tomaten, Mozzarella, Basilikum",                      price: "9,00" },
      { nr: "480", name: "Bolognese",                          desc: "Mit Bolognesesauce",                                          price: "8,00" },
      { nr: "49",  name: "Casareccia",                         desc: "Speck, Zwiebeln, Kartoffeln",                                 price: "8,50" },
      { nr: "490", name: "Mozzarella e Tonno",                 desc: "Mozzarella und Thunfisch",                                    price: "9,50" },
      { nr: "491", name: "Pizzabrot",                          desc: "Knuspriges Brot aus dem Ofen",                                price: "4,00" },
    ],
  },
];

const tagColors: Record<string, string> = {
  Beliebt:     "bg-pizza-red text-cream",
  Klassiker:   "bg-gold/20 text-gold border border-gold/30",
  Empfehlung:  "bg-gold text-warm-black",
  Scharf:      "bg-pizza-red/80 text-cream",
};

export default function MenuPage() {
  const [active, setActive] = useState("vorspeise");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-warm-black">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-40 bg-warm-black/95 backdrop-blur-md border-b border-white/6">
        <div className="container-wide flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-cream/50 hover:text-gold transition-colors duration-300 text-[12px] tracking-[0.15em] uppercase"
          >
            <ArrowLeft size={14} />
            <span>Zurück</span>
          </Link>

          <div className="text-center">
            <span
              className="font-display text-lg font-bold text-cream"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Spaghetteria
            </span>
            <span className="hidden sm:inline text-cream/30 text-[11px] tracking-[0.25em] uppercase ml-3">
              Speisekarte
            </span>
          </div>

          <a
            href="tel:+4971384974"
            className="flex items-center gap-2 px-4 py-2 border border-gold/30 text-gold text-[11px] tracking-[0.15em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
          >
            <Phone size={12} />
            <span className="hidden sm:inline">Bestellen</span>
          </a>
        </div>
      </header>

      <div className="container-wide flex gap-0 md:gap-16 pb-32">
        {/* ── Sticky Sidebar ── */}
        <aside className="hidden md:block w-52 shrink-0 pt-16">
          <div className="sticky top-24">
            <p className="text-[9px] tracking-[0.35em] uppercase text-cream/25 mb-6">
              Kategorien
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left flex items-center gap-3 py-2.5 px-0 transition-all duration-300 group ${
                    active === s.id ? "text-cream" : "text-cream/35 hover:text-cream/70"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      active === s.id ? "w-6 bg-gold" : "w-2 bg-cream/20 group-hover:w-4"
                    }`}
                  />
                  <span className="text-[13px] font-light tracking-wide">{s.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-white/6">
              <p className="text-[10px] tracking-[0.2em] uppercase text-cream/20 mb-3">
                Telefonisch bestellen
              </p>
              <a
                href="tel:+4971384974"
                className="text-gold font-display text-lg font-semibold hover:text-gold-light transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                07138 / 49 74
              </a>
            </div>
          </div>
        </aside>

        {/* ── Mobile Tab Bar ── */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-warm-black/95 backdrop-blur-md border-t border-white/8 overflow-x-auto">
          <div className="flex gap-0 px-2 py-2 min-w-max mx-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-200 ${
                  active === s.id
                    ? "text-gold border-b border-gold"
                    : "text-cream/35 hover:text-cream/60"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Menu Content ── */}
        <main className="flex-1 pt-12 md:pt-16">
          {/* Page title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 pb-10 border-b border-white/6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gold/40" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
                La Carta
              </span>
            </div>
            <h1
              className="font-display text-cream mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              Speisekarte
            </h1>
            <p className="text-cream/35 text-sm font-light">
              Alle Preise inklusive MwSt. · Schwaigern, Theodor-Heuss-Straße 15
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-20">
            {sections.map((section, si) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="scroll-mt-24"
              >
                {/* Section header */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="flex items-end justify-between gap-4 mb-8 pb-5 border-b border-white/8"
                >
                  <div>
                    <p className="text-[9px] tracking-[0.4em] uppercase text-gold/40 mb-1">
                      {section.labelIt}
                    </p>
                    <h2
                      className="font-display text-cream"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                        fontWeight: 600,
                      }}
                    >
                      {section.label}
                    </h2>
                  </div>
                  {section.note && (
                    <p className="text-[11px] text-cream/25 font-light text-right max-w-[200px] leading-relaxed">
                      {section.note}
                    </p>
                  )}
                </motion.div>

                {/* Items */}
                <div className="divide-y divide-white/[0.04]">
                  {section.items.map((item, ii) => (
                    <motion.div
                      key={item.nr}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: Math.min(ii * 0.03, 0.3) }}
                      className="flex items-baseline justify-between gap-6 py-4 group hover:bg-white/[0.015] -mx-4 px-4 transition-colors duration-200"
                    >
                      {/* Left: number + name + desc */}
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span className="text-[11px] text-cream/20 font-light w-8 shrink-0 text-right tabular-nums">
                          {item.nr}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span
                              className="font-display text-cream/90 group-hover:text-cream transition-colors duration-200"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                                fontWeight: 500,
                              }}
                            >
                              {item.name}
                            </span>
                            {"tag" in item && item.tag && (
                              <span className={`text-[8px] tracking-[0.2em] uppercase px-2 py-0.5 font-medium ${tagColors[item.tag as string]}`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.desc && (
                            <p className="text-cream/30 text-[12px] font-light mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Right: dots + price */}
                      <div className="flex items-baseline gap-2 shrink-0">
                        <div className="hidden sm:block w-16 border-b border-dotted border-white/10 mb-0.5" />
                        <span
                          className="font-display text-gold/80 group-hover:text-gold transition-colors duration-200 tabular-nums"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                          }}
                        >
                          {item.price} €
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-20 pt-10 border-t border-white/6 space-y-4">
            <p className="text-[11px] text-cream/20 font-light leading-relaxed">
              <span className="text-cream/35">Allergene & Zusatzstoffe:</span>{" "}
              1 = geschwärzt · 2 = Farbstoff · 3 = Süßungsmittel · 4 = coffeinhaltig ·
              5 = chininhaltig · 6 = Konservierungsstoffe · 7 = Antioxidationsmittel ·
              8 = Säuerungsmittel · 9 = Geschmacksverstärker · 10 = Phosphat
            </p>
            <p className="text-[11px] text-cream/20 font-light">
              Alle Preise inklusive MwSt. · Irrtümer und Preisänderungen vorbehalten.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
