import React from 'react';
import './maincontent.css';
import { Link } from 'react-router-dom';

const Maincontent = ({ jobDetails, filters, onFilterChange, onRemoveDisability }) => {
  const filteredJobDetails = jobDetails.filter((job) => {
    const hasMatchingDisability = filters.disabilities.length
      ? filters.disabilities.some(disability =>
          job.viewAllCoverDisability.includes(disability)
        )
      : true;

    return hasMatchingDisability;
  });

  return (
    <div>
      <div>
        <label>
          Disability:
          <input
            type="text"
            value={filters.disability}
            onChange={(e) => onFilterChange('disability', e.target.value)}
          />
          <button onClick={() => onFilterChange('disability', '')}>
            Clear
          </button>
        </label>
      </div>
      <div>
        <p>Selected Disabilities:</p>
        <ul>
          {filters.disabilities.map((disability, index) => (
            <li key={index}>
              {disability}
              <button onClick={() => onRemoveDisability(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

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
          {filteredJobDetails.map((job, index) => (
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
    </div>
  );
};

export default Maincontent;
