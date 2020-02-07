import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function SingleReport (props) {
    // if (localStorage.getItem('report') == null || undefined ) {
    // localStorage.setItem('report', JSON.stringify(props.location.state.report));
    // }

    const report = JSON.parse(localStorage.getItem('report'))
    // useState(props.location.state.report);
    const [data, setData] = useState({ results: [ ] })

    useEffect(() => {
        const fetchData = async () => {
          const result = await Axios(
            'https://randomuser.me/api/',
          );
          setData(result.data);
        };
        fetchData();
    }, []);

    console.log(report)

    return(
        <div className="employee" >
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
                {data.results.map((result, idx) => (
                <div key={idx}>
                    <img alt="employee-image" style={{ borderRadius: '50%'}} src= {result.picture.large} />
                </div>))}
                <div className="employee-id">
                <h6>Employee Name</h6>
                <span>
                    {report.name}
                </span>
                </div>
                <div>
                <h6>Employee Weekly Bonus</h6>
                <p>₦ {report.bonus}</p>
                </div>
                </Card.Body>
            </Card>
        </div>
    )
}

