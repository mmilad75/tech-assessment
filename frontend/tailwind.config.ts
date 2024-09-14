import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "var(--color-primary-disabled)",
        300: "var(--color-primary-hover)",
        500: "var(--color-primary)",
      },
      secondary: "var(--color-secondary)",
      text: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        disabled: "var(--color-text-disabled)",
        button: "var(--color-text-button)",
      },
      elevation: {
        background: "var(--color-elevation-background)",
        1: "var(--color-elevation-elevation1)",
        2: "var(--color-elevation-elevation2)",
        3: "var(--color-elevation-elevation3)",
      },
      success: "var(--color-success)",
      "success-elevation1": "var(--color-success-elevation1)",
      "success-elevation2": "var(--color-success-elevation2)",
      error: "var(--color-error)",
      warning: "var(--color-warning)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
