import React from "react";


class ListOfContacts extends React.Component{
    render(){
       
        let lstOfContacts = this.props['contactsList'];
        console.log(lstOfContacts);
        return(
            <ol className="contact-list">
                {
                    lstOfContacts.map((person)=>(
                        <li key={person.name}>
                            {person.name}
                        </li>

                    ))


                }
            </ol>
        )
    }

}

export default ListOfContacts;