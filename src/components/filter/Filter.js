import React from "react";
import styles from "./FilterStyle.module.css";
import PropTypes from "prop-types";
import { filterChange } from "../../redux/actions";
import { connect } from "react-redux";
import { contactsFilterSelector } from "../../redux/selector";

const Filter = ({ filter, handleChange }) => {
  const onChange = (evt) => {
    handleChange(evt.target.value);
  };
  return (
    <div className={styles.filterContainer}>
      <h2>Find contacts by name</h2>
      <input
        id="filter"
        name="filter"
        type="text"
        className={styles.filterInput}
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filter: contactsFilterSelector(state),
  };
};

const mapDispatchToProps = {
  handleChange: filterChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
