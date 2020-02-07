import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function AllReport (props) {
    const [reports] = useState(props.location.state.report);

    function TimeInMinutes(time) {
        return (+time[0]) * 60 + (+time[1]);
    }

    function ConvertTime(input) {
        return input.split(':')
    }

    function TimeDiff(value) {
        return (540 - value)
        // 540 being time conversion for 9:00am
    }

    reports.forEach(function(report){
        var a = ConvertTime(report.monday);
        var b = ConvertTime(report.tuesday);
        var c = ConvertTime(report.wednesday);
        var d = ConvertTime(report.thursday);
        var e = ConvertTime(report.friday);

        var aMinutes = TimeInMinutes(a);
        var bMinutes = TimeInMinutes(b);
        var cMinutes = TimeInMinutes(c);
        var dMinutes = TimeInMinutes(d);
        var eMinutes = TimeInMinutes(e);
        // report.mondayTime = aMinutes;
        // report.tuesdayTime = bMinutes;
        report.bonus = (( ( 
            (TimeDiff(aMinutes)) + (TimeDiff(bMinutes)) + (TimeDiff(cMinutes)) + (TimeDiff(dMinutes)) + (TimeDiff(eMinutes)) )/5 ) * 50 );
    });


    return(
        <div>
            <Card style={{ minHeight: '100vh', height: '100%', background: '#dddbe0' }}>
                <Card.Body>
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
                </Card.Body>
            </Card>
        </div>
    )
}

