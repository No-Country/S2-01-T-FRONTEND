import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HelpPage from "../pages/help/HelpPage";
import SearchPage from "../pages/searchs/SearchPage";

// ? Rutas para los usuario que se hayan logueado correctamente (Componente children de PrivateRouter)
const ApplicationRouter = () => {
  return (
    <>
      <Routes>
        <Route exact index path="/home" element={<HomePage />} />
        <Route exact path="/ayuda" element={<HelpPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default ApplicationRouter;
