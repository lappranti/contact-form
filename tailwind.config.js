/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-900": "#2A4144",
        "grey-600": "#0C7D69",
        "grey-500": "#86A2A5",

        "green-900": "#063F35",
        "green-600": "#0C7D69",
        "green-200": "#E0F1E8",

        "red-error": "#D73C3C",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
