import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        neon: "#A3FF12",
        dark: "#050505",
      },

      backgroundImage: {
        hero: "url('/hero.jpg')",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },

        glow: {
          from: {
            boxShadow: "0 0 20px #6C63FF",
          },

          to: {
            boxShadow: "0 0 40px #A3FF12",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;