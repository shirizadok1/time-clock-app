import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employer from '../components/sections/employer-dash/EmployerDash'
import Employee from '../components/sections/employee-dash/EmployeeDash'
import Header from 'src/components/Header';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Header} />
        <Route path="/Employee" component={Employee} />
        <Route path="/Employer" component={Employer} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
