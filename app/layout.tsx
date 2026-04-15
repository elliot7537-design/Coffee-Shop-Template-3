import type { Metadata } from "next";
import { Fredoka, Caveat, Nunito, Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});
const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hand",
});
const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});
const marker = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Cafecito · Tu rincón de café en CDMX",
  description:
    "Un cafecito con cariño en la Roma Norte. Granos mexicanos, pan recién hecho, risas de sobra.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${hand.variable} ${body.variable} ${marker.variable}`}
    >
      <body className="font-body text-ink antialiased overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
