import axios from "axios";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authAction";

const BASE_URL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const registerOperation = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, credentials);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.massage));
  }
};

export const loginOperation = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post(`${BASE_URL}/users/login`, credentials);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.massage));
  }
};

export const logoutOperation = () => async (dispatch, getState) => {
  const token = getState().auth.token;
  dispatch(logoutRequest());
  try {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    await axios.post(`${BASE_URL}/users/logout`);
    dispatch(logoutSuccess());
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.massage));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get(`${BASE_URL}/users/current`);

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
