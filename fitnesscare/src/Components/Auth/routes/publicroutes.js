import React from "react";
import { Route, Redirect } from "@zumper/react-router-dom";
import { isAuth } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route like login
    <Route
      {...rest}
      render={(props) =>
        isAuth() && restricted ? (
          <Redirect to="/profile" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;