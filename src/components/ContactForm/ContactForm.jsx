import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { FormBrn, StyledForm } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChangeValue = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      toast.info(`${name} is already in contacts!`, { theme: 'dark' });
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(data => {
        toast.success(`${data.name} is added to the contacts!`, {
          theme: 'dark',
        });
      })
      .catch(() => {
        toast.error('Server error', {
          theme: 'dark',
        });
      });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <h3>Name</h3>
      <input
        onChange={handleChangeValue}
        type="text"
        name="name"
        pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
        title="Name may contain only letters and a single space in between. For example Rosie Simpson"
        value={name}
        required
      />
      <h3>Number</h3>
      <input
        onChange={handleChangeValue}
        type="tel"
        name="number"
        pattern="^\d{3}(-?\d{2}){1,2}$"
        title="Phone number should contain seven digits. For example 123-45-67 or 1234567."
        value={number}
        required
      />
      <FormBrn type="submit">
        <img
          src="https://www.svgrepo.com/download/460217/add-user-4.svg"
          alt="add contact"
          width="30"
        />
      </FormBrn>
    </StyledForm>
  );
};
