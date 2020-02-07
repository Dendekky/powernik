import React, { useState } from 'react';

export default function SingleReport (props) {
    const [report] = useState(props.location.state.report);

    console.log(report);

    return(
        <div>
            <p>Hello there </p>
                <h6>
                    {report.name}
                </h6>
                <p>{report.bonus}</p>
        </div>
    )
}

