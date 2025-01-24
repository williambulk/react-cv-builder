import { useState } from 'react'

function Educational( { schoolName, schoolStudy, schoolGraduation } ) {

    const [education, setEducation] = useState({
        name: schoolName,
        study: schoolStudy,
        graduation: schoolGraduation
    })

    // Defining Edit Mode
    const [editMode, setEditMode] = useState(false);

    const handleEditInfo = () => {
        setEditMode(!editMode);
    }

    const handleInputChange = (field, value) => {
        setEducation(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    return (
        <>
            <h1>Education</h1>
            <div className="cv-builder-input">
                <label>School Name: { ! editMode ? education.name : <input type="text" value={ education.name } placeholder="Insert the School Name" onChange={ (event) => handleInputChange('name', event.target.value) } /> }</label>
                <label>Study: { ! editMode ? education.study : <input type="text" value={ education.study } placeholder="Insert the Study" onChange={ (event) => handleInputChange('study', event.target.value) } /> }</label>
                <label>Date: { ! editMode ? education.graduation : <input type="text" value={ education.graduation } placeholder="Insert the Period of Study" onChange={ (event) => handleInputChange('graduation', event.target.value) } /> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )

}

Educational.defaultProps = {
    schoolName: "University Federal of Parana",
    schoolStudy: "Bachelor of Science",
    schoolGraduation: "April 2012"
}

export default Educational