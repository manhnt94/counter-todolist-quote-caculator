module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "counter-flex-col": "calc(100vh - 48px)", // Calc height for counter flex col with nav heigh 48px;
      }),
      flex: {
        "0020": "0 0 20%",
        "0030": "0 0 30%",
        "0050": "0 0 50%",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
