import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllReport (props) {
    const [reports] = useState(props.location.state.report);

    // reports.forEach(report => console.log(report.monday.split(":")));

    // function Time()

    reports.forEach(function(report){
        var a = report.monday.split(':');
        var b = report.tuesday.split(':'); 
        var aMinutes = (+a[0]) * 60 + (+a[1]);
        var bMinutes = (+b[0]) * 60 + (+b[1]);
        report.mondayTime = aMinutes;
        report.tuesdayTime = bMinutes;
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
                <p>#{( ((540 - report.mondayTime)/5) + ((540 - report.tuesdayTime)/5) ) * 50 }</p>
            </div>
            ))}
        </div>
    )
}

