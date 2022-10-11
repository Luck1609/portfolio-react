/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-wallpaper": "url(/public/img/about.png)",
        "skill-wallpaper": "url(/public/img/illustration.svg)"
      }
    },
  },
  plugins: [],
}
