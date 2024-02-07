/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        exs: "340px",
      },
      fontFamily: {
        Montserrat: "Montserrat",
        openSans: "Open Sans",
      },
      colors: {
        primary: "#7fbee9",
        black: "#333",
      },
    },
  },
  plugins: [],
};
