/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f8f7f7",
        gray: {
          "100": "rgba(24, 24, 24, 0.8)",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(24, 24, 24, 0.7)",
          "400": "rgba(24, 24, 24, 0.5)",
          "500": "rgba(24, 24, 24, 0.6)",
        },
        primary: "#6b8e23",
        secondary: "#181818",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "81xl": "100px",
        "6xl": "25px",
        mini: "15px",
      },
      borderColor: {
        'smoke': 'rgba(24, 24, 24, 0.3)',
      },
      backgroundImage: {
        'hero-pattern': "url(https://i.ibb.co/P9kr628/pexels-max-vakhtbovycn-7031621-3.png)"
      },
      height: {
        hairline: '0.3px'
      },
      width: {
        'hairline': '0.3px',
        '80': '110px'
      }
    },
    fontSize: {
      'xs': '.75rem',     // Extra small (12px)
      'sm': '.875rem',    // Small (14px)
      'base': '1rem',     // Base (16px)
      'lg': '1.125rem',   // Large (18px)
      'xl': '1.25rem',    // Extra large (20px)
      '2xl': '1.5rem',    // Double extra large (24px)
      '3xl': '1.875rem',  // Triple extra large (30px)
      '4xl': '2.25rem',   // Quadruple extra large (36px)
      '5xl': '3rem',      // Quintuple extra large (48px)
      '6xl': '4rem',      // Sextuple extra large (64px)
      '7xl': '5rem',      // Septuple extra large (80px)
      '8xl': '6rem',      // Octuple extra large (96px)
      '9xl': '7rem',      // Octuple extra large (96px)
      '10xl': '8rem',      // Nonuple extra large (128px)
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    borderWidth: {
      hairline: '0.3px'
    }
  },
  corePlugins: {
    preflight: false,
  },
};