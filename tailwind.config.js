/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Outfit', sans-serif"
      },
      textColor: {
        dark: "#333333"
      },
      backgroundColor: {
        lightGreen: "#e3efe8"
      },
      padding: {
        "2.5": "10px"
      }
    },
  },
  plugins: [],
}

