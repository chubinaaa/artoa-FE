import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "1700px",
        "4xl": "1920px",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          xl: "4rem",
          "2xl": "5rem",
          "3xl": "6rem",
          "4xl": "7rem",
        },
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: "hsl(var(--accent))",
        muted: {
          // DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        border: "hsl(var(--border))",
        input: {
          DEFAULT: "hsl(var(--input))",
          background: "hsl(var(--input-background))",
        },
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        22: "5.5rem",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default config;
