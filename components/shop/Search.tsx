import React from 'react'
import { Input } from "@/components/ui/input"

export const Search = () => {
  return (
    <div className='flex justify-center items-center  mb-4'>
     <Input className='w-1/2  outline-none ring-0 ring-transparent  mr-[-25px]' type="text" placeholder="search" />
     <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}
