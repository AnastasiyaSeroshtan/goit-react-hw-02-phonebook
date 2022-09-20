import React from "react";
// import { nanoid } from 'nanoid';
import { Box } from "./Box";
import { Form } from "./Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";

export class App extends React.Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    })
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return (
      this.state.contacts.filter(contact => 
        contact.name.toLocaleLowerCase().includes(normalizedFilter))
    )
  };

 render() {
  const visibleContacts = this.getVisibleContacts();
  return (
    <Box bg="muted" pt={3} pb={3} border="normal" borderRadius="normal" width="30%" textAlign="center" margin="0 auto">
      <h2>Phonebook</h2>
      <Form onSubmit={this.addContact}/>
      <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </Box>
  );
 }
};
