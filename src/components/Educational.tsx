/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'

function Educational( { schoolName = "University Federal of Parana", schoolStudy = "Bachelor of Science", schoolDate = "April 2012" } ) {

    // Creating the individual useState
    const [name, setName] = useState(schoolName);
    const [study, setStudy] = useState(schoolStudy);
    const [date, setDate] = useState(schoolDate);

    // Defining Edit Mode
    const [editMode, setEditMode] = useState(false);
    const handleEditInfo = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            <h1>Education</h1>
            <div className="cv-builder-input">
                <label>School Name: { ! editMode ? name : <input type="text" value={ name } placeholder="Insert the School Name" onChange={ (event) => setName(event.target.value) } /> }</label>
                <label>Study: { ! editMode ? study : <input type="text" value={ study } placeholder="Insert the Study" onChange={ (event) => setStudy(event.target.value) } /> }</label>
                <label>Date: { ! editMode ? date : <input type="text" value={ date } placeholder="Insert the Period of Study" onChange={ (event) => setDate(event.target.value) } /> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )

}

export default Educational