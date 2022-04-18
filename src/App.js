import React, { Component } from 'react';
import ListOfContacts from './ListOfContacts';

class App extends Component {
  //add the contacts array into state property 
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }

  removeContact = (contact)=>{
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
