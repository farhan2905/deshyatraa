/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212',
          light: '#525252',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#FF5733',
          hover: '#E64A2E',
        },
        background: {
          light: '#FFFFFF',
          beige: '#FDE8D4',
          grey: '#F4F4F4',
          peach: '#FFEAE2',
        }
      },
      fontFamily: {
        sans: ['"General Sans Variable"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"General Sans Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
