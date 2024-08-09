"use client"
import Image from 'next/image'
import { usePathname, useRouter  } from 'next/navigation'
import React from 'react'

const Footer = () => {

    
    const path = usePathname()
 
  return (
    <div className={`flex p-10 justify-between items-center  ${path == "/shop" && "border-t-[1px] border-slate-200"}`}>
        <Image src="/biglogo.png" alt='logo' width={150} height={50}/>
        <div className='flex gap-2 items-center'>
        <i className="fa-brands fa-instagram fa-xl cursor-pointer hover:scale-105"></i>
        <i className="fa-brands fa-whatsapp fa-xl cursor-pointer hover:scale-105"></i>
        </div>
    </div>
  )
}

export default Footer