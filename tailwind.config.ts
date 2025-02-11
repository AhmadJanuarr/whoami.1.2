import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "640px" },
        md: { min: "768px" },
        lg: { min: "1280px" },
        xl: { min: "1536px" },
      },
      colors: {
        primary: "#444444",
        secondary: "#375ACB",
      },
      fontFamily: {
        neuBold: ["var(--font-neu-bold)"],
        neuMedium: ["var(--font-neu-medium)"],
        neuBook: ["var(--font-neu-book)"],
        neuThin: ["var(--font-neu-thin)"],
      },
    },
    plugins: [],
  },
}
export default config
