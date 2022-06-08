import React from "react";
import { Route } from "react-router-dom";

const PrivateRouter = (props) => {
  return <Route exact={props.exact} path={props.path} />;
};

export default PrivateRouter;
