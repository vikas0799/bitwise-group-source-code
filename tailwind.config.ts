import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem"
      }
    },
    extend: {
      colors: {
        navy: {
          950: "#030712",
          900: "#06101f",
          800: "#081a33",
          700: "#0b2450"
        },
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1e3a8a",
          light: "#60a5fa"
        },
        royal: {
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af"
        },
        electric: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4"
        }
      },
      boxShadow: {
        glow: "0 0 36px rgba(34, 211, 238, 0.22)",
        "glow-blue": "0 20px 80px rgba(37, 99, 235, 0.25)",
        "glass-soft": "0 24px 70px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
        "radial-lines":
          "repeating-radial-gradient(circle at center, rgba(103,232,249,0.12) 0 1px, transparent 1px 34px)"
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" }
        }
      },
      animation: {
        aurora: "aurora 18s ease infinite",
        scan: "scan 5.5s linear infinite",
        "pulse-line": "pulseLine 3.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
