/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../templates/**/*.html",
    "../**/templates/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        jockey: ["Jockey One", "sans-serif"],
      },
    },
  },
  plugins: [],
}

