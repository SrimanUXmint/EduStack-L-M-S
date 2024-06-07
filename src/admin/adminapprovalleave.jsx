import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const AdminLeaveApproval = ({ leaveRequests, onUpdateStatus }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />;
      case 'Rejected':
        return <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />;
      case 'Pending':
        return <FontAwesomeIcon icon={faExclamationCircle} style={{ color: 'orange' }} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 style={{ color: '#333', marginTop: "20px" }}>Leave Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Leave ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Teacher</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Start Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>End Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Reason</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((item, index) => (
            item.status === 'Pending' && (
              <tr key={index} style={{ backgroundColor: '#f9f9f9', color: '#333' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.leaveId}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.teacherName}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.startDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.endDate}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.type}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.reason}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <span style={{ display: 'inline-block', marginRight: '5px' }}>
                    {getStatusIcon(item.status)}
                  </span>
                  <span style={{ padding: '5px', borderRadius: '3px', display: 'inline-block' }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button
                    style={{ color: 'green', backgroundColor: '#4cb44c', border: "1px solid #4cb44c", marginRight: '5px' }}
                    onClick={() => onUpdateStatus(item.leaveId, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    style={{ color: '#460000', backgroundColor: '#c54c4c', border: "1px solid #c54c4c" }}
                    onClick={() => onUpdateStatus(item.leaveId, 'Rejected')}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLeaveApproval;
