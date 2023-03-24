import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from "redux/contactSlice";


export function ContactList() {
    const { data } = useGetContactsQuery();
    const filter = useSelector(state => state.filter);
    const normalizedFilter = filter.toLowerCase();
    if (!data) return;
    const filteredContacts = data.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });

    return (
        data.length > 0 &&
        <List>
            {filteredContacts.map(({ name, phone, id }) => {
                return <ContactListItem
                    key={id}
                    name={name}
                    number={phone}
                    id={id}
                />
            }
            )}
        </List>
    );
};
