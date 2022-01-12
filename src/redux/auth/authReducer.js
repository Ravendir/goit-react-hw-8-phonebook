import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./authAction";

const initialsUserState = { name: null, email: null };

const user = createReducer(initialsUserState, {
  [registerSuccess]: (state, { payload }) => payload.user,
  [loginSuccess]: (state, { payload }) => payload.user,
  [logoutSuccess]: () => initialsUserState,
  [getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (state, { payload }) => payload.token,
  [loginSuccess]: (state, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (state, { payload }) => payload,
  [loginError]: (state, { payload }) => payload,
  [logoutError]: () => null,
  [getCurrentUserError]: (state, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});

export default authReducer;
