/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'

function Educational( { schoolName = "University Federal of Parana", schoolStudy = "Bachelor of Science", schoolDate = "April 2012" } ) {

    const defaultValues = {
        schoolName: schoolName,
        schoolStudy: schoolStudy,
        schoolDate: schoolDate
    };

    const [editMode, setEditMode] = useState(true);
    const handleEditInfo = () => {
        setEditMode(!editMode);
    }

    const [value, setValue] = useState("");

    return (
        <>
            <h1>Education</h1>
            <p>School Name: { defaultValues.schoolName }</p>
            <p>Study: { defaultValues.schoolStudy }</p>
            <p>Date: { defaultValues.schoolDate }</p>

            <button onClick={ handleEditInfo }>Edit Info</button>
            { editMode &&
            <>
                <input type="text" value="{ value }" placeholder="Insert the School Name" onChange={ (e) => setValue(e.target.value) } />
                <input type="text" value="{ value }" placeholder="Insert the Study" onChange={ (e) => setValue(e.target.value) } />
                <input type="text" value="{ value }" placeholder="Insert the Period of Study" onChange={ (e) => setValue(e.target.value) } />
            </>
            }
        </>
    )

}

export default Educational