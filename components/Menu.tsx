"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";
import { Squiggle, HeartDoodle, Sparkle, CoffeeBean } from "./Doodles";

const swatches = [
  { bg: "bg-sunny", sticker: "bg-coral text-paper" },
  { bg: "bg-bubblegum", sticker: "bg-ink text-paper" },
  { bg: "bg-mint", sticker: "bg-coral text-paper" },
  { bg: "bg-sky", sticker: "bg-ink text-paper" },
  { bg: "bg-lilac", sticker: "bg-sunny text-ink" },
  { bg: "bg-peach", sticker: "bg-ink text-paper" },
];

const rotations = [-2.5, 1.5, -1, 2, -1.8, 1.2];

export default function Menu() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-ink text-paper overflow-hidden">
      {/* Paper tear edges top and bottom */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-4 bg-paper"
        style={{
          clipPath:
            "polygon(0 0, 3% 100%, 7% 0, 12% 100%, 18% 10%, 24% 100%, 30% 0, 36% 100%, 42% 15%, 48% 100%, 54% 0, 60% 100%, 66% 10%, 72% 100%, 78% 0, 84% 100%, 90% 15%, 96% 100%, 100% 0, 100% 0)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            viewport={{ once: true }}
            className="inline-block bg-sunny text-ink font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-paper shadow-[3px_3px_0_0_#FFF6E3]"
          >
            ✿ {t.menu.eyebrow}
          </motion.span>
          <h2 className="relative mt-4 font-display font-bold text-5xl md:text-7xl">
            {t.menu.title}
            <Squiggle
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 h-4"
              color="#FFD56B"
            />
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-paper/80">{t.menu.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {t.menu.items.map((item, i) => {
            const s = swatches[i % swatches.length];
            const r = rotations[i % rotations.length];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 80, rotate: r * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: r }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                className={`relative ${s.bg} text-ink rounded-2xl border-[2.5px] border-ink p-5 pb-4 shadow-stamp`}
              >
                {/* tape */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-4deg] opacity-80"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0 6px, rgba(255,255,255,0.3) 6px 12px)",
                  }}
                />

                {/* Polaroid photo placeholder with illustration */}
                <div className="relative aspect-[5/4] rounded-xl border-[2.5px] border-ink bg-paper overflow-hidden flex items-center justify-center">
                  <IllustratedDrink index={i} />

                  {/* mood sticker */}
                  <span
                    className={`absolute top-2 right-2 ${s.sticker} text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border-[2px] border-ink rotate-[-6deg]`}
                  >
                    {item.mood}
                  </span>

                  {/* number scribble */}
                  <span className="absolute top-2 left-2 font-hand text-2xl text-ink/80">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-ink/75 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <div className="relative shrink-0 mt-1">
                    <span className="relative font-display font-bold text-2xl">
                      {item.price}
                      <svg
                        viewBox="0 0 80 40"
                        className="absolute -inset-2 w-full h-full"
                        fill="none"
                      >
                        <path
                          d="M5 20 Q 10 5 40 5 Q 75 5 75 20 Q 75 35 40 35 Q 5 35 5 20 Z"
                          stroke="#2B1B3A"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <motion.a
            href="#visit"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-paper bg-coral text-paper px-6 py-3 font-bold shadow-[4px_4px_0_0_#FFF6E3]"
          >
            {t.menu.cta} →
          </motion.a>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-4 bg-paper"
        style={{
          clipPath:
            "polygon(0 100%, 3% 0, 7% 100%, 12% 0, 18% 90%, 24% 0, 30% 100%, 36% 0, 42% 85%, 48% 0, 54% 100%, 60% 0, 66% 90%, 72% 0, 78% 100%, 84% 0, 90% 85%, 96% 0, 100% 100%)",
        }}
      />
    </section>
  );
}

function IllustratedDrink({ index }: { index: number }) {
  // Six different illustrated drinks
  const variants = [
    // 0: café de olla (brown earthen cup)
    <svg key={0} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <path
        d="M40 60 L 45 135 Q 47 148 60 148 L 140 148 Q 153 148 155 135 L 160 60 Z"
        fill="#C85C3B"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <ellipse cx="100" cy="60" rx="60" ry="10" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3" />
      <path
        d="M80 40 Q 75 25 90 20 M 100 35 Q 95 18 110 15 M 120 40 Q 115 25 130 22"
        stroke="#2B1B3A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>,
    // 1: cajeta latte (tall glass, swirl)
    <svg key={1} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <path
        d="M55 40 L 60 150 Q 62 155 75 155 L 125 155 Q 138 155 140 150 L 145 40 Z"
        fill="#FFF0CC"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <path
        d="M55 40 L 145 40 L 143 80 L 57 80 Z"
        fill="#E8A628"
      />
      <path
        d="M60 80 Q 100 65 140 80"
        stroke="#2B1B3A"
        strokeWidth="2.5"
        fill="none"
      />
      <ellipse cx="100" cy="40" rx="45" ry="6" fill="#FFF0CC" stroke="#2B1B3A" strokeWidth="3" />
    </svg>,
    // 2: frappé (cup with straw)
    <svg key={2} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <path
        d="M55 55 L 60 145 L 140 145 L 145 55 Z"
        fill="#F5EBDC"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <path d="M60 55 L 140 55 L 138 90 L 62 90 Z" fill="#6B4A3A" />
      <rect x="95" y="25" width="10" height="80" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="3" />
      <circle cx="80" cy="115" r="4" fill="#2B1B3A" />
      <circle cx="110" cy="125" r="3" fill="#2B1B3A" />
    </svg>,
    // 3: chocolate
    <svg key={3} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <path
        d="M45 60 L 52 140 Q 54 150 70 150 L 130 150 Q 146 150 148 140 L 155 60 Z"
        fill="#8B4513"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <ellipse cx="100" cy="60" rx="55" ry="10" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3" />
      <path d="M100 60 m -25 0 a 25 8 0 1 0 50 0 a 25 8 0 1 0 -50 0" fill="#D97B5B" />
    </svg>,
    // 4: concha + cafe
    <svg key={4} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <circle cx="70" cy="95" r="40" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="3" />
      <path
        d="M42 80 L 98 80 M 42 92 L 98 92 M 42 104 L 98 104 M 52 70 L 52 120 M 70 65 L 70 125 M 88 70 L 88 120"
        stroke="#2B1B3A"
        strokeWidth="1.5"
      />
      <path
        d="M130 70 L 134 135 Q 135 142 145 142 L 170 142 Q 180 142 181 135 L 185 70 Z"
        fill="#6B4A3A"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <ellipse cx="157" cy="70" rx="27" ry="5" fill="#3A2418" stroke="#2B1B3A" strokeWidth="2" />
    </svg>,
    // 5: hibiscus latte
    <svg key={5} viewBox="0 0 200 160" className="w-2/3 h-auto">
      <path
        d="M50 50 L 55 150 L 145 150 L 150 50 Z"
        fill="#FF9BAC"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <ellipse cx="100" cy="50" rx="50" ry="8" fill="#D97B8A" stroke="#2B1B3A" strokeWidth="3" />
      <path
        d="M100 50 m -25 0 a 25 5 0 0 0 50 0"
        stroke="#FFF6E3"
        strokeWidth="2"
        fill="none"
      />
      {/* flower */}
      <g transform="translate(100 30)">
        <circle r="8" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="1.5" />
        <circle r="3" fill="#FFD56B" />
      </g>
    </svg>,
  ];
  return variants[index % variants.length];
}
