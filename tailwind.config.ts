
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#F8F9FA",
        muted: "#8E9196",
        accent: "#D4D4D4",
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in-delayed": "fade-in 1s ease-out 0.5s forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
