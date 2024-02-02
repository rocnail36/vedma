import React from 'react'
import { Roboto_Slab } from "next/font/google";
import { howWork } from '@/constant'
import { HowCard } from '../cards/HowCard'

export const roboto = Roboto_Slab({subsets:["latin"],weight:["400","500","600","700","800"]})

export const How = () => {
  return (
   <section  className={`${roboto.className} bg-how clip max-w-screen-xl m-auto  py-12`}>

    <h2 className="uppercase text-[2rem] mb-16 font-bold bg-red-700 text-white inline-block py-2 px-4">como trabajamos</h2>

    <div className='grid grid-cols-3 gap-8 px-8'>

      
    {howWork.map(how => (
      <HowCard key={how.title} {...how} />
    ))}



    </div>

   </section>
  )
}
