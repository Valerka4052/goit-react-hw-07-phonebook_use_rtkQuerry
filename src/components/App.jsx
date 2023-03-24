import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Loader } from "./Loader/Loader";
import { useGetContactsQuery } from "redux/contactSlice";

export function App() {
  const { error, isLoading } = useGetContactsQuery();
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {error ? <h1>{error.message}</h1> :
          <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
        </div>
         } 
        <ContactList />
        {isLoading && <Loader />}
      </div>
    </div>
  );
};
