import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-black": "#0d0b09",
        charcoal: "#1a1714",
        "charcoal-light": "#242018",
        "pizza-red": "#8B1A1A",
        "pizza-red-light": "#A52020",
        cream: "#F5F0E8",
        "cream-dark": "#E8E0D0",
        gold: "#C9A84C",
        "gold-light": "#D4B86A",
        "gold-dark": "#A8893C",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease forwards",
        "slide-up": "slideUp 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollDown: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
