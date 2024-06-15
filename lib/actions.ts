"use server"


import { Product } from "@/interface/products"
import { cookies } from "next/headers"



export const addProduct = (product:Product) => {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value ? JSON.parse(cookieStore.get('cart')?.value!) : {}
 
    if(!cart[product.id]){
      cart[product.id] = {
        ...product,
        quantity:1
      }
      cookieStore.set('cart',JSON.stringify(cart))
    }else {
      cart[product.id].quantity++
      cookieStore.set('cart',JSON.stringify(cart))
    }    
}

export const minusProduct = (product:Product) => {
  const cookieStore = cookies()
  const cart = cookieStore.get('cart')?.value ? JSON.parse(cookieStore.get('cart')?.value!) : {}
  
  if(!cart[product.id]){
    return
  }

  if(cart[product.id].quantity == 1){
    delete cart[product.id]
    cookieStore.set('cart', JSON.stringify(cart))
    return
  }

  cart[product.id].quantity--
  cookieStore.set('cart',JSON.stringify(cart))

}