import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import {
  CallBtn,
  CardContact,
  CardsContacts,
  DeleteBtn,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <CardsContacts>
      {contactsFilter.map(contact => (
        <CardContact key={contact.id}>
          <CallBtn href="tel: {contact.number}">
            <img
              src="https://www.svgrepo.com/download/317914/contact-phone-2.svg"
              alt="call contact"
              width="30"
            />
          </CallBtn>
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <img
              src="https://www.svgrepo.com/download/410021/delete.svg"
              alt="delete"
              width="20"
            />
          </DeleteBtn>
          {contact.name}: {contact.number}
        </CardContact>
      ))}
    </CardsContacts>
  );
};
