import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import ProductsPage from "./pages/products/products";
import ProductPage from "./pages/products/[id]/productDetail";


export const PATHS = {
    INDEX: "/",
    PRODUCTS: "/products",
    PRODUCTDETAIL: (id: string = ":id") => `/products/${id}`
}

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATHS.INDEX} element={<IndexPage />} />
                <Route path={PATHS.PRODUCTS} element={<ProductsPage />} />
                <Route path={PATHS.PRODUCTDETAIL()} element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    )
}