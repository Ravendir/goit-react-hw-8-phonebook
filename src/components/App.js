import React, { Suspense, Component } from "react";
import { Switch, withRouter } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import { mainRoutes } from "../routes/MainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { getIsAuthenticated } from "../redux/auth/authSelectors";
import { connect } from "react-redux";
import { getCurrentUser } from "../redux/auth/authOperation";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div>
        <NavBar />
        <Suspense fallback={<h2>...loading</h2>}>
          <Switch>
            {mainRoutes.map((route) =>
              route.isPrivate ? (
                <PrivateRoute
                  {...route}
                  isAuth={this.props.isAuth}
                  key={route.path}
                />
              ) : (
                <PublicRoute
                  {...route}
                  isAuth={this.props.isAuth}
                  key={route.path}
                />
              )
            )}
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
};

const mapStateToProps = (state, ownProps) => ({
  isAuth: getIsAuthenticated(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
