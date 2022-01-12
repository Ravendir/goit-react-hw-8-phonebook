import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutOperation } from "../../redux/auth/authOperation";
import {
  getIsAuthenticated,
  getUsername,
} from "../../redux/auth/authSelectors";
import styles from "./NavBarStyles.module.css";

const NavBar = ({ IsAuthenticated, logoutOperation, name }) => {
  return (
    <nav>
      <ul className={styles.ul}>
        {IsAuthenticated ? (
          <>
            {" "}
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">ContactsPage</NavLink>
            </li>
            <li>
              <img
                src="https://pngimg.com/uploads/face/face_PNG5645.png"
                alt="face"
                className={styles.defAvatar}
              />
              <span className={styles.span}>Welcome, {name}</span>
              <button type="button" onClick={logoutOperation}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink exact to="/">
                HomePage
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">RegisterPage</NavLink>
            </li>
            <li>
              <NavLink to="/login">LoginPage</NavLink>
            </li>{" "}
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => ({
  IsAuthenticated: getIsAuthenticated(state),
  name: getUsername(state),
});

const mapDispatchToProps = {
  logoutOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
