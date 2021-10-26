import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function CharacterCard(props) {

    return (
        <div className="col-md-6 col-xl-3 mb-4">
            <Card key={props.character.id}>
                <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
                    <Card.Subtitle className="text-muted">{props.character.race}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <span className="text-muted">Class: </span>{props.character.rpgClass}
                    </ListGroupItem>
                    <ListGroupItem> 
                        <span className="text-muted">Level: </span>{props.character.level}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}



// return (
//     <div className="col-md-6 col-xl-3 mb-4">
//         <div className="card" key={props.character.id}>
//             <div className="card-body">
//             <h5 className="card-title">{props.character.name}</h5>
//                 <h6 className="card-subtitle text-muted">{props.character.race}</h6>
//             </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                     <span className="text-muted">Class: </span>{props.character.rpgClass}
//                 </li>
//                 <li className="list-group-item"> 
//                     <span className="text-muted">Level: </span>{props.character.level}
//                 </li>
//             </ul>
//         </div>
//     </div>
// )