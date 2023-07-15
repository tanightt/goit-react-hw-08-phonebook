import { ContactForm, ContactList, Filter } from 'components';
import { Card } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Card>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Card>
  );
};
