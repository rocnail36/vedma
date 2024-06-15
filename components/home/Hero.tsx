import Image from "next/image";
import React from "react";
import { Nanum_Myeongjo } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

export const nanum = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  variable: "--nanum",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const Hero = () => {
  return (
    <section className="mb-12 m-auto max-h-[800px] px-2 grid relative pt-16 sm:grid-cols-2 lg:mb-40 lg:px-4">
      <div
        className={`${nanum.className} text-neutral-800 py-5  font-normal w-100 flex flex-col items-center sm:items-start md:gap-4 `}
      >
        <div className="animate-bubbleMd w-20 h-20 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <div className="animate-bubbleSm w-10 h-10 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <div className="animate-bubbleLg w-48 h-48 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <h1 className="animate-fromLeft mb-10 ml-2 leading-[80px] text-center z-10 text-[2.5rem] font-semibold tracking-[0.7rem] uppercase sm:text-left md:text-[3rem] lg:text-[3.5rem]">
          Lentes <br className="hidden lg:block" />de <br className="hidden lg:block" />sol
        </h1>
        <div className="z-0 mb-10 relative w-[320px] h-[100px] sm:self-center lg:w-[420px] lg:h-[140px] lg:mb-16">
        <Image
          className=""
          src={"/biglogo.png"}
          fill
          style={{objectFit:"cover"}}
          alt="logo"
        />
      </div>
        <p className="animate-fromLeft text-neutral-600 max-w-[300px] leading-2 text-[1rem] md:text-[1.2rem] md:max-w-[70%] lg:text-[1.1rem] lg:leading-10">
          tenemos los lentes de sol que necesitas para cuidar tu vision y lucir
          increible. Ya sea que busques un look clasico, moderno, deportivo o
          elegante, tenemos lentes de sol perfectos para ti
        </p>

        <Button
          asChild
          className="mt-12 uppercase tracking-[.2rem] font-semibold bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-none"
        >
          <Link className="animate-fromLeft" href="/shop">
            {" "}
            ir a la tienda{" "}
          </Link>
        </Button>
      </div>
    
      <div className="relative z-0 hidden w-[100%] sm:block">
        <div className="h-[200px] w-[200px]">
          <Image
            src={"/image-3.jpg"}
            className="z-10"
            fill
            alt="hero-image"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
