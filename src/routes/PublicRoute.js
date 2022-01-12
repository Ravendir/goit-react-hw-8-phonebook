import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({
  exact,
  path,
  isAuth,
  component: MyComponent,
  isRestricted,
}) {
  return isAuth && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route
      path={path}
      exact={exact}
      render={(props) => <MyComponent {...props} />}
      key={path}
    />
  );
}

export default PublicRoute;
