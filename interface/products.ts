export interface Product {
    id:number,
    title:string,
    description:string,
    img:string
}

export interface Products {
 [Key:string]: Product
}

export interface CartProduct extends Product {
    quantity: number
}