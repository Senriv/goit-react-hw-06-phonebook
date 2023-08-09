import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { FormEl, FormLable, FormInput, FormBtn } from './Form.styled';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onAddedContact = data => {
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    onAddedContact(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <FormLable>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLable>
      <FormLable>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </FormLable>
      <FormBtn type="submit">Add contact</FormBtn>
    </FormEl>
  );
};

export default Form;
