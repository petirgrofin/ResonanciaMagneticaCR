/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {

    screens:{
      'xs': '375px',
      ...defaultTheme.screens,
    },

    extend: {

      animation: {
        slide_and_fade: 'slide_and_fade linear 60s infinite'
      },

      keyframes: {
        'slide_and_fade': {
          '25%': {transform: "translateX(-600px)", opacity: "0"},
          '100%': {transform: "translateX(0px)"}
        }
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
    },
  }
}

