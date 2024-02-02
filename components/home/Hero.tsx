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
    <section className="h-[90vh] mb-24 max-w-screen-xl m-auto max-h-[800px] grid grid-cols-8 px-4  relative pt-16">
      <div
        className={`${nanum.className} text-neutral-800 py-5  row-start-1 col-start-1 col-end-7 font-normal w-100 flex flex-col items-start `}
      >
        <div className="animate-bubbleMd w-20 h-20 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <div className="animate-bubbleSm w-10 h-10 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <div className="animate-bubbleLg w-48 h-48 absolute z-[1] border-red-200 border-2 rounded-[50%]"></div>
        <h1 className="animate-fromLeft ml-2 leading-[90px]  z-10 text-[6rem]  font-semibold tracking-[.5rem]">
          Lentes <br /> de <br /> sol
        </h1>
        <p className="animate-fromLeft text-neutral-600 w-[30%] mt-10 leading-8 text-[1.1rem]">
          tenemos los lentes de sol que necesitas para cuidar tu vision y lucir
          increible. Ya sea que busques un look clasico, moderno, deportivo o
          elegante, tenemos lentes de sol perfectos para ti
        </p>

        <Button
          asChild
          className="mt-12 uppercase tracking-[.2rem] font-semibold bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-none"
        >
          <Link className="animate-fromLeft" href="#">
            {" "}
            ir a la tienda{" "}
          </Link>
        </Button>
      </div>
      <div className="absolute right-1/2 top-1/2 translate-y-[-70%] translate-x-[20%]  z-10 p-3 ">
        <Image
          className=""
          src={"/biglogo.png"}
          width={400}
          height={400}
          alt="logo"
        />
      </div>
      <div className="relative  w-[100%] col-start-6 col-end-9 row-start-1">
        <div className=" absolute min-w-[400px] w-[90%] h-[90%]  after:h-[100%] after:absolute after:border-2 after:border-red-300 after:bottom-0 after:inline-block after:w-[100%] after:translate-x-10 after:translate-y-10 z-0">
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
