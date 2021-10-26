import React from "react";
import Button from 'react-bootstrap/Button';
import {
	Link,
  } from 'react-router-dom';
import Navigation from "../Components/Navbar";

export default function HomePage() {
	return (
		<React.Fragment>
			<Navigation />
			<div className="main">
				<h1> What would you like to see? </h1>
				<Button variant="outline-secondary">
					<Link to="/characters">Characters</Link>
				</Button>
				<Button variant="outline-secondary">
					<Link to="/creator">Creator</Link>
				</Button>
				
			</div>
		</React.Fragment>
	);
}