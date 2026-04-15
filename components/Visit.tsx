"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { Squiggle, Cactus, HandArrow, StarDoodle } from "./Doodles";

export default function Visit() {
  const { t } = useLanguage();

  return (
    <section
      id="visit"
      className="relative py-24 md:py-32 bg-sunny overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT: address & CTAs */}
          <div>
            <motion.span
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: -4 }}
              viewport={{ once: true }}
              className="inline-block bg-coral text-paper font-hand text-2xl px-4 py-1 rounded-full border-[2.5px] border-ink shadow-sticker"
            >
              ✿ {t.visit.eyebrow}
            </motion.span>
            <h2 className="relative mt-4 font-display font-bold text-5xl md:text-7xl text-ink leading-none inline-block">
              {t.visit.title}
              <Squiggle
                className="absolute -bottom-3 left-0 w-56 h-4"
                color="#FF6B6B"
              />
            </h2>

            <div className="mt-10 space-y-4">
              {[
                { icon: MapPin, text: t.visit.address, bg: "bg-coral text-paper" },
                { icon: Clock, text: t.visit.hours, bg: "bg-mint text-ink" },
                { icon: Phone, text: t.visit.phone, bg: "bg-bubblegum text-ink" },
              ].map(({ icon: Icon, text, bg }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30, rotate: -3 }}
                  whileInView={{ opacity: 1, x: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i, duration: 0.7 }}
                  whileHover={{ rotate: 0, x: 4 }}
                  className={`flex items-center gap-4 ${bg} rounded-full border-[2.5px] border-ink pl-4 pr-6 py-3 shadow-stampsm max-w-md`}
                >
                  <div className="w-10 h-10 rounded-full bg-paper border-[2.5px] border-ink flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="font-bold">{text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-ink text-paper px-6 py-3 font-bold shadow-stamp"
              >
                {t.visit.cta1} →
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-paper text-ink px-6 py-3 font-bold shadow-stamp"
              >
                {t.visit.cta2}
              </motion.a>
            </div>
          </div>

          {/* RIGHT: hand-drawn map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-paper rounded-[2rem] border-[2.5px] border-ink p-5 shadow-stamp"
          >
            {/* tape */}
            <div
              className="absolute -top-4 left-10 w-24 h-6 rotate-[-6deg]"
              style={{
                background:
                  "repeating-linear-gradient(45deg, rgba(255,155,172,0.7) 0 6px, rgba(255,155,172,0.4) 6px 12px)",
              }}
            />
            <div
              className="absolute -top-4 right-10 w-24 h-6 rotate-[4deg]"
              style={{
                background:
                  "repeating-linear-gradient(45deg, rgba(122,217,196,0.7) 0 6px, rgba(122,217,196,0.4) 6px 12px)",
              }}
            />

            <div className="relative aspect-square rounded-[1.5rem] bg-sky/40 overflow-hidden border-[2px] border-ink">
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* streets */}
                <motion.path
                  d="M0 140 L 400 140 M 0 260 L 400 260 M 140 0 L 140 400 M 260 0 L 260 400"
                  stroke="#2B1B3A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* diagonal avenue */}
                <motion.path
                  d="M40 380 Q 160 260 260 140 T 380 40"
                  stroke="#2B1B3A"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                />
                {/* park */}
                <rect
                  x="20"
                  y="20"
                  width="100"
                  height="100"
                  rx="12"
                  fill="#7AD9C4"
                  stroke="#2B1B3A"
                  strokeWidth="3"
                />
                <text
                  x="70"
                  y="75"
                  textAnchor="middle"
                  fontFamily="var(--font-hand)"
                  fontSize="22"
                  fill="#2B1B3A"
                >
                  {t.visit.mapPark}
                </text>
                {/* plaza circle */}
                <circle
                  cx="320"
                  cy="320"
                  r="48"
                  fill="#FFB199"
                  stroke="#2B1B3A"
                  strokeWidth="3"
                />
                <text
                  x="320"
                  y="328"
                  textAnchor="middle"
                  fontFamily="var(--font-hand)"
                  fontSize="18"
                  fill="#2B1B3A"
                >
                  {t.visit.mapPlaza}
                </text>

                {/* cafe marker (star) */}
                <motion.g
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 1.4,
                    type: "spring",
                    stiffness: 180,
                  }}
                  style={{ transformOrigin: "220px 200px" }}
                >
                  <path
                    d="M220 180 L 226 196 L 244 198 L 230 210 L 236 228 L 220 218 L 204 228 L 210 210 L 196 198 L 214 196 Z"
                    fill="#FF6B6B"
                    stroke="#2B1B3A"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* route */}
                <motion.path
                  d="M60 360 Q 120 340 140 300 Q 160 260 180 240 Q 200 220 220 200"
                  stroke="#FF6B6B"
                  strokeWidth="4"
                  strokeDasharray="7 7"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 1.8 }}
                />
                {/* start pin */}
                <circle cx="60" cy="360" r="9" fill="#2B1B3A" />
                <circle cx="60" cy="360" r="4" fill="#FFF6E3" />

                {/* trees / flowers scattered */}
                <g>
                  <circle cx="300" cy="90" r="10" fill="#7AD9C4" stroke="#2B1B3A" strokeWidth="2" />
                  <circle cx="90" cy="300" r="10" fill="#7AD9C4" stroke="#2B1B3A" strokeWidth="2" />
                  <circle cx="370" cy="220" r="8" fill="#FF9BAC" stroke="#2B1B3A" strokeWidth="2" />
                </g>

                {/* label for cafe */}
                <text
                  x="270"
                  y="170"
                  fontFamily="var(--font-hand)"
                  fontSize="22"
                  fontWeight="700"
                  fill="#2B1B3A"
                  transform="rotate(-6, 270, 170)"
                >
                  {t.visit.mapHere}
                </text>
              </svg>

              <Cactus className="absolute bottom-3 right-4 w-10 h-14" />
            </div>

            <p className="mt-4 text-center font-hand text-2xl text-ink/80">
              {t.visit.mapNote}
            </p>

            <StarDoodle
              className="absolute -top-4 -right-4 w-10 h-10 animate-wiggle"
              color="#FF6B6B"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
