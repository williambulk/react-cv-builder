import { useState } from 'react'

function General( { generalName, generalEmail, generalPhone } ) {

    const [general, setGeneral] = useState({
       name: generalName,
       email: generalEmail,
       phone: generalPhone 
    });

    const [editMode, setEditMode] = useState(false);

    const handleEditInfo= () => {
        setEditMode(!editMode);
    }

    const handleInputChange = (field, value) => {
        setGeneral( prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    return (
        <>
            <h1>General</h1>
            <div className="cv-builder-input">
                 <label>Name: { ! editMode ? general.name : <input type='text' value={ general.name } onChange={ (event) => handleInputChange('name', event.target.value) } /> }</label>
                 <label>Email: { ! editMode ? general.email : <input type='text' value={ general.email } onChange={ (event) => handleInputChange('email', event.target.value) } /> }</label>
                 <label>Phone: {!  editMode ? general.phone : <input type='text' value={ general.phone } onChange={ (event) => handleInputChange('phone', event.target.value) } /> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )

}

General.defaultProps = {
    generalName: "Your Name",
    generalEmail: "your@email.com",
    generalPhone: "(555) 555-5555"
}

export default General