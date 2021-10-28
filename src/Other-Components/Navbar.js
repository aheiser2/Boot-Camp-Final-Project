import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function Navigation() {
   return (
    <Navbar id="navbar" expand="true" className="flex-md-nowrap">
      <Navbar.Brand  id="navbar-brand" as={NavLink} to="/home" className="ms-3">Character Creator</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/account" className="nav-link float-end me-3">Account</Nav.Link>
        </Nav>
    </Navbar>
   )
}