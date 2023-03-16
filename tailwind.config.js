/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    minHeight: {
      "1/2": "500px",
      hr: "1px",
    },
    minWidth: {
      content: "500px",
    },
    maxWidth: {
      content: "500px",
      container: "800px",
    },
    transitionProperty: {
      width: "width",
    },
  },
  plugins: [],
};
