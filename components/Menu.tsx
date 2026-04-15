"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import { WordMask } from "./AnimatedText";

const images = [
  "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559525839-d9acfd27eccf?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop",
];

export default function Menu() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      id="menu"
      className="relative py-24 md:py-32 bg-cocoa text-cream overflow-hidden"
    >
      {/* soft glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-1/4 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <span className="font-script text-sun text-2xl">
              — {t.menu.eyebrow}
            </span>
          </Reveal>
          <motion.h2
            style={{ x: titleX }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95]"
          >
            <WordMask text={t.menu.title} />
          </motion.h2>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-cream/70 text-lg">
              {t.menu.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.menu.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className="group relative bg-bark/60 backdrop-blur rounded-3xl overflow-hidden border border-cream/10 hover:border-terracotta transition-colors"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={images[i]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-sun text-bark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="absolute top-4 right-4 font-script text-cream text-2xl">
                  #{i + 1}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-black text-2xl">
                      {item.name}
                    </h3>
                    <p className="text-cream/60 text-sm mt-1">{item.region}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display font-black text-2xl text-sun">
                      {item.price}
                    </div>
                    <div className="text-cream/50 text-xs">{item.weight}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-cream/10">
                  <div className="text-xs uppercase tracking-widest text-cream/50 mb-1">
                    notas
                  </div>
                  <p className="text-cream/90 italic">{item.notes}</p>
                </div>
              </div>

              {/* hover stripe */}
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-1 bg-terracotta origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Reveal>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-4 font-semibold text-cream hover:bg-sun hover:text-bark transition-colors"
            >
              {t.menu.cta}
              <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
