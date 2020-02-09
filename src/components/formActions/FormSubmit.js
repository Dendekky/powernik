import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function FormSubmit (props) {

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
                min='00:00'
                max='09:00'
                value= {props.data.monday}
                onChange={props.onChange}
                required />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTues">
                <Form.Label>Tuesday</Form.Label>
                <Form.Control type="time" 
                name= "tuesday"
                min='00:00'
                max='09:00'
                value= {props.data.tuesday}
                onChange={props.onChange}
                required 
                />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridWed">
                <Form.Label>Wednesday</Form.Label>
                <Form.Control type="time" 
                name= "wednesday"
                min='00:00'
                max='09:00'
                value= {props.data.wednesday}
                onChange={props.onChange}
                required 
                />                  
                </Form.Group>
                <Form.Group as={Col} controlId="formGridThur">
                <Form.Label>Thursday</Form.Label>
                <Form.Control type="time" 
                name= "thursday"
                min='00:00'
                max='09:00'
                value= {props.data.thursday}
                onChange={props.onChange}
                required 
                />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFri">
                <Form.Label>Friday</Form.Label>
                <Form.Control type="time" 
                name= "friday"
                min='00:00'
                max='09:00'
                value= {props.data.friday}
                onChange={props.onChange}
                required 
                />               
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Generate Report
            </Button>
            </Form>
        </div>
    )
}

