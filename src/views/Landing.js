import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import FormEdit from '../components/FormEdit';
import DisabledForm from '../components/DisabledForm';


const Landing = () => {
    const [employeeData] = useState([]);

    const inputInfo = {
        name: '', monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''
    }


    const [one, setOne] = useState(inputInfo);
    const [two, setTwo] = useState(inputInfo);
    const [three, setThree] = useState(inputInfo);
    const [four, setFour] = useState(inputInfo);
    const [five, setFive] = useState(inputInfo);
    const [six, setSix] = useState(inputInfo);    
    const [seven, setSeven] = useState(inputInfo);
    const [eight, setEight] = useState(inputInfo);
    const [nine, setNine] = useState(inputInfo);
    const [ten, setTen] = useState(inputInfo);

    
    const [formOne, setFormOne] = useState(false);
    const [formTwo, setFormTwo] = useState(false);
    const [formThree, setFormThree] = useState(false);
    const [formFour, setFormFour] = useState(false);
    const [formFive, setFormFive] = useState(false);
    const [formSix, setFormSix] = useState(false);
    const [formSeven, setFormSeven] = useState(false);
    const [formEight, setFormEight] = useState(false);
    const [formNine, setFormNine] = useState(false);
    const [formTen, setFormTen] = useState(false);


    const handleChange = (e, setItem, item) => {
        e.persist();
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    const oneChange = (event) => {
        handleChange(event, setOne, one)
    };
    const twoChange = (event) => {
        handleChange(event, setTwo, two)
    };
    const threeChange = (event) => {
        handleChange(event, setThree, three)
    };
    const fourChange =(event) => {
        handleChange(event, setFour, four)
    };
    const fiveChange =(event) => {
        handleChange(event, setFive, five)
    };
    const sixChange =(event) => {
        handleChange(event, setSix, six)
    };
    const sevenChange =(event) => {
        handleChange(event, setSeven, seven)
    };
    const eightChange =(event) => {
        handleChange(event, setEight, eight)
    };
    const nineChange =(event) => {
        handleChange(event, setNine, nine)
    };
    const tenChange =(event) => {
        handleChange(event, setTen, ten)
    };

    const submitForm = async (e, data) => {
        e.preventDefault();
        employeeData.push(data);
        console.log(employeeData);
    }

    function setForm(...args) {
        args.forEach( arg => arg(false))
    }

    const formOneSubmit = async (event) => {
        submitForm(event, one);
        setFormOne(true);
    }
    const formTwoSubmit = async (event) => {
        submitForm(event, two);
        setForm(setFormOne);
        setFormTwo(true);
    }
    const formThreeSubmit = async (event) => {
        submitForm(event, three);
        setForm(setFormOne, setFormTwo);
        setFormThree(true);
    }
    const formFourSubmit = async (event) => {
        submitForm(event, four);
        setForm(setFormOne, setFormTwo, setFormThree);
        setFormFour(true);
    }
    const formFiveSubmit = async (event) => {
        submitForm(event, five);
        setForm(setFormOne, setFormTwo, setFormThree, setFormFour);
        setFormFive(true);
    }
    const formSixSubmit = async (event) => {
        submitForm(event, six);
        setForm(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive);
        setFormSix(true);
    }
    const formSevenSubmit = async (event) => {
        submitForm(event, seven);
        setForm(
            setFormOne, setFormTwo, setFormThree, 
            setFormFour, setFormFive, setFormSix);
        setFormSeven(true);
    }
    const formEightSubmit = async (event) => {
        submitForm(event, eight);
        setForm(
            setFormOne, setFormTwo, setFormThree, setFormFour, 
            setFormFive, setFormSix, setFormSeven);
        setFormEight(true);
    }
    const formNineSubmit = async (event) => {
        submitForm(event, nine);
        setForm(
            setFormOne, setFormTwo, setFormThree, setFormFour, 
            setFormFive, setFormSix, setFormSeven, setFormEight
            );
        setFormNine(true);
    }
    const formTenSubmit = async (event) => {
        submitForm(event, ten);
        setForm(
            setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive, 
            setFormSix, setFormSeven, setFormEight, setFormNine
            );
        setFormTen(true);
    }

    if (formOne) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <FormEdit data={two} onChange={twoChange} onSubmit={formTwoSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formTwo) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <FormEdit data={three} onChange={threeChange} onSubmit={formThreeSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formThree) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <FormEdit data={four} onChange={fourChange} onSubmit={formFourSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formFour) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <FormEdit data={five} onChange={fiveChange} onSubmit={formFiveSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formFive) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <DisabledForm data={five} />
            <FormEdit data={six} onChange={sixChange} onSubmit={formSixSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formSix) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <DisabledForm data={five} />
            <DisabledForm data={six} />
            <FormEdit data={seven} onChange={sevenChange} onSubmit={formSevenSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formSeven) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
                <DisabledForm data={one} />
                <DisabledForm data={two} />
                <DisabledForm data={three} />
                <DisabledForm data={four} />
                <DisabledForm data={five} />
                <DisabledForm data={six} />
                <DisabledForm data={seven} />
                <FormEdit data={eight} onChange={eightChange} onSubmit={formEightSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formEight) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
                <DisabledForm data={one} />
                <DisabledForm data={two} />
                <DisabledForm data={three} />
                <DisabledForm data={four} />
                <DisabledForm data={five} />
                <DisabledForm data={six} />
                <DisabledForm data={seven} />
                <DisabledForm data={eight} />
                <FormEdit data={nine} onChange={nineChange} onSubmit={formNineSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formNine) {
        return (
            <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
            <Card.Body>
                <DisabledForm data={one} />
                <DisabledForm data={two} />
                <DisabledForm data={three} />
                <DisabledForm data={four} />
                <DisabledForm data={five} />
                <DisabledForm data={six} />
                <DisabledForm data={seven} />
                <DisabledForm data={eight} />
                <DisabledForm data={nine} />
                <FormEdit data={ten} onChange={tenChange} onSubmit={formTenSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formTen) {
        return <Redirect to={{
            pathname: '/report',
            state: {
              report: employeeData 
            }
        }} />
    }
    return (
        <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
                <FormEdit data={one} onChange={oneChange} onSubmit={formOneSubmit} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Landing;