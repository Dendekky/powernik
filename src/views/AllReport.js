import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllReport (props) {
    const [reports] = useState(props.location.state.report);

    reports.forEach(report => console.log(parseInt(report.monday) + 20));

    console.log(reports);

    return(
        <div>
            <p>Hello there </p>
            {reports.map((report, idx) => (
            <div key={idx}>
                <Link to={{
                    pathname: `/report/${report.name}`,
                    state: {
                    report: report 
                    }
                }}>
                    {report.name}
                </Link>
                <p>{parseInt(report.monday) + 20}</p>
            </div>
            ))}
        </div>
    )
}

