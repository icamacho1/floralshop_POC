import { ProductType } from "../@types/product"
import { HttpClient } from "./client"

const httpClient = new HttpClient()

export const dulcesPetalosApiClient = {
    products:{
        getAllProducts: async (): Promise<ProductType[]> => {
            return await httpClient.get('/api/product')
        },
        getProductDetail: async (id: string): Promise<ProductType> => {
            return await httpClient.get(`/api/product/${id}`)
        }
    } 
}