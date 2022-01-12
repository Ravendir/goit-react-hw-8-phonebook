import axios from "axios";
import {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from "./actions";

const BASE_URL = "https://connections-api.herokuapp.com";

const addNewContacts = (contact) => async (dispatch, getState) => {
  const token = getState().auth.token;
  dispatch(addNewContactsRequest());
  try {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
    dispatch(addNewContactsSuccess(data));
  } catch (error) {
    dispatch(addNewContactsError(error));
  }
};

const getAllContacts = () => async (dispatch, getState) => {
  const token = getState().auth.token;
  dispatch(getAllContactsRequest());
  try {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(`${BASE_URL}/contacts`);
    dispatch(getAllContactsSuccess(data));
  } catch (error) {
    dispatch(getAllContactsError(error));
  }
};

const removeContacts = (id) => async (dispatch, getState) => {
  const token = getState().auth.token;
  dispatch(removeContactsRequest());
  try {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    await axios.delete(`${BASE_URL}/contacts/${id}`);
    dispatch(removeContactsSuccess(id));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};

export { addNewContacts, getAllContacts, removeContacts };
