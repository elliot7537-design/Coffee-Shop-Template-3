import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFF6E3",
        cream: "#FFF0CC",
        coral: "#FF6B6B",
        peach: "#FFB199",
        mint: "#7AD9C4",
        sage: "#BEE3C8",
        sky: "#A8DAFF",
        sunny: "#FFD56B",
        bubblegum: "#FF9BAC",
        lilac: "#D9B8E8",
        ink: "#2B1B3A",
        inkSoft: "#4B3663",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
        marker: ["var(--font-marker)", "cursive"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 45%, 55%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.1)" },
        },
        steam: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "30%": { opacity: "0.6" },
          "100%": { transform: "translateY(-30px) scale(1.5)", opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        wiggle: "wiggle 3.5s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite",
        spin: "spin 20s linear infinite",
        blink: "blink 4s ease-in-out infinite",
        steam: "steam 2.4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      boxShadow: {
        stamp: "4px 4px 0 0 #2B1B3A",
        stampsm: "3px 3px 0 0 #2B1B3A",
        sticker: "2px 2px 0 0 rgba(43,27,58,0.9)",
      },
    },
  },
  plugins: [],
};
export default config;
