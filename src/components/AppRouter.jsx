import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PerfilPage, FormacionPage, ContactoPage } from "./";

export const AppRouter = () => {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={ <PerfilPage />}/>
            <Route path="contacto" element={ <ContactoPage />}/>
            <Route path="formacion" element={ <FormacionPage />}/>
            <Route path="/*" element={ <Navigate to="/" />}/>
        </Routes>
    </div>
  )
}