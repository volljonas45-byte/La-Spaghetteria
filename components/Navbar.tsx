"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Über uns", href: "#about" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
          <a href="#" className="flex flex-col leading-none group">
            <span
              className="font-display text-2xl font-bold text-cream tracking-wide group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Spaghetteria
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold/70 uppercase font-light mt-0.5">
              Schwaigern · Seit 1987
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] tracking-[0.12em] uppercase text-cream/60 hover:text-cream transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:+4971384974"
              className="ml-4 px-6 py-2.5 border border-gold/40 text-gold text-[12px] tracking-[0.15em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300 font-medium"
            >
              Anrufen
            </a>
          </div>

          <button
            className="md:hidden text-cream/80 hover:text-cream transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-warm-black flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-cream/60 hover:text-cream"
            >
              <X size={24} />
            </button>

            <div
              className="font-display text-4xl font-bold text-cream/20 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              La Spaghetteria
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display font-medium text-cream hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="tel:+4971384974"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 px-10 py-4 border border-gold/40 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
            >
              07138 / 49 74
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
