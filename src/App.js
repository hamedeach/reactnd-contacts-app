import React, { Component } from 'react';
import ListOfContacts from './ListOfContacts';
import * as ContactAPI from './utils/ContactsAPI.js';

class App extends Component {
  //add the contacts array into state property 
  state = {
    contacts: [],
  }

  componentDidMount(){
    ContactAPI.getAll().then((apicontacts)=>{
      this.setState(()=>({contacts:apicontacts}))
    })
  }

  removeContact = (contact)=>{
    ContactAPI.remove(contact);
    this.setState((currentState)=>({
      contacts :  currentState.contacts.filter((c)=>{return c.id !== contact.id})
    }))
  }

 

  render() {
    return (
      <div>
        <h1>Contatcts App</h1>
        <ListOfContacts contactsList={this.state.contacts} onDeleteContact ={this.removeContact} />
      </div>
    );
  }
}

export default App;
