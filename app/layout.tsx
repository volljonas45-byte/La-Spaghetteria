import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Spaghetteria — Authentische Italienische Küche in Schwaigern",
  description:
    "Ehrlicher italienischer Geschmack ohne großes Tamtam. Handgemachte Pizza, frische Pasta und gemütliche Atmosphäre in Schwaigern. Zum Essen oder zum Mitnehmen.",
  keywords:
    "La Spaghetteria, Schwaigern, Italienisches Restaurant, Pizza, Pasta, Spaghetti, Gnocchi, Holzofen, Lieferservice",
  openGraph: {
    title: "La Spaghetteria Schwaigern",
    description:
      "Ehrlicher italienischer Geschmack. Pizza, Pasta & mehr – frisch zubereitet in Schwaigern.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-black text-cream antialiased">{children}</body>
    </html>
  );
}
