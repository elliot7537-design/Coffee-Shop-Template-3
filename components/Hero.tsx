"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import {
  Cup,
  StarDoodle,
  HeartDoodle,
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

  const cupY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const cupRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen pt-28 md:pt-32 pb-32 overflow-hidden"
    >
      {/* Background doodles */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 pointer-events-none"
      >
        <StarDoodle
          className="absolute top-[14%] left-[4%] w-8 h-8 animate-spin"
          style={{ animationDuration: "14s" }}
          color="#FFD56B"
        />
        <StarDoodle
          className="absolute bottom-[26%] left-[8%] w-6 h-6"
          color="#FF9BAC"
        />
        <HeartDoodle
          className="absolute top-[22%] right-[6%] w-8 h-8 animate-wiggle"
          color="#FF6B6B"
        />
        <Sparkle
          className="absolute bottom-[36%] right-[4%] w-9 h-9"
          color="#7AD9C4"
        />
        <CoffeeBean className="absolute top-[62%] right-[30%] w-5 h-7 rotate-12" />
        <CoffeeBean className="absolute top-[10%] left-[42%] w-4 h-6 -rotate-45" />
        <Cactus className="absolute bottom-[6%] left-[2%] w-12 h-16 md:w-14 md:h-20" />
        <Chili className="absolute bottom-[10%] right-[3%] w-9 h-14 md:w-11 md:h-18 -rotate-12" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
          {/* CONTENT column — flex-1 so it grows */}
          <div className="relative flex-1 min-w-0 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, rotate: -12, y: -20 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 140 }}
              className="inline-block bg-bubblegum text-ink px-5 py-2 rounded-full border-[2.5px] border-ink shadow-sticker font-hand text-2xl md:text-3xl"
            >
              {t.hero.hello}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-5 font-hand text-2xl md:text-3xl text-ink/80"
            >
              {t.hero.welcome}
            </motion.p>

            <h1 className="relative mt-1 font-display font-bold leading-[0.9] text-ink">
              <motion.span
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-[16vw] sm:text-7xl md:text-7xl lg:text-[7rem] xl:text-[8rem] tracking-tight"
              >
                Cafe
                <span className="text-coral">cito</span>
                <span className="text-coral">.</span>
              </motion.span>
              <Squiggle
                className="mt-2 w-52 md:w-64 h-4"
                color="#FFD56B"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-base md:text-lg text-ink/80 max-w-lg leading-relaxed"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-6 flex flex-wrap gap-3"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="relative mt-10 hidden md:block"
            >
              <span className="font-marker text-ink/75 text-xl rotate-[-4deg] inline-block">
                {t.hero.handNote}
              </span>
              {/* Chunky hand-drawn arrow (replaces the thin stringy one) */}
              <svg
                viewBox="0 0 180 90"
                fill="none"
                className="absolute -top-10 left-56 w-32 h-20 rotate-[14deg]"
                aria-hidden
              >
                <path
                  d="M10 20 C 40 6 80 10 100 36 C 110 50 118 60 140 64"
                  stroke="#2B1B3A"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M140 64 L 120 52 M 140 64 L 126 78"
                  stroke="#2B1B3A"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* little double-line accent to make it feel sketched */}
                <path
                  d="M18 26 C 44 14 76 18 94 40"
                  stroke="#2B1B3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </motion.div>
          </div>

          {/* CUP column — fixed width, never collides with text */}
          <div className="relative shrink-0 self-center md:self-start order-1 md:order-2 w-[260px] md:w-[360px] lg:w-[440px] xl:w-[480px]">
            <motion.div
              style={{ y: cupY, rotate: cupRotate }}
              initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <Cup className="w-full h-auto drop-shadow-[8px_8px_0_#2B1B3A]" />

              {/* "recién tostado" sticker */}
              <motion.div
                initial={{ scale: 0, rotate: -40 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ delay: 1, type: "spring", stiffness: 140 }}
                className="absolute -top-3 -right-2 md:-right-6 bg-mint text-ink font-bold uppercase text-[10px] md:text-xs tracking-wider px-2.5 py-1.5 rounded-full border-[2.5px] border-ink shadow-sticker"
              >
                ★ {t.hero.badge}
              </motion.div>
            </motion.div>

            {/* Sticker cluster under cup */}
            <div className="mt-5 flex flex-col items-start gap-2.5">
              <Sticker bg="bg-sky" rot={-3} delay={1.1}>
                {t.hero.sticker1}
              </Sticker>
              <Sticker bg="bg-sunny" rot={2} delay={1.25}>
                {t.hero.sticker2}
              </Sticker>
              <Sticker bg="bg-bubblegum" rot={-2} delay={1.4}>
                {t.hero.sticker3}
              </Sticker>
            </div>
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

function Sticker({
  children,
  bg,
  rot,
  delay,
}: {
  children: React.ReactNode;
  bg: string;
  rot: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rot - 20 }}
      animate={{ opacity: 1, scale: 1, rotate: rot }}
      transition={{ delay, type: "spring", stiffness: 180 }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      className={`${bg} text-[11px] md:text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border-[2.5px] border-ink shadow-sticker whitespace-nowrap`}
    >
      {children}
    </motion.div>
  );
}
