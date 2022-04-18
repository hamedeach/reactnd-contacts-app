import React from "react";

// stateless function component instead of the class component 
function ListOfContacts(props){
    let lstOfContacts = props['contactsList'];
    console.log(lstOfContacts);
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
                        <button className="contact-remove">remove</button>
                    </li>

                ))


            }
        </ol>
    )    
}


export default ListOfContacts;