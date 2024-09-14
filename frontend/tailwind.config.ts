import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '0rem',
      },
    },
    colors: {
      transparent: "transparent",
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
    spacing: {
      "0": "0px",
      "1": "2px",
      "2": "4px",
      "3": "8px",
      "4": "12px",
      "5": "16px",
      "6": "24px",
      "7": "32px",
      "8": "40px",
      "9": "56px",
      "10": "112px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      borderRadius: {
        content: "12px",
        corner: "24px",
        button: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
