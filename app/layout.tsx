import type { Metadata } from "next";
import { Lato,Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const lato = Lato({
  subsets: ["latin"],
  weight: ["100","300","400","700","900"],
  variable: "--font-lato",
});

const play = Playfair_Display({
  subsets:["latin"],
  weight:["400", "500","600","700","800","900"],
  variable:"--font-play"
})

export const metadata: Metadata = {
  title: "velma-store",
  description:
    "tienda web de lentes de sol para mujeres y hombres ubicada en valencia hacemos envios a todo venezuela"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={`${lato.variable} ${play.variable} font-normal  m-auto p-0`}
    >
      {children}
       <Script  src="https://kit.fontawesome.com/3794b38fcf.js" crossOrigin="anonymous" defer />
    </body>
  </html>
  );
}
