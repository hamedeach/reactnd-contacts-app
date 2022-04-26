import React, { Component } from "react";
import propTypes from "prop-types";

//  use the class component instead of stateless function component to use state management feature of the react to handler the search feature
class ListOfContacts extends Component {
    // proptypes shall be static 
    static propTypes = {
        contactsList: propTypes.array.isRequired,
        onDeleteContact: propTypes.func.isRequired,
    }

    state = {
        query: '',

    }

    searchfunc(query) {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery(){
        this.searchfunc('');
    }


    // the render method
    render() {
        const query = this.state.query;
        const lstOfContacts = this.props.contactsList;
        const onDeleteContact = this.props.onDeleteContact;


        const showingContacts = query === '' ? (lstOfContacts) : (
            lstOfContacts.filter((person) => { person.name.toLowerCase().includes(query.toLocaleLowerCase()) })

        )

        return (
            <div className="list-contacts">
                {
                    // shows the query change (object state)
                    //JSON.stringify(this.state)}
                }
                <div className="'list-contacts-top">
                    <input
                        className="search-contacts"
                        type='text'
                        placeholder="Search..."
                        value={this.state.query}
                        onChange={(event) => this.searchfunc(event.target.value)}   >

                    </input>
                    {
                        // && guard up operator
                        showingContacts.length !== lstOfContacts.length && (
                            <div className="showing-contacts">
                                <span >Now showing {showingContacts.length} of {lstOfContacts.length}</span>
                                <button onClick={(event)=> this.clearQuery()}>show All</button>
                            </div>

                        )
                    }



                </div>
                <ol className="contact-list">
                    {
                        showingContacts.map((person) => (
                            <li key={person.id} className="contact-list-item">


                                <div className="contact-avatar" style={{
                                    backgroundImage: `url(${person.avatarURL})`

                                }}>
                                </div>

                                <div className="contact-details">
                                    <p>{person.name}</p>
                                    <p>{person.handle}</p>

                                </div>
                                <button className="contact-remove" onClick={() => (
                                    (console.log('iam in remove contact'),
                                        onDeleteContact(person)))}>remove</button>
                            </li>

                        ))


                    }
                </ol>

            </div>

        )

    }



}





export default ListOfContacts;