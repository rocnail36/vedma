'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination = ({productInPages,productsNumber,page}:{productInPages:number,productsNumber:number,page:number}) => {

    let numberOfPages =  Math.ceil(productsNumber / productInPages)
     console.log({this:numberOfPages,productsNumber})
  
     const router = useRouter()
    
  return (
    <div className='mt-4 flex items-center gap-1 justify-center mb-4'>

        <button className='text-white bg-black rounded-[50%] px-[10px] cursor-pointer disabled:bg-slate-300'
        onClick={() => router.replace(`/shop?page=${page-1}`)}
        disabled={1 == page}>&#60;</button>

        <div className='text-white bg-red-700 rounded-[50%] px-[10px]'>{page}</div>

        <button className='text-white bg-black rounded-[50%] px-[10px] cursor-pointer disabled:bg-slate-300'
        onClick={() => router.replace(`/shop?page=${page+1}`)}
        disabled={numberOfPages == page}>&#62;</button>

    </div>
  )
}
