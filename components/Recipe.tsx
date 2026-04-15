"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { HandArrow, Squiggle, Sparkle, Cup } from "./Doodles";

export default function Recipe() {
  const { t } = useLanguage();

  const anchors = [
    { top: "8%", left: "8%", rot: -6, color: "bg-sky" },
    { top: "28%", right: "6%", rot: 5, color: "bg-sunny" },
    { top: "58%", left: "4%", rot: -4, color: "bg-bubblegum" },
    { top: "62%", right: "10%", rot: 7, color: "bg-mint" },
    { bottom: "6%", left: "40%", rot: -3, color: "bg-lilac" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            className="inline-block bg-coral text-paper px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker font-hand text-xl"
          >
            ✿ {t.recipe.eyebrow}
          </motion.span>
          <h2 className="relative mt-4 font-display font-bold text-4xl md:text-6xl text-ink inline-block">
            {t.recipe.title}
            <Squiggle
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-56 h-4"
              color="#FF6B6B"
            />
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl aspect-[4/5] md:aspect-[3/2]">
          {/* Center cup */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64"
          >
            <Cup className="w-full h-auto" />
          </motion.div>

          {/* Draw SVG lines from anchors to center */}
          <svg
            viewBox="0 0 800 600"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            {[
              "M100 80 Q 250 150 400 300",
              "M720 180 Q 560 220 450 290",
              "M80 470 Q 250 430 380 340",
              "M710 430 Q 560 380 460 330",
              "M430 560 Q 420 500 420 360",
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="#2B1B3A"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.5 + i * 0.15,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Labeled ingredient tags */}
          {t.recipe.parts.map((p, i) => {
            const a = anchors[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6, rotate: a.rot - 20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: a.rot }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.9 + i * 0.15,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                style={{
                  top: a.top,
                  left: a.left,
                  right: a.right,
                  bottom: a.bottom,
                }}
                className={`absolute ${a.color} rounded-2xl border-[2.5px] border-ink px-4 py-3 shadow-stampsm w-44 md:w-52`}
              >
                <div className="flex items-start gap-2">
                  <span className="font-display font-bold text-ink text-lg">
                    {i + 1}.
                  </span>
                  <div>
                    <div className="font-bold text-ink leading-tight">
                      {p.label}
                    </div>
                    <div className="font-hand text-ink/70 text-lg leading-none mt-1">
                      {p.note}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <Sparkle
            className="absolute top-[40%] left-[20%] w-6 h-6"
            color="#FF9BAC"
          />
          <Sparkle
            className="absolute top-[50%] right-[24%] w-5 h-5"
            color="#7AD9C4"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center font-hand text-2xl text-ink/70"
        >
          {t.recipe.caption}
        </motion.p>
      </div>
    </section>
  );
}
