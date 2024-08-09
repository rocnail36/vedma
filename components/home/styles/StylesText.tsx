import Motion from '@/components/framer/Motion'
import { Button } from '@/components/ui/button'
import { once } from 'events'
import React from 'react'

const StylesText = () => {
  return (
    <div className='w-[100%] flex flex-col items-center justify-center md:items-start px-4 md:w-[50%] lg:w-[40%]'>
        <div className="max-w-[310px] min-w-[310px] min-[500px]:min-w-[450px]   md:min-w-[450px]  lg:min-w-[500px]">
      
      <Motion
        initial={{ width: 0 }}
        whileInView={{ width: "auto" }}
        viewport={{once:true,margin: "-200px 0px"}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="overflow-hidden"
      >
        <p className="font-semibold font-play text-[36px]  min-w-[310px] mb-14 text-center  min-[500px]:min-w-[450px]  md:text-[46px]   md:text-left lg:text-[56px] lg:min-w-[500px]">
        Variedad de lentes, estilos y colores unicos
        </p>
      </Motion>
      </div>


        <Motion initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
        <Button className="bg-primary text-white text-[18px] px-6 py-2 font-bold">
          ¡COMPRAR YA!
        </Button>
        </Motion>
    
    </div>
  )
}

export default StylesText