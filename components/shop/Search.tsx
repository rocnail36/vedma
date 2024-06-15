'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { useSearchParams,usePathname,useRouter } from 'next/navigation'


export const Search = ({name}:{name:string}) => {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const replace = useRouter().replace

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
   
    const params = new URLSearchParams(searchParams)
    if(e.target.value){
      params.set('name', e.target.value)
      params.set('page','1')
    }else{
      params.delete('name')
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className='flex justify-center items-center mb-4 '>
     <Input className='w-1/2  outline-none ring-0 ring-transparent  mr-[-25px]  border border-gray-400' type="text" placeholder="search" 
     defaultValue={name}
     onChange={onChange}/>
     <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}
