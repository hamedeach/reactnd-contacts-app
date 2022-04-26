import React, { Component } from 'react';
import ListOfContacts from './ListOfContacts';
import * as ContactAPI from './utils/ContactsAPI.js';
import CreateContact from './createcontact';
import {Route} from 'react-router-dom';

class App extends Component {
  //add the contacts array into state property 
  state = {
    contacts: [],
    screen : 'list'
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

  onCreateContact=(contact)=>{
    ContactAPI.create(contact);
    this.setState((currentState)=>({
      contacts: currentState.contacts.concat([contact])

    }))

  }

 

  render() {
    return (
      <div>
        <h1>Contatcts App</h1>
        <Route exact path='/' render={()=>(
           <ListOfContacts contactsList={this.state.contacts} onDeleteContact ={this.removeContact} onNavigate={this.onNavigate}/>
        )}
        />
       
        <Route path='/create' render={({history})=>(
          <CreateContact onCreateContact={(contact)=>{
            this.onCreateContact(contact);
            history.push('/');
          }}/>
        )}/>
        
        
        
      </div>
    );
  }
}

export default App;
