"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const make = (dir: Direction, distance: number): Variants => ({
  hidden: {
    opacity: 0,
    y: dir === "up" ? distance : dir === "down" ? -distance : 0,
    x: dir === "left" ? distance : dir === "right" ? -distance : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function Reveal({
  children,
  direction = "up",
  distance = 60,
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const variants = make(direction, distance);
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
