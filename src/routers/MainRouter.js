import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export const MainRouter = () => {
  const isLogged = false;
  const isVerified = false;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth/*"
            element={
              <PublicRouter isLogged={isLogged}>
                <AuthRouter />
              </PublicRouter>
            }
          />
          <Route
            path="/app/*"
            element={
              <PrivateRouter isLogged={isLogged} isVerified={isVerified}>
                <AppRouter />
              </PrivateRouter>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
