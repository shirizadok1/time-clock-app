// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import axios from 'axios';
// import EmployeeDash, { Report } from './EmployeeDash';

// jest.mock('axios');

// const mockMonthlyReport: Report[] = [
//   {
//     id: 1,
//     name: 'John Doe',
//     hours: [
//       {
//         date: new Date('2022-02-01'),
//         start: new Date('2022-02-01T08:00:00'),
//         end: new Date('2022-02-01T16:30:00'),
//       },
//       {
//         date: new Date('2022-02-02'),
//         start: new Date('2022-02-02T08:15:00'),
//         end: new Date('2022-02-02T16:45:00'),
//       },
//       {
//         date: new Date('2022-02-03'),
//         start: new Date('2022-02-03T08:30:00'),
//         end: new Date('2022-02-03T17:00:00'),
//       },
//     ],
//   },
// ];

// describe('EmployeeDash', () => {
//   beforeAll(() => {
//     localStorage.setItem('monthlyReport', JSON.stringify(mockMonthlyReport));
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//     localStorage.clear();
//   });

//   it('renders the "Start Clock" button and displays start time when clicked', () => {
//     const { getByText } = render(<EmployeeDash />);
//     const startButton = getByText('Start Clock');
//     fireEvent.click(startButton);
//     const startTime = getByText(`Start Time: ${new Date().toLocaleString()}`);
//     expect(startTime).toBeInTheDocument();
//   });

//   it('renders the "Stop Clock" button as disabled and enables it when start time is set', () => {
//     const { getByText } = render(<EmployeeDash />);
//     const stopButton = getByText('Stop Clock');
//     expect(stopButton).toBeDisabled();
//     const startButton = getByText('Start Clock');
//     fireEvent.click(startButton);
//     expect(stopButton).toBeEnabled();
//   });

//   it('renders the "View Monthly Report" button and toggles the report visibility when clicked', () => {
//     const { getByText, queryByText } = render(<EmployeeDash />);
//     const viewReportButton = getByText('View Monthly Report');
//     fireEvent.click(viewReportButton);
//     const monthlyReport = getByText('Monthly Report');
//     expect(monthlyReport).toBeInTheDocument();
//     fireEvent.click(viewReportButton);
//     expect(queryByText('Monthly Report')).toBeNull();
//   });

//   it('displays the monthly report data as a list of reports and their respective hours', async () => {
//     const { getByText } = render(<EmployeeDash />);
//     const viewReportButton = getByText('View Monthly Report');
//     fireEvent.click(viewReportButton);
//     await axios.get.mockResolvedValueOnce({ data: mockMonthlyReport });
//     const report1 = getByText('John Doe');
//     expect(report1).toBeInTheDocument();
//     expect(getByText('02/01/2022: 8:00 AM - 4:30 PM')).toBeInTheDocument();
//     expect(getByText('02/02/2022: 8:15 AM - 4:45 PM')).toBeInTheDocument();
//     expect(getByText('02/03/2022: 8:30 AM - 5:00 PM')).toBeInTheDocument();
//   });

//   it('updates the monthly report start time when "Edit Start" button is clicked', async () => {
//     const { getByText } = render(<EmployeeDash />);
//     const viewReportButton =
