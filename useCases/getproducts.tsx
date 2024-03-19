import { ProductResponse } from "@/interface/response"
import { fetchUrl } from "@/utils/fetch"

export const getProducts = async(url:string) => {
   
   const data:ProductResponse = await fetchUrl(url)
    console.log(data)
   const products = data.values.map(product => (
     {
      id:product[0],
      title:product[1],
      description:product[2],
      img: product[3]
     }))

   return products 
   
} 