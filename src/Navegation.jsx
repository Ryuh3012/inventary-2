import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { BrowserRouter, Routes, Route, Navigate, NavLink } from "react-router-dom";
import Logo from ".//assets/Logo.png";
import Inventary from "./Pages/Inventary/Inventary";

const Navegation = () => {
    return (
        <BrowserRouter>
            <div className='bg-[#d9dbe0]'>
                <Navbar
                    className=" text-black shadow-md"
                >

                    <NavbarBrand>
                        <img src={Logo} className="w-[90px]" />
                        <p className="font-bold">Catires .c.a</p>
                    </NavbarBrand>
                    <NavbarContent >
                        <p className="text-xl font-sans text-green-600">¡La calidad como tradición!</p>
                    </NavbarContent>
                </Navbar>
            </div>
            <Routes>
                <Route path="/invetary" element={<Inventary />} />
                <Route path="*" element={<Navigate to={'/'} replace={true} />} />
            </Routes>

        </BrowserRouter>

    )
}

export default Navegation;

