import { styled } from 'styled-components';
import { ContactForm, ContactList, Filter } from 'components';

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

const Card = styled.div`
  margin-left: 20px;
`;
