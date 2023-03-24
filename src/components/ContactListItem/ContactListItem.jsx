import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';

export function ContactListItem({ name, number, id }) {
    const [removeContact, { isLoading }] = useDeleteContactMutation();
    return (
        <Item >{name}: {number}
            <Button
                onClick={() => {
                    removeContact(id)
                }}
                type='button'
                disabled={isLoading}
            >
                {!isLoading ? 'Delete' : 'Deleting...'}
            </Button>
        </Item>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

