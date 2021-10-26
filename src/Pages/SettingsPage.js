import React from "react";
import HomePage from "./HomePage";
import Navigation from "../Components/Navbar";
import NotFound from "./NotFoundPage"
import {
	Switch,
	Route
  } from 'react-router-dom';


export default function SettingsPage() {
    return (
        <React.Fragment>
			<Navigation />
			<div className="main">
				<Switch>
				<h1>Settings !!!!!</h1> 
					<Route path="home/*">
                        <NotFound />						
					</Route>
                    <Route exact path="home/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</React.Fragment>
    )
    
}