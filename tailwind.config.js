// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bisque: "#FFE4C4",
        aqua: "#00FFFF",
        btn: "#343a40",
        title: "#9fccce",
      },
      fontFamily: {
        IBM: ["IBM", "sans"],
        Viaoda: ["Viaoda", "sans"],
      },
    },
  },
  plugins: [],
};
