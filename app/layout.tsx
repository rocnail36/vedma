import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--rubik",
});

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
        className={`${rubik.className} font-normal  m-auto p-0`}
      >
        {children}
         <Script  src="https://kit.fontawesome.com/3794b38fcf.js" crossOrigin="anonymous" defer />
      </body>
      
    </html>
  );
}
