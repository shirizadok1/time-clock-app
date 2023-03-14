import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDash from '../components/sections/employee-dash/EmployeeDash';
import EmployerDash from '../components/sections/employer-dash/EmployerDash';
import Header from '../components/Header';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="employee/" element={<EmployeeDash />} />
        <Route path="employer/" element={<EmployerDash />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
