// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      fontFamily: {
        dmSans: ['"DM Sans"', 'sans-serif'],
        happyMonkey: ['"Happy Monkey"', 'cursive'],
        inconsolata: ['Inconsolata', 'monospace'],
        neucha: ['Neucha', 'cursive'],
        openSans: ['"Open Sans"', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

