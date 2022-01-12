import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { loginOperation, registerOperation } from "../redux/auth/authOperation";
import styles from "./AuthFormStyles.module.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const AuthForm = () => {
  const [state, setState] = useState(initialState);

  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChage = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    location.pathname === "/register"
      ? dispatch(registerOperation(state))
      : dispatch(loginOperation(state));

    setState({ name: "", email: "", password: "" });
  };

  return (
    <form className={styles.authForm} onSubmit={onHandleSubmit}>
      {location.pathname === "/register" && (
        <label>
          Name
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onHandleChage}
          />
        </label>
      )}
      <label>
        Email
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={onHandleChage}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={onHandleChage}
        />
      </label>
      <button type="submit">
        {location.pathname === "/register" ? "register" : "login"}
      </button>
    </form>
  );
};

export default AuthForm;
