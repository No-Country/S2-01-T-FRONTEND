import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import HelpPage from "../pages/help/HelpPage";
import SearchPage from "../pages/searchs/SearchPage";
import UserInfo from "../components/userProfile/UserInfo";
import NewCredit from "../pages/newCredit/NewCreditPage";
import DebtsPage from "../pages/debts/DebtsPage";

// ? Rutas para los usuario que se hayan logueado correctamente (Componente children de PrivateRouter)
const ApplicationRouter = () => {
  return (
    <>
      <Routes>
        <Route exact index path="/home" element={<HomePage />} />
        <Route exact path="/ayuda" element={<HelpPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/profile" element={<UserInfo />} />
        <Route exact path="/debts" element={<DebtsPage />} />
        <Route exact path="/new-credit" element={<NewCredit />} />
      </Routes>
    </>
  );
};

export default ApplicationRouter;
