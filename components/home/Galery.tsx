import React from "react";


import Image from "next/image";
import Motion from "../framer/Motion";

const Galery = () => {
  return (
    <section
      className={` bg-galery bg-center bg-cover box-content  w-full  flex flex-col md:flex-row lg:mb-32`}
    >
      
      <Motion initial={{x:"-100%"}} transition={{duration:0.5}} whileInView={{x:0}} viewport={{once:true,margin:"-200px 0px"}} className="w-[100%] h-[60vh] max-h-[400px]  bg-black relative lg:w-[50%]">
      <Image src="/galery-4.jpg" fill alt="lentes" style={{objectFit:"cover"}}/>
      </Motion>


    <Motion initial={{x:100,opacity:0}} transition={{duration:0.5}} whileInView={{x:0,opacity:1}} viewport={{once:true,margin:"-200px 0px"}}  className="flex flex-col justify-center items-center px-8 gap-8 py-8 h-[400px] lg:w-[50%]">
    <p className="font-semibold font-play text-white text-[35px] text-center lg:text-[46px]">
    Lentes que transforman tu mirada.
    </p>
    <p className="font-semibold font-play text-white text-[35px] text-center lg:text-[38px] lg:max-w-[320px]">
    Mejoran tu vibra y apariencia.
    </p>
      </Motion>

    </section>
  );
};

export default Galery;
