/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#2563eb",
        tertiary: "#f8fafc",
        textPrimary: "#1e293b",
        textSecondary: "#64748b",
      },
    },
  },
  plugins: [],
} 