import { createSelector } from "@reduxjs/toolkit";

export const loadingSelector = (state) => state.contacts.loading;
export const contactsFilterSelector = (state) => state.contacts.filter;
export const contactsItemsSelector = (state) => state.contacts.items;

export const filteredItemsSelector = createSelector(
  [contactsItemsSelector, contactsFilterSelector],
  (items, filter) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    )
);
