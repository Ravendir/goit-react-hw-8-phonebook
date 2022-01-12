import React from "react";
import styles from "./FilterStyle.module.css";
import { filterChange } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { contactsFilterSelector } from "../../redux/selector";

const Filter = () => {
  const filter = useSelector(contactsFilterSelector);

  const dispatch = useDispatch();

  const handleChange = (value) => dispatch(filterChange(value));
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

export default Filter;
