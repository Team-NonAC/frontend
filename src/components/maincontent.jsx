import React from 'react';
import './maincontent.css';
const JobDetailsTable = ({jobDetails}) => {
    
  return (
    <table>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Sector</th>
          <th>Job Role</th>
          <th>QP Code</th>
          <th>Category of Disability</th>
          <th>View All Cover Disability</th>
          <th>button</th>
        </tr>
      </thead>
      <tbody>
        {jobDetails.map((job, index) => (
          <tr key={index}>
            <td>{job.srNo}</td>
            <td>{job.sector}</td>
            <td>{job.jobRole}</td>
            <td>{job.qpCode}</td>
            <td>{job.categoryOfDisability}</td>
            <td>{job.viewAllCoverDisability.join(', ')}</td>
            <td>
              <button>button</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default JobDetailsTable;
// Example usage
