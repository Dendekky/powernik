import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function DisabledForm (props) {

    return (
        <div>
            <Form.Row>
            <Form.Group controlId="formGridCity">
            <Form.Label>Name</Form.Label>
            <Form.Control
            value= {props.data.name}
            disabled/>            
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Monday</Form.Label>
            <Form.Control
            value= {props.data.monday}
            disabled />                
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTues">
            <Form.Label>Tuesday</Form.Label>
            <Form.Control 
            value= {props.data.tuesday}
            disabled 
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Wednesday</Form.Label>
            <Form.Control
            value= {props.data.wednesday}
            disabled/>            
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Thursday</Form.Label>
            <Form.Control
            value= {props.data.thursday}
            disabled />                
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTues">
            <Form.Label>Friday</Form.Label>
            <Form.Control 
            value= {props.data.friday}
            disabled 
            />
            </Form.Group>
            </Form.Row>
        </div>
    )
}

