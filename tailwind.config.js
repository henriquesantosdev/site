/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      colors: {
        primaryGray: '#161616',
        secondaryGray: '#212121',
        tertiaryGray: '#2C2C2C',
        quartiaryGray: '#373737',
        quintiaryGray: '#909090',

        primaryBlue: '#020617',
        secondaryBlue: '#5276bf',
        tertiaryBlue: '#171F2D',
        
        primaryGreen: '#28C780',
        secondaryGreen: '#039754',
        tertiaryGreenTransparence: 'rgba(40, 199, 128, 0.15)',
      },
      backgroundImage: "/quadriculado.avif"
    },
  },
  plugins: [],
}