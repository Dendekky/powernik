import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function SingleReport (props) {
    const [report] = useState(props.location.state.report);
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
        <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
                {data.results.map((result, idx) => (
                <div key={idx}>
                    <img src= {result.picture.large} />
                </div>))}
                <h6>
                    {report.name}
                </h6>
                <p>#{report.bonus}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

