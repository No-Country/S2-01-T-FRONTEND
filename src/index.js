import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./providers/UserProvider";
import { MainRouter } from "./routers/MainRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MainRouter />
    </UserProvider>
  </React.StrictMode>
);
