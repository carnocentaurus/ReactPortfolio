// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // MUST have the 'content' key
  content: [
    "./index.html",
    // This must match your component location
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
*/