"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import { Squiggle, StarDoodle, HeartDoodle, Sparkle } from "./Doodles";

export default function Story() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      id="story"
      className="relative py-24 md:py-32 overflow-hidden bg-paper"
    >
      {/* soft doodle backdrop */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <StarDoodle
          className="absolute top-[12%] left-[6%] w-6 h-6"
          color="#FFD56B"
        />
        <HeartDoodle
          className="absolute top-[8%] right-[8%] w-7 h-7 animate-wiggle"
          color="#FF9BAC"
        />
        <Sparkle
          className="absolute bottom-[20%] left-[10%] w-8 h-8"
          color="#7AD9C4"
        />
        <StarDoodle
          className="absolute bottom-[12%] right-[6%] w-5 h-5"
          color="#FF6B6B"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Intro */}
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

        {/* Chapter 1: The first cup polaroid — centered, simplified */}
        <div className="relative flex flex-col items-center mb-20 md:mb-24">
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Polaroid
              caption={t.story.pinned}
              className="w-[300px] sm:w-[360px] md:w-[420px]"
            >
              <FirstCupIllustration />
            </Polaroid>
            <HeartDoodle
              className="absolute -top-5 -right-4 w-10 h-10 animate-wiggle"
              color="#FF6B6B"
            />
            <StarDoodle
              className="absolute -bottom-3 -left-5 w-8 h-8"
              color="#FFD56B"
            />
          </motion.div>
        </div>

        {/* Chapter 2: Meet the crew */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-10">
            <Squiggle className="hidden sm:block w-16 md:w-28 h-4" color="#2B1B3A" />
            <motion.span
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              className="inline-block bg-coral text-paper font-hand text-2xl md:text-3xl px-5 py-1.5 rounded-full border-[2.5px] border-ink shadow-sticker"
            >
              ✿ {t.story.teamLabel}
            </motion.span>
            <Squiggle className="hidden sm:block w-16 md:w-28 h-4" color="#2B1B3A" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {t.story.notes.map((note, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotate: i === 1 ? 2 : i === 0 ? -3 : 3 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: i === 1 ? 1 : i === 0 ? -2 : 2,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ rotate: 0, y: -6 }}
                className="relative"
              >
                <TeamPolaroid index={i} name={note.title} body={note.body} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ First Cup illustration (simplified) ------------ */

function FirstCupIllustration() {
  return (
    <svg viewBox="0 0 400 320" className="w-full h-full block">
      {/* warm backdrop */}
      <rect width="400" height="320" fill="#FFE5A8" />
      {/* tiny dot pattern */}
      <g fill="#E8A628" opacity="0.35">
        <circle cx="40" cy="40" r="2.5" />
        <circle cx="360" cy="50" r="2" />
        <circle cx="70" cy="200" r="2" />
        <circle cx="340" cy="210" r="2.5" />
        <circle cx="180" cy="30" r="1.8" />
        <circle cx="20" cy="150" r="2" />
        <circle cx="380" cy="150" r="2" />
      </g>
      {/* soft sun behind cup */}
      <circle cx="200" cy="170" r="120" fill="#FFD56B" opacity="0.85" />
      {/* ground shadow */}
      <ellipse cx="200" cy="280" rx="140" ry="8" fill="#2B1B3A" opacity="0.15" />

      {/* steam wisps */}
      <path
        d="M170 86 Q 156 66 172 46 Q 188 26 174 10"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M214 90 Q 200 68 216 46 Q 232 24 218 6"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M258 86 Q 244 66 260 46 Q 274 28 262 12"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* saucer */}
      <ellipse cx="200" cy="266" rx="130" ry="14" fill="#FFF6E3" stroke="#2B1B3A" strokeWidth="4" />
      <ellipse cx="200" cy="263" rx="104" ry="7" fill="#FFE8C4" stroke="#2B1B3A" strokeWidth="2.5" />

      {/* cup body */}
      <path
        d="M122 120 L 134 246 Q 136 264 164 264 L 236 264 Q 264 264 266 246 L 278 120 Z"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="4.5"
      />
      {/* soft shading down the left */}
      <path d="M144 140 L 150 240" stroke="#E8D4A8" strokeWidth="7" strokeLinecap="round" opacity="0.8" />
      {/* highlight down the right */}
      <path d="M256 140 L 250 236" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

      {/* coffee surface */}
      <ellipse cx="200" cy="120" rx="78" ry="14" fill="#3A2418" stroke="#2B1B3A" strokeWidth="4.5" />
      <ellipse cx="200" cy="116" rx="70" ry="8" fill="#5A3826" opacity="0.85" />

      {/* cup handle */}
      <path
        d="M278 150 Q 316 162 314 202 Q 312 234 278 232"
        stroke="#2B1B3A"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* small '2017' tape tag */}
      <g transform="translate(310 250) rotate(-10)">
        <rect
          x="-30"
          y="-14"
          width="60"
          height="24"
          fill="#FFF6E3"
          stroke="#2B1B3A"
          strokeWidth="2.5"
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          fontFamily="cursive"
          fontSize="16"
          fontWeight="700"
          fill="#2B1B3A"
        >
          2017
        </text>
      </g>
    </svg>
  );
}

