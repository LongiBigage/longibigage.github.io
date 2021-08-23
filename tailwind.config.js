module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: "hsl(328, 68%, 32%)",
          700: "hsl(328, 72%, 35%)",
          500: "hsl(328, 43%, 39%)"
        }
      },
      fontFamily: {
        montserrat: ["Montserrat, sans-serif"],
        poppins: ["Poppins, sans-serif"],
        conforta: ["Comfortaa, cursive"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
