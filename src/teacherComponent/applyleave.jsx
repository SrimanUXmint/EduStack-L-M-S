import { useState, useEffect } from 'react';
import Leave from './leave';

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const [leaveHistory, setLeaveData] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem('userName'); 
    fetch(`http://localhost:8080/teacherleaves?name=${userId}`)
      .then(response => response.json())
      .then(data => setLeaveData(data))
      .catch(error => console.error('Error fetching leave data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newLeaveRequest={
      teacherId:localStorage.getItem('userName'),
      leaveId:Date.now().toString().slice(0,5) + Math.floor(Math.random() * 1000).toString() ,
      type: formData.leaveType,
      startDate: formData.startDate,
      endDate: formData.endDate,
      reason: formData.reason,
      status: 'Pending',
    };
    // Make a POST request to add leave request
    fetch('http://localhost:8080/leave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLeaveRequest),
    })
    .then(response => response.json())
    // .then(data => {
    //   // Update leave history state with the newly added leave request
     
    // })
    .catch(error => console.error('Error adding leave request:', error));
    setLeaveData(prevHistory => [...prevHistory,newLeaveRequest]);
    // Clear form data
    setFormData({
      ...formData,
      startDate: '',
      endDate: '',
      reason: '',
    });
  };
  return (
    <>
      <h2 style={{ color: '#333' }}>Apply for Leave</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label htmlFor="leaveType" style={{ color: '#333' }}>Leave Type</label>
          <select
            name="leaveType"
            id="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            required
            style={{ color: "black", fontWeight: "bold", fontSize: "13px", textAlign: "center", backgroundColor: "#404a6d8a", borderRadius: "4px", borderWidth: "0px", borderColor: "black" }}
          >
            <option value="">Select leave type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
            <option value="Paternity Leave">Paternity Leave</option>
            <option value="Vacation">Vacation</option>
          </select>
        </div>
        <div>
          <label htmlFor="startDate" style={{ color: '#333' }}>Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            style={{ color: "black", fontWeight: "bold", fontSize: "13px", textAlign: "center", backgroundColor: "#404a6d8a", borderRadius: "4px", borderWidth: "0px", borderColor: "black" }}
          />
        </div>
        <div>
          <label htmlFor="endDate" style={{ color: '#333' }}>End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            style={{ color: "black", fontWeight: "bold", fontSize: "13px", textAlign: "center", backgroundColor: "#404a6d8a", borderRadius: "4px", borderWidth: "0px", borderColor: "black" }}
          />
        </div>
        <div>
          <label htmlFor="reason" style={{ color: '#333' }}>Reason</label>
          <textarea
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            style={{ color: "black", fontWeight: "bold", fontSize: "13px", textAlign: "center", backgroundColor: "#404a6d8a", borderRadius: "4px", borderWidth: "0px", borderColor: "black" }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff' }}>
          Submit
        </button>
      </form>
      <h2 style={{ color: '#333', marginTop: '20px' }}>Leave History</h2>
      <Leave event={leaveHistory} />
    </>
  );
};

export default ApplyLeave;
