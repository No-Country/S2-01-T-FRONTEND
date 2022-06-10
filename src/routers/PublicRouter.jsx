import React from "react";
import { Navigate } from "react-router-dom";

//? redirecciona en base a una condicion. En este caso: isLogged
//? Si es true muestra el home, sino muestra los children (<AuthRouter/>)
export const PublicRouter = ({ children, isLogged }) => {
  return isLogged ? <Navigate to="/app/home" /> : children;
};
