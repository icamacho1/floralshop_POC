import { FC } from "react"
import { Navigate } from "react-router-dom"
import { PATHS } from "../controller"

const IndexPage: FC<{}> = () => {
    return (
        <Navigate to={PATHS.PRODUCTS}/>
    )
}

export default IndexPage