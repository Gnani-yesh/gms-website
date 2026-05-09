import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          950: "#07070A",
          900: "#0F1115",
          800: "#151821",
          700: "#1C2030",
        },
        fog: {
          DEFAULT: "#B7BCCB",
          muted: "#7D8596",
          dim: "#5A6173",
        },
        accent: {
          DEFAULT: "#C8A96B",
          soft: "#D9BE85",
          deep: "#A8884A",
        },
        glow: {
          magenta: "#B946C8",
          blue: "#3D6BFF",
        },
        border: "rgba(255,255,255,0.06)",
        "border-strong": "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.035em",
        "tight-display": "-0.03em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ambient-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(2%,-2%) scale(1.05)" },
        },
        "scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        "ambient-drift": "ambient-drift 22s ease-in-out infinite",
        "scan": "scan 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        "glass": "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 80px -30px rgba(0,0,0,0.6)",
        "premium": "0 40px 120px -40px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05) inset",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
