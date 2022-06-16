import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userActive, setUserActive] = useState({
    email: "inge@gmail.com",
    firstName: "Jaime",
    lastName: "Agudelo",
    role: "Shop",
  });
  const [isLogged, setIsLogged] = useState(true);

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