/* ------------ Team polaroid (photo + name + note) ------------ */

function TeamPolaroid({
  index,
  name,
  body,
}: {
  index: number;
  name: string;
  body: string;
}) {
  const bgs = ["#FFD56B", "#7AD9C4", "#FF9BAC"];
  const bg = bgs[index % bgs.length];
  return (
    <div className="bg-paper p-3 pb-4 border-[2.5px] border-ink shadow-stamp">
      {/* tape */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rotate-[-5deg] opacity-80"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255,213,107,0.7) 0 6px, rgba(255,213,107,0.4) 6px 12px)",
        }}
      />
      {/* portrait */}
      <div
        className="relative aspect-square border-[2.5px] border-ink overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        {index === 0 && <LupitaAvatar />}
        {index === 1 && <FerAvatar />}
        {index === 2 && <FirulaisAvatar />}
      </div>
      {/* caption */}
      <div className="mt-3 px-1">
        <h3 className="font-hand text-2xl text-ink leading-none">{name}</h3>
        <p className="mt-1.5 text-sm text-ink/75 leading-snug">{body}</p>
      </div>
    </div>
  );
}

/* ------------ Avatars ------------ */

function LupitaAvatar() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full block">
      {/* shoulders / apron */}
      <path
        d="M20 200 Q 40 150 100 150 Q 160 150 180 200 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="4"
      />
      {/* apron stripes */}
      <path d="M64 174 L 136 174 M 60 188 L 140 188" stroke="#FFF6E3" strokeWidth="3" strokeLinecap="round" />
      {/* neckline */}
      <path d="M86 150 Q 100 160 114 150" stroke="#2B1B3A" strokeWidth="3" fill="none" />
      {/* face */}
      <circle cx="100" cy="96" r="52" fill="#F4C398" stroke="#2B1B3A" strokeWidth="4" />
      {/* hair bun on top */}
      <ellipse cx="100" cy="46" rx="24" ry="16" fill="#C9C1B5" stroke="#2B1B3A" strokeWidth="3.5" />
      {/* hair bun details */}
      <path d="M82 46 Q 100 34 118 46" stroke="#8A8478" strokeWidth="2" fill="none" />
      {/* hair sides */}
      <path d="M58 80 Q 52 60 70 48 Q 82 42 92 48" fill="#C9C1B5" stroke="#2B1B3A" strokeWidth="3.5" />
      <path d="M142 80 Q 148 60 130 48 Q 118 42 108 48" fill="#C9C1B5" stroke="#2B1B3A" strokeWidth="3.5" />
      {/* glasses */}
      <circle cx="80" cy="96" r="13" fill="none" stroke="#2B1B3A" strokeWidth="3.5" />
      <circle cx="120" cy="96" r="13" fill="none" stroke="#2B1B3A" strokeWidth="3.5" />
      <path d="M93 96 L 107 96" stroke="#2B1B3A" strokeWidth="3.5" />
      {/* eyes behind glasses */}
      <circle cx="80" cy="96" r="2.5" fill="#2B1B3A" />
      <circle cx="120" cy="96" r="2.5" fill="#2B1B3A" />
      {/* smile */}
      <path
        d="M84 124 Q 100 138 116 124"
        stroke="#2B1B3A"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cheeks */}
      <circle cx="66" cy="118" r="5" fill="#FF9BAC" opacity="0.75" />
      <circle cx="134" cy="118" r="5" fill="#FF9BAC" opacity="0.75" />
      {/* earrings */}
      <circle cx="50" cy="102" r="2.5" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="1.2" />
      <circle cx="150" cy="102" r="2.5" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="1.2" />
    </svg>
  );
}

