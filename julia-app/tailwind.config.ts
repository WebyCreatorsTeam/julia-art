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
        sm: { max: "575px" }, 
        md: { min: "576px", max: "960px" }, 
        lg: { min: "961px" },
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
