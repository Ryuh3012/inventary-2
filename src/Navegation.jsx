import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Logo from ".//assets/Logo.png";
import Inventary from "./Pages/Inventary/Inventary";
import UsersVali from "./Pages/users/UsersVali";
import Login from "./auth/Login";

const Navegation = () => {
    return (
        <BrowserRouter>
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
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'} to='/'>
                                Inventario
                            </NavLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavLink className={({ isActive }) => isActive ? 'font-bold' : 'text-black font-light'} to='/user'>
                                Inventario
                            </NavLink>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/inventary" element={<Inventary />} />
                <Route path="/user" element={<UsersVali />} />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>

        </BrowserRouter>

    )
}

export default Navegation;
