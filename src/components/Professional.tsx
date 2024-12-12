/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

function Professional({ positionName = "Developer", companyName = "Apple", dateFrom = "January 2020", dateUntil = "March 2023", jobDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }) {
    const [position, setPosition] = useState(positionName);
    const [company, setCompanyName] = useState(companyName);
    const [from, setDateFrom] = useState(dateFrom);
    const [until, setDateUntil] = useState(dateUntil);
    const [description, setJobDescription] = useState(jobDescription);

    const [editMode, setEditMode] = useState(false);
    const handleEditInfo = () => {
        setEditMode(!editMode);
    };
    
    return (
        <>
            <h1>Professional</h1>
            <div className="cv-builder-input">
                <label>Position: { ! editMode ? position : <input type="text" value={ positionName } placeholder="Insert the Position..." onChange={ (event) => setPosition(event.target.value) } /> }</label>
                <label>Company Name: { ! editMode ? company : <input type="text" value={ companyName } placeholder="Insert the Company Name..." onChange={ (event) => setCompanyName(event.target.value) } /> }</label>
                <label>Date From: { ! editMode ? from : <input type="text" value={ dateFrom } placeholder="Start date..." onChange={ (event) => setDateFrom(event.target.value) } /> }</label>
                <label>Date Until: { ! editMode ? until : <input type="text" value={ dateUntil } placeholder="End date..." onChange={ (event) => setDateUntil(event.target.value) } /> }</label>
                <label>Job Description: { ! editMode ? description : <textarea value={ jobDescription } placeholder="Insert the job description..." onChange={ (event) => setJobDescription(event.target.value) }></textarea> }</label>
            </div>
            <button onClick={ handleEditInfo }>{ editMode ? "Save Info" : "Edit Info" }</button>
        </>
    )
}

export default Professional