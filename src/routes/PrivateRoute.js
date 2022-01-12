import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ exact, path, component: MyComponent, isAuth }) => {
  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <Route
      path={path}
      exact={exact}
      render={(props) => <MyComponent {...props} />}
      key={path}
    />
  );
};

export default PrivateRoute;
