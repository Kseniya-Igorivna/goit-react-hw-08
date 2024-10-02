import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
}
