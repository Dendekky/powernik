import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllReport (props) {
    const [reports] = useState(props.location.state.report);

    // reports.forEach(report => console.log(report.monday.split(":")));

    function TimeInMinutes(time) {
        return (+time[0]) * 60 + (+time[1]);
    }

    reports.forEach(function(report){
        var a = report.monday.split(':');
        var b = report.tuesday.split(':'); 
        var aMinutes = TimeInMinutes(a);
        var bMinutes = TimeInMinutes(b);
        report.mondayTime = aMinutes;
        report.tuesdayTime = bMinutes;
        report.bonus = (( ( (540 - aMinutes) + (540 - bMinutes))/5 ) * 50 );
    });

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
                <p>#{report.bonus}</p>
            </div>
            ))}
        </div>
    )
}

