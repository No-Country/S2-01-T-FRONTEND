import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/NavBarComponent";
import Error404Page from "../pages/404/Error404Page";
import AboutMePage from "../pages/aboutMe/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import { UserContext } from "../providers/UserProvider";
import ApplicationRouter from "./ApplicationRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const MainRouter = () => {
  //? Validacion de usuario logeado
  const { isLogged, userActive } = useContext(UserContext);
  console.log(userActive);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact index path="/" element={<ContactPage />} />
        <Route
          exact
          path="/auth/*"
          element={
            <PublicRouter isLogged={isLogged}>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route
          exact
          path="/app/*"
          element={
            <PrivateRouter isLogged={isLogged}>
              <ApplicationRouter />
            </PrivateRouter>
          }
        />
        <Route exact path="/about" element={<AboutMePage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
