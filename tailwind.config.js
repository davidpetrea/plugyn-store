const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  './app/**/*.{js,ts,jsx,tsx}', // <-- Add this line
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {
   backgroundImage: {
    main: "url('/mainBg.jpg')",
   },
  },
 },
 plugins: [],
};
