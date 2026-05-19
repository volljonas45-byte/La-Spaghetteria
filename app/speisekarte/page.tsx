import type { Metadata } from "next";
import MenuPage from "@/components/MenuPage";

export const metadata: Metadata = {
  title: "Speisekarte — La Spaghetteria Schwaigern",
  description:
    "Die vollständige Speisekarte der La Spaghetteria in Schwaigern. Pizza, Spaghetti, Penne, Farfalle, Gnocchi und Vorspeisen — alle Preise inklusive MwSt.",
};

export default function Speisekarte() {
  return <MenuPage />;
}
