import { useState, useEffect } from 'react';
import AdminLeaveApproval from './adminapprovalleave';
import Leave from './adminleave'; // Assuming you have a Leave component as previously defined



const AdminProfile = () => {
  const [currentTab, setCurrentTab] = useState('requests');
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    try {
      const response = await fetch('http://localhost:8080/leave');
      
      if (!response.ok) throw new Error('Failed to fetch leave requests');
      const data = await response.json();
     
      setLeaveRequests(data);
    } catch (error) {
      console.error('Error fetching leave requests:', error.message);
    }
  };

  const handleUpdateStatus = async (leaveId, newStatus) => {

    try {
      const response = await fetch(`http://localhost:8080/leave/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leaveId, newStatus }),
      });
      if (!response.ok) throw new Error('Failed to update leave status');
      setLeaveRequests(prevRequests =>
        prevRequests.map(request =>
          request.leaveId === leaveId ? { ...request, status: newStatus } : request
        )
      );
    } catch (error) {
      console.error('Error updating leave status:', error.message);
    }
  };

  return (
    <>
      <div className="z1elyala"style={{marginTop:"90px",marginLeft:"190px"}}>
        <div className="fh07zvwj">
          <div className="yaho0m0x">
          <div className="eg1xjeqf">
          <div>
        <button style={{color:"black",fontWeight:"bold",fontSize:"13px",textAlign:"center",backgroundColor:"#404a6d8a",borderRadius:"4px",borderWidth:"0px",borderColor:"black"}}  onClick={() => setCurrentTab('requests')} >
          Leave Requests
        </button>
        <button style={{  marginTop:"15px",color:"black",fontWeight:"bold",fontSize:"13px",textAlign:"center",backgroundColor:"#404a6d8a",borderRadius:"4px",borderWidth:"0px",borderColor:"black"}}  onClick={() => setCurrentTab('history')}>
          Leave History
        </button>
      </div>
      {currentTab === 'requests' && (
        <AdminLeaveApproval leaveRequests={leaveRequests} onUpdateStatus={handleUpdateStatus} />
      )}
      {currentTab === 'history' && (
        <Leave event={leaveRequests} />
      )}

          </div>
        </div>
        </div>
      </div>
    </>
  );
};



export default AdminProfile;
