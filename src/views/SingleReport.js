import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CsvDownloader from 'react-csv-downloader';


export default function SingleReport (props) {
    const { match: { params } } = props;

    const report = JSON.parse(localStorage.getItem('reports')).filter(val => val.name.toLowerCase() == params.name.toLowerCase())
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


    return(
        <div className="employee" >
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
                {data.results.map((result, idx) => (
                <div key={idx}>
                    <img alt="employee-random" style={{ borderRadius: '50%'}} src= {result.picture.large} />
                </div>))}
                <div className="employee-id">
                {report.map((output, index) => (
                <div key={index}>
                <h6>Employee Name</h6>
                <span>
                        {output.name}
                </span>
                <h6>Employee Weekly Bonus</h6>
                <p>₦ {output.bonus}</p>
                </div>
                ))}
                <CsvDownloader filename="Employee Bonus Report" datas={report}>
                    <Button>Download As CSV</Button>
                </CsvDownloader>
                </div>
                </Card.Body>
            </Card>
        </div>
    )
}

