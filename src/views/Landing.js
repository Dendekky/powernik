import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

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
                <input 
                name= "name"
                value= {item.name}
                onChange={onChange}
                size="lg" 
                disabled
                className="mb-3"
                placeholder="name" />
                <input 
                name= "time"
                value= {item.monday}
                onChange={onChange}
                size="lg" 
                disabled
                className="mb-3"
                placeholder="time" />
            </div>
            <div>
            <form 
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
            </form>
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
            <form 
            onSubmit={handleSubmit}
            className="add-new-post">
                <input 
                name= "name"
                value= {item.name}
                onChange={onChange}
                required
                size="lg" 
                className="mb-3"
                placeholder="name" />
                <input 
                name= "monday"
                value= {item.monday}
                onChange={onChange}
                required
                size="lg" 
                className="mb-3"
                placeholder="time" />
                <input className="button" type="submit" value="submit"/><br/>
            </form>
        </div>
    );
}

export default Landing;