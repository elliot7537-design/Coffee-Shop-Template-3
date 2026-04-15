import type { Metadata } from "next";
import { Bitter, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const display = Bitter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});
const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Café del Sol — Casa de Café Mexicano",
  description:
    "Un café en el corazón de la Ciudad de México. Granos de Chiapas, Oaxaca y Veracruz, servidos con alma.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="font-body bg-cream text-bark grain antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
