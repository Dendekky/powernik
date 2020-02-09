import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import FormEdit from '../components/formActions/FormAdd';
import DisabledForm from '../components/formActions/DisabledForm';
import FormSubmit from '../components/formActions/FormSubmit';
import CalculateBonus from '../components/CalculateBonus';


const cardStyle = {
    minHeight: '100vh', height: '100%', background: '#dddbe0'
}

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


    const submitForm = async (e, data) => {
        e.preventDefault();
        employeeData.push(data);
    }

    function setFormDisable(...args) {
        args.forEach( arg => arg(false))
    }

    const formOneSubmit = async (event) => {
        submitForm(event, one);
        setFormOne(true);
    }
    const formTwoSubmit = async (event) => {
        submitForm(event, two);
        setFormDisable(setFormOne);
        setFormTwo(true);
    }
    const formThreeSubmit = async (event) => {
        submitForm(event, three);
        setFormDisable(setFormOne, setFormTwo);
        setFormThree(true);
    }
    const formFourSubmit = async (event) => {
        submitForm(event, four);
        setFormDisable(setFormOne, setFormTwo, setFormThree);
        setFormFour(true);
    }
    const formFiveSubmit = async (event) => {
        submitForm(event, five);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour);
        setFormFive(true);
    }
    const formSixSubmit = async (event) => {
        submitForm(event, six);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive);
        setFormSix(true);
    }
    const formSevenSubmit = async (event) => {
        submitForm(event, seven);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive, setFormSix);
        setFormSeven(true);
    }
    const formEightSubmit = async (event) => {
        submitForm(event, eight);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive, setFormSix, setFormSeven);
        setFormEight(true);
    }
    const formNineSubmit = async (event) => {
        submitForm(event, nine);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive, setFormSix, setFormSeven, setFormEight);
        setFormNine(true);
    }
    const formTenSubmit = async (event) => {
        CalculateBonus(employeeData);
        localStorage.setItem('reports', JSON.stringify(employeeData));
        submitForm(event, ten);
        setFormDisable(setFormOne, setFormTwo, setFormThree, setFormFour, setFormFive, setFormSix, setFormSeven, setFormEight, setFormNine);
        setFormTen(true);
    }

    if (formOne) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <FormEdit data={two} onChange={(event) => handleChange(event, setTwo, two)} onSubmit={formTwoSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formTwo) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <FormEdit data={three} onChange={(event) => handleChange(event, setThree, three)} onSubmit={formThreeSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formThree) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <FormEdit data={four} onChange={(event) => handleChange(event, setFour, four)} onSubmit={formFourSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formFour) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <FormEdit data={five} onChange={(event) => handleChange(event, setFive, five)} onSubmit={formFiveSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formFive) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <DisabledForm data={five} />
            <FormEdit data={six} onChange={(event) => handleChange(event, setSix, six)} onSubmit={formSixSubmit} />
            </Card.Body>
            </Card>            
            </div>
        )
    }
    if (formSix) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
            <DisabledForm data={one} />
            <DisabledForm data={two} />
            <DisabledForm data={three} />
            <DisabledForm data={four} />
            <DisabledForm data={five} />
            <DisabledForm data={six} />
            <FormEdit data={seven} onChange={(event) => handleChange(event, setSeven, seven)} onSubmit={formSevenSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formSeven) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
                <DisabledForm data={one} />
                <DisabledForm data={two} />
                <DisabledForm data={three} />
                <DisabledForm data={four} />
                <DisabledForm data={five} />
                <DisabledForm data={six} />
                <DisabledForm data={seven} />
                <FormEdit data={eight} onChange={(event) => handleChange(event, setEight, eight)} onSubmit={formEightSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formEight) {
        return (
            <div>
            <Card style={cardStyle}>
            <Card.Body>
                <DisabledForm data={one} />
                <DisabledForm data={two} />
                <DisabledForm data={three} />
                <DisabledForm data={four} />
                <DisabledForm data={five} />
                <DisabledForm data={six} />
                <DisabledForm data={seven} />
                <DisabledForm data={eight} />
                <FormEdit data={nine} onChange={(event) => handleChange(event, setNine, nine)} onSubmit={formNineSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formNine) {
        return (
            <div>
            <Card style={cardStyle}>
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
                <FormSubmit data={ten} onChange={(event) => handleChange(event, setTen, ten)} onSubmit={formTenSubmit} />
            </Card.Body>
            </Card>
            </div>
        )
    }
    if (formTen) {
        return <Redirect to= '/report' />
    }
    
    return (
        <div>
            <Card style={cardStyle}>
                <Card.Body>
                <FormEdit data={one} onChange={(event) => handleChange(event, setOne, one)} onSubmit={formOneSubmit} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Landing;