import React, { useState, useEffect } from "react";

const EditCharacterForm = (props) => {
    const [character, setCharacter] = useState(props.currentCharacter)
    const [dropdown, setDropdown] = useState(props.currentCharacter)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCharacter({...character, [name]: value })
        setDropdown(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateCharacter(character.id, character)
    } 

    useEffect(() => {
        setCharacter(props.currentCharacter)
    }, [props])



    return (
        <form onSubmit={handleSubmit}>
            <div className="ms-5 me-5">
            <label>Name</label>
            <input type="text" 
                    name="name" 
                    value={character.name}
                    onChange={handleInputChange} />
            <label>Race</label>
            <input type="text" 
                    name= "race" 
                    value={character.race}
                    onChange={handleInputChange} />
            <label>Class</label>
            <input type="text" 
                    name="rpgClass" 
                    value={character.rpgClass}
                    onChange={handleInputChange} />
                    <label>Level</label>
            <select value={dropdown} name="level" onChange={handleInputChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option> 
            </select>
            <br></br>
            <div className="flex-container create-container">
            <button className="btn create-edit-button"><h4>Update Character</h4></button>
            <button className="btn cancel-button" onClick={() => props.setEditing(false)}><h4>Cancel</h4></button>
            </div>
            </div>
        </form>
    )
}

export default EditCharacterForm