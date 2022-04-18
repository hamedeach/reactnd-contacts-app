import React, { Component } from 'react';
import ListOfContacts from './ListOfContacts';

class App extends Component {
  //add the contacts array into state property 
  state ={
    contacts : [
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

  render() {
    return (
      <div>
        <h1>Contatcts App</h1>
      <ListOfContacts contactsList={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
