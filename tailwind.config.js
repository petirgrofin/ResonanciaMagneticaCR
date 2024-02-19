/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {

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
        roboto: ["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

