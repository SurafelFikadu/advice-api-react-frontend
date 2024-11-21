/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Light-Cyan": "hsl(193, 38%, 86%)",
        "Neon-Green": "hsl(150, 100%, 66%)",
        "Grayish-Blue": "hsl(217, 19%, 38%)",
        "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
        "Dark-Blue": "hsl(218, 23%, 16%)",
      },
      height: {
        "100vh": "100vh"
      },
      width: {
        "100vw": "100vw",
        "400px": "400px",
        "500px": "500px",
        "520px": "520px",
        "550px": "550px",
      },
      fontSize: {
        "2xs": ".625rem",
        "3xs": ".5rem",
        "28px": "28px",
      },
    },
  },
  plugins: [],
}