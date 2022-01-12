import { createAction } from "@reduxjs/toolkit";

const addNewContactsRequest = createAction("contacts/addNewContactsRequest");
const addNewContactsSuccess = createAction("contacts/addNewContactsSuccess");
const addNewContactsError = createAction("contacts/addNewContactsError");

const getAllContactsRequest = createAction("contacts/getAllContactsRequest");
const getAllContactsSuccess = createAction("contacts/getAllContactsSuccess");
const getAllContactsError = createAction("contacts/getAllContactsError");

const filterChange = createAction("contacts/filterChange");

const removeContactsRequest = createAction("contacts/removeContactsRequest");
const removeContactsSuccess = createAction("contacts/removeContactsSuccess");
const removeContactsError = createAction("contacts/removeContactsError");

export {
  addNewContactsRequest,
  addNewContactsSuccess,
  addNewContactsError,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  filterChange,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
};
