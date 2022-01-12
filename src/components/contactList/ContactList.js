import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filteredItemsSelector } from "../../redux/selector";
import { removeContacts } from "../../redux/operations";
import { styles } from "./ContactListStyles.module.css";

const ContactList = ({ items, handleDelete }) => {
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

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: filteredItemsSelector(state),
  };
};

const mapDispatchToProps = {
  handleDelete: removeContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
