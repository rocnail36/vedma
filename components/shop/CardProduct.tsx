'use client'


import React from 'react'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import { Product } from '@/interface/products'
import { addProduct } from '@/lib/actions'

interface Props {
 product:Product
}

export const CardProduct = ({product}:Props) => {

  const {description,id,title,img} = product

  const addProductBind = addProduct.bind(null,product)


  return (
    <Card className='box-border h h-[270px] border-black  border overflow-hidden'>
    <div className='w-full h-[200px] relative '>
    <Image src={img}
    alt={title} fill={true}
    style={{
      objectFit: 'cover',
    }}/>
    </div>
    <CardHeader className='py-2 px-4 flex'>
<CardTitle>{title}</CardTitle>
<div className='flex justify-between items-center'>
<CardDescription className='text-base'>{description}$</CardDescription>
<form action={addProductBind}>
<button>
<i className="fa-solid fa-circle-plus fa-xl cursor-pointer"></i>
</button>
</form>
</div>


</CardHeader>

</Card>
  )
}
