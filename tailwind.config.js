/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D92F4",
        secondary: "#77CDFF",
        tertiary: "#F95454"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

