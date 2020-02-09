import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function AllReport () {
    const reports = JSON.parse(localStorage.getItem('reports'));

    return(
        <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
                {reports.map((report, idx) => (
                <div key={idx}>
                    <Link to= {`/report/${report.name}`} >
                        {report.name}
                    </Link>
                    <p>₦{report.bonus}</p>
                </div>
                ))}
                </Card.Body>
            </Card>
        </div>
    )
}

