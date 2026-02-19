/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === BRAND ACCENT (Indigo System) ===
        brand: {
          DEFAULT: "#5B5FE9", // primary
          hover: "#6D70FF",
          active: "#3E42B5",
          soft: "#8B8EFF",
        },

        // === LIGHT MODE SYSTEM ===
        light: {
          bg: "#F5F7FB",
          surface: "#FDFEFF",
          card: "#F9FBFF",

          text: {
            primary: "#0B1220",
            secondary: "#2E3A4D",
            muted: "#6B7A90",
          },

          border: "#E6EBF2",
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

        error: {
          bg: "#2A0F14",
          border: "#5A1A24",
          text: "#F87171",
          icon: "#E11D48",
        },

        success: {
          bg: "#0F1F1A",
          border: "#1C3D32",
          text: "#6EE7B7",
          icon: "#10B981",
        },
      },
    },
  },
  plugins: [],
};
