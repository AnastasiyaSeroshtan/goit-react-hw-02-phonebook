import { nanoid } from 'nanoid';
import React from "react";
import { Box } from "./Box";

export class Form extends React.Component{
    state = {
        name: ''
      }
    
      handleChange = (e) => {
        this.setState({
          name: e.currentTarget.value,
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        const newContact = {
          id: nanoid(),
          name: e.currentTarget.name.value,
        };
        this.props.onSubmit(newContact);
        this.setState({name:'',});
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
              <button type="submit">Add contact</button>
            </form>
          </Box>
        );
       }
};