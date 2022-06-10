import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login/domain/LoginPageInput";
import RegisterPage from "../pages/auth/register/domain/RegisterPageValitate";
import ResetPage from "../pages/resets/ResetPage";

// ? Rutas para el usuario no logeado
const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/reset" element={<ResetPage />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
