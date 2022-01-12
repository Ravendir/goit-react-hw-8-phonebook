import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";
import styles from "./PagesStyle.module.css";

const ContactsPage = () => {
  return (
    <div>
      <h1 className={styles.contactPageHeading}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contactPageHeading}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
