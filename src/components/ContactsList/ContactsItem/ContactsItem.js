export const ContactsItem = ({name, number, id, onDeleteContact}) => {
    return(
        <li>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
    )
};