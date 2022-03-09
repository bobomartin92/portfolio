module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}'
],
  theme: {
    extend: {
      keyframes: {
        scaleBg: {
          '0%' : { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        scaleBg: 'scalebg 10s ease-in',
      },
      spacing: {
        '10%': '10%',
        '35%': '35%',
        '0%' : '0'
      }
    },
  },
  plugins: [],
}