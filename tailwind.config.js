/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#75787b",
          "200": "#042440",
        },
        lightsteelblue: "#91adc5",
        darkslateblue: {
          "100": "#572c5f",
          "200": "#233470",
          "300": "rgba(25, 47, 126, 0.82)",
        },
        darkslategray: {
          "100": "#41495b",
          "200": "#2c435f",
          "300": "#34343c",
          "400": "#2e2e44",
        },
        navy: {
          "100": "#100e81",
          "200": "#100d81",
        },
        skyblue: "rgba(49, 215, 252, 0.25)",
        palegreen: "rgba(140, 251, 122, 0.38)",
        goldenrod: "rgba(228, 161, 1, 0.26)",
        steelblue: "#14446e",
        lightslategray: "#8993aa",
        midnightblue: "#061342",
        slategray: "#616178",
        whitesmoke: "#f5f5f5",
        floralwhite: "#fdf8ed",
      },
      spacing: {},
      fontFamily: {
        "crimson-text": "'Crimson Text'",
        inter: "Inter",
        poppins: "Poppins",
        inherit: "inherit",
        lato: "Lato",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "mini-6": "14.6px",
      "xs-4": "11.4px",
      xs: "12px",
      "xs-3": "11.3px",
      mini: "15px",
      lg: "18px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "21xl": "40px",
      "5xl": "24px",
      "10xl": "29px",
      "19xl": "38px",
      "29xl": "48px",
      "17xl": "36px",
      xl: "20px",
      "2xl": "21px",
      inherit: "inherit",
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
  },
  corePlugins: {
    preflight: false,
  },
};
