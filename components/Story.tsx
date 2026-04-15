"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { HandArrow, Squiggle, StarDoodle, HeartDoodle } from "./Doodles";

export default function Story() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, rotate: -10, y: -10 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-lilac text-ink font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker"
          >
            ✿ {t.story.eyebrow}
          </motion.span>
          <h2 className="relative mt-4 font-display font-bold text-4xl md:text-6xl text-ink inline-block">
            {t.story.title}
            <Squiggle
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-56 h-4"
              color="#7AD9C4"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-ink/80 text-lg leading-relaxed"
          >
            {t.story.intro}
          </motion.p>
        </div>

        {/* Scrapbook layout */}
        <div className="relative mx-auto max-w-5xl grid md:grid-cols-12 gap-6 md:gap-4">
          {/* Main polaroid */}
          <motion.div
            style={{ y: photoY, rotate: photoRotate }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="md:col-span-6 relative"
          >
            <Polaroid
              caption={t.story.pinned}
              rotate={-3}
              className="max-w-md mx-auto"
            >
              <svg viewBox="0 0 400 320" className="w-full h-full">
                {/* warm morning backdrop */}
                <rect width="400" height="320" fill="#FFE5A8" />
                {/* sunburst rays */}
                <g stroke="#FF9BAC" strokeWidth="3" strokeLinecap="round" opacity="0.55">
                  <path d="M60 40 L 90 70" />
                  <path d="M200 24 L 200 56" />
                  <path d="M340 40 L 310 70" />
                  <path d="M24 160 L 60 160" />
                  <path d="M376 160 L 340 160" />
                </g>
                {/* soft sun behind cup */}
                <circle cx="200" cy="150" r="110" fill="#FFD56B" opacity="0.9" />
                {/* wooden counter */}
                <rect x="0" y="260" width="400" height="60" fill="#B8834A" stroke="#2B1B3A" strokeWidth="3" />
                <path d="M0 276 L 400 276 M 0 296 L 400 296" stroke="#8A5E30" strokeWidth="2" opacity="0.6" />
                {/* saucer */}
                <ellipse cx="200" cy="260" rx="120" ry="14" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="3" />
                <ellipse cx="200" cy="258" rx="96" ry="8" fill="#FFE8C4" stroke="#2B1B3A" strokeWidth="2" />
                {/* steam — hand drawn wisps */}
                <path
                  d="M160 70 Q 140 50 160 30 Q 180 10 164 -4"
                  stroke="#2B1B3A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M210 80 Q 190 55 210 30 Q 230 8 212 -6"
                  stroke="#2B1B3A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M258 74 Q 238 52 258 28 Q 276 10 260 -4"
                  stroke="#2B1B3A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* cup body */}
                <path
                  d="M120 110 L 130 240 Q 132 258 160 258 L 240 258 Q 268 258 270 240 L 280 110 Z"
                  fill="#FFF6E3"
                  stroke="#2B1B3A"
                  strokeWidth="4"
                />
                {/* cup shading */}
                <path d="M140 130 L 146 232" stroke="#E8D4A8" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                {/* coffee surface */}
                <ellipse cx="200" cy="110" rx="80" ry="14" fill="#3A2418" stroke="#2B1B3A" strokeWidth="4" />
                <ellipse cx="200" cy="106" rx="72" ry="8" fill="#5A3826" opacity="0.8" />
                {/* foam heart (latte art) */}
                <path
                  d="M200 120 C 184 108 184 96 192 92 Q 200 90 200 98 Q 200 90 208 92 C 216 96 216 108 200 120 Z"
                  fill="#E8C8A8"
                  stroke="#2B1B3A"
                  strokeWidth="2"
                />
                {/* cup handle */}
                <path
                  d="M280 140 Q 320 152 318 196 Q 316 230 278 226"
                  stroke="#2B1B3A"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* cute smile on cup */}
                <circle cx="178" cy="180" r="4" fill="#2B1B3A" />
                <circle cx="222" cy="180" r="4" fill="#2B1B3A" />
                <path
                  d="M176 198 Q 200 216 224 198"
                  stroke="#2B1B3A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="162" cy="198" r="7" fill="#FF9BAC" opacity="0.6" />
                <circle cx="238" cy="198" r="7" fill="#FF9BAC" opacity="0.6" />
                {/* "2017" scribble note */}
                <g transform="translate(58 228) rotate(-8)">
                  <rect x="-4" y="-16" width="68" height="26" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2" />
                  <text
                    x="30"
                    y="4"
                    textAnchor="middle"
                    fontFamily="cursive"
                    fontSize="18"
                    fontWeight="700"
                    fill="#2B1B3A"
                  >
                    día 1 · 2017
                  </text>
                </g>
                {/* little heart sticker */}
                <path
                  d="M332 108 C 318 98 318 84 328 80 Q 336 78 336 86 Q 336 78 344 80 C 354 84 354 98 336 108 Z"
                  fill="#FF6B6B"
                  stroke="#2B1B3A"
                  strokeWidth="2.5"
                />
                {/* sparkle */}
                <path
                  d="M70 100 L 74 108 L 82 112 L 74 116 L 70 124 L 66 116 L 58 112 L 66 108 Z"
                  fill="#FFF6E3"
                  stroke="#2B1B3A"
                  strokeWidth="2"
                />
              </svg>
            </Polaroid>
            <HeartDoodle
              className="absolute -top-4 -right-2 w-10 h-10 animate-wiggle"
              color="#FF6B6B"
            />
          </motion.div>

          {/* Notes column */}
          <div className="md:col-span-6 relative space-y-5 md:pl-4">
            <motion.div
              initial={{ opacity: 0, y: -10, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-1"
            >
              <span className="inline-block bg-coral text-paper font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker">
                ✿ {t.story.teamLabel}
              </span>
              <Squiggle className="flex-1 h-4" color="#2B1B3A" />
            </motion.div>
            {t.story.notes.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40, rotate: i % 2 === 0 ? 3 : -2 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: i % 2 === 0 ? 1 : -1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ rotate: 0, y: -4 }}
                className={`relative rounded-2xl border-[2.5px] border-ink p-5 shadow-stamp ${
                  i === 0 ? "bg-sunny" : i === 1 ? "bg-mint" : "bg-bubblegum"
                }`}
              >
                {/* tape */}
                <div
                  className="absolute -top-3 left-6 w-16 h-5 rotate-[-6deg]"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,246,227,0.6) 0 5px, rgba(255,246,227,0.3) 5px 10px)",
                  }}
                />
                <h3 className="font-hand text-3xl text-ink leading-none">
                  {note.title}
                </h3>
                <p className="mt-2 text-ink/80">{note.body}</p>
                <StarDoodle
                  className="absolute -bottom-3 -right-3 w-7 h-7"
                  color="#FFF6E3"
                />
              </motion.div>
            ))}

            {/* Annotation arrow */}
            <div className="hidden md:block absolute -bottom-6 left-0">
              <HandArrow className="w-32 h-16 -rotate-12" />
              <span className="font-marker text-lg text-ink/70 -translate-x-8 inline-block mt-1">
                el equipo ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Polaroid({
  children,
  caption,
  rotate = 0,
  className = "",
}: {
  children: React.ReactNode;
  caption?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`bg-paper p-3 pb-8 border-[2.5px] border-ink shadow-stamp ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="bg-paper overflow-hidden">{children}</div>
      {caption && (
        <p className="mt-2 text-center font-hand text-xl text-ink">{caption}</p>
      )}
    </div>
  );
}
