import React from 'react';
import { Notification } from '../Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import {
  Contacts,
  Contact,
  ContactName,
  ContactBtnDelete,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.contacts.filterValue);

  const onContactRemoving = id => {
    dispatch(removeContact(id));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filterContacts = filteredContacts();

  return contacts.length > 0 ? (
    <Contacts>
      {filterContacts.map(contact => (
        <Contact key={contact.id}>
          <ContactName>{contact.name}:</ContactName>
          <p>{contact.number}</p>
          <ContactBtnDelete onClick={() => onContactRemoving(contact.id)}>
            Delete
          </ContactBtnDelete>
        </Contact>
      ))}
    </Contacts>
  ) : (
    <Notification message="There is no contacts"></Notification>
  );
}

export default ContactList;
