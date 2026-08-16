import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4338CA",
          light: "#6366F1",
          dark: "#312E81",
        },
      },
    },
  },
  plugins: [],
};

export default config;
