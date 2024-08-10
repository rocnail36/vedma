"use client"
import React from 'react'
import {
  Card,
  CardContent
} from "@/components/ui/card"
import Image from 'next/image'
import { CartProduct } from '@/interface/products'
import { addProduct, minusProduct } from '@/lib/actions'

interface Props {
  product : CartProduct
}

const CardCart = ({product}:Props) => {
  const {img,quantity,title} = product
  
  return (
    <Card className='box-border w-1/2  border-gray-400 shadow-md borderborder-black  border overflow-hidden m-auto'>
    <div className='w-full h-[150px] relative '>
    <Image src={img}
    alt={title} fill={true}
    style={{
      objectFit: 'cover',
    }}/>
    </div>

   <CardContent className='p-0'>
        <div className='flex justify-center p-2'>
        <button className='px-2 rounded-l border-gray-300 border'
         onClick={() => minusProduct(product)}>-1</button>
        <div className='px-2 ` border-gray-300  border'>{quantity}</div>
        <button className='px-2 rounded-r border-gray-300 border'
                onClick={() => addProduct(product)}>+1</button>
        </div>
   </CardContent>
       </Card>
  )
}

export default CardCart