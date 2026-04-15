"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { HeartDoodle, Squiggle, StarDoodle } from "./Doodles";

const avatarBgs = ["bg-sunny", "bg-mint", "bg-bubblegum"];
const bubbleBgs = ["bg-lilac", "bg-sky", "bg-peach"];

function Face({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#FFB199" stroke="#2B1B3A" strokeWidth="3" />
        <circle cx="30" cy="36" r="3" fill="#2B1B3A" />
        <circle cx="50" cy="36" r="3" fill="#2B1B3A" />
        <path d="M30 52 Q 40 62 50 52" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="22" cy="48" r="4" fill="#FF6B6B" opacity="0.6" />
        <circle cx="58" cy="48" r="4" fill="#FF6B6B" opacity="0.6" />
        {/* hair */}
        <path d="M10 32 Q 10 8 40 8 Q 70 8 70 32 L 64 26 L 52 30 L 44 22 L 32 28 L 20 24 Z" fill="#2B1B3A" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="3" />
        <circle cx="30" cy="38" r="3" fill="#2B1B3A" />
        <circle cx="50" cy="38" r="3" fill="#2B1B3A" />
        <path d="M28 56 Q 40 62 52 56" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* mustache */}
        <path d="M26 48 Q 32 54 40 50 Q 48 54 54 48" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* glasses */}
        <circle cx="30" cy="38" r="8" fill="none" stroke="#2B1B3A" strokeWidth="2" />
        <circle cx="50" cy="38" r="8" fill="none" stroke="#2B1B3A" strokeWidth="2" />
        <path d="M38 38 L 42 38" stroke="#2B1B3A" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <circle cx="40" cy="40" r="36" fill="#7AD9C4" stroke="#2B1B3A" strokeWidth="3" />
      <path d="M28 38 Q 30 34 32 38" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M48 38 Q 50 34 52 38" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 52 Q 40 58 50 52" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* bun */}
      <circle cx="40" cy="8" r="8" fill="#2B1B3A" />
      <path d="M10 38 Q 10 4 40 4 Q 70 4 70 38" stroke="#2B1B3A" strokeWidth="3" fill="none" />
      {/* earrings */}
      <circle cx="10" cy="44" r="3" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="1.5" />
      <circle cx="70" cy="44" r="3" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="1.5" />
    </svg>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            viewport={{ once: true }}
            className="inline-block bg-mint text-ink font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker"
          >
            ✿ {t.testimonials.eyebrow}
          </motion.span>
          <h2 className="relative mt-4 font-display font-bold text-4xl md:text-6xl text-ink inline-block">
            {t.testimonials.title}
            <Squiggle
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-56 h-4"
              color="#FFD56B"
            />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          {t.testimonials.items.map((item, i) => {
            const rotate = i === 0 ? -2 : i === 1 ? 1.5 : -1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: rotate * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ rotate: 0, y: -6 }}
                className="relative"
              >
                {/* Speech bubble */}
                <div
                  className={`relative ${bubbleBgs[i]} rounded-3xl border-[2.5px] border-ink p-6 pb-7 shadow-stamp`}
                >
                  {/* stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarDoodle key={s} className="w-5 h-5" color="#FF6B6B" />
                    ))}
                  </div>
                  <p className="font-hand text-2xl leading-tight text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* tail */}
                  <svg
                    viewBox="0 0 40 40"
                    className="absolute -bottom-5 left-10 w-10 h-10"
                    fill="none"
                  >
                    <path
                      d="M2 2 L 30 8 L 18 36 Z"
                      fill="currentColor"
                      className={bubbleBgs[i]}
                      stroke="#2B1B3A"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 2 L 30 8"
                      stroke="#2B1B3A"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-7 ml-4">
                  <div
                    className={`w-14 h-14 rounded-full ${avatarBgs[i]} border-[2.5px] border-ink overflow-hidden shadow-sticker`}
                  >
                    <Face index={i} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink">
                      {item.name}
                    </div>
                    <div className="text-sm text-ink/60 font-hand text-lg leading-none">
                      {item.role}
                    </div>
                  </div>
                  {i === 1 && (
                    <HeartDoodle className="w-7 h-7 ml-auto animate-wiggle" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
