import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from '../assets/Logo.png'
import exit from '../assets/salida.png'
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div className='bg-[#d9dbe0] '>
            <Navbar
                className=" flex justify-center items-center shadow-md ">
                <NavbarBrand>
                    <img src={Logo} className="w-[90px]" />
                    <p className="font-bold">Colinas del paramo</p>
                </NavbarBrand>
                <NavbarContent  className="p-5">
                    <p className="text-xl font-bold font-mono text-green-600">¡La calidad como tradición!</p>
                </NavbarContent>
                <NavbarContent className="flex gap-5" >
                    <NavbarItem isActive>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'} to='/inventary'>
                            Inventario
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'} to='/user'>
                            Personal
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <NavLink className='px-5' to='/'> <img src={exit} className="w-[20px]" /> </NavLink>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <div className="bg-[#293F00]">

                {children}
            </div>
        </div>
    );
}

export default Layout;
