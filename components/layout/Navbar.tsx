import React from 'react'
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { cookies } from 'next/headers';
import CardCart from '../shop/CardCart';
import { CartProduct } from '@/interface/products';
import Link from 'next/link';




const Navbar = () => {

  const cartProducts = cookies().get('cart')?.value ? JSON.parse(cookies().get('cart')?.value!) : {}
  
  const numberCart = Object.entries(cartProducts).reduce((counter,[index,value]) => {
     return counter + (value as any).quantity
  },0)

  const cartMount = Object.entries(cartProducts).reduce((counter,[index,value]) => {
    return counter + (value as any).quantity * Number((value as any).description)
 },0)

 const text = Object.entries(cartProducts).reduce((counter,[index,value]) => {
  return counter + (value as any).title + ': ' + (value as any).quantity + '%0A'
},'')
  
 


  return (
    <div className='fixed top-0 left-0 bg-white w-full h-[70px]  py-4  z-50 flex justify-between px-8 shadow-md mb-6'>
        <Link href='/' ><Image src={"/smallLogo.png"} width={120} height={20} alt='logo'/></Link>
        <Sheet>
      <SheetTrigger className='relative'><div className='rounded-[50%] bg-red-700 text-white absolute px-[10px] right-[-20px] top-[-5px]'>{numberCart}</div><i className="fa-solid fa-cart-shopping fa-xl"></i></SheetTrigger>
      <SheetContent
        className="bg-white overflow-y-scroll"
        side={"right"}
      >

        <div className='flex flex-col gap-4'>

      
      { Object.keys(cartProducts).length == 0 ? 
      <div className='pt-10 relative'>
        <h3 className='text-[40px] w-1/2 font-bold leading-[40px] text-black relative z-10 mb-[-50px]'>no hay productos en el carrito</h3>
       <Image className='border-4  opacity-[1] border-red-800 rounded-[50%] absolute left-[150px] top-[150px]' alt='carrito vacio' src={"/carritovacio.jfif"} height={150} width={150}/>
       <i className="fa-solid fa-circle-plus text-[56px] cursor-pointer absolute top-[280px] right-[35px]"></i>
      </div>
       
      :(
        <>
        <h2 className='text-center font-bold text-xl'>Tu carrito</h2>
        {Object.entries(cartProducts).map(([id,product]) => (
          <CardCart key={id} product={product as CartProduct}/>
        ))}
        <div className='flex items-center flex-col mt-2'>
       <p className='flex items-center gap-[1px]'>monto: <span className='text-green-600 font-bold text-[20px] '>{cartMount}</span>$</p>
        <a  href={`https://wa.me/584127411421?text=Hola deseo comprar los siguientes productos:%0A${text}`} >
        <button className='bg-red-700 text-white p-2 rounded-md hover:scale-105'>solicitar compra</button>
        </a>
       </div>
       </>
      )
     }
       </div>
       
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default Navbar