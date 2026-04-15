"use client";

import { motion } from "framer-motion";
import { Fragment, ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";
import { Squiggle, Sparkle, StarDoodle } from "./Doodles";

/* ---------- illustrated ingredient SVGs ---------- */

function WaterDrop() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <path
        d="M60 14 C 40 40 26 62 26 80 C 26 100 42 114 60 114 C 78 114 94 100 94 80 C 94 62 80 40 60 14 Z"
        fill="#A8DAFF"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M42 78 Q 44 92 56 96"
        stroke="#FFF6E3"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cute face */}
      <circle cx="50" cy="72" r="2.8" fill="#2B1B3A" />
      <circle cx="70" cy="72" r="2.8" fill="#2B1B3A" />
      <path d="M50 86 Q 60 94 70 86" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="42" cy="82" r="3.5" fill="#FF6B6B" opacity="0.55" />
      <circle cx="78" cy="82" r="3.5" fill="#FF6B6B" opacity="0.55" />
    </svg>
  );
}

function BeansTrio() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      {/* three beans in a pile */}
      <g transform="translate(38 34) rotate(-18)">
        <ellipse cx="0" cy="0" rx="14" ry="22" fill="#5A3522" stroke="#2B1B3A" strokeWidth="3" />
        <path d="M0 -18 Q 4 0 0 18" stroke="#FFF6E3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
      <g transform="translate(78 48) rotate(22)">
        <ellipse cx="0" cy="0" rx="14" ry="22" fill="#6B4028" stroke="#2B1B3A" strokeWidth="3" />
        <path d="M0 -18 Q 4 0 0 18" stroke="#FFF6E3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
      <g transform="translate(58 80) rotate(-4)">
        <ellipse cx="0" cy="0" rx="16" ry="24" fill="#4A2818" stroke="#2B1B3A" strokeWidth="3" />
        <path d="M0 -20 Q 4 0 0 20" stroke="#FFF6E3" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* face on middle bean */}
        <circle cx="-5" cy="-3" r="2" fill="#FFF6E3" />
        <circle cx="5" cy="-3" r="2" fill="#FFF6E3" />
        <path d="M-5 6 Q 0 10 5 6" stroke="#FFF6E3" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* sparkles */}
      <path d="M22 22 L 22 30 M 18 26 L 26 26" stroke="#FFD56B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M98 96 L 98 104 M 94 100 L 102 100" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function MilkJug({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      {/* body */}
      <path
        d="M32 44 L 36 100 Q 38 110 48 110 L 84 110 Q 94 110 96 100 L 98 56 Q 98 46 88 44 L 86 36 L 50 36 L 48 44 Z"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* spout */}
      <path
        d="M98 48 Q 110 46 112 54 Q 110 60 98 60"
        fill="#FFF6E3"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* handle */}
      <path
        d="M32 52 Q 22 56 22 70 Q 22 82 32 86"
        stroke="#2B1B3A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* stripe */}
      <rect x="36" y="66" width="60" height="10" fill="#A8DAFF" stroke="#2B1B3A" strokeWidth="3" />
      {/* face */}
      <circle cx="52" cy="90" r="2.8" fill="#2B1B3A" />
      <circle cx="78" cy="90" r="2.8" fill="#2B1B3A" />
      <path d="M54 98 Q 65 104 76 98" stroke="#2B1B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="96" r="3" fill="#FF9BAC" opacity="0.7" />
      <circle cx="84" cy="96" r="3" fill="#FF9BAC" opacity="0.7" />
      {/* M label */}
      <text x="66" y="78" textAnchor="middle" fontFamily="var(--font-hand)" fontSize="12" fontWeight="700" fill="#2B1B3A">
        {label}
      </text>
    </svg>
  );
}

