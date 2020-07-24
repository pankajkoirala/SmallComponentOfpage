import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

let PrivateRoute = ({ component: Component, ...rest }) => {
let authorize= localStorage.getItem("test")
  return (
    <Route
      {...rest}
      render={(props) =>
        authorize ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
