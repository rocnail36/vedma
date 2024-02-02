import React from 'react'
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';


const Navbar = () => {
  return (
    <div className='fixed bg-white w-screen max-w-screen-xl  py-2  px-8 z-50 flex justify-between'>
        <Image src={"/smallLogo.png"} width={120} height={20} alt='logo'/>
        <Sheet key={"left"}>
      <SheetTrigger className=""><i className="fa-solid fa-cart-shopping fa-xl"></i></SheetTrigger>
      <SheetContent
        className="bg-white"
        side={"right"}
      ></SheetContent>
    </Sheet>
    </div>
  )
}

export default Navbar