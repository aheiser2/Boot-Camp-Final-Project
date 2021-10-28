import React from 'react';
import Button from 'react-bootstrap/Button';
import UserNameAndPassword from '../Other-Components/Username&Password';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function LoginForm() {
    return (
        <React.Fragment>
            <div className="container">
                <Card className="login-c w-50 position-absolute top-50 start-50 translate-middle">
                    <Card.Header className="login-c-head">
                        Fantasy Character Creator
                    </Card.Header>
                    <Card.Body className="login-c-body">
                        <UserNameAndPassword />                        
                    </Card.Body>
                    <Card.Footer className="login-c-foot">
                        <Button className="login-c-button">
                        <   Link className="login-c-button-text" to="/home">Log In</Link>
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </React.Fragment>
    )
    
}

