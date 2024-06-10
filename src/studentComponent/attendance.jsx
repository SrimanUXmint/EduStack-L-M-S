import Attendancetemp from './attendacetemplate';
import { useEffect, useState } from 'react';
export default function Attendance() {
  const [attendancedata, setAttendanceData] = useState([]);
  const studentId = localStorage.getItem('userName'); // Replace with dynamic student ID

  useEffect(() => {
        fetch(`http://localhost:8080/student/attendance/${studentId}`)
        .then(response => response.json())
        .then(data => setAttendanceData(data))
        .catch(error => console.error('Error fetching attendance data:', error));
      }, [studentId]);
  
 
 
 
 
  return (
    <>

    <div className="dz1wsaao">
    <div className="w1o7nuzj">
      <div className="byw17wa5" style={{marginTop:"40px"}}>
        <h4 className="cbvnsdiu">Attendance</h4>
        
      </div>
    </div>
    <div className="j9gr08v6">
      <form className="lcsufnpx">
        <label className="ezsy1dxm"
          >
          <span className="rcuww38c">Course ID</span></label
        >
      </form>
      <div className="a3h6vr3t">Course name</div>
            <div className="e2kvfhad">Total</div>
            <div className="wqqqbpoe">Present</div>
            <div className="h2cehv0u">Status</div>
    </div>
    <Attendancetemp data={attendancedata} />
    
  </div>
  </>
  );
}
