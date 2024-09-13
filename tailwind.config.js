/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px"
      },
      width: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      height: {
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%",
      },
      fontFamily: {
        primary: "'Outfit', sans-serif"
      },
      fontSize: {
        "xs+": "13px",
        "5.5xl": "54px"
      },
      backgroundColor: {
        lightGreen: "#e3efe8"
      },
      padding: {
        "2.5": "10px"
      },
      margin: {
        "13": "50px",
        "15": "60px",
        "30": "120px"
      },
      colors: {
        "dark": "#333333",
        "primary": "#f7f0e3",
        "secondary": "#f4e7e1",
        "pink": "#fecfd7",
        "green": "#e4efe8"
      }
    },
  },
  plugins: [],
}