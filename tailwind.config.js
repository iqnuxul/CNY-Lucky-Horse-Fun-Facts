/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        cny: {
          red: '#D91E18',
          darkRed: '#960000',
          gold: '#F4B400',
          paper: '#FDF5E6',
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'flip-in': 'flipIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        flipIn: {
          '0%': { transform: 'rotateX(-20deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotateX(0) scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: [],
}
