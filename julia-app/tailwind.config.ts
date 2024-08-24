import type { Config } from "tailwindcss";
import { Magra } from 'next/font/google';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "960px",
        lg: "1440px",
      },
      backgroundColor: {
        smBackground: "#D9D9D9", 
        topBg: "#FFFFFF",

      },
    },
  },
  plugins: [],
};
export default config;
