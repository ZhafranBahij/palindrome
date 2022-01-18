module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Major Mono Display"],
      paragraph: ["Montserrat"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
