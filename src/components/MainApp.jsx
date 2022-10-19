import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PerfilPage, FormacionPage, ContactoPage } from "./";
import { AppRouter } from "./AppRouter";

export const MainApp = () => {
  return (
    <>
        <NavBar />
        <hr/>
        <AppRouter/>
    </>
  )
}