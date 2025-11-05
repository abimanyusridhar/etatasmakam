/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          rich: '#1C1917',
          deep: '#292524',
          warm: '#44403C'
        },
        gold: {
          light: '#FAE5C4',
          medium: '#E2C697',
          base: '#B4925E',
          dark: '#8B6D3F'
        },
        sacred: {
          white: '#FAFAF9',
          beige: '#F5F5F4'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'royal-fade': 'royalFade 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}