import React, { Fragment } from "react";
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

// ? Rutas para los usuario que se hayan logueado correctamente
const AppRouter = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/ayuda" element={<HelpPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default AppRouter;
