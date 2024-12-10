/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{"gladiator":"url(./components/gladiator.jpg)"}
    },
  },
  plugins: [],
}
