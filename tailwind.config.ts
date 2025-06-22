import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      perspective: {
        "2200": "2200px",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },

        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        aurora: "aurora 60s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
      screens: {
        sm: { min: "640px" },
        md: { min: "768px" },
        lg: { min: "1366px" },
        xl: { min: "1666px" },
      },
      colors: {
        textPrimary: "#0F172A",
        textSecondary: "#5E5F6E",
        backgroundPrimary: "#F7F7F8",
        backgroundSecondary: "#FCFCFC",
        borderPrimary: "#F0F0F0",
        primaryColor: "#3C9EE7",
        accentColor: "#4F46E5",
        bgDarkPrimary: "#17223B",
        bgDarkSecondary: "#273042",
        textDarkPrimary: "#F5F5F5",
        textDarkSecondary: "#D1D5DB",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        aspekta: ["var(--font-aspekta)", "sans-serif"],
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
}
export default config