function CinnamonStick() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <g transform="translate(60 60) rotate(-24)">
        {/* stick */}
        <rect
          x="-40"
          y="-12"
          width="80"
          height="24"
          rx="10"
          fill="#C87941"
          stroke="#2B1B3A"
          strokeWidth="4"
        />
        {/* bark rolls */}
        <path
          d="M-36 -10 Q -30 0 -36 10 M -16 -10 Q -10 0 -16 10 M 4 -10 Q 10 0 4 10 M 24 -10 Q 30 0 24 10"
          stroke="#2B1B3A"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* second stick crossed */}
      <g transform="translate(62 68) rotate(36)">
        <rect
          x="-32"
          y="-9"
          width="64"
          height="18"
          rx="8"
          fill="#B86B33"
          stroke="#2B1B3A"
          strokeWidth="3.5"
        />
        <path
          d="M-26 -7 Q -22 0 -26 7 M -8 -7 Q -4 0 -8 7 M 10 -7 Q 14 0 10 7"
          stroke="#2B1B3A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* little leaves */}
      <path
        d="M24 26 Q 34 22 30 34"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="2.5"
      />
      {/* powder dots */}
      <circle cx="96" cy="98" r="2" fill="#C87941" />
      <circle cx="88" cy="102" r="1.5" fill="#C87941" />
      <circle cx="96" cy="104" r="1.5" fill="#C87941" />
    </svg>
  );
}

function LoveHeart() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <path
        d="M60 100 C 20 74 20 40 36 32 C 48 26 56 34 60 42 C 64 34 72 26 84 32 C 100 40 100 74 60 100 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* shine */}
      <path
        d="M42 48 Q 46 42 52 42"
        stroke="#FFF6E3"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* face */}
      <circle cx="52" cy="58" r="2.8" fill="#2B1B3A" />
      <circle cx="72" cy="58" r="2.8" fill="#2B1B3A" />
      <path
        d="M52 72 Q 62 80 72 72"
        stroke="#2B1B3A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* tiny sparkle */}
      <path
        d="M20 20 L 20 30 M 15 25 L 25 25"
        stroke="#FFD56B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M100 24 L 100 32 M 96 28 L 104 28"
        stroke="#7AD9C4"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FinalCup() {
  return (
    <svg viewBox="0 0 160 160" className="w-full h-full">
      {/* steam */}
      <path
        d="M54 18 Q 46 6 60 0"
        stroke="#2B1B3A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M76 22 Q 68 8 82 2"
        stroke="#2B1B3A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M98 18 Q 90 6 104 0"
        stroke="#2B1B3A"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* saucer */}
      <ellipse
        cx="80"
        cy="138"
        rx="66"
        ry="10"
        fill="#FFD56B"
        stroke="#2B1B3A"
        strokeWidth="3.5"
      />
      {/* cup */}
      <path
        d="M28 54 L 36 126 Q 38 138 54 138 L 106 138 Q 122 138 124 126 L 132 54 Z"
        fill="#FF9BAC"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* coffee */}
      <ellipse cx="80" cy="54" rx="52" ry="8" fill="#3A2418" stroke="#2B1B3A" strokeWidth="3.5" />
      {/* latte art heart */}
      <path
        d="M80 56 C 72 48 66 46 64 50 C 62 54 68 58 80 62 C 92 58 98 54 96 50 C 94 46 88 48 80 56 Z"
        fill="#FFF6E3"
      />
      {/* handle */}
      <path
        d="M132 72 Q 150 80 148 104 Q 146 122 130 122"
        stroke="#2B1B3A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* smiling face on cup */}
      <circle cx="66" cy="96" r="3" fill="#2B1B3A" />
      <circle cx="94" cy="96" r="3" fill="#2B1B3A" />
      <path d="M66 110 Q 80 122 94 110" stroke="#2B1B3A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="56" cy="108" r="4" fill="#FF6B6B" opacity="0.5" />
      <circle cx="104" cy="108" r="4" fill="#FF6B6B" opacity="0.5" />
    </svg>
  );
}

/* ---------- step component ---------- */

