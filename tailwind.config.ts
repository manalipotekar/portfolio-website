import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f1ff",
          100: "#ede5ff",
          200: "#d9ccff",
          300: "#bea3ff",
          400: "#9b6bff",
          500: "#7f3cff",
          600: "#6b22f2",
          700: "#5717c8",
          800: "#47149f",
          900: "#3a117f"
        }
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(127, 60, 255, 0.4)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 3.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
