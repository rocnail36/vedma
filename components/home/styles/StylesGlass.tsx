import Motion from '@/components/framer/Motion'
import Image from 'next/image'
import React from 'react'

const StylesGlass = () => {
  return (
    <div className='relative min-h-[600px] w-[100%] max-w-[400px] m-auto md:w-[50%] lg:min-h-[800px] lg:w-[60%] lg:max-w-[450px]'>

      
      <Motion initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} viewport={{once:true}} className="rounded-[50%] h-[170px] w-[170px] bg-circle absolute top-10 left-4 z-10" />

      <Motion initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} viewport={{once:true}} className="rounded-[50%] h-[120px] w-[120px] bg-circle absolute right-4 bottom-[40%] " />

      <Motion initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} viewport={{once:true}} className="rounded-[50%] h-[80px] w-[80px] bg-circle absolute bottom-16 left-10 " />


     <div className='absolute w-[150px] h-[250px] lg:h-[350px] lg:w-[250px] right-0'>
      <Image
        src="/glass-2.png"
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


      <div className='absolute w-[160px] h-[150px] bottom-[35%] lg:h-[250px] lg:w-[260px]'>
      <Image
        src="/glass-1.png"
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


      <div className='absolute w-[150px] h-[250px] bottom-0 right-0 lg:h-[350px] lg:w-[250px]'>
      <Image
        src="/glass-3.png"
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

export default StylesGlass