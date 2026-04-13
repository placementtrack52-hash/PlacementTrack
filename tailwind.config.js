/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f2937',
        sand: '#f6efe7',
        ember: '#ef7d57',
        moss: '#2f6f5e',
        slate: '#5c6b73',
        sun: '#f9b572',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(31, 41, 55, 0.12)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(circle at top left, rgba(249, 181, 114, 0.45), transparent 30%), radial-gradient(circle at right, rgba(47, 111, 94, 0.18), transparent 28%), linear-gradient(135deg, #fffaf4, #f3efe8 45%, #eef6f1)',
      },
      keyframes: {
        confetti: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(320px) rotate(360deg)', opacity: '0' },
        },
      },
      animation: {
        confetti: 'confetti 1.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
