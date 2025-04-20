/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      backdropBlur: {
        sm: '4px',
        DEFAULT: '10px',
        md: '16px', // o cualquier otro valor que necesites
      },

      transitionProperty: {
        'all': 'all',
      },
      width: {
        'svg-sm': '15vw',  // pequeño
        'svg-md': '20vw',  // mediano
        'svg-lg': '20vw',  // grande
      },
      height: {
        'svg-sm': '20vh',  // pequeño
        'svg-md': '25vh',  // mediano
        'svg-lg': '25vh',  // grande
      },

      keyframes: {
        blink: {
          '0%, 96%': { transform: 'scaleY(1)' },
          '98%': { transform: 'scaleY(0.1)' },
          '100%': { transform: 'scaleY(1)' }
        },
        scale: {
          '160': '1.6'
        },

        animateStrokeLight: {
          '0%': {
            fill: 'transparent',
            stroke: '',
            strokeWidth: '1',
            strokeDashoffset: '25%',
            strokeDasharray: '15px 32%',
          },
          '50%': {
            fill: 'transparent',
            stroke: '',
            strokeWidth: '1',
          },
          '80%': {
            fill: '',
            stroke: 'transparent',
            strokeWidth: '1',
            strokeDashoffset: '-25%',
            strokeDasharray: '32% 0',
          },
          '100%': {
            fill: '',
            stroke: '',
            strokeWidth: '1',
            strokeDashoffset: '-25%',
            strokeDasharray: '32% 0',
          },
        },
        animateStrokeDark: {
          '0%': {
            fill: 'transparent',
            stroke: '',
            strokeWidth: '1',
            strokeDashoffset: '25%',
            strokeDasharray: '15px 32%',
          },
          '50%': {
            fill: 'transparent',
            stroke: '',
            strokeWidth: '1',
          },
          '80%': {
            fill: '',
            stroke: 'transparent',
            strokeWidth: '1',
            strokeDashoffset: '-25%',
            strokeDasharray: '32% 0',
          },
          '100%': {
            fill: '',
            stroke: '',
            strokeWidth: '1',
            strokeDashoffset: '-25%',
            strokeDasharray: '32% 0',
          },
        },
      },
      animation: {
        'blink': 'blink 4s infinite',
        animateStrokeLight: 'animateStrokeLight 5s alternate infinite ',
        animateStrokeDark: 'animateStrokeDark 5s alternate infinite ',
      },

      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px)

        xl: { max: "1279px" },
        // => @media (max-width: 1279px)

        lg: { max: "1023px" },
        // => @media (max-width: 1023px)

        md: { max: "767px" },
        // => @media (max-width: 767px)

        sm: { max: "639px" },
        // => @media (max-width: 639px)

        xs: { max: "479px" },
        // => @media (max-width: 479px)
      },

      colors: {
        light: "#EBEBEB",
        light2: "#FFFBF2",
        blue: "#2303B5",
        lightblue: "#bfdbfe",
        dark: "#231F20",
        yel: "#ffbd00",
        lightyel: "#fef08a",
        red: "#F5004F",
        lightred: "#ef4444",
        violet: "#7C00FE",
        lightviolet: "#a78bfa",
        gray: "#403d39",
        graylight: "#5c5752",
        lightgreen: "#bbf7d0",
      },
      backgroundImage: {
        'custom-background-light': `
          url('/img/noise.png'),
          radial-gradient(ellipse at top, #fcd34d, #fbbf24),
          radial-gradient(ellipse at bottom, #fcd34d, #fbbf24)
        `,
        'custom-background-dark': `
          url('/img/noise.png'),
          radial-gradient(ellipse at top, #403d39, transparent),
          radial-gradient(ellipse at bottom, #403d39, transparent)
        `,
      },
      backgroundSize: {
        'custom-size': '200px, 100%, 200%',
      },
      fontFamily: {
        suse: ["SUSE", " system-ui"],
        changa: ["Changa", "sans-serif"],
        handjet: ["Handjet", "sans-serif"],
      },

      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
};


