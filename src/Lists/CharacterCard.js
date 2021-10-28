import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function CharacterCard(props) {

    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <Card className="char-card" key={props.character.id}>
                <Card.Body>
                    <Card.Title className="char-card-t">{props.character.name}</Card.Title>
                    <Card.Subtitle className="char-card-st">{props.character.race}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <span className="l-g-i">Class: </span>{props.character.rpgClass}
                    </ListGroupItem>
                    <ListGroupItem> 
                        <span className="l-g-i">Level: </span>{props.character.level}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}
