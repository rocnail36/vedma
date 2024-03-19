import CardList from '@/components/shop/CardList'
import { Search } from '@/components/shop/Search'
import { getProducts } from '@/useCases/getproducts'
import React from 'react'

const  Shop = async () => {

const products = await getProducts("https://sheets.googleapis.com/v4/spreadsheets/10sOnHEoRdLrukcpTbT10M8JeOEAUXJMhcsYgIvTl2i4/values/sheet1?alt=json&key=AIzaSyCQZWSatvg7FiHlPQo34JPbuXuPWRAU4Vw")


  return (
    <div className='pt-16'>
      <Search/>
      <CardList products={products}/>
    </div>
  )
}

export default Shop