// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan : '#D4F0F0',
        purple :'#824DEB'
      },
      fontFamily: {
        IBM: ["IBM", "sans"],
        Viaoda: ["Viaoda", "sans"],
      },
    },
  },
  plugins: [],
};
