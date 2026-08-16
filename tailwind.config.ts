import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#06090F",
          dark: "#050810",
          soft: "#070C13",
        },
        cyan: {
          DEFAULT: "#2BE0F5",
          light: "#8FEDF9",
        },
        violet: {
          DEFAULT: "#8B8DF9",
          light: "#A9AAFB",
        },
        mint: {
          DEFAULT: "#3DDC97",
          light: "#6FE7B4",
        },
        amber: "#F5B72B",
        danger: "#F87171",
        slate: {
          100: "#E8EDF4",
          200: "#C7D2E0",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      keyframes: {
        kxPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".25" },
        },
        kxDraw: {
          to: { strokeDashoffset: "0" },
        },
        kxFadeUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        kxScan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(340%)" },
        },
        kxFlow: {
          to: { strokeDashoffset: "-24" },
        },
        kxSpin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        kxPulse: "kxPulse 2s infinite",
        kxPulseFast: "kxPulse 1.4s infinite",
        kxDraw: "kxDraw 1.2s ease forwards",
        kxFadeUp: "kxFadeUp .4s ease both",
        kxScan: "kxScan 1.4s linear infinite",
        kxFlow: "kxFlow 2.4s linear infinite",
        kxSpin: "kxSpin .7s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
