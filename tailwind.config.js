/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: 'white',
      black: '#0C243B',
      gray: '#F2F2F2',
      darkgray: '#D4D4D4',
      extrdarkgray: '#555555',
      sky: '#1F5AA7',
      green: '#00C341',
      orange: '#FE9F00',
      red: '#FF4040',
      pink: '#FF4081'
    },
    boxShadow: {
      '3xl': '0 35px 60px -15px #00C34133'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    variants: {
      container: []
    },
    corePlugins: {
      container: false
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};
