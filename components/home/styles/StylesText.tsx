import Motion from '@/components/framer/Motion'
import { Button } from '@/components/ui/button'
import { once } from 'events'
import Link from 'next/link'
import React from 'react'

const StylesText = () => {
  return (
    <div className='min-h-[400px] w-[100%] max-w-[400px] m-auto md:w-[50%] lg:min-h-[800px] lg:w-[40%] lg:max-w-[450px] flex flex-col justify-center items-center md:items-start'>
        <div className="max-w-[310px] min-w-[310px] min-[500px]:min-w-[450px]   md:min-w-[450px]  lg:min-w-[350px]">
      
      <Motion
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        viewport={{once:true,margin: "-200px 0px"}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-hidden"
      >
        <p className="font-semibold font-play text-[36px]  min-w-[310px] mb-14 text-center  min-[500px]:min-w-[450px]  md:text-[46px]   md:text-left lg:text-[56px] lg:min-w-[350px]">
        Variedad de lentes, estilos y colores unicos
        </p>
      </Motion>
      </div>


        <Motion initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
        <Link href={"/shop"}>
         <Button className="bg-primary text-white text-[18px] px-6 py-2 font-bold">
          ¡COMPRAR YA!
        </Button>
        </Link>
        </Motion>
    
    </div>
  )
}

export default StylesText