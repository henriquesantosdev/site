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
        grayv7: '#F1F1F1',

        bluev1: '#020617',
        bluev2: '#5276bf',
        bluev3: '#0C1939',
        bluev4: '#171F2D',
        bluev5: '#000319',
        bluev6: '#00083f',
        bluev7: '#091436',

        react: '#00FFFF',
        typescript: '#2D79C7',
        node: '#84C00B',
        nestjs: '#EA2863',
        nextjs: '#fff',
        php: '#4F5B93',
        laravel: '#FF2D20',
        graphql: '#F6009C',

        linkedin: '#0A66C2',
      },
      backgroundImage: {
        pcv4: "url(/bg-v4-compress.webp)",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}