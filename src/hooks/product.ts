import { useEffect, useState } from "react"
import { ProductType } from "../@types/product"
import { dulcesPetalosApiClient } from "../http/dulcesPetalosApiClient"
import { ProductSchema } from "../schemas/product"



export const useProducts = (): ProductType[] => {
    const [products, setProducts]  = useState(new Array(8).fill(new ProductSchema({})))

    useEffect(() => {
        const caller = async () => {
            const products = await dulcesPetalosApiClient.products.getAllProducts()
            setProducts(products)
        }
        caller()
    }, [])

    return products
}

export const useProduct = (id: string): ProductType => {
    const [product, setProduct]  = useState(new ProductSchema({}))

    useEffect(() => {
        const caller = async () => {
            const product = await dulcesPetalosApiClient.products.getProductDetail(id)
            setProduct(product)
        }
        caller()
    }, [])

    return product
}