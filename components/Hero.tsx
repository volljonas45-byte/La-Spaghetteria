"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Video Hintergrund */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1920&q=80"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/hero.mp4`}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-warm-black/58 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-transparent to-warm-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/40 via-transparent to-warm-black/40 z-10" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(13,11,9,0.7) 100%)",
          }}
        />
      </div>

      {/* Filmkorn */}
      <div
        className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Inhalt */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold/80 font-light">
            Schwaigern · Seit 1987
          </span>
          <span className="h-px w-10 bg-gold/50" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="font-display font-bold text-cream leading-[0.95] mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.2rem, 9vw, 8.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Ehrlich.
          <br />
          <span className="italic font-normal" style={{ color: "#C9A84C" }}>
            Italienisch.
          </span>
          <br />
          Herzlich.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="text-cream/60 font-light max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
        >
          Seit 1987 bereiten wir hausgemachte Pasta und knusprige Pizza
          aus frischen Zutaten zu — täglich, mit Sorgfalt und echter
          italienischer Leidenschaft.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/speisekarte"
            className="px-10 py-4 bg-pizza-red text-cream text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-pizza-red-light transition-all duration-300"
          >
            Speisekarte
          </a>
          <a
            href="tel:+4971384974"
            className="px-10 py-4 border border-cream/25 text-cream text-[12px] tracking-[0.2em] uppercase font-medium hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            07138 / 49 74
          </a>
        </motion.div>
      </div>

      {/* Info-Leiste */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/5"
      >
        <div className="container-wide flex items-center justify-between py-5 text-[11px] tracking-[0.2em] uppercase text-cream/30">
          <span>Theodor-Heuss-Straße 15, 74193 Schwaigern</span>
          <span className="hidden md:block">4,4 / 5 · 644 Bewertungen</span>
          <span>07138 / 49 74</span>
        </div>
      </motion.div>

      {/* Scroll-Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-cream/30">
          Scrollen
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/20 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gold/60"
            style={{ height: "40%" }}
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
