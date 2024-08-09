import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
import { HowWork, ItemCard } from '@/constant';


export const HowCard = (data:HowWork) => {

    const {items,title,titleIcons,info} = data
  return (
    <Card className="bg-white max-w-[350px] text-black border-none shadow-black shadow-sm">
  <CardHeader>
    <CardTitle className="text-center">
      <div className='w-[80px] mb-4 h-[80px] border-8 border-red-600 m-auto flex justify-center items-center rounded-[50%]'>
      <i className={`fa-solid ${titleIcons} fa-lg`}></i>
      </div>
      <p className={`font-bold`}>{title}</p>
    </CardTitle>
  </CardHeader>
  <CardContent className=" pt-4 mb-4">
    <ul className="flex flex-col gap-4">    
    {items.map(item => {
     const {type} = item
    if(type === "icon"){
        return (
            <FontIcon key={item.src} {...item} />
        )
    }
    if(type == "icon-image"){
        return (
            <ImageIcon key={item.src} {...item} />
        )
    }
    })}
    </ul>
  </CardContent>
   {info  &&  
   <CardFooter>
    <p className='text-neutral-500'>{info}</p>
  </CardFooter>}
</Card>

  )
}



const FontIcon = ({src,text}:ItemCard) => {

    return (
        <li className='grid grid-cols-3 justify-items-center items-center'>
        <i className={`fa-solid ${src} text-[2rem]`}></i>
        <p className='text-[1.5rem] col-span-2 justify-self-start  font-semibold'>{text}</p>
        </li>
    )

}


const ImageIcon = ({src,text,size}:ItemCard) => {
    return (
        <li className={`grid grid-cols-3 ${!text ? "mb-4": ""} justify-items-center items-center`}>
        <Image src={src} className={`${!text ? "col-start-2": ""} grayscale saturate-100 contrast-200`} width={size![0]} height={size![1]} alt={text!} />
          {text &&  <p className='text-[1.5rem] col-span-2 justify-self-start font-semibold'>{text}</p>}
        </li>
    )
}
