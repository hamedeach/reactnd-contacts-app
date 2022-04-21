import React from "react";
import propTypes from "prop-types";

// stateless function component instead of the class component 
function ListOfContacts(props){
    let lstOfContacts = props['contactsList'];
   // console.log(lstOfContacts);
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
                            props.onDeleteContact(person)))}>remove</button>
                    </li>

                ))


            }
        </ol>
    )    
}

//use the proptypes to specify the props type will the component use

ListOfContacts.propTypes = {
    contactsList : propTypes.array.isRequired,
    onDeleteContact :propTypes.func.isRequired,
    

}


export default ListOfContacts;