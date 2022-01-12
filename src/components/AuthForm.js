import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginOperation, registerOperation } from "../redux/auth/authOperation";
import styles from "./AuthFormStyles.module.css";

class AuthForm extends Component {
  state = { name: "", email: "", password: "" };

  onHandleChage = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    // this.props.onRegister(this.state);
    this.props.location.pathname === "/register"
      ? this.props.onRegister(this.state)
      : this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <form className={styles.authForm} onSubmit={this.onHandleSubmit}>
        {this.props.location.pathname === "/register" && (
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onHandleChage}
            />
          </label>
        )}
        <label>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onHandleChage}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onHandleChage}
          />
        </label>
        <button type="submit">
          {this.props.location.pathname === "/register" ? "register" : "login"}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerOperation,
  onLogin: loginOperation,
};

export default connect(null, mapDispatchToProps)(withRouter(AuthForm));
