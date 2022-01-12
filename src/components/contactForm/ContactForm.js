import React, { useEffect, useState } from "react";
import styles from "./ContactFormStyles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactsItemsSelector } from "../../redux/selector";
import { addNewContacts, getAllContacts } from "../../redux/operations";

const initialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);

  const { items } = useSelector((state) => {
    return {
      items: contactsItemsSelector(state),
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    const isDuplicate = items.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts ");
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    dispatch(addNewContacts(newContact));
  };

  const handleChange = (evt) => {
    setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleSubmit(state.name, state.number);
    setState({ name: "", number: "" });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.formInput}
          type="text"
          name="name"
          onChange={handleChange}
          value={state.name}
          placeholder="Enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.formInput}
          type="tel"
          name="number"
          onChange={handleChange}
          value={state.number}
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={styles.formButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
