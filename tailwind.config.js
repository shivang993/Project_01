/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 100%': { width: '0ch' },
          '50%': { width: '12ch' }, // adjust based on text length
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#f59e0b' }, // amber-500
        },
      },
      animation: {
        typing: 'typing 4s steps(12) infinite alternate, blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}
