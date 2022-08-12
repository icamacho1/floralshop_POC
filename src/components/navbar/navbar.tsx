import { Dispatch, FC, SetStateAction, useState } from "react"
import { GiButterflyFlower } from "react-icons/gi"
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { PATHS } from "../../router/controller"

const Navbar: FC = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <nav className="px-[10%] py-4">
            <div className="sm:flex justify-between items-center hidden">
                <GiButterflyFlower className="text-6xl"/>
                <div className="flex flex-row gap-6">
                    <NavPaths />
                </div>
            </div>
            <div className="sm:hidden flex justify-between items-center">
                <GiButterflyFlower className="text-6xl"/>
                <FaBars 
                    onClick={() => setShowSidebar(prev => !prev)}
                    className="2xl cursor-pointer"/>
                {
                    showSidebar && <Sidebar setShowSidebar={setShowSidebar}/>
                }
            </div>
        </nav>
    )
}

const Sidebar: FC<{
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}> = ({ setShowSidebar }) => {

    return (
        <>
            <div className="absolute inset-0 w-[50%] bg-white shadow-lg z-10 mx-[50%]">
                <button 
                    className="mt-10 ml-4 mb-6 hover:rotate-45 transition ease-in-out delay-200"
                    onClick={() => setShowSidebar(prev => !prev)}>
                    <IoCloseSharp className="text-2xl"/>
                </button>
                <div className="z-20 flex flex-col gap-2 px-10">
                    <NavPaths />
                </div>
            </div>
        </>
    )
}

export enum NavbarNavigationItems {
    PRODUCTS = 'Productos',
    ABOUT_US = 'Sobre nosotros',
    CONTACT = 'Contacto'
}

const NavPaths: FC = () => (
    <>
        <Link to={PATHS.PRODUCTS}>
            <a className="text-black-500 hover:text-indigo-800 hover:border-b-[3px] hover:border-indigo-800 transition ease-in-out delay-200">
                {NavbarNavigationItems.PRODUCTS}
            </a>
        </Link>
        <Link to={PATHS.INDEX}>
            <a className="text-black-500 hover:text-indigo-800 hover:border-b-[3px] hover:border-indigo-800 transition ease-in-out delay-200">
                {NavbarNavigationItems.ABOUT_US}
            </a>
        </Link>
        <Link to={PATHS.INDEX}>
            <a className="text-black-500 hover:text-indigo-800 hover:border-b-[3px] hover:border-indigo-800 transition ease-in-out delay-200">
                {NavbarNavigationItems.CONTACT}
            </a>
        </Link>
    </>
)

export default Navbar