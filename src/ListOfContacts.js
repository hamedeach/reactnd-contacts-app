import React,{Component} from "react";
import propTypes from "prop-types";

//  use the class component instead of stateless function component to use state management feature of the react to handler the search feature
class ListOfContacts extends Component{
    // proptypes shall be static 
    static propTypes={
        contactsList : propTypes.array.isRequired,
        onDeleteContact :propTypes.func.isRequired,
    }


    // the render method
    render(){
        const lstOfContacts = this.props.contactsList;
        return(
            <ol className="contact-list">
                {
                    lstOfContacts.map((person)=>(
                        <li key={person.id} className="contact-list-item">
    
                            
                            <div className="contact-avatar" style={{
                                backgroundImage : `url(${person.avatarURL})`
    
                            }}>
                            </div>
                            
                            <div className="contact-details">
                                <p>{person.name}</p>
                                <p>{person.handle}</p>
    
                            </div>
                            <button className="contact-remove"   onClick={()=>(
                                (console.log('iam in remove contact'),
                                this.props.onDeleteContact(person)))}>remove</button>
                        </li>
    
                    ))
    
    
                }
            </ol>
        )    

    }



}





export default ListOfContacts;