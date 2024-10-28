import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from '../assets/Logo.png'
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div className='bg-[#d9dbe0] '>
            <Navbar
                className=" flex  justify-center items-center shadow-md  ">
                <NavbarBrand>
                    <img src={Logo} className="w-[90px]" />
                    <p className="font-bold">Catires .c.a</p>
                </NavbarBrand>
                <NavbarContent  >
                    <p className="text-xl font-bold font-mono text-green-600">¡La calidad como tradición!</p>
                </NavbarContent>
                <NavbarContent >
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
                </NavbarContent>
            </Navbar>
            <div className="bg-[#1F6C4C]">

                {children}
            </div>
        </div>
    );
}

export default Layout;
