import { React, useEffect } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/Actions/Actions";

const ContactList = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(state => state.contactReducer.listContacts);
  const load = useSelector(state => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);
  return (
    <div>
      <h1>List of Contacts</h1>
      {load ? <h2>loading...</h2>
       :listContacts.map(el =>( <ContactCard contact={el} key={el.id} />)
     )}
    </div>
  );
};
export default ContactList;
