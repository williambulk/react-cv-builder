import { useState } from 'react';

function Professional({ positionName, companyName, dateFrom, dateUntil, jobDescription }) {

    const [professional, setProfessional] = useState({
        position: positionName,
        company: companyName,
        from: dateFrom,
        until: dateUntil,
        description: jobDescription
    })

    const [editMode, setEditMode] = useState(false);
    const handleEditInfo = () => {
        setEditMode(!editMode);
    };

    const handleInputChange = (field, value) => {
        setProfessional( prevState => ({
            ...prevState,
            [field]: value
        }));
    }
    
    return (
        <>
            <h1>Professional</h1>
            <div className="cv-builder-input">
                <label>Position: { ! editMode ? professional.position : <input type="text" value={ professional.position } placeholder="Insert the Position..." onChange={ (event) => handleInputChange('position', event.target.value) } /> }</label>
                <label>Company Name: { ! editMode ? professional.company : <input type="text" value={ professional.company } placeholder="Insert the Company Name..." onChange={ (event) => handleInputChange('company', event.target.value) } /> }</label>
                <label>Date From: { ! editMode ? professional.from : <input type="text" value={ professional.from } placeholder="Start date..." onChange={ (event) => handleInputChange('from', event.target.value) } /> }</label>
                <label>Date Until: { ! editMode ? professional.until : <input type="text" value={ professional.until } placeholder="End date..." onChange={ (event) => handleInputChange('until', event.target.value) } /> }</label>
                <label>Job Description: { ! editMode ? professional.description : <textarea value={ professional.description } placeholder="Insert the job description..." onChange={ (event) => handleInputChange('description', event.target.value) }></textarea> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )
}

Professional.defaultProps = {
    positionName: "Developer",
    companyName: "Apple",
    dateFrom: "January 2020",
    dateUntil: "March 2023",
    jobDescription: "Lorem ipsum door sit amet, consectetur adipiscing elit."
}

export default Professional