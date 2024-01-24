import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Application = () => {
  // Sample job data
  const jobRoles = ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer'];
  const probabilityData = [0.8, 0.6, 0.7, 0.5]; // Sample probabilities (between 0 and 1)

  // Data for the pie chart
  const chartData = {
    labels: jobRoles,
    datasets: [
      {
        data: probabilityData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // You can customize colors
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    // You can add chart options here
  };

  return (
    <div>
      <h1>Job Dashboard</h1>

      <div>
        <h2>Job Roles</h2>
        <ul>
          {jobRoles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Probability for You to Get a Job</h2>
        <div>
          {/* Use Doughnut component from react-chartjs-2 */}
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>

      <div>
        <h2>Useful Links</h2>
        <ul>
          <li><a href="https://example.com/job-search">Job Search</a></li>
          <li><a href="https://example.com/resume-tips">Resume Tips</a></li>
          <li><a href="https://example.com/interview-prep">Interview Preparation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Application;
