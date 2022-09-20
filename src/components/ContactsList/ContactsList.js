import { Box } from "../Box";

export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <Box as="ul">
            {contacts.map(({id, name, number}) => (
                <li key={id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </Box>
    )
}