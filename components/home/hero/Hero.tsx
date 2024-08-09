

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="mb-12 m-auto h-[90vh] max-h-[700px] px-2 pt-16 w-full flex lg:max-h-[900px] lg:mb-32">

      <HeroText/>

      <HeroImage/>
 
    </section>
  );
};

export default Hero;
