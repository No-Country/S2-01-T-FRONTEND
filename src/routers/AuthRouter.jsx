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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
