import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login/domain/LoginPage";
import HomePage from "../pages/home/HomePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route index element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
