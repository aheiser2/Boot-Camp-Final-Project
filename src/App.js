import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CreatorPage from "./Pages/CreatorPage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import SettingsPage from "./Pages/SettingsPage";
import SavedCharactersPage from "./Pages/SavedCharactersPage";

export default function App() {
  return (
    <Container fluid>
    <Router>
      <div>
        <Switch>
          <Route path="/creator">
            <CreatorPage />
          </Route>
          <Route path="/characters">
            <SavedCharactersPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </Container>
  );
}

