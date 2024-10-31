import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["FiraGO", "sans-serif"],
      },
      colors: {
        primary: "rgba(252, 163, 17, 1)",
      },
      fontSize: {
        custom: "16px",
      },
      lineHeight: {
        custom: "19.2px",
      },
    },
  },
  plugins: [],
};
export default config;
