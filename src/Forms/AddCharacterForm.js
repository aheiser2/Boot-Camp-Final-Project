import React, { useState } from 'react';

const AddCharacterForm = (props) => {
    const initialFormState = { id: null, name: "", race: "", rpgClass: "", level: ""}
    const [character, setCharacter] = useState(initialFormState)
    const [dropdown, setDropdown] = useState("1")

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCharacter({...character, [name]: value })
        setDropdown(event.target.value)
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!character.name || !character.race || !character.rpgClass || !character.level) return
        props.addCharacter(character)
        setCharacter(initialFormState)
    } 

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
                            name="race" 
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
            </div>
            <div className="flex-container create-container">
                <button className="btn create-edit-button"><h4>Add a new character</h4></button>
            </div>
        </form>
    )
}

export default AddCharacterForm