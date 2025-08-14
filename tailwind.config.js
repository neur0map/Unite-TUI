/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Black
        "black-1": "#0F0C0B",

        // White Alpha
        "alpha-0": "rgba(255, 255, 255, 0.00)",
        "alpha-5": "rgba(255, 255, 255, 0.05)",
        "alpha-10": "rgba(255, 255, 255, 0.10)",
        "alpha-20": "rgba(255, 255, 255, 0.20)",
        "alpha-30": "rgba(255, 255, 255, 0.30)",
        "alpha-40": "rgba(255, 255, 255, 0.40)",

        // Black Alpha
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-10": "rgba(0, 0, 0, 0.10)",

        // Brand
        "brand-1": "#450E03",
        "brand-2": "#A2260C",
        "brand-3": "#CD3001",
        "brand-4": "#FF4800",
        "brand-5": "#FF620A",
        "brand-6": "#FF8532",

        // Brand Alpha
        "brand-alpha-8": "rgba(255, 72, 0, 0.08)",
        "brand-alpha-16": "rgba(255, 72, 0, 0.16)",
        "brand-alpha-24": "rgba(255, 72, 0, 0.24)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
