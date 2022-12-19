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
   colors: {
    white: {
     DEFAULT: '#F7F6F3',
    },
    grey: {
     DEFAULT: '#BFBFBF',
    },
    gold: {
     DEFAULT: '#E1C440',
     soft: '#DFC777',
    },
   },
  },
 },
 plugins: [],
};
