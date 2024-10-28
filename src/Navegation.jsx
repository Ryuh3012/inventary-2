import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inventary from "./Pages/Inventary/Inventary";
import UsersVali from "./Pages/users/UsersVali";
import Login from "./auth/Login";

const Navegation = () => {
    return (
        <BrowserRouter>
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
