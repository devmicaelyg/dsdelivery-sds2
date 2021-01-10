import { OrderLocationData } from "./OrderLocationData"

type ProductId = {
    id: number; 
}

export type OrderPayLoad = {
    products: ProductId[];
} & OrderLocationData;