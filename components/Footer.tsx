"use client";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="container-wide">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Marke */}
          <div>
            <div className="mb-5">
              <span
                className="font-display text-xl font-bold text-cream/90 block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La Spaghetteria
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold/50 uppercase">
                Schwaigern · Seit 1987
              </span>
            </div>
            <p className="text-cream/30 text-[13px] leading-relaxed font-light max-w-xs">
              Ehrlicher italienischer Geschmack ohne großes Tamtam. Pizza, Pasta
              und mehr — frisch zubereitet in Schwaigern.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-cream/25 hover:text-gold transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-6">
              Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Speisekarte", href: "#menu" },
                { label: "Über uns", href: "#about" },
                { label: "Galerie", href: "#gallery" },
                { label: "Kontakt & Standort", href: "#location" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[13px] text-cream/40 hover:text-gold transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/30 mb-6">
              Kontakt
            </h4>
            <div className="space-y-3 mb-6">
              <p className="text-[13px] text-cream/40 font-light">
                Theodor-Heuss-Straße 15
                <br />
                74193 Schwaigern
              </p>
              <a
                href="tel:+4971384974"
                className="block text-[13px] text-cream/60 hover:text-gold transition-colors duration-300 font-medium"
              >
                07138 / 49 74
              </a>
            </div>
            <a
              href="tel:+4971384974"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold text-[11px] tracking-[0.15em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300 font-medium"
            >
              Telefonisch bestellen
            </a>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="border-t border-white/5 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/20 font-light tracking-wide">
            © {year} La Spaghetteria Schwaigern. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {["Datenschutz", "Impressum"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-cream/20 hover:text-cream/40 transition-colors duration-300 font-light"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-cream/15 font-light">
            4,4 ★ · 644 Bewertungen
          </p>
        </div>
      </div>
    </footer>
  );
}
