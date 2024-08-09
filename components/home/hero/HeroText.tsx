import Motion from '@/components/framer/Motion'
import { Button } from '@/components/ui/button'
import React from 'react'

const HeroText = () => {
  return (
    <div className="h-[100%] flex flex-col px-[5px] justify-center items-start m-auto relative w-[300px] min-[500px]:w-[450px] lg:w-[550px]">

    <div className="min-[500px]:min-w-[450px] lg:min-w-[550px]">
    <Motion
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 0.3 }}
        className="mb-12 overflow-hidden"
      >
        <img
          src={"/biglogo.png"}
          alt="logo"
          className="min-w-[300px] min-h-[100px] min-[500px]:min-w-[450px] lg:min-w-[550px]"
        />
      </Motion>
      </div>


      <div className=" min-[500px]:max-w-[450px]  md:max-w-[300px] md:min-w-[350px]  lg:min-w-[500px]">
      <Motion
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="overflow-hidden"
      >
        <p className="font-semibold text-[16px] min-w-[300px] mb-14 text-center   min-[500px]:min-w-[450px] min-[400px]:text-[18px] md:min-w-[350px]   md:text-left lg:text-[20px] lg:min-w-[500px]">
          tenemos los lentes de sol que necesitas para cuidar tu visión y
          lucir increíble. Ya sea que busques un look clásico, moderno,
          deportivo o elegante, tenemos lentes de sol perfectos para ti
        </p>
      </Motion>
      </div>


      <Motion
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="overflow-hidden self-center md:self-start"
      >
        <Button className="bg-primary text-white text-[18px] px-6 py-2 font-bold">
          Ir a la tienda
        </Button>
      </Motion>

    </div>
  )
}

export default HeroText