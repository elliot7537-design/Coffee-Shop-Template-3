"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-bark text-cream pt-24 pb-10 overflow-hidden">
      {/* Giant brand word behind */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        aria-hidden
        className="absolute -bottom-10 left-0 right-0 text-center font-display font-black text-[22vw] leading-none pointer-events-none whitespace-nowrap"
      >
        Café del Sol
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="text-3xl">☕</span>
                <span className="font-display font-black text-2xl">
                  Café del <span className="text-terracotta">Sol</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-cream/70 max-w-sm">{t.footer.tagline}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">
                  {t.footer.newsletter}
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center bg-cream/5 border border-cream/15 rounded-full p-1.5 max-w-sm focus-within:border-terracotta transition-colors"
                >
                  <input
                    type="email"
                    placeholder={t.footer.placeholder}
                    className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-cream/40"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-terracotta px-4 py-2 text-xs font-bold hover:bg-sun hover:text-bark transition-colors"
                  >
                    {t.footer.subscribe}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-cream/50 mb-4">
              {t.footer.explore}
            </div>
            <ul className="space-y-2.5">
              {[
                t.nav.story,
                t.nav.menu,
                t.nav.experience,
                t.nav.visit,
              ].map((l, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-cream/80 hover:text-terracotta transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-cream/50 mb-4">
              {t.footer.contact}
            </div>
            <address className="not-italic space-y-1 text-cream/80">
              <div>Calle Orizaba 142</div>
              <div>Roma Norte, CDMX 06700</div>
              <div>hola@cafedelsol.mx</div>
              <div>+52 55 1234 5678</div>
            </address>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">
                {t.footer.follow}
              </div>
              <div className="flex items-center gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -4, rotate: 6 }}
                    className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Café del Sol · {t.footer.rights}</div>
          <div>Roma Norte · Ciudad de México</div>
        </div>
      </div>
    </footer>
  );
}
