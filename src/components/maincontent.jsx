import React from 'react';
import './maincontent.css';
import { Link } from 'react-router-dom';

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
          <th>Links</th>
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
              <Link to="/application">
                <button>Apply</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobDetailsTable;
