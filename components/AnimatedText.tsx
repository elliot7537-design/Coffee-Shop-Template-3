"use client";

import { motion } from "framer-motion";

export function WordMask({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  onMount = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** If true, animate on mount instead of waiting for intersection. */
  onMount?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((w, i) => {
        const anim = onMount
          ? { animate: { y: "0%" } }
          : {
              whileInView: { y: "0%" },
              viewport: { once: true, amount: 0.2 },
            };
        return (
          <span
            key={i}
            className="mask-reveal align-bottom"
            style={{ display: "inline-block", marginRight: "0.22em" }}
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%" }}
              {...anim}
              transition={{
                delay: delay + i * stagger,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function CharFade({
  text,
  className = "",
  delay = 0,
  stagger = 0.02,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <span className={className}>
      {Array.from(text).map((c, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: delay + i * stagger,
            duration: 0.45,
            ease: "easeOut",
          }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
}
