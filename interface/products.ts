export interface Product {
    id:string,
    title:string,
    description:string
}

export interface Products {
 [Key:string]: Product
}