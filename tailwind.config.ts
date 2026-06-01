import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A6B4A',
        accent: '#D85A30',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Noto Sans JP', 'Noto Sans Bengali', 'Noto Sans Myanmar', 'Noto Sans Arabic', 'sans-serif'],
        mono: ['DM Mono', 'Courier New', 'monospace'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
