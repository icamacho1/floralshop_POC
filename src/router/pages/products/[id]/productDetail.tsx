import { FC } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../../../../components/navbar/navbar"
import { useProduct } from "../../../../hooks/product"
import { IoIosArrowBack } from "react-icons/io"
import { FertilizerType } from "../../../../schemas/product"
import { Link } from "react-router-dom"
import { PATHS } from "../../../controller"
import { BsFillCartFill } from "react-icons/bs"

const ProductPage: FC = () => {
    const { id } = useParams()
    const product = useProduct(id as string)

    const correctFertilizer = (fertilizer: FertilizerType) => {
        if (fertilizer === "nitrogen") return 'nitrógeno'
        if (fertilizer === "phosphorus") return 'fósforo'
    }

    return (
        <body className="pb-10">
            <Navbar />
            <div className="mx-[5%] py-10">
                <Link to={PATHS.PRODUCTS}>
                    <a className="flex items-center gap-2">
                        <IoIosArrowBack className="text-2xl"/> Atrás   
                    </a>
                </Link>
            </div>
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-start sm:justify-center mx-[5%] shadow-xl pt-10 pb-28 rounded-lg">
                <img 
                    className="lg:h-[400px] lg:w-[400px]
                                sm:h-[300px] sm:w-[300px]
                                h-[250px] w-[250px]
                                object-cover rounded-lg shadow-md"
                    src={product.imgUrl}/>
                <div className="flex flex-col gap-4 max-w-[270px] h-[100%] relative">
                    <h1 className="font-bold text-2xl w-[100%] bg-blue-400 px-4 py-2 text-white">{product.name}</h1>
                    <p><span className="italic">{product.binomialName}</span></p>
                    <p>Altura: {product.heightInCm} cm</p>
                    <div>
                        <h1 className="font-bold">Descipción:</h1>
                        <p>
                            Hay que regarla {product.wateringsPerWeek} {product.wateringsPerWeek > 1 ? "días" : 'día'} a la semana y se recomienda utilizar {correctFertilizer(product.fertilizerType)} como fertilizante. 
                        </p>
                    </div>
                    <div className="absolute bottom-[-4em] md:bottom-[-7em] right-0 flex gap-4 items-center">
                        <button className="bg-blue-400 py-2 px-4 rounded-md text-white border-[1px] border-blue-400
                                           hover:text-blue-400 hover:border-[1px] hover:border-blue-400 hover:bg-white
                                           transition ease-in-out duration-150">
                                            <BsFillCartFill/>
                        </button>
                        <p className="text-xl">{product.price} €</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ProductPage