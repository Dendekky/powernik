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

