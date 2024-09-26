/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#5E3BEE",
        "bg-shade": "#F5FCFF",
        "dribble": "#E62872",
        "heading-color": "#282938",
        "body": "#1C1E53"
      },
    },
  },
  plugins: [],
}

