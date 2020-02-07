import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function FormIncomplete() {
    const [show, setShow] = useState(false);
  
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Fill All 10 employee fields</Alert.Heading>
          <p>
            Please add all 10 employee details before you generate report
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Generate Report</Button>;
  }
  
