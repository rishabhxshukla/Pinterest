/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,pug,hbs}"],
  theme: {
    extend: {
      backgroundImage: {
        loginBG: "url('login-bg.jpg')",
        errorBG: "url('error-bg.jpg')",
      },
      screens: {
        'xxs': '300px'
      }
    },
  },
  plugins: [],
}