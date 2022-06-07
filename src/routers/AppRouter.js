import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import LoginPage from "../pages/auth/login/domain/LoginPageInput";
import HomePage from "../pages/home/HomePage";
import Footer from "../components/footer/Footer";
import Error404Page from "../pages/404/Error404Page";
import RegisterPage from "../pages/auth/register/domain/RegisterPageValitate";
import HelpPage from "../pages/help/HelpPage";
import SearchPage from "../pages/searchs/SearchPage";
import ContactPage from "../pages/contact/ContactPage";
import AboutMePage from "../pages/aboutMe/AboutMePage";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/ayuda" element={<HelpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
