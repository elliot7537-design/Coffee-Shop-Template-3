"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import { WordMask } from "./AnimatedText";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="font-script text-terracotta text-2xl">
              — {t.testimonials.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display font-black text-4xl md:text-6xl text-cocoa mt-3">
            <WordMask text={t.testimonials.title} />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
              className="relative bg-bone rounded-3xl p-8 border border-cocoa/10 shadow-sm"
            >
              <Quote
                className="absolute -top-4 left-6 text-terracotta bg-cream rounded-full p-2"
                size={40}
              />
              <div className="flex gap-1 mb-3 mt-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="fill-sun text-sun" />
                ))}
              </div>
              <p className="text-cocoa/85 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-sun flex items-center justify-center text-cream font-display font-bold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="font-display font-bold text-cocoa">
                    {item.name}
                  </div>
                  <div className="text-xs text-cocoa/60">{item.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