function Step({
  n,
  icon,
  label,
  note,
  bg,
  rot,
  delay,
}: {
  n: number | string;
  icon: ReactNode;
  label: string;
  note: string;
  bg: string;
  rot: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rot * 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      className="relative flex flex-col items-center text-center min-w-[140px] md:min-w-0"
    >
      <div
        className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full ${bg} border-[3px] border-ink shadow-stamp flex items-center justify-center`}
      >
        <div className="w-20 h-20 md:w-24 md:h-24">{icon}</div>
        {/* number badge */}
        <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-paper border-[2.5px] border-ink flex items-center justify-center font-display font-bold text-ink shadow-sticker">
          {n}
        </span>
      </div>
      <div className="mt-4 font-display font-bold text-ink leading-tight">
        {label}
      </div>
      <div className="mt-1 font-hand text-lg text-ink/65 leading-none">
        {note}
      </div>
    </motion.div>
  );
}

/* ---------- connector ---------- */

function Plus() {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className="w-7 h-7 md:w-9 md:h-9 shrink-0"
      fill="none"
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <path
        d="M20 6 L 20 34 M 6 20 L 34 20"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

/* ---------- main section ---------- */

export default function Recipe() {
  const { t } = useLanguage();

  const ingredients = [
    { icon: <WaterDrop />, bg: "bg-sky" },
    { icon: <BeansTrio />, bg: "bg-sunny" },
    { icon: <MilkJug label={t.recipe.milkLabel} />, bg: "bg-bubblegum" },
    { icon: <CinnamonStick />, bg: "bg-peach" },
    { icon: <LoveHeart />, bg: "bg-mint" },
  ];

  const rotations = [-2, 1.5, -1.5, 2, -1];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Title */}
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
          <div className="mt-2 font-hand text-2xl text-ink/60">
            {t.recipe.intro}
          </div>
        </div>

        {/* Steps flow */}
        <div className="relative">
          <Sparkle
            className="absolute -top-4 left-[10%] w-6 h-6 animate-wiggle hidden md:block"
            color="#FFD56B"
          />
          <StarDoodle
            className="absolute top-4 right-[8%] w-7 h-7 hidden md:block"
            color="#FF9BAC"
          />

          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-10">
            {t.recipe.parts.map((p, i) => (
              <Fragment key={i}>
                <Step
                  n={i + 1}
                  icon={ingredients[i].icon}
                  label={p.label}
                  note={p.note}
                  bg={ingredients[i].bg}
                  rot={rotations[i]}
                  delay={i * 0.12}
                />
                {i < t.recipe.parts.length - 1 && (
                  <div className="self-center pt-2 md:pt-0 md:-mt-14">
                    <Plus />
                  </div>
                )}
              </Fragment>
            ))}

            {/* equals + final cup */}
            <div className="self-center pt-2 md:pt-0 md:-mt-14">
              <motion.svg
                viewBox="0 0 40 24"
                className="w-8 h-5 md:w-10 md:h-6"
                fill="none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              >
                <path
                  d="M4 8 L 36 8 M 4 16 L 36 16"
                  stroke="#2B1B3A"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ rotate: 0, y: -8 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-coral border-[3px] border-ink shadow-stamp flex items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32">
                  <FinalCup />
                </div>
                {/* "done!" sticker */}
                <motion.span
                  initial={{ scale: 0, rotate: -30 }}
                  whileInView={{ scale: 1, rotate: 10 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 180 }}
                  className="absolute -top-5 -right-4 bg-sunny text-ink text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border-[2.5px] border-ink shadow-sticker"
                >
                  {t.recipe.done}
                </motion.span>
              </div>
              <div className="mt-4 font-display font-bold text-ink text-lg">
                {t.recipe.finalLabel}
              </div>
              <div className="mt-1 font-hand text-lg text-ink/65 leading-none">
                {t.recipe.finalNote}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center font-hand text-2xl text-ink/70"
        >
          {t.recipe.caption}
        </motion.p>
      </div>
    </section>
  );
}
