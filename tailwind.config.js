/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1200px",
      xl: '1920px',
    },
  },
};


