import localFont from "next/font/local";

export const interFont = localFont({
  src: [
    {
      path: "./app/fonts/InterVF.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./app/fonts/InterItalicVF.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "variable",
});
