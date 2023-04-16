/** @type {import('tailwindcss').Config} */
export default {
  purge : ["./src/**/*.jsx", "./*.html"],
  darkMode: 'class',
  content: [
    "./src/components/*.jsx",
    "./src/**.jsx",
    "./index.html",
    "./src/**/*.{html,js, jsx}"
  ],
  theme: {
    colors : {
      // accent
      "lime": "hsl(163, 72%, 41%)",
      "red": "hsl(356, 69%, 56%)",

      "facebook" : "hsl(208, 92%, 53%)",
      "twitter" : "hsl(203, 89%, 53%)",
      "instagram" : {
        "from" : "hsl(37, 97%, 70%)",
        "to" : "hsl(329, 70%, 58%)"
      },

      "toogle" : {
        "from" : "hsl(210, 78%, 56%)",
        "to" : "hsl(146, 68%, 55%)"
      },

      "blue" : {
        100 : "hsl(225, 100%, 98%)", // Very Pale Blue
        200 : "hsl(227, 47%, 96%)", // Light Grayish Blue
        300 : "hsl(228, 12%, 44%)", // Dark Grayish Blue
        400 : "hsl(228, 28%, 20%)", // Dark Desaturated Blue
        500 : "hsl(228, 34%, 66%)", // Desaturated Blue
        600 : "hsl(230, 17%, 14%)", // Very Dark Blue 1
        700 : "hsl(232, 19%, 15%)" // Very Dark Blue 2

      },
      "white" : "hsl(0, 0%, 100%)"
    },
    extend: {},
  },
  plugins: [],
}
