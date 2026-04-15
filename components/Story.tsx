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
                <rect width="400" height="320" fill="#FFD56B" />
                {/* sun */}
                <circle cx="320" cy="70" r="34" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="3" />
                {/* mountain */}
                <path
                  d="M0 250 L 80 140 L 160 220 L 240 120 L 340 230 L 400 180 L 400 320 L 0 320 Z"
                  fill="#7AD9C4"
                  stroke="#2B1B3A"
                  strokeWidth="3"
                />
                {/* shop */}
                <rect x="150" y="200" width="100" height="80" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="3" />
                <path d="M140 200 L 200 170 L 260 200 Z" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="3" />
                <rect x="180" y="240" width="40" height="40" fill="#2B1B3A" />
                <text
                  x="200"
                  y="195"
                  textAnchor="middle"
                  fontFamily="cursive"
                  fontSize="14"
                  fontWeight="700"
                  fill="#2B1B3A"
                >
                  CAFECITO
                </text>
                {/* clouds */}
                <ellipse cx="80" cy="60" rx="28" ry="10" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2.5" />
                <ellipse cx="180" cy="40" rx="24" ry="8" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2.5" />
              </svg>
            </Polaroid>
            <HeartDoodle
              className="absolute -top-4 -right-2 w-10 h-10 animate-wiggle"
              color="#FF6B6B"
            />
          </motion.div>

          {/* Notes column */}
          <div className="md:col-span-6 relative space-y-5 md:pl-4">
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
