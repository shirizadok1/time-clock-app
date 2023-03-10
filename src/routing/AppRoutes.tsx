import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employer from '../components/sections/employer-dash/EmployerDash'
import Employee from '../components/sections/employee-dash/EmployeeDash'
import Header from '../components/Header';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Header />} />
        <Route path="/Employee" render={() => <Employee />} />
        <Route path="/Employer" render={() => <Employer />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
