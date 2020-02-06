import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const Landing = () => {
    const [employeeData] = useState([]);

    // useEffect(() => {
    //     employeeData.push(item);
    //     // console.log(`Component mounted`)
    //   }, [])
    const inputInfo = {
        name: '', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''
    }


    const [item, setItem] = useState(inputInfo);
    const [two, setTwo] = useState(inputInfo);
    
    const [error, setError] = useState(false);
    const [twoError, setTwoError] = useState(false);


    const onChange = (event) => {
        event.persist();
        setItem({ ...item, [event.target.name]: event.target.value });
    };

    const twoChange = (event) => {
        event.persist();
        setTwo({ ...two, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        employeeData.push(item);
        console.log(employeeData);
        setError(true)
    }
    const twoSubmit = async (event) => {
        event.preventDefault();
        employeeData.push(two);
        console.log(employeeData);
        setError(false)
        setTwoError(true)
    }

    if (error) {
        return (
            <div>
            <div>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name</Form.Label>
                <Form.Control
                value= {item.name}
                disabled/>            
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Monday</Form.Label>
                <Form.Control
                value= {item.monday}
                disabled />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTues">
                <Form.Label>Tuesday</Form.Label>
                <Form.Control 
                value= {item.tuesday}
                disabled 
                />                
                </Form.Group>
                </Form.Row>
            </div>
            <div>
            {/* <form 
            onSubmit={twoSubmit}
            className="add-new-post">
                <input 
                name= "name"
                value= {two.name}
                onChange={twoChange}
                size="lg" 
                required
                className="mb-3"
                placeholder="name" />
                <input 
                name= "monday"
                value= {two.monday}
                onChange={twoChange}
                size="lg" 
                required
                className="mb-3"
                placeholder="time" />
                <input className="button" type="submit" value="submit"/><br/>
            </form> */}
            <Form 
            onSubmit={twoSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" 
                placeholder="Employee" 
                name= "name"
                value= {two.name}
                onChange={twoChange}
                required/>            
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMon">
                <Form.Label>Monday</Form.Label>
                <Form.Control type="time" 
                name= "monday"
                value= {two.monday}
                onChange={twoChange}
                required />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTues">
                <Form.Label>Tuesday</Form.Label>
                <Form.Control type="time" 
                name= "tuesday"
                value= {two.tuesday}
                onChange={twoChange}
                required 
                />                
                </Form.Group>
                {/* <Form.Group as={Col} controlId="formGridWed">
                <Form.Label>Wednesday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridThur">
                <Form.Label>Thursday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFri">
                <Form.Label>Friday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group> */}
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
            </div>
        )
    }
    if (twoError) {
        return <Redirect to={{
            pathname: '/report',
            state: {
              report: employeeData 
            }
        }} />
    }
    return (
        <div>
            <Form 
            onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" 
                placeholder="Employee" 
                name= "name"
                value= {item.name}
                onChange={onChange}
                required/>            
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMon">
                <Form.Label>Monday</Form.Label>
                <Form.Control type="time" 
                name= "monday"
                value= {item.monday}
                onChange={onChange}
                required />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTues">
                <Form.Label>Tuesday</Form.Label>
                <Form.Control type="time" 
                name= "tuesday"
                value= {item.tuesday}
                onChange={onChange}
                required 
                />                
                </Form.Group>
                {/* <Form.Group as={Col} controlId="formGridWed">
                <Form.Label>Wednesday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridThur">
                <Form.Label>Thursday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFri">
                <Form.Label>Friday</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />                
                </Form.Group> */}
            </Form.Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
}

export default Landing;