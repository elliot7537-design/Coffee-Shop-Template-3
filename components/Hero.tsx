"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Coffee, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { WordMask } from "./AnimatedText";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const marqueeItems = [...t.hero.marquee, ...t.hero.marquee];

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-bone to-cream pt-28 md:pt-36"
    >
      {/* decorative floating elements */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-[28rem] w-[28rem] rounded-full bg-sun/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cactus/10 blur-3xl" />
      </motion.div>

      {/* floating seeds */}
      <FloatingSeed className="top-24 left-[8%]" delay={0} />
      <FloatingSeed className="top-40 right-[12%]" delay={0.4} scale={0.8} />
      <FloatingSeed className="bottom-40 left-[15%]" delay={0.8} scale={1.2} />
      <FloatingSeed className="bottom-24 right-[18%]" delay={1.2} />

      <motion.div
        style={{ y, scale, opacity }}
        className="relative mx-auto max-w-7xl px-5 md:px-8 pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="h-[1px] w-10 bg-terracotta" />
          <span className="font-script text-terracotta text-xl md:text-2xl">
            {t.hero.eyebrow}
          </span>
          <span className="h-[1px] w-10 bg-terracotta" />
        </motion.div>

        <h1 className="text-center font-display font-black leading-[0.9] tracking-tight text-cocoa">
          <span className="block text-6xl md:text-8xl lg:text-[9rem]">
            <WordMask text={t.hero.line1} onMount />
          </span>
          <span className="block text-6xl md:text-8xl lg:text-[9rem] relative">
            <WordMask text={t.hero.line2} delay={0.15} onMount />
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 160 }}
              className="inline-block ml-4 align-middle"
            >
              <Sparkles className="inline text-sun" size={48} />
            </motion.span>
          </span>
          <span className="block text-7xl md:text-9xl lg:text-[11rem] grad-text italic">
            <WordMask text={t.hero.line3} delay={0.3} onMount />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-8 max-w-2xl text-center text-base md:text-lg text-cocoa/70 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-4 text-sm font-semibold text-cream hover:bg-terracotta transition-all hover:shadow-xl hover:shadow-terracotta/30"
          >
            <Coffee size={18} className="group-hover:rotate-12 transition-transform" />
            {t.hero.ctaPrimary}
            <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa px-7 py-4 text-sm font-semibold text-cocoa hover:bg-cocoa hover:text-cream transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mx-auto mt-16 max-w-3xl grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            [t.hero.stat1Value, t.hero.stat1Label],
            [t.hero.stat2Value, t.hero.stat2Label],
            [t.hero.stat3Value, t.hero.stat3Label],
          ].map(([v, l], i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="text-center border-l-2 border-terracotta/40 first:border-l-0 px-3"
            >
              <div className="font-display font-black text-3xl md:text-5xl text-cocoa">
                {v}
              </div>
              <div className="mt-1 text-xs md:text-sm text-cocoa/60 uppercase tracking-wider">
                {l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cocoa/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>

      {/* marquee band */}
      <div className="absolute bottom-0 left-0 right-0 bg-cocoa text-cream py-4 overflow-hidden border-y border-terracotta/30">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="font-display font-black uppercase text-xl md:text-2xl mx-8 flex items-center gap-8"
            >
              {item}
              <span className="text-sun">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingSeed({
  className = "",
  delay = 0,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale }}
      transition={{ delay: 1.5 + delay, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 14, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="46" viewBox="0 0 32 46" fill="none">
          <ellipse cx="16" cy="23" rx="14" ry="22" fill="#3E2217" />
          <path
            d="M16 2 C18 14, 18 32, 16 44"
            stroke="#F5EBDC"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
