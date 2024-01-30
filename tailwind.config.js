/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#202020',
      'white': '#fff',
      'red': '#e40604',
      'yellow': '#FFD03C',
      'gray': '#868585',
      'bg-gray': '#303030',
      'bg-how': '#F6F6F6',
      'bg-white': '#fef6f6',
      'bg-black': '#2C2C2C',
    
    

    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'fontNokia': ['NokiaKokia', 'regular'],
      }
    }
  },
  plugins: [],
}

