import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EBDC",
        bone: "#EFE3D0",
        terracotta: "#C85C3B",
        clay: "#A14430",
        cocoa: "#3E2217",
        bark: "#1E120B",
        cactus: "#557A46",
        sun: "#E8A628",
        chile: "#B23A2C",
        papel: "#E4B4C2",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "20%": { opacity: "0.7" },
          "100%": { transform: "translateY(-80px) scale(1.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        steam: "steam 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
        spinslow: "spinslow 22s linear infinite",
      },
      backgroundImage: {
        "papel-picado":
          "radial-gradient(circle at 20% 20%, rgba(200,92,59,0.12) 0 8px, transparent 9px), radial-gradient(circle at 80% 60%, rgba(85,122,70,0.1) 0 6px, transparent 7px)",
      },
    },
  },
  plugins: [],
};
export default config;
