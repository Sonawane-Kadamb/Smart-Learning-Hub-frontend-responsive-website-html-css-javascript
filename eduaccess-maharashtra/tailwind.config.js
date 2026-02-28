/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4338ca',
        'deep-indigo': '#312e81',
        'soft-purple': '#a78bfa',
        'subtle-cyan': '#67e8f9',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(167, 139, 250, 0.5)',
      },
    },
  },
  plugins: [],
}