/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      screens: {
        tel: "270px",

        sm: "480px",
        // => @media (min-width: 480px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1028px",
        // => @media (min-width: 1028px) { ... }

        xl: "1440px",
        // => @media (min-width: 1440px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        backgroundImage: {
          topnav: "url('/topnav.svg')",
          headerbase: "url('/headerbase.svg')",
          slider1: "url('/slider1.jpg')",
          slider2: "url('/slider2.jpg')",
        },
        colors: {
          primary: "#f7d250",
          own_gray: "#F5F6FA",
          gray_light: "#B2C2DF",
          dark_gray: "#667281",
          light_blue: "#70AEFD",
        },
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        arial: ["arial", "arial"],
      },
    },
  },
  plugins: [],
};
