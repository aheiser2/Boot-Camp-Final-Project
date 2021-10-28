import React from "react";

const CharacterList = (props) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Race</th>
                <th>Class</th>
                <th>Level</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.characters.length > 0 ? (
                props.characters.map((character) => (
                    <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.race}</td>
                        <td>{character.rpgClass}</td>
                        <td>{character.level}</td>
                        <td>
                            <button className="button" onClick={()=> props.editCharacter(character)}>Edit</button>
                            <button className="button" onClick={()=> props.deleteCharacter(character.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No Characters</td>
                    </tr>
            )}
        </tbody>
    </table>
)

export default CharacterList