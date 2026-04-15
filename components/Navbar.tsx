"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#story", label: t.nav.story },
    { href: "#menu", label: t.nav.menu },
    { href: "#experience", label: t.nav.experience },
    { href: "#visit", label: t.nav.visit },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-cocoa/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: 20 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="inline-block text-2xl"
          >
            ☕
          </motion.span>
          <span className="font-display font-black text-xl text-cocoa tracking-tight">
            Café del <span className="text-terracotta">Sol</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-cocoa/80 hover:text-terracotta transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-terracotta group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="group flex items-center gap-1.5 rounded-full border border-cocoa/20 bg-cream/60 hover:bg-terracotta hover:border-terracotta hover:text-cream px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={14} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>{locale.toUpperCase()}</span>
            <span className="text-cocoa/40 group-hover:text-cream/50">/</span>
            <span className="text-cocoa/40 group-hover:text-cream/80">{t.nav.language}</span>
          </button>

          <a
            href="#visit"
            className="hidden md:inline-flex items-center rounded-full bg-cocoa text-cream px-4 py-2 text-sm font-semibold hover:bg-terracotta transition-colors"
          >
            {t.nav.reserve}
          </a>

          <button
            className="md:hidden p-2 text-cocoa"
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
            className="md:hidden overflow-hidden bg-cream border-t border-cocoa/10"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display font-semibold text-cocoa"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit rounded-full bg-cocoa text-cream px-5 py-2 text-sm font-semibold"
              >
                {t.nav.reserve}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
