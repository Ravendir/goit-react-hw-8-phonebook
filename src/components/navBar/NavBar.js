import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutOperation } from "../../redux/auth/authOperation";
import { getUserInfo } from "../../redux/auth/authSelectors";
import styles from "./NavBarStyles.module.css";

const NavBar = () => {
  const { token: IsAuthenticated, name } = useSelector(getUserInfo);
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutOperation());
  return (
    <nav>
      <ul className={styles.ul}>
        {IsAuthenticated ? (
          <>
            {" "}
            <li>
              <NavLink exact to="/">
                HomePage
              </NavLink>
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
              <button type="button" onClick={logout}>
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

export default NavBar;
