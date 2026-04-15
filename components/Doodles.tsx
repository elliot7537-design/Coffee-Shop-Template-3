"use client";

import { motion } from "framer-motion";
import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { color?: string };

export function Squiggle({ color = "#FF6B6B", ...p }: Props) {
  return (
    <svg viewBox="0 0 120 16" fill="none" {...p}>
      <path
        d="M2 8 Q 12 2 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 118 8"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function HandArrow({ color = "#2B1B3A", ...p }: Props) {
  return (
    <svg viewBox="0 0 140 80" fill="none" {...p}>
      <path
        d="M5 10 Q 40 5 70 30 T 130 60"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M130 60 L 118 52 M 130 60 L 122 72"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function StarDoodle({ color = "#FFD56B", ...p }: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...p}>
      <path
        d="M20 3 L 22 17 L 37 20 L 22 23 L 20 37 L 18 23 L 3 20 L 18 17 Z"
        fill={color}
        stroke="#2B1B3A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartDoodle({ color = "#FF6B6B", ...p }: Props) {
  return (
    <svg viewBox="0 0 40 36" fill="none" {...p}>
      <path
        d="M20 33 C 4 22 4 9 12 6 C 16 4 19 7 20 10 C 21 7 24 4 28 6 C 36 9 36 22 20 33 Z"
        fill={color}
        stroke="#2B1B3A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CoffeeBean({ color = "#2B1B3A", ...p }: Props) {
  return (
    <svg viewBox="0 0 40 56" fill="none" {...p}>
      <ellipse cx="20" cy="28" rx="16" ry="24" fill={color} />
      <path
        d="M20 4 Q 24 28 20 52"
        stroke="#FFF6E3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Cup({
  face = true,
  steaming = true,
  ...p
}: Props & { face?: boolean; steaming?: boolean }) {
  return (
    <svg viewBox="0 0 220 240" fill="none" {...p}>
      {/* Steam */}
      {steaming && (
        <g>
          <path
            d="M80 30 Q 70 10 90 0"
            stroke="#2B1B3A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="animate-bob"
          />
          <path
            d="M115 35 Q 105 15 125 5"
            stroke="#2B1B3A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M150 30 Q 140 10 160 0"
            stroke="#2B1B3A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="animate-bob"
            style={{ animationDelay: "0.6s" }}
          />
        </g>
      )}

      {/* Cup body */}
      <path
        d="M30 70 L 40 210 Q 42 230 62 232 L 158 232 Q 178 230 180 210 L 190 70 Z"
        fill="#FFD56B"
        stroke="#2B1B3A"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Coffee top */}
      <ellipse
        cx="110"
        cy="70"
        rx="82"
        ry="14"
        fill="#3A2418"
        stroke="#2B1B3A"
        strokeWidth="4"
      />
      <ellipse cx="110" cy="66" rx="74" ry="8" fill="#5A3826" opacity="0.7" />

      {/* Handle */}
      <path
        d="M190 100 Q 220 110 218 150 Q 216 185 186 185"
        stroke="#2B1B3A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Face */}
      {face && (
        <g>
          {/* eyes */}
          <circle cx="88" cy="135" r="5" fill="#2B1B3A" />
          <circle cx="138" cy="135" r="5" fill="#2B1B3A" />
          {/* smile */}
          <path
            d="M82 160 Q 113 185 144 160"
            stroke="#2B1B3A"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* blush */}
          <circle cx="70" cy="160" r="8" fill="#FF9BAC" opacity="0.7" />
          <circle cx="156" cy="160" r="8" fill="#FF9BAC" opacity="0.7" />
        </g>
      )}
    </svg>
  );
}

export function Cactus(p: Props) {
  return (
    <svg viewBox="0 0 80 110" fill="none" {...p}>
      <path
        d="M30 105 L 30 60 Q 30 45 40 45 Q 50 45 50 60 L 50 105 Z"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <path
        d="M30 70 Q 15 70 15 55 Q 15 40 25 42"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <path
        d="M50 75 Q 65 75 65 60 Q 65 48 55 48"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <circle cx="40" cy="30" r="5" fill="#FF6B6B" stroke="#2B1B3A" strokeWidth="2" />
      <path
        d="M36 38 L 36 34 M 44 38 L 44 34 M 40 40 L 40 36"
        stroke="#2B1B3A"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Chili(p: Props) {
  return (
    <svg viewBox="0 0 60 110" fill="none" {...p}>
      <path
        d="M30 10 Q 32 8 35 10 L 40 16 Q 42 22 37 25"
        fill="#7AD9C4"
        stroke="#2B1B3A"
        strokeWidth="2.5"
      />
      <path
        d="M37 22 Q 55 40 50 75 Q 44 100 30 95 Q 16 90 18 65 Q 20 40 37 22 Z"
        fill="#FF6B6B"
        stroke="#2B1B3A"
        strokeWidth="3"
      />
      <path
        d="M28 40 Q 26 55 30 70"
        stroke="#FFF6E3"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ color = "#FFD56B", ...p }: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...p}>
      <path
        d="M20 2 Q 22 18 38 20 Q 22 22 20 38 Q 18 22 2 20 Q 18 18 20 2 Z"
        fill={color}
        stroke="#2B1B3A"
        strokeWidth="2"
      />
    </svg>
  );
}

export function WavyDivider({
  color = "#2B1B3A",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <path
        d="M0 20 Q 75 5 150 20 T 300 20 T 450 20 T 600 20 T 750 20 T 900 20 T 1050 20 T 1200 20"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function DrawPath({
  d,
  color = "#2B1B3A",
  strokeWidth = 3,
  duration = 2,
  className = "",
  ...rest
}: {
  d: string;
  color?: string;
  strokeWidth?: number;
  duration?: number;
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, "d">) {
  return (
    <svg fill="none" className={className} {...rest}>
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function PinTape({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-20 h-5 bg-sunny/80 rotate-[-8deg] shadow-sm ${className}`}
      style={{
        background:
          "linear-gradient(90deg, rgba(255,213,107,0.7) 0%, rgba(255,213,107,0.9) 50%, rgba(255,213,107,0.7) 100%)",
      }}
    />
  );
}
