/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#030712",      // slate-950
          card: "#0f172a",      // slate-900
          border: "#1e293b",    // slate-800
          textMuted: "#94a3b8", // slate-400
          primary: "#6366f1",   // indigo-500
          accent: "#06b6d4",    // cyan-500
          violet: "#8b5cf6",    // violet-500
          neonTeal: "#14b8a6",  // teal-500
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.4" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 5px rgba(99, 102, 241, 0.2), 0 0 10px rgba(99, 102, 241, 0.2)" },
          "100%": { boxShadow: "0 0 15px rgba(6, 182, 212, 0.6), 0 0 25px rgba(6, 182, 212, 0.4)" },
        }
      }
    },
  },
  plugins: [],
}
