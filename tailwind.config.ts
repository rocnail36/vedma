import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nanum: "--nanum"
      },
      backgroundImage:{
        galery: 'linear-gradient(to right bottom,rgb(0, 0 ,0, 0.8),rgb(185, 28 ,28 , 0.9)),url("/city2.jpg")',
        how: "linear-gradient(160deg, rgba(250,250,250,0),52% ,rgba(250,250,250,0),50%,  rgb(182, 13, 13))"
      },
      keyframes: {
        fromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        bubbleSm: {
          "0%": { left: "0%", bottom: "0%" },
          "30%": { left: "60%", bottom: "30%" },
          "60%": { left: "0%", bottom: "60%" },
          "100%": { left: "60%", bottom: "80%" },
        },
        bubbleMd: {
          "0%": { left: "60%", bottom: "0%" },
          "30%": { left: "0%", bottom: "30%" },
          "60%": { left: "60%", bottom: "60%" },
          "100%": { left: "0%", bottom: "100%" },
        },
        bubbleLg: {
          "0%": { right: "60%", top: "0%" },
          "30%": { right: "35%", top: "30%" },
          "60%": { right: "90%", top: "100%" },
          "100%": { right: "90%", top: "0%" },
        },
      },
      animation: {
        fromLeft: "fromLeft 1s ease 1",
        bubbleSm: "bubbleSm 80s linear infinite alternate",
        bubbleLg: "bubbleLg 180s linear infinite alternate",
        bubbleMd: "bubbleMd 120s linear infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
