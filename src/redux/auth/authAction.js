import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("contacts/registerRequest");
const registerSuccess = createAction("contacts/registerSuccess");
const registerError = createAction("contacts/registerError");

const loginRequest = createAction("contacts/loginRequest");
const loginSuccess = createAction("contacts/loginSuccess");
const loginError = createAction("contacts/loginError");

const logoutRequest = createAction("contacts/logoutRequest");
const logoutSuccess = createAction("contacts/logoutSuccess");
const logoutError = createAction("contacts/logoutError");

const getCurrentUserRequest = createAction("contacts/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("contacts/getCurrentUserSuccess");
const getCurrentUserError = createAction("contacts/getCurrentUserError");

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
