//const plugin = require("tailwindcss/plugin");
//const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/Components/**/**/*.{js,ts,jsx,tsx}',
    './src/Common/**/*.{js,ts,jsx,tsx}',
    './src/Layout/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  options: {
    safelist: []
  },
  theme: {
    screens: {
      xs: '350px',
      'xs-m': '530px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      'md-lg': '950px',

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      'lg-xl': '1111px',
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#F5D420',
      secondary: '#B276FF',
      gray: '#E8E7E7',
      white: '#ffffff',
      'white-secondary': '#f1f1f1',
      black: '#000000',
      success: '#FFD076',
      danger: '#BF0000',
      warning: 'rgba(255, 113, 249, 0.46)',
      hoverColor: '#d9d9d9',
      disabled: '#757575'
    },
    extend: {
      fontFamily: {
        sans: ['Outfit']
      },
      minHeight: {
        'screen-75': '75vh'
      },
      fontSize: {
        xl44: '40px',
        xxs: '10px'
      },
      opacity: {
        80: '.8'
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px'
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px'
      },
      maxHeight: {
        '860-px': '860px'
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
        'page-mx': '1278px'
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem'
      },
      backgroundSize: {
        full: '100%'
      }
    },
    boxShadow: {
      shadow1: '0px 0px 4px rgba(0, 0, 0, 0.25)',
      shadow2: '0px 0px 8px rgba(0, 0, 0, 0.25)'
    }
  },
  variants: [
    'responsive',
    'group-hover',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: [
    require('@tailwindcss/line-clamp')
    /*equire("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),

    */
  ]
};
