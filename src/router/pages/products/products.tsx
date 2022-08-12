import { useEffect, useState } from "react";
import Item from "../../../components/item/item";
import Navbar from "../../../components/navbar/navbar";
import SearchBar from "../../../components/searchBar/searchBar";
import { useProducts } from "../../../hooks/product";

function ProductsPage() {

    const products = useProducts()
    const [stateProducts, setStateProducts] = useState(products)
    useEffect(() => {setStateProducts(products)}, [products])

    return (
        <body className="">
            <Navbar />
            <div className="mx-[10%] py-10 flex justify-end">
                <SearchBar 
                    products={products}
                    setProducts={setStateProducts}/>
            </div>
            <div className="flex flex-wrap gap-4 mx-[10%]">
                {stateProducts.map((product, index) => (
                    <Item 
                        product={product} 
                        key={index}/>
                ))}
            </div>
        </body>
    );
}

export default ProductsPage;
