import React, { useState } from 'react';
import Navigation from '../Components/Navbar';
import { TEST_CHARACTERS } from '../Data.js';
import EditCharacterForm from '../Forms/EditCharacterForm';
import AddCharacterForm from '../Forms/AddCharacterForm';
import CharacterList from '../Lists/CharacterList';



const CreatorPage= () => {
  const charactersData = TEST_CHARACTERS

  const [characters, setCharacters] = useState(charactersData)
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: "", race: "", rpgClass: "", level: "1"}
  const [currentCharacter, setCurrentCharacter] = useState(initialFormState)

  const addCharacter = (character) => {
    character.id = characters.length + 1
    setCharacters([...characters, character])
    characters.push(character)
  }

  const editCharacter = (character) => {
    setEditing(true)
    setCurrentCharacter({ id: character.id, name: character.name, race: character.race, rpgClass: character.rpgClass })
  }

  const updateCharacter = (id, updateCharacter) => {
    setEditing(false)
    setCharacters(characters.map((character) => (character.id === id ? updateCharacter : character)))
  }

  const deleteCharacter = (id) => {
    setEditing(false)
    setCharacters(characters.filter((character) => character.id !== id));
  }


  return (
    <React.Fragment>
      <div className="creator-page">
		  <Navigation />     
        <div className="container-fluid">
          <div className="flex-row">
            <div className="flex-large">
              {editing ? (
                <div>
                  <h2>Edit A Character</h2>
                    <EditCharacterForm
                      editing={editing}
                      setEditing={setEditing}
                      currentCharacter={currentCharacter}
                      updateCharacter={updateCharacter}
                    />
                </div>
              )  :  (
                <div>
                  <h2>Create A Character</h2>
                    <AddCharacterForm addCharacter={addCharacter} />
                </div>
              )}
            </div>
            <div className="flex-large">
              <h2>View Characters</h2>
              <CharacterList characters={characters} editCharacter={editCharacter} deleteCharacter={deleteCharacter}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreatorPage;