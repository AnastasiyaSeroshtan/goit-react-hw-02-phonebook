import React from "react";
// import { nanoid } from 'nanoid';
import { Box } from "./Box";
import { Form } from "./Form";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends React.Component{
  state = {
    contacts: [],
  }


  addContact = (newContact) => {
  
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts]
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => (
      {contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    ))
  };

 render() {
  return (
    <Box bg="muted" pt={3} pb={3} border="normal" borderRadius="normal" width="30%" textAlign="center" margin="0 auto">
      <h2>Phonebook</h2>
      <Form onSubmit={this.addContact}/>
      <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
    </Box>
  );
 }
};
