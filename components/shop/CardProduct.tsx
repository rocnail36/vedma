import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'

export const CardProduct = () => {
  return (
    <Card className='box-border'>
    <div className='w-full h-[200px] relative'>
    <Image src={"https://scontent.fmrd1-1.fna.fbcdn.net/v/t39.30808-6/430073752_7155032434552216_2942795064044495154_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=GpVaUr7ULWMAX9F6Cgm&_nc_ht=scontent.fmrd1-1.fna&oh=00_AfB9VRlPTW2H-ab5Ndri1-SunFpCHOmlpOIfr0mAa8aqEw&oe=65E7FA48"}
    alt='hola' fill={true}
    style={{
      objectFit: 'cover',
    }}/>
    </div>
    <CardHeader className='py-2 px-4 flex'>
<CardTitle>lentes de sol</CardTitle>
<CardDescription className='text-base'>15$</CardDescription>

</CardHeader>

</Card>
  )
}
