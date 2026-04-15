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
  // Six different illustrated drinks — full card scene with garnishes, steam & shading
  const variants = [
    // 0: Café de olla — clay olla with piloncillo & cinnamon stick
    <svg key={0} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* steam */}
      <path d="M82 30 Q 74 18 84 8" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M100 26 Q 92 12 104 4" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M118 30 Q 110 18 122 10" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* saucer */}
      <ellipse cx="100" cy="148" rx="70" ry="7" fill="#E8A628" stroke="#2B1B3A" strokeWidth="2.5" />
      {/* olla body (bulbous clay pot) */}
      <path
        d="M48 66 Q 30 100 50 132 Q 70 148 100 148 Q 130 148 150 132 Q 170 100 152 66 Z"
        fill="#B8502E"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* shading */}
      <path d="M62 80 Q 52 110 66 132" stroke="#8A3A20" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
      {/* rim */}
      <ellipse cx="100" cy="66" rx="52" ry="10" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3" />
      <ellipse cx="100" cy="64" rx="46" ry="5" fill="#5A3826" opacity="0.7" />
      {/* handles */}
      <path d="M48 80 Q 32 88 40 104" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M152 80 Q 168 88 160 104" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* cinnamon stick poking out */}
      <path d="M118 58 L 138 34" stroke="#2B1B3A" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 58 L 138 34" stroke="#8B4513" strokeWidth="6" strokeLinecap="round" />
      <path d="M122 52 L 132 40" stroke="#5A3826" strokeWidth="1.5" />
      {/* star anise */}
      <g transform="translate(70 62)">
        <path d="M0 -5 L 1.5 -1.5 L 5 0 L 1.5 1.5 L 0 5 L -1.5 1.5 L -5 0 L -1.5 -1.5 Z" fill="#8B4513" stroke="#2B1B3A" strokeWidth="1.2" />
      </g>
      {/* tiny piloncillo cube on saucer */}
      <rect x="156" y="140" width="10" height="8" fill="#8B4513" stroke="#2B1B3A" strokeWidth="1.5" />
    </svg>,

    // 1: Cajeta latte — tall glass with caramel gradient & foam heart
    <svg key={1} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* steam */}
      <path d="M85 26 Q 78 14 88 4" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M112 28 Q 104 14 116 6" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* saucer */}
      <ellipse cx="100" cy="152" rx="60" ry="6" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2.5" />
      {/* glass */}
      <path
        d="M60 44 L 66 146 Q 68 152 80 152 L 120 152 Q 132 152 134 146 L 140 44 Z"
        fill="#FFF0CC"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* layer: caramel bottom */}
      <path d="M62 94 L 138 94 L 134 146 Q 132 152 120 152 L 80 152 Q 68 152 66 146 Z" fill="#C88A3A" />
      {/* layer: milk mid */}
      <path d="M61 70 L 139 70 L 138 94 L 62 94 Z" fill="#F4DDA8" />
      {/* swirl on top */}
      <ellipse cx="100" cy="44" rx="40" ry="6" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="3" />
      {/* foam heart */}
      <path
        d="M100 52 C 92 46 90 40 94 37 Q 98 35 100 40 Q 102 35 106 37 C 110 40 108 46 100 52 Z"
        fill="#C88A3A"
        stroke="#2B1B3A"
        strokeWidth="1.5"
      />
      {/* highlight */}
      <path d="M66 60 L 68 130" stroke="#FFF6E3" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      {/* caramel drip */}
      <path d="M130 48 Q 132 58 128 62" stroke="#8B5A20" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>,

    // 2: Mazapán frappé — clear cup, whipped cream, pink straw, mazapán crumbs
    <svg key={2} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* straw */}
      <rect x="97" y="14" width="8" height="100" fill="#FF9BAC" stroke="#2B1B3A" strokeWidth="3" />
      <path d="M97 18 L 105 18 M 97 38 L 105 38 M 97 58 L 105 58" stroke="#2B1B3A" strokeWidth="1.5" />
      {/* whipped cream cloud */}
      <path
        d="M58 58 Q 50 44 66 42 Q 72 28 88 36 Q 100 22 116 34 Q 130 26 138 42 Q 152 46 142 60 Z"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* cup */}
      <path
        d="M54 62 L 62 150 Q 64 154 76 154 L 124 154 Q 136 154 138 150 L 146 62 Z"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="3"
        fillOpacity="0.6"
      />
      {/* iced coffee fill */}
      <path d="M56 78 L 144 78 L 137 148 Q 136 152 124 152 L 76 152 Q 64 152 63 148 Z" fill="#C89066" />
      {/* ice cubes */}
      <rect x="74" y="92" width="16" height="16" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2" opacity="0.85" transform="rotate(-8 82 100)" />
      <rect x="108" y="118" width="14" height="14" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2" opacity="0.85" transform="rotate(12 115 125)" />
      <rect x="90" y="130" width="12" height="12" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2" opacity="0.85" transform="rotate(18 96 136)" />
      {/* mazapán crumbs on cream */}
      <circle cx="80" cy="46" r="2.5" fill="#E8A628" />
      <circle cx="110" cy="40" r="2" fill="#E8A628" />
      <circle cx="126" cy="48" r="2.5" fill="#E8A628" />
      {/* sweat drops */}
      <path d="M50 110 Q 46 116 50 120" stroke="#6AB0D9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M150 130 Q 154 136 150 140" stroke="#6AB0D9" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>,

    // 3: Mexican chocolate — mug with foam, chili, cinnamon, chocolate tablet
    <svg key={3} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* steam */}
      <path d="M80 30 Q 72 16 84 6" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M100 26 Q 92 12 104 2" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M120 30 Q 112 16 124 6" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* saucer */}
      <ellipse cx="100" cy="150" rx="64" ry="6" fill="#D97B5B" stroke="#2B1B3A" strokeWidth="2.5" />
      {/* mug */}
      <path
        d="M52 62 L 58 138 Q 60 150 76 150 L 124 150 Q 140 150 142 138 L 148 62 Z"
        fill="#6B4A3A"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* mug shading */}
      <path d="M64 80 L 68 134" stroke="#4A301F" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
      <path d="M136 80 L 132 134" stroke="#FFF6E3" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      {/* rim */}
      <ellipse cx="100" cy="62" rx="48" ry="9" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3" />
      {/* foam */}
      <ellipse cx="100" cy="60" rx="38" ry="5" fill="#E8C8A8" />
      {/* cocoa dust */}
      <circle cx="90" cy="60" r="1.5" fill="#3A2418" />
      <circle cx="104" cy="58" r="1.5" fill="#3A2418" />
      <circle cx="116" cy="61" r="1.5" fill="#3A2418" />
      {/* handle */}
      <path d="M148 82 Q 170 92 168 116 Q 166 136 146 136" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* chili on saucer */}
      <path d="M40 146 Q 34 138 28 144 Q 26 152 40 152 Z" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="2" />
      <path d="M28 144 L 24 140" stroke="#7AD9C4" strokeWidth="2" strokeLinecap="round" />
      {/* cinnamon stick */}
      <rect x="146" y="138" width="28" height="6" rx="3" fill="#8B4513" stroke="#2B1B3A" strokeWidth="2" transform="rotate(10 160 141)" />
    </svg>,

    // 4: Concha + coffee — detailed concha with shell pattern, mug of coffee
    <svg key={4} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* plate under concha */}
      <ellipse cx="62" cy="128" rx="52" ry="6" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2.5" />
      {/* concha base (bread) */}
      <path
        d="M22 102 Q 22 68 62 68 Q 102 68 102 102 Q 102 128 62 128 Q 22 128 22 102 Z"
        fill="#D9A561"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* vanilla sugar topping */}
      <path
        d="M28 96 Q 28 70 62 70 Q 96 70 96 96 Q 96 104 92 108 L 32 108 Q 28 104 28 96 Z"
        fill="#FFD56B"
        stroke="#2B1B3A"
        strokeWidth="2.5"
      />
      {/* shell lines */}
      <path
        d="M38 108 Q 38 78 62 78 Q 86 78 86 108 M 48 108 Q 48 82 62 82 Q 76 82 76 108 M 62 108 L 62 80"
        stroke="#2B1B3A"
        strokeWidth="1.8"
        fill="none"
      />
      <path d="M32 96 Q 62 94 92 96" stroke="#2B1B3A" strokeWidth="1.5" fill="none" />
      {/* steam over mug */}
      <path d="M146 44 Q 138 32 148 22" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M162 46 Q 154 34 164 24" stroke="#2B1B3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* mug */}
      <path
        d="M124 68 L 128 138 Q 129 148 140 148 L 172 148 Q 183 148 184 138 L 188 68 Z"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* coffee rim */}
      <ellipse cx="156" cy="68" rx="32" ry="6" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3" />
      {/* mug handle */}
      <path d="M188 84 Q 202 92 200 112 Q 198 126 184 126" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* heart on mug */}
      <path
        d="M156 108 C 150 102 150 96 154 94 Q 156 93 156 96 Q 156 93 158 94 C 162 96 162 102 156 108 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="1.5"
      />
      {/* crumbs */}
      <circle cx="112" cy="138" r="1.8" fill="#8B4513" />
      <circle cx="118" cy="144" r="1.2" fill="#8B4513" />
    </svg>,

    // 5: Hibiscus latte — layered pink drink with a big 5-petal hibiscus on top
    <svg key={5} viewBox="0 0 200 160" className="w-5/6 h-auto">
      {/* saucer */}
      <ellipse cx="100" cy="152" rx="60" ry="6" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="2.5" />
      {/* glass body */}
      <path
        d="M56 58 L 62 148 Q 64 152 76 152 L 124 152 Q 136 152 138 148 L 144 58 Z"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="3"
        fillOpacity="0.35"
      />
      {/* layer: coconut milk top */}
      <path d="M57 62 L 143 62 L 140 82 L 60 82 Z" fill="#FFE8DE" />
      {/* layer: hibiscus middle */}
      <path d="M60 82 L 140 82 L 137 114 L 63 114 Z" fill="#FF9BAC" />
      {/* layer: espresso bottom */}
      <path d="M63 114 L 137 114 L 134 146 Q 132 152 122 152 L 78 152 Q 68 152 66 146 Z" fill="#6B4A3A" />
      {/* wavy layer boundaries for a soft drink look */}
      <path d="M57 82 Q 80 78 100 82 T 143 82" stroke="#2B1B3A" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M60 114 Q 80 110 100 114 T 140 114" stroke="#2B1B3A" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* rim (coconut milk ellipse) */}
      <ellipse cx="100" cy="58" rx="44" ry="7" fill="#FFF0E6" stroke="#2B1B3A" strokeWidth="3" />
      <ellipse cx="100" cy="56" rx="36" ry="3" fill="#FFE8DE" />
      {/* coconut flakes */}
      <ellipse cx="82" cy="57" rx="3" ry="1.3" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="0.8" transform="rotate(-20 82 57)" />
      <ellipse cx="100" cy="54" rx="3.5" ry="1.5" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="0.8" />
      <ellipse cx="118" cy="57" rx="3" ry="1.3" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="0.8" transform="rotate(18 118 57)" />
      {/* glass highlight */}
      <path d="M68 72 L 70 140" stroke="#FFF6E3" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      {/* hibiscus flower — 5 rounded petals */}
      <g transform="translate(138 30)">
        {/* stem/leaf */}
        <path d="M-2 12 Q -10 22 -16 28" stroke="#4A7A4A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M-10 22 Q -16 18 -20 22 Q -16 26 -10 22 Z" fill="#7AD9C4" stroke="#2B1B3A" strokeWidth="1.5" />
        {/* petals */}
        <g stroke="#2B1B3A" strokeWidth="1.8" strokeLinejoin="round">
          <ellipse cx="0" cy="-12" rx="7" ry="9" fill="#FF6B6B" />
          <ellipse cx="11" cy="-4" rx="7" ry="9" fill="#FF6B6B" transform="rotate(72 11 -4)" />
          <ellipse cx="7" cy="9" rx="7" ry="9" fill="#FF6B6B" transform="rotate(144 7 9)" />
          <ellipse cx="-7" cy="9" rx="7" ry="9" fill="#FF6B6B" transform="rotate(216 -7 9)" />
          <ellipse cx="-11" cy="-4" rx="7" ry="9" fill="#FF6B6B" transform="rotate(288 -11 -4)" />
        </g>
        {/* petal highlights */}
        <path d="M-2 -16 Q 0 -18 2 -16" stroke="#FFC4CF" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* pistil */}
        <circle r="4.5" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="1.5" />
        <circle r="1.5" fill="#C88A3A" />
        {/* stamens */}
        <circle cx="0" cy="-3" r="0.8" fill="#2B1B3A" />
        <circle cx="2" cy="-1" r="0.8" fill="#2B1B3A" />
        <circle cx="-2" cy="-1" r="0.8" fill="#2B1B3A" />
      </g>
      {/* tiny sparkle by the flower */}
      <path
        d="M162 20 L 164 24 L 168 26 L 164 28 L 162 32 L 160 28 L 156 26 L 160 24 Z"
        fill="#FFD56B"
        stroke="#2B1B3A"
        strokeWidth="1"
      />
    </svg>,
  ];
  return variants[index % variants.length];
}
