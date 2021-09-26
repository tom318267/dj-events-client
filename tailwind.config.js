const { FaRegIdBadge } = require("react-icons/fa");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      darkRed: "#77261D",
      overlay: "rgba(0, 0, 0, 0.7)",
    }),
    fontFamily: {
      sanchez: ["Sanchez", "serif"],
      roboto: ["Roboto Condensed", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
