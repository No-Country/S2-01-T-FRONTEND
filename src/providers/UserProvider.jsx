import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userActive, setUserActive] = useState({
    user: "ingenieroagudelo@gmail.com",
    role: "client",
  });

  const contextValue = {
    userActive,
    setUserActive,
  };
  return (
    <>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </>
  );
};
