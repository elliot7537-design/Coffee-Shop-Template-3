"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import { WordMask } from "./AnimatedText";

export default function Visit() {
  const { t } = useLanguage();

  return (
    <section
      id="visit"
      className="relative py-24 md:py-32 bg-gradient-to-br from-terracotta via-clay to-chile text-cream overflow-hidden"
    >
      {/* Papel picado top */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-3 bg-cream papel-picado origin-left"
        style={{ ["--c" as never]: "#F5EBDC" }}
      />

      {/* floating decorative circles */}
      <motion.div
        className="absolute top-10 -left-20 w-72 h-72 rounded-full bg-sun/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-cocoa/30 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="font-script text-sun text-2xl">
              — {t.visit.eyebrow}
            </span>
          </Reveal>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] mt-3">
            <WordMask text={t.visit.title} />
          </h2>

          <div className="mt-10 space-y-5">
            {[
              { icon: MapPin, text: t.visit.address },
              { icon: Clock, text: t.visit.hours },
              { icon: Phone, text: t.visit.phone },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.7 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream/15 backdrop-blur flex items-center justify-center border border-cream/20 group-hover:bg-cream group-hover:text-clay transition-colors">
                  <Icon size={20} />
                </div>
                <span className="text-lg font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Reveal delay={0.2}>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cream text-clay px-7 py-4 font-semibold hover:bg-bark hover:text-cream transition-colors"
              >
                {t.visit.ctaDirections} →
              </a>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/60 px-7 py-4 font-semibold hover:bg-cream hover:text-clay transition-colors"
              >
                {t.visit.ctaReserve}
              </a>
            </Reveal>
          </div>
        </div>

        {/* Illustrated storefront / image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[480px] md:h-[560px] rounded-[2.5rem] overflow-hidden border-8 border-cream shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop"
            alt="Storefront"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/50 via-transparent" />

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur p-5 rounded-2xl text-cocoa"
          >
            <div className="font-script text-terracotta text-xl">
              Roma Norte · CDMX
            </div>
            <div className="font-display font-bold text-xl">
              Calle Orizaba 142
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
