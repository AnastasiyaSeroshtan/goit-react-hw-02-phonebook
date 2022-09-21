import { nanoid } from 'nanoid';
import React from "react";
import { Box } from "../Box";

export class Form extends React.Component{
    state = {
        name: '',
        number: '',
      }
    
      handleChange = (e) => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value,
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const newContact = {
          id: nanoid(),
          name: e.currentTarget.name.value,
          number: e.currentTarget.number.value,
        };
        this.props.onSubmit(newContact);
        this.setState({name:'', number:''});
      };

      render() {
        return (
          <Box bg="muted" pt={3} pb={3} border="normal" borderRadius="normal" textAlign="center" margin="0 auto">
            {/* <h2>Phonebook</h2> */}
            <form onSubmit={this.handleSubmit}>
              <label>
                Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleChange}
      />
              </label>
              <label>
                Number
              <input
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                value={this.state.number}
                onChange={this.handleChange}
      />
              </label>
              <button type="submit">Add contact</button>
            </form>
          </Box>
        );
       }
};