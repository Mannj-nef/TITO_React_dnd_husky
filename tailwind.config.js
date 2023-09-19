/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      height: {
        header: '72px',
        contentScreen: 'calc(100vh - 72px - 26px)', // header: 72px, header-marginBottom: 26px
        contentModal: 'calc(100vh - 50px)',
        contentSetting: 'calc(100vh - 72px - 50px)'
      },

      colors: {
        primary: '#3b82f6',
        secondary: '#9c88ff',
        text1: '#333',
        disabled: '#e6ebef',
        error: '#ff0505',
        danger: '#dc3545',
        warning: '#ffc107',
        success: '#28a745',
        concrete: '#95a5a6'
      },

      backgroundImage: {
        gradient: 'linear-gradient(-45deg, #6a5af9, #d66efd)',
        blackToWhite: 'linear-gradient(-45deg, #000, #000000a8, #ffffff1c)',
        skeleton: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)'
      },

      boxShadow: {
        boxPrimary: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        boxSecondary: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        boxThird: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
      }
    },

    screens: {
      // => @media (min-width: 320px and max-width: 639px)
      xs: { min: '320px', max: '639px' },

      // => @media (min-width: 640px and max-width: 767px)
      sm: { min: '640px', max: '767px' },

      // => @media (min-width: 768px and max-width: 1023px)
      md: { min: '768px', max: '1023px' },

      // => @media (min-width: 1024px and max-width: 1279px)
      lg: { min: '1024px', max: '1279px' },

      // => @media (min-width: 1280px and max-width: 1535px)
      xl: { min: '1280px', max: '1535px' },

      // => @media (min-width: 1536px)
      '2xl': { min: '1536px' }
    }
  },

  plugins: []
}
