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
      },

    },
  },
  plugins: [],
}