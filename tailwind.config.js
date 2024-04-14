/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      small: "0.6rem",
      mdSmall: "0.9rem",
      general: "0.875rem",
      heading: "1rem",
      major: "1.125rem",
      max: "1.5rem",
    },
    fontWeight: {
      text: "400",
      heading: "500",
      bold: "600",
      bolder: "800",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // text colors
        textBlack: "#222529",
        textWhite: "#FFF",
        textBlur: "#AEB9E4",
        textGreayWhite: "#A5B1DD",
        textBuyGreen: "#51B09D",
        textSellRed: "#DF6E51",
        textPendingYellow: "#CDA252",

        // bg colors
        bgPendingYellow: "rgba(237, 187, 95, 0.15)",
        bgBuyGreen: "rgba(81, 176, 157, 0.15)",
        bgSellRed: "rgba(223, 110, 81, 0.15)",
        bgBlue: "#394571",
        bgDarkBlue: "#2F385B",
        bgTableRow: "#F4F6F9",
        bgSearchBox: "rgba(251, 252, 253, 1)",
        bgModulePage: "#F3F3F8",
        bgActiveTab: "rgba(160, 166, 192, 0.17)",
        bgTopBtn: "#435085",

        //other colors
        tableIcon: "rgb(67,80,133,0.5)",
        borderSearchBox: "rgba(34, 37, 41, 0.25)",
        borderTable: "#E9EBEC",

        // login colors
        loginInputBorder: "#757575",
        loginInputBg: "#F8F8F8",
        forgotPassword: "#06F",
        buttonBg: "#021D68",
        buttonBorder: "#0056D7",
      },
    },
  },
  plugins: [],
};
