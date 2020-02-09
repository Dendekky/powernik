import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CsvDownloader from 'react-csv-downloader';

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
                <CsvDownloader filename="All Bonus Report" datas={reports}>
                    <Button>Download As CSV</Button>
                </CsvDownloader>
                </Card.Body>
            </Card>
        </div>
    )
}

