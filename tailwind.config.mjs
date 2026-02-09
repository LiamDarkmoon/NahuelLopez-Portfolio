/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
    extend: {
      colors: {
        // === BRAND ACCENT (Indigo System) ===
        brand: {
          DEFAULT: "#5B5FE9",   // primary
          hover: "#6D70FF",
          active: "#3E42B5",
          soft: "#8B8EFF",
        },

        // === LIGHT MODE SYSTEM ===
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",

          text: {
            primary: "#0F172A",
            secondary: "#334155",
            muted: "#64748B",
          },

          border: "#E2E8F0",
        },

        // === DARK MODE SYSTEM ===
        dark: {
          bg: "#0B0F1A",
          surface: "#121826",
          card: "#161C2D",

          text: {
            primary: "#E5E7EB",
            secondary: "#CBD5E1",
            muted: "#94A3B8",
          },

          border: "#1F2937",
        },
      },
    },
  },
	plugins: [],
}