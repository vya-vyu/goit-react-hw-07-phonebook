import FilterContacts from './FilterContacts/FilterContacts';

import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
        // justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Form />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactsList />
    </div>
  );
};
