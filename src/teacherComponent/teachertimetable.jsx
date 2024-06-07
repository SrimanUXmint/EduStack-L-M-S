import { useState, useEffect } from 'react';
import Timetablee from './teachertimetabletemplate';
import axios from 'axios';

const TeacherTimetable = () => {
  const [timetableData, setTimetableData] = useState([]);
  const teacherId = localStorage.getItem('userName');// Replace with actual teacher ID or fetch it dynamically

  useEffect(() => {
    fetchTimetableData();
  }, []);

  const fetchTimetableData = async () => {

      fetch(`http://localhost:8080/teachersessions?name=${teacherId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
      setTimetableData(data);
    })
    .catch(error => console.error('Error fetching session data:', error));
  };

  return (
    <>
      <div className="dz1wsaao" style={{ marginTop: "70px" }}>
        <div className="w1o7nuzj">
          <div className="byw17wa5">
            <div className="timetable-container">
              <Timetablee data={timetableData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherTimetable;
