"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { Squiggle, StarDoodle } from "./Doodles";

const cardStyles = [
  { bg: "bg-coral text-paper", rot: -2, icon: "🌎" },
  { bg: "bg-sunny text-ink", rot: 1.5, icon: "🥐" },
  { bg: "bg-mint text-ink", rot: -1.2, icon: "🛋️" },
  { bg: "bg-bubblegum text-ink", rot: 2, icon: "🤗" },
];

export default function Why() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bigX = useTransform(scrollYProgress, [0, 1], ["15%", "-35%"]);

  return (
    <section
      ref={ref}
      id="why"
      className="relative py-24 md:py-32 overflow-hidden bg-cream"
    >
      {/* Giant marquee word behind */}
      <motion.div
        style={{ x: bigX }}
        aria-hidden
        className="absolute top-4 left-0 whitespace-nowrap font-display font-bold text-[22vw] md:text-[18vw] text-ink/[0.07] leading-none pointer-events-none"
      >
        · cafecito · cafecito · cafecito · cafecito ·
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="inline-block bg-sky text-ink font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker"
          >
            ✿ {t.why.eyebrow}
          </motion.span>
          <h2 className="relative mt-4 font-display font-bold text-4xl md:text-6xl inline-block">
            {t.why.title}
            <Squiggle
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-64 h-4"
              color="#FF9BAC"
            />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {t.why.items.map((it, i) => {
            const s = cardStyles[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: s.rot * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.rot }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
                className={`relative ${s.bg} rounded-3xl border-[2.5px] border-ink p-7 md:p-8 shadow-stamp`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-paper border-[2.5px] border-ink flex items-center justify-center text-2xl shadow-sticker">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl leading-tight">
                      {it.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed ${
                        i === 0 ? "text-paper/90" : "text-ink/80"
                      }`}
                    >
                      {it.body}
                    </p>
                  </div>
                </div>

                <span className="absolute -top-3 -right-3 font-display font-bold text-5xl bg-paper text-ink rounded-full w-14 h-14 flex items-center justify-center border-[2.5px] border-ink shadow-sticker">
                  {i + 1}
                </span>

                <StarDoodle
                  className="absolute bottom-3 right-6 w-6 h-6 opacity-80"
                  color={i === 0 ? "#FFD56B" : "#FF6B6B"}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
