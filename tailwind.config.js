module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#43AFFF",
        primary: "#303F60",
        gray: {
          650: "#7A839A",
          750: "#E8E8E8",
          850: "#C6C6C6",
          950: "#A9AFBC",
        },
        cyan: {
          950: "#D9EFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
