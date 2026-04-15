"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import {
  Cup,
  StarDoodle,
  HeartDoodle,
  HandArrow,
  Squiggle,
  Sparkle,
  Cactus,
  Chili,
  CoffeeBean,
} from "./Doodles";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cupY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const cupRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-28 md:pt-32 pb-24 overflow-hidden"
    >
      {/* Floating doodles */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 pointer-events-none"
      >
        <StarDoodle
          className="absolute top-[18%] left-[6%] w-8 h-8 animate-spin"
          style={{ animationDuration: "14s" }}
          color="#FFD56B"
        />
        <StarDoodle
          className="absolute top-[70%] left-[10%] w-6 h-6"
          color="#FF9BAC"
        />
        <HeartDoodle
          className="absolute top-[28%] right-[8%] w-8 h-8 animate-wiggle"
          color="#FF6B6B"
        />
        <Sparkle
          className="absolute top-[62%] right-[12%] w-10 h-10"
          color="#7AD9C4"
        />
        <CoffeeBean className="absolute top-[80%] right-[22%] w-5 h-7 rotate-12" />
        <CoffeeBean className="absolute top-[14%] right-[28%] w-4 h-6 -rotate-45" />
        <Cactus className="absolute bottom-4 left-[4%] w-14 h-20" />
        <Chili className="absolute bottom-8 right-[4%] w-10 h-16 -rotate-12" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT: text */}
          <div className="relative text-center md:text-left order-2 md:order-1">
            {/* hello tag */}
            <motion.div
              initial={{ opacity: 0, rotate: -12, y: -20 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 140 }}
              className="inline-block bg-bubblegum text-ink px-4 py-1.5 rounded-full border-[2.5px] border-ink shadow-sticker font-hand text-2xl -ml-1"
            >
              {t.hero.hello}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 font-hand text-2xl md:text-3xl text-ink/80"
            >
              {t.hero.welcome}
            </motion.p>

            {/* Brand title */}
            <h1 className="relative mt-1 font-display font-bold leading-[0.95] text-ink">
              <motion.span
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-[18vw] md:text-[9.5rem] lg:text-[12rem]"
              >
                Cafe
                <span className="text-coral">cito</span>
                <span className="text-coral">.</span>
              </motion.span>
              <Squiggle
                className="absolute -bottom-2 left-0 md:left-2 w-48 md:w-72 h-4"
                color="#FFD56B"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-base md:text-lg text-ink/80 max-w-md mx-auto md:mx-0 leading-relaxed"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-7 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-coral text-paper px-6 py-3 text-sm font-bold shadow-stamp hover:shadow-[6px_6px_0_0_#2B1B3A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                {t.hero.cta}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-paper px-6 py-3 text-sm font-bold shadow-stamp hover:bg-sunny transition-colors"
              >
                {t.hero.ctaAlt}
              </a>
            </motion.div>

            {/* Handwritten note with arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="relative mt-10 hidden md:block"
            >
              <span className="font-marker text-ink/70 text-xl rotate-[-4deg] inline-block">
                {t.hero.handNote}
              </span>
              <HandArrow className="absolute -top-6 -right-28 w-28 h-16 rotate-[20deg]" />
            </motion.div>
          </div>

          {/* RIGHT: cup mascot */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <motion.div
              style={{ y: cupY, rotate: cupRotate }}
              initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-[260px] md:w-[360px] lg:w-[420px]"
            >
              <Cup className="w-full h-auto drop-shadow-[6px_6px_0_#2B1B3A]" />

              {/* Sticker: "recién tostado" */}
              <motion.div
                initial={{ scale: 0, rotate: -40 }}
                animate={{ scale: 1, rotate: -14 }}
                transition={{ delay: 1, type: "spring", stiffness: 140 }}
                className="absolute -top-6 -right-2 md:-right-8 bg-mint text-ink font-bold uppercase text-xs tracking-wider px-3 py-2 rounded-full border-[2.5px] border-ink shadow-sticker"
              >
                ★ {t.hero.badge}
              </motion.div>
            </motion.div>

            {/* Orbiting stickers around cup */}
            <FloatingTag
              className="top-[10%] -left-2 md:left-4 bg-sky"
              delay={1.2}
              rotate={-8}
            >
              {t.hero.sticker1}
            </FloatingTag>
            <FloatingTag
              className="bottom-[14%] -left-4 md:left-0 bg-bubblegum"
              delay={1.4}
              rotate={6}
            >
              {t.hero.sticker2}
            </FloatingTag>
            <FloatingTag
              className="bottom-[2%] right-0 bg-sunny"
              delay={1.6}
              rotate={-6}
            >
              {t.hero.sticker3}
            </FloatingTag>
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <div className="absolute left-0 right-0 bottom-0 bg-ink text-paper border-t-[2.5px] border-ink py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, outer) => (
            <div key={outer} className="flex items-center">
              {[
                "café tostado a mano",
                "pan recién hecho",
                "hecho en CDMX",
                "abiertos 7am-9pm",
                "wifi rapidito",
                "pet-friendly",
              ].map((txt, i) => (
                <span
                  key={i}
                  className="font-display font-semibold text-lg mx-6 flex items-center gap-6"
                >
                  {txt}
                  <StarDoodle className="w-5 h-5 inline-block" color="#FFD56B" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingTag({
  children,
  className = "",
  delay = 0,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, type: "spring", stiffness: 160 }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      className={`absolute text-[11px] md:text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border-[2.5px] border-ink shadow-sticker ${className}`}
    >
      {children}
    </motion.div>
  );
}
