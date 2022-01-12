import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredItemsSelector } from "../../redux/selector";
import { removeContacts } from "../../redux/operations";
import { styles } from "./ContactListStyles.module.css";

const ContactList = () => {
  const items = useSelector(filteredItemsSelector);

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(removeContacts(id));
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
