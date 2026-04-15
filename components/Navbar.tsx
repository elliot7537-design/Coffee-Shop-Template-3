"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { CoffeeBean } from "./Doodles";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: t.nav.menu },
    { href: "#story", label: t.nav.story },
    { href: "#why", label: t.nav.why },
    { href: "#visit", label: t.nav.visit },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-3 px-3 md:px-6"
    >
      <nav
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-full flex items-center justify-between gap-3 px-4 md:px-5 py-2.5 border-[2.5px] border-ink ${
          scrolled
            ? "bg-paper shadow-stampsm"
            : "bg-paper/70 backdrop-blur-sm shadow-stampsm"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: -20, scale: 1.2 }}
            className="inline-block"
          >
            <CoffeeBean className="w-5 h-7" />
          </motion.span>
          <span className="font-display font-bold text-lg md:text-xl text-ink">
            Cafe<span className="text-coral">cito</span>
            <span className="text-coral">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1.5">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-3 py-1.5 text-sm font-semibold text-ink/80 hover:text-ink transition-colors group"
              >
                {l.label}
                <span className="absolute left-3 right-3 bottom-0 h-[3px] rounded-full bg-coral scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                {i === 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 text-[10px] bg-coral text-paper px-1.5 rounded-full"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t.nav.newBadge}
                  </motion.span>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="rounded-full border-[2.5px] border-ink bg-sunny px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sticker hover:bg-bubblegum transition-colors"
            aria-label="Toggle language"
          >
            <span>{locale.toUpperCase()}</span>
            <span className="text-ink/40 mx-1">/</span>
            <span className="text-ink/50">{t.nav.language}</span>
          </motion.button>

          <a
            href="#visit"
            className="hidden md:inline-flex items-center rounded-full border-[2.5px] border-ink bg-coral text-paper px-4 py-1.5 text-sm font-bold shadow-sticker hover:bg-ink transition-colors"
          >
            {t.nav.reserve} →
          </a>

          <button
            className="md:hidden p-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-auto mt-2 max-w-6xl rounded-3xl bg-paper border-[2.5px] border-ink shadow-stampsm overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display font-semibold text-lg text-ink"
                >
                  → {l.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full border-[2.5px] border-ink bg-coral text-paper px-5 py-2 text-sm font-bold"
              >
                {t.nav.reserve} →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
