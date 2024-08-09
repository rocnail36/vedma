import React from "react";
import { Roboto_Slab } from "next/font/google";
import { howWork } from "@/constant";
import { HowCard } from "../cards/HowCard";
import Motion from "../framer/Motion";

export const How = () => {
  return (
    <section className={`bg-how clip max-w-screen-xl m-auto  bg-gray-50 pb-24`}>
      <Motion
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-[10%]"
      >
        <h2 className="uppercasefgfg text-[1.5rem] w-[70%] text-center mb-16  font-bold bg-red-700 text-white inline-block py-2 px-4 lg:mb-24">
          como trabajamos
        </h2>
      </Motion>


      <div className="h-[90%] flex justify-center items-center">
      <Motion  initial={{y:300}} whileInView={{y:0}} transition={{duration:0.8}} viewport={{once:true,margin:"100px 0px"}} className="grid justify-center gap-8 px-8 max-[340px]:px-0 md:grid-cols-3 md:px-2 md:gap-2">
        {howWork.map((how) => (
          <HowCard key={how.title} {...how} />
        ))}
      </Motion>
      </div>

     

    </section>
  );
};
