/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 13px 8px rgba(0,0,0,0.59)',
      },
    },
  },
  plugins: [],
}

