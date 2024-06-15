import { Product } from '@/interface/products'
import React from 'react'
import { CardProduct } from './CardProduct'


interface Props {
    products:Product[]
}

const CardList = ({products}:Props) => {
  return (
    <div className='grid justify-center  gap-4 grid-cols-[repeat(auto-fit,minmax(250px,300px))] min-h-[70vh]  p-4'>
        {products.map(product => {
            return <CardProduct product={product}/>
        })}
    </div>
  )
}

export default CardList