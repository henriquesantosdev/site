/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
        jet: ["JetBrains Mono", "serif"]
      },
      colors: {
        grayv1: '#161616',
        grayv2: '#212121',
        grayv3: '#2C2C2C',
        grayv4: '#373737',
        grayv5: '#909090',
        grayv6: '#0F131A',

        bluev1: '#020617',
        bluev2: '#5276bf',
        bluev3: '#0C1939',
        bluev4: '#171F2D',
        bluev5: '#000319',

        react: '#00FFFF',

        textv1: '#CBACF9',
      },
      backgroundImage: {
        quadriculado: "url(/quadriclado.png)",
        intro: "url(/Background_Intro.png)",
        bgPattern: "url(/bg-pattern.png)",
      },
    },
  },
  plugins: [],
}