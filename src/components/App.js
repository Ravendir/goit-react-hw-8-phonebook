import React, { Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import { mainRoutes } from "../routes/MainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { getIsAuthenticated } from "../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/auth/authOperation";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const isAuth = useSelector(getIsAuthenticated);

  return (
    <div>
      <NavBar />
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            )
          )}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
