module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xsm: "320px",
      xs: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      height: (theme) => ({
        "calc-bottom": "calc(100vh - 48px)",
      }),
      flex: {
        "0020": "0 0 20%",
        "0025": "0 0 25%",
        "0030": "0 0 30%",
        "0040": "0 0 40%",
        "0050": "0 0 50%",
        "0060": "0 0 60%",
        "0080": "0 0 80%",
      },
      textColor: {
        normal: "#102a42",
        react: "#60dbfb",
      },
      colors: {
        react: "#60dbfb",
      },
      stroke: (theme) => ({
        red: theme("colors.red.500"),
        green: theme("colors.green.500"),
        blue: theme("colors.blue.500"),
      }),
      boxShadow: {
        "inner-custom": 'inset 0 5px 10px 0px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      animation: ["responsive", "motion-safe", "motion-reduce"],
      fill: ["hover", "focus"],
      stroke: ["hover", "focus"],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
