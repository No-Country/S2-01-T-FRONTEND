import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  /*
  const userPrueba = {
    role: "shop",
    company_name: "La Casita",
    firstName: "Juan ",
    lastName: "Reyes",
    dni: "1236548",
    email: "juan@gmail.com",
    password: "12345678",
    adress: "casa Roja",
    city: "Tunja",
    country: "Colombia",
    id: "pRf9CJR",
    rating: 5,
  } */

  const [userActive, setUserActive] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const contextValue = {
    userActive,
    setUserActive,
    isLogged,
    setIsLogged,
  };
  return (
    <>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </>
  );
};
