/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#40d145",
          
 "secondary": "#f76409",
          
 "accent": "#018450",
          
 "neutral": "#2E243D",
          
 "base-100": "#EEEAF5",
          
 "info": "#3CBBD7",
          
 "success": "#47D7CB",
          
 "warning": "#F1D95F",
          
 "error": "#F16A70",
          },
        },
      ],
    },
  plugins: [require("daisyui")], 
}