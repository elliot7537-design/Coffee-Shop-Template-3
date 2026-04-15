"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { CoffeeBean, HeartDoodle, StarDoodle, Squiggle } from "./Doodles";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-coral text-paper overflow-hidden">
      {/* torn paper top */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-5 bg-paper"
        style={{
          clipPath:
            "polygon(0 0, 4% 100%, 8% 0, 14% 100%, 20% 20%, 26% 100%, 32% 0, 38% 100%, 44% 15%, 50% 100%, 56% 0, 62% 100%, 68% 20%, 74% 100%, 80% 0, 86% 100%, 92% 15%, 98% 100%, 100% 0)",
        }}
      />

      <div className="relative pt-20 pb-8 px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Big bye */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h3 className="font-display font-bold text-5xl md:text-7xl">
              {t.footer.bye}
              <span className="inline-block animate-wiggle ml-3">👋</span>
            </h3>
            <Squiggle
              className="mx-auto mt-4 w-40 h-4"
              color="#FFF6E3"
            />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2">
                <CoffeeBean className="w-5 h-7" color="#FFF6E3" />
                <span className="font-display font-bold text-2xl">
                  Cafe<span className="text-sunny">cito</span>.
                </span>
              </div>
              <p className="mt-3 text-paper/85 max-w-sm">{t.footer.tagline}</p>

              <div className="mt-6">
                <div className="font-hand text-xl text-paper mb-2">
                  {t.footer.newsletter}
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center bg-paper rounded-full p-1.5 border-[2.5px] border-ink max-w-sm"
                >
                  <input
                    type="email"
                    placeholder={t.footer.placeholder}
                    className="flex-1 bg-transparent px-4 py-2 text-sm text-ink outline-none placeholder:text-ink/40"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-ink text-paper px-4 py-2 text-xs font-bold hover:bg-sunny hover:text-ink transition-colors"
                  >
                    {t.footer.sub}
                  </button>
                </form>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="font-hand text-xl mb-3">
                {t.footer.menuLabel}
              </div>
              <ul className="space-y-2">
                {[t.nav.menu, t.nav.story, t.nav.why, t.nav.visit].map(
                  (l, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-paper/90 hover:text-sunny transition-colors flex items-center gap-2"
                      >
                        <span className="text-xs">✦</span>
                        {l}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="font-hand text-xl mb-3">{t.footer.writeUs}</div>
              <address className="not-italic space-y-1 text-paper/90 text-sm">
                <div>Av. Álvaro Obregón 185</div>
                <div>Roma Norte, CDMX 06700</div>
                <div>hola@cafecito.mx</div>
                <div>+52 55 4321 0987</div>
              </address>

              <div className="mt-5 flex items-center gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -4, rotate: 8, scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-paper text-ink border-[2.5px] border-ink flex items-center justify-center shadow-[2px_2px_0_0_#2B1B3A]"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-paper/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/70">
            <div className="flex items-center gap-2">
              <HeartDoodle className="w-4 h-4" color="#FFF6E3" />
              {t.footer.madeWith}
            </div>
            <div>
              © {new Date().getFullYear()} Cafecito · {t.footer.rights}
            </div>
          </div>
        </div>

        {/* decorative scattered doodles */}
        <StarDoodle className="absolute top-28 left-6 w-8 h-8" color="#FFD56B" />
        <HeartDoodle
          className="absolute top-20 right-10 w-7 h-7 animate-wiggle"
          color="#FFF6E3"
        />
        <StarDoodle className="absolute bottom-20 right-16 w-6 h-6" color="#7AD9C4" />
      </div>
    </footer>
  );
}
