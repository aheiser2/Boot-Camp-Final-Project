import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from 'react-router-dom';
import Navigation from "../Other-Components/Navbar";

export default function HomePage() {
	return (
		<React.Fragment>
			<div className="home-page">
				<Navigation />
				<h1> What would you like to do? </h1>
				<div className="container home-buttons">
					<ButtonGroup >
						<Button className="create-button">
							<Link to="/creator"><h4>Create a Character</h4></Link>
						</Button>
						<Button className="characters-button">
							<Link to="/characters"><h4>View All Characters</h4></Link>
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</React.Fragment>
	);
}