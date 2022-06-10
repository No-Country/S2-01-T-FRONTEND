import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ isLogged, children }) => {
  return <>{isLogged ? children : <Navigate to="/auth/login" />}</>;
};
