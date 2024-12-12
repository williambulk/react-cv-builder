/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'

function General( { generalName = "Your Name", generalEmail = "your@email.com", generalPhone = "(555) 555-5555" } ) {

    const [name, setName] = useState(generalName);
    const [email, setEmail] = useState(generalEmail);
    const [phone, setPhone] = useState(generalPhone);

    const [editMode, setEditMode] = useState(false);
    const handleEditInfo = () => {
        setEditMode(!editMode);
    };

    return (
        <>
            <h1>General</h1>
            <div className="cv-builder-input">
                 <label>Name: { ! editMode ? name : <input type='text' value={ name } onChange={ (event) => setName(event.target.value) } /> }</label>
                 <label>Email: { ! editMode ? email : <input type='text' value={ email } onChange={ (event) => setEmail(event.target.value) } /> }</label>
                 <label>Phone: {!  editMode ? phone : <input type='text' value={ phone } onChange={ (event) => setPhone(event.target.value) } /> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )

}

export default General