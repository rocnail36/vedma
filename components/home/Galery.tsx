import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { nanum } from "./Hero";
import { galeryImages } from "../../constant/index";
import GaleryCard from "../cards/GaleryCard";

const Galery = () => {
  return (
    <section
      className={`${nanum.className} bg-galery bg-center bg-cover box-content  py-12 pt-10 flex flex-col items-center`}
    >
      <h2
        className={`text-red-100  px-2 text-[2rem] uppercase font-extrabold text-center lg:text-[2.5rem]`}
      >
        lentes que transforman tu mirada
      </h2>

      <div className="mt-10 grid  grid-rows-1 gap-2 m-auto sm:grid-cols-2 md:grid-cols-3">
        {galeryImages.map((image) => (
          <GaleryCard
            key={image.image}
            image={image.image}
            
          />
        ))}
      </div>

      <p className="mt-12 text-red-200 text-center text-[2rem] uppercase  lg:text-[2.5rem]">
        mejoran tu vibra y apariencia
      </p>

      <Button
        asChild
        className="mt-12  uppercase tracking-[.2rem] font-semibold bg-red-600 hover:bg-red-400 text-pink-100 py-2 px-4 rounded-none"
      >
        <Link className="animate-fromLeft shadow-md shadow-rose-950" href="/shop
        ">
          ir a la tienda
        </Link>
      </Button>
    </section>
  );
};

export default Galery;
