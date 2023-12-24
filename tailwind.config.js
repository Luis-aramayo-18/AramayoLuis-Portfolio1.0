/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          300: '#9ba1a6'
        }
      },
      backdropFilter: {
        'blur-15': 'blur(15px)',
      },
      width:{
        'custom-w': '29rem'
      }
    },
  },
  plugins: [],
}

