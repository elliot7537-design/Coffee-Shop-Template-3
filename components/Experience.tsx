"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import { WordMask } from "./AnimatedText";

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Big horizontal text that slides with scroll
  const bigX = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);

  return (
    <section
      ref={ref}
      id="experience"
      className="relative py-24 md:py-32 bg-bone overflow-hidden"
    >
      {/* Giant background word */}
      <motion.div
        style={{ x: bigX }}
        aria-hidden
        className="absolute top-10 left-0 right-0 whitespace-nowrap font-display font-black text-[20vw] md:text-[16vw] text-cocoa/[0.04] leading-none pointer-events-none"
      >
        · experiencia · experience · experiencia ·
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="font-script text-terracotta text-2xl">
              — {t.experience.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display font-black text-4xl md:text-6xl text-cocoa mt-3 leading-[1.05]">
            <WordMask text={t.experience.title} />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-5 text-cocoa/70 text-lg">
              {t.experience.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {t.experience.cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl p-8 md:p-10 border border-cocoa/10 ${
                i % 2 === 0 ? "bg-cream" : "bg-terracotta text-cream"
              }`}
            >
              <div
                className={`font-display font-black text-7xl opacity-20 ${
                  i % 2 === 0 ? "text-terracotta" : "text-cream"
                }`}
              >
                0{i + 1}
              </div>
              <h3
                className={`mt-2 font-display font-black text-2xl md:text-3xl ${
                  i % 2 === 0 ? "text-cocoa" : "text-cream"
                }`}
              >
                {c.title}
              </h3>
              <p
                className={`mt-3 text-base leading-relaxed ${
                  i % 2 === 0 ? "text-cocoa/70" : "text-cream/85"
                }`}
              >
                {c.body}
              </p>

              {/* animated accent */}
              <motion.div
                className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full ${
                  i % 2 === 0 ? "bg-terracotta/10" : "bg-sun/30"
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
