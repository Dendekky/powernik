import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function FormEdit (props) {

    return (
        <div>
            <Form 
            onSubmit={props.onSubmit}>
            <Form.Row>
                <Form.Group controlId="formGridName">
                <Form.Label>Employee</Form.Label>
                <Form.Control type="text" 
                placeholder="Employee" 
                name= "name"
                value= {props.data.name}
                onChange={props.onChange}
                required/>            
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMon">
                <Form.Label>Monday</Form.Label>
                <Form.Control type="time" 
                name= "monday"
                value= {props.data.monday}
                onChange={props.onChange}
                required />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTues">
                <Form.Label>Tuesday</Form.Label>
                <Form.Control type="time" 
                name= "tuesday"
                value= {props.data.tuesday}
                onChange={props.onChange}
                required 
                />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridWed">
                <Form.Label>Wednesday</Form.Label>
                <Form.Control type="time" 
                name= "wednesday"
                value= {props.data.wednesday}
                onChange={props.onChange}
                required 
                />                  
                </Form.Group>
                <Form.Group as={Col} controlId="formGridThur">
                <Form.Label>Thursday</Form.Label>
                <Form.Control type="time" 
                name= "thursday"
                value= {props.data.thursday}
                onChange={props.onChange}
                required 
                />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFri">
                <Form.Label>Friday</Form.Label>
                <Form.Control type="time" 
                name= "friday"
                value= {props.data.friday}
                onChange={props.onChange}
                required 
                />               
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

