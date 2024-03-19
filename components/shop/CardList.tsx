import { Product } from '@/interface/products'
import React from 'react'
import { CardProduct } from './CardProduct'


interface Props {
    products:Product[]
}

const CardList = ({products}:Props) => {
  return (
    <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
        {products.map(product => {
            return <CardProduct/>
        })}
    </div>
  )
}

export default CardList