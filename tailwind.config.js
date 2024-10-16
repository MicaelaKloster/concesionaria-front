/** @type {import('tailwindcss').Config} */

// VERSION 2 APERTURA
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#A2001D",
        azul: "#100E34",
        blanco: "#EAEBF0",
        gris: "#D3D5E0"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
});
// VERSION 2 CIERRE

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         rojo: "#A2001D",
//         azul: "#100E34",
//         gris: "#EAEBF0",
//         blanco: "#D3D5E0"
//       },
//       fontFamily: {
//         roboto: ['Roboto', 'sans-serif'],
//       }
//     },
//   },
//   plugins: [],
// }

