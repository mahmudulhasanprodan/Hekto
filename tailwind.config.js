/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
    },

    fontFamily: {
      JosefinFont: "var(--JosefinFont)",
      Lato: "var(--Lato)",
    },
    
    extend: {

      colors: {
        HeaderColor: "var(--HeaderColor)",
        BtnColor: "var(--BtnColor)",
        OverlayColor: "var(--OverlayColor)",
        PrimarycrdColor: "var(--PrimarycrdColor)",
        SecondarycrdColor: "var(--SecondarycrdColor)",
        CommonColor: "var(--CommonColor)",
        FooterColor: "var(--FooterColor)",
        SearchColor: "var(--SearchColor)",
      },

    },
  },
  plugins: [],
}