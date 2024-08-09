import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#9D0A0A"
      },
      fontFamily:{
        lato: ["var(--font-lato)"],
        play: ["var(--font-play)"]
      },
      backgroundImage:{
        galery: 'url("/bg-galery.png")',
        how: "linear-gradient(160deg, rgba(250,250,250,0),52% ,rgba(250,250,250,0),50%,  rgb(182, 13, 13))",
        circle:"radial-gradient(circle, rgba(227,38,38,1) 0%, rgba(125,21,21,1) 100%)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
