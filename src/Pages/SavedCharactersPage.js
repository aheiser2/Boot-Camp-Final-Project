import React, { useState } from "react";
import Navigation from "../Components/Navbar.js";
import { TEST_CHARACTERS } from "../Data.js"
import CharacterCard from "../Lists/CharacterCard.js";


export default function SavedCharactersPage(props) {
    const [characters, setCharacters] = useState(TEST_CHARACTERS);
	return (
		<React.Fragment>
			<div className="saved-characters-page">
			<Navigation />
				<div className="container-fluid">
					<main className="container">
						<h1> Created Characters </h1>
						<div className="row">
							{characters.length > 0 ? (
								characters.map((character) => (
								<CharacterCard  character={character} key={character.id}/>
								))
							) : (
								<h2>No Characters</h2>
							)}
						</div>
			    	</main>
				</div>
			</div>
		</React.Fragment>
	);
}