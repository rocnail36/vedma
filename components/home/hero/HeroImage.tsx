import Motion from '@/components/framer/Motion'
import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
   
    <div className="w-[40%] relative h-[100%]  hidden md:block ">

    <Motion
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      transition={{ duration: 0.8 }}
      className="w-[200px] h-full from-[#EF2A2A] to-[#891818] bg-gradient-to-r absolute bottom-[] right-[50%] translate-x-[40%]"
    />

    <Motion
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-[250px] w-[250px] absolute z-10 bottom-[-5px] left-[10px]"
    >
      <div className="rounded-[50%] h-[220px] w-[220px] bg-circle absolute bottom-[-10px] left-[-45px] z-10" />
      <div className="rounded-[50%] h-[80px] w-[80px] bg-circle absolute bottom-[200px] left-[-35px] " />
      <div className="rounded-[50%] h-[60px] w-[60px] bg-circle absolute bottom-[100px] left-[-120px] " />
      <div className="rounded-[50%] h-[40px] w-[40px] bg-circle absolute bottom-[180px] left-[-140px] " />
    </Motion>

      <div className='absolute bottom-[-20px] h-[500px] w-[300px]  right-[50%] translate-x-[60%] lg:h-[600px] lg:w-[400px]'>
      <Image
        src="/hero-image.png"
        alt=""
        sizes="40vw"
        style={{
          width: '100%',
          height: '100%',
        }}
        width={500}
        height={300}
      />
      </div>

  </div>
  )
}

export default HeroImage