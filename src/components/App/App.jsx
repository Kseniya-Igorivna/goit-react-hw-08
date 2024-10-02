import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Notification from "../Notification/Notification";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <Notification message={error} />}
      {!loading && !error && <ContactList />}
    </div>
  );
}
