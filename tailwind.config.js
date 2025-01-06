/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "547px",
      // => @media (min-width: 547px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
      padding: "10px",
        // screens: {
        // sm: "400px",
        // md: "720px",
        // lg: "960px",
        // xl: "1140px",
        // "2xl": "6rem",

        // },//over ride default container padding
        
      
    },
    fontFamily: {
      font1: ['"DM Sans"', "sans-serif"],
      font2: ['"DM Serif Display"', "serif"],
    },
  },
  plugins: [],
};
