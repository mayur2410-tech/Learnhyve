/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
      colors: {
        primary: '#ea761d',
        'primary-hover': '#d87a1d',
        'muted-text': '#64748b',
        'border-color': '#e5e7eb',
      },
      perspective: {
        "1000": "1000px", // Added perspective value
      },
    },
  },
  plugins: [
    // Added perspective utility
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".snap-start": {
          "scroll-snap-align": "start",
        },
      });
    },
  ],
};