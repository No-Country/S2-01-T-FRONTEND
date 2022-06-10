import React from "react";
import { Route } from "react-router-dom";

const PrivateRouter = (props) => {
  console.log(props.exact, props.path);
  return (
    <Route exact={props.exact} path={props.path} element={props.element} />
  );
};

export default PrivateRouter;
