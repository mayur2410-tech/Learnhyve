/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ea761d',
        'primary-hover': '#d87a1d',
        'muted-text': '#64748b',
        'border-color': '#e5e7eb',
      },
      perspective: {
        "1000": "1000px",
      },
      rotate: {
        'y-180': '180deg',
      },
      keyframes: {
        // From first config
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        // From second config (fixed typo from 'eyframes' to 'keyframes')
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        // Additional rotations
        rotateRight: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateLeft: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        // From first config
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',

        // From second config
        'scroll-left': 'scrollLeft 30s linear infinite',
        'scroll-right': 'scrollRight 30s linear infinite',
        scrollLeft: 'scrollLeft 40s linear infinite',
        scrollRight: 'scrollRight 40s linear infinite',
        slow: 'scrollLeft 80s linear infinite',

        // Rotation animations
        spinRight: 'rotateRight 30s linear infinite',
        spinLeft: 'rotateLeft 30s linear infinite',
      },
    },
  },
  plugins: [
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
