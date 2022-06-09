import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ isLogged, children, isVerified }) => {
  return (
    <>
      {isLogged === true && isVerified === true ? (
        <Navigate to="/app/homeapp" />
      ) : (
        <Navigate to="/login" />
      )}
      {isLogged ? children : <Navigate to="/login" />}
    </>
  );
};

export default PrivateRouter;
