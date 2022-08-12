import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { ProductType } from "../../@types/product"

const SearchBar: FC<{
    products: ProductType[]
    setProducts: Dispatch<SetStateAction<ProductType[]>>
}> = ({ products, setProducts }) => {

    // const allProducts = Object.assign({}, products);
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        setProducts(products.filter(product => 
            product.name.toLocaleLowerCase().includes(searchText.toLowerCase()) ||
            product.binomialName.toLocaleLowerCase().includes(searchText.toLowerCase())
        ))
    }, [searchText])

    return (
        <input 
            value={searchText}
            className="py-2 px-2 border-[2px] rounded-md w-[300px]"
            onChange={(e) => setSearchText(e.currentTarget.value)}
            placeholder="Escribe aqui para filtrar"/>
    )
}

export default SearchBar