function FerAvatar() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full block">
      {/* shoulders / apron */}
      <path
        d="M20 200 Q 40 150 100 150 Q 160 150 180 200 Z"
        fill="#2B1B3A"
        stroke="#2B1B3A"
        strokeWidth="4"
      />
      <path d="M86 150 Q 100 160 114 150" stroke="#FFF6E3" strokeWidth="3" fill="none" />
      {/* apron straps */}
      <path d="M76 150 L 68 180 M 124 150 L 132 180" stroke="#FFF6E3" strokeWidth="3" strokeLinecap="round" />
      {/* face */}
      <circle cx="100" cy="98" r="50" fill="#E8A678" stroke="#2B1B3A" strokeWidth="4" />
      {/* hair back */}
      <path
        d="M50 92 Q 48 40 100 38 Q 152 40 150 92 Q 150 60 130 50 Q 110 44 100 46 Q 88 44 70 50 Q 50 60 50 92 Z"
        fill="#3A2418"
        stroke="#2B1B3A"
        strokeWidth="3.5"
      />
      {/* bangs */}
      <path
        d="M58 78 Q 70 54 100 56 Q 130 54 142 78 Q 128 64 100 64 Q 72 64 58 78 Z"
        fill="#3A2418"
        stroke="#2B1B3A"
        strokeWidth="2.5"
      />
      {/* ponytail (off to side) */}
      <ellipse
        cx="152"
        cy="70"
        rx="14"
        ry="22"
        fill="#3A2418"
        stroke="#2B1B3A"
        strokeWidth="3"
        transform="rotate(20 152 70)"
      />
      <circle cx="142" cy="58" r="4" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="2" />
      {/* eyebrows */}
      <path d="M74 90 Q 82 86 90 90" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M110 90 Q 118 86 126 90" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* eyes */}
      <circle cx="82" cy="102" r="3" fill="#2B1B3A" />
      <circle cx="118" cy="102" r="3" fill="#2B1B3A" />
      {/* tiny highlight */}
      <circle cx="83" cy="100" r="1" fill="#FFF6E3" />
      <circle cx="119" cy="100" r="1" fill="#FFF6E3" />
      {/* smile */}
      <path
        d="M86 126 Q 100 136 114 126"
        stroke="#2B1B3A"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cheeks */}
      <circle cx="70" cy="120" r="5" fill="#FF6B6B" opacity="0.55" />
      <circle cx="130" cy="120" r="5" fill="#FF6B6B" opacity="0.55" />
      {/* hoop earring */}
      <circle cx="50" cy="110" r="4" fill="none" stroke="#FFD56B" strokeWidth="2.5" />
    </svg>
  );
}

function FirulaisAvatar() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full block">
      {/* ears */}
      <path
        d="M50 60 Q 38 90 52 120 Q 62 108 66 88 Q 68 70 60 58 Z"
        fill="#8B5A3C"
        stroke="#2B1B3A"
        strokeWidth="3.5"
      />
      <path
        d="M150 60 Q 162 90 148 120 Q 138 108 134 88 Q 132 70 140 58 Z"
        fill="#6B4028"
        stroke="#2B1B3A"
        strokeWidth="3.5"
      />
      {/* head */}
      <ellipse
        cx="100"
        cy="106"
        rx="56"
        ry="52"
        fill="#B8834A"
        stroke="#2B1B3A"
        strokeWidth="4"
      />
      {/* darker patch over one eye */}
      <path
        d="M62 92 Q 60 74 82 72 Q 100 74 98 94 Q 88 100 74 100 Q 64 98 62 92 Z"
        fill="#6B4028"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* muzzle */}
      <ellipse cx="100" cy="132" rx="36" ry="28" fill="#E8C89A" stroke="#2B1B3A" strokeWidth="3.5" />
      {/* nose */}
      <path
        d="M90 118 Q 100 112 110 118 Q 108 128 100 128 Q 92 128 90 118 Z"
        fill="#2B1B3A"
      />
      {/* mouth */}
      <path d="M100 128 L 100 138" stroke="#2B1B3A" strokeWidth="2.5" />
      <path
        d="M100 138 Q 90 146 84 140"
        stroke="#2B1B3A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 138 Q 110 146 116 140"
        stroke="#2B1B3A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* tongue */}
      <path
        d="M94 144 Q 100 156 106 144 Q 106 152 100 154 Q 94 152 94 144 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="2"
      />
      {/* eyes */}
      <circle cx="80" cy="90" r="4.5" fill="#2B1B3A" />
      <circle cx="125" cy="96" r="4.5" fill="#2B1B3A" />
      <circle cx="81" cy="88" r="1.5" fill="#FFF6E3" />
      <circle cx="126" cy="94" r="1.5" fill="#FFF6E3" />
      {/* eyebrow tuft */}
      <path d="M70 78 Q 76 74 84 78" stroke="#2B1B3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M118 80 Q 124 76 132 80" stroke="#2B1B3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* collar */}
      <path
        d="M44 168 Q 100 190 156 168 L 158 180 Q 100 202 42 180 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      {/* tag */}
      <circle cx="100" cy="192" r="7" fill="#FFD56B" stroke="#2B1B3A" strokeWidth="2.5" />
      <path d="M97 189 L 103 195 M 103 189 L 97 195" stroke="#2B1B3A" strokeWidth="1.5" />
    </svg>
  );
}

function Polaroid({
  children,
  caption,
  className = "",
}: {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-paper p-3 pb-6 border-[2.5px] border-ink shadow-stamp ${className}`}
    >
      <div className="overflow-hidden border-[2.5px] border-ink">{children}</div>
      {caption && (
        <p className="mt-3 text-center font-hand text-xl text-ink">{caption}</p>
      )}
    </div>
  );
}
