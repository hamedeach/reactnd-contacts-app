import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput.js';
import serializeForm from "form-serialize";

class CreateContact extends Component {

    onSubmit=(e)=>
    {
        e.preventDefault();
        const values = serializeForm(e.target,{hash:true});
        //console.log(values);
        console.log(this.props);
        if(this.props.onCreateContact)
       this.props.onCreateContact(values);
    }

    render() {
        return (
            <div>
                <Link
                    className="close-create-contact"
                    to='/'
                >close
                </Link>
                <h1> Create a New Contact :</h1>
                <form onSubmit={this.onSubmit} className="create-contact-form">
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64} />
                    <div className="create-contact-details">
                        <input type='text' name="name" placeholder="Name" />
                        <input type='text' name="handle" placeholder="Handle" />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact;