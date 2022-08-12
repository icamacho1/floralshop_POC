import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { ProductType } from "../../@types/product"
import { PATHS } from "../../router/controller"

const Item: FC<{
    product: ProductType
}> = ({ product }) => {
    const navigate = useNavigate()

    return (
        <div 
            onClick={() => navigate(PATHS.PRODUCTDETAIL(product.id))}
            className="relative w-[200px] h-[200px] grow cursor-pointer hover:shadow-xl">
            <div className="absolute w-[100%] h-[100%] z-[-10] opacity-70 bg-gradient-to-t from-black rounded-lg"/>
            <img 
                className="absolute z-[-20] object-cover w-[100%] h-[100%] rounded-lg"
                src={product.imgUrl}
                />
            <div className="absolute  flex flex-col bottom-4 left-4 z-10 text-white">
                <h1 className="font-bold">{product.name}</h1>
                <p className="italic">{product.binomialName}</p>
                <p>{product.price} €</p>
            </div>
        </div>
    )
}

export default Item