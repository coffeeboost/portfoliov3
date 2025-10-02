/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}','./content/**/*.md'],
  theme: {
    extend: {
      colors: { brand: { 500: '#3b82f6' } },
      keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } } },
      animation: { float: 'float 8s ease-in-out infinite' }
    }
  },
  plugins: [],
}
