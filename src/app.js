import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './views/Landing';
import AllReport from './views/AllReport'
import SingleReport from './views/SingleReport';
import NavBar from './components/NavBar';


const App = () => <Router>
    <div className="routes">
    <NavBar />
    <Route exact path='/' component={Landing} />
    <Route exact path='/report' component={AllReport} />
    <Route path='/report/:name' component={SingleReport} />
    </div>
    </Router>;

export default App;


// Exercise 
// In a bid to reward her 10 staff, Powernik Nigeria Limited decides to pay them a bonus depending on how early they get to work throughout the week.

// Resumption time is 9am and bonus is 50 naira per  5 minutes. E.g ( if Peter gets to work by 8:55am on Monday ), he gets 50 naira.

// Create a React App Powernik Nigeria Limited's HR manager can use to generate the bonus for the week.
 
// The HR manager should be able to add the name of a staff and the time he got to work from Monday to Friday.

// The HR manager should only be able to generate a report after entering data for all the 10 staff.

// After generating report. The HR manager should be redirected to /report where he can see the Bonuses of all the staff.

// The report of each staff should be accessible at /report/{name}.

// If the HR manager mistakenly refreshes or closes the page...he should still be able to view the report and individual report of each staff.

// Use https://randomuser.me/ to generate a random picture for each staff.
