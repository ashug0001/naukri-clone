module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#43AFFF",
        primary: "#303F60",
        inputBG: "#E8E8E833",
        grayBorder: "#C6C6C6",
        gray: {
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
