import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Error404Page from "../pages/404/Error404Page";
import AboutMePage from "../pages/aboutMe/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import { UserProvider } from "../providers/UserProvider";
import ApplicationRouter from "./ApplicationRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const MainRouter = () => {
  //? Validacion de usuario logeado
  const isLogged = true;

  return (
    <BrowserRouter>
      <UserProvider>
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
      </UserProvider>
    </BrowserRouter>
  );
};
