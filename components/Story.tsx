"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Flame, Handshake, Clock } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import { WordMask } from "./AnimatedText";

export default function Story() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);
  const tagRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const icons = [Mountain, Flame, Handshake, Clock];
  const features = [
    { title: t.story.feature1Title, body: t.story.feature1Body },
    { title: t.story.feature2Title, body: t.story.feature2Body },
    { title: t.story.feature3Title, body: t.story.feature3Body },
    { title: t.story.feature4Title, body: t.story.feature4Body },
  ];

  return (
    <section
      ref={ref}
      id="story"
      className="relative py-24 md:py-32 bg-cream overflow-hidden"
    >
      {/* decorative */}
      <motion.div
        style={{ rotate: tagRotate }}
        className="absolute top-20 right-10 w-40 h-40 opacity-20 pointer-events-none hidden md:block"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circle-path"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text fill="#A14430" fontSize="14" fontWeight="700" letterSpacing="4">
            <textPath href="#circle-path">
              · CAFÉ DEL SOL · DESDE 2012 · HECHO EN MÉXICO ·
            </textPath>
          </text>
        </svg>
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="inline-block font-script text-terracotta text-2xl mb-4">
              — {t.story.eyebrow}
            </span>
          </Reveal>

          <h2 className="font-display font-black text-4xl md:text-6xl text-cocoa leading-[1.05]">
            <WordMask text={t.story.title} />
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-6 text-cocoa/75 text-lg leading-relaxed">
              {t.story.paragraph1}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-4 text-cocoa/75 text-lg leading-relaxed">
              {t.story.paragraph2}
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group bg-bone/60 rounded-2xl p-5 border border-cocoa/10 hover:border-terracotta hover:bg-bone transition-colors"
                >
                  <div className="mb-3 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-terracotta/15 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-cocoa">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-cocoa/65 leading-relaxed">
                    {f.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* image collage */}
        <div className="relative h-[520px] md:h-[640px]">
          <motion.div
            style={{ y: imgY, rotate }}
            className="absolute top-0 right-0 w-[65%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=900&auto=format&fit=crop"
              alt="Café"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: imgY2 }}
            className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-cream"
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&auto=format&fit=crop"
              alt="Granos"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 140 }}
            whileHover={{ rotate: 0, scale: 1.06 }}
            className="absolute bottom-10 right-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-terracotta text-cream flex flex-col items-center justify-center text-center shadow-2xl"
          >
            <span className="font-script text-xl md:text-2xl">desde</span>
            <span className="font-display font-black text-3xl md:text-5xl -mt-1">
              2012
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest mt-1">
              Roma Norte
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
