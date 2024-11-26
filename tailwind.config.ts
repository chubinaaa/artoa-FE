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
        "2xs": "375px",
        xs: "480px",
        "2xl": "1440px",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          "2xl": "4rem",
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
        xl: "calc(var(--radius) + 22px)",
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
      backgroundImage: {
        "services-pattern":
          "linear-gradient(to right, hsla(0, 0%, 0%, 0.55), hsla(0, 0%, 0%, 0.25)), url('/services-bg.jpeg')",
        "hero-pattern":
          "linear-gradient(to right, hsla(0, 0%, 0%, 0.72), hsla(0, 0%, 0%, 0.32)), url('/hero-bg.jpeg')",
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default config;
