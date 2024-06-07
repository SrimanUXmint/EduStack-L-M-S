import React, { useEffect, useState } from 'react';
import Timetablee from './timetabletemplate';
import axios from 'axios';

const Timetable = () => {
  const [timetableData, setTimetableData] = useState([]);

  useEffect(() => {
    const studentId = localStorage.getItem('userName');
    const fetchTimetableData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/studenttimetable/${studentId}`);
        setTimetableData(response.data);
      } catch (error) {
        console.error('Error fetching timetable data:', error);
      }
    };

    fetchTimetableData();
  }, []);

  return (
    <div className="dz1wsaao" style={{ marginTop: "70px" }}>
      <div className="w1o7nuzj">
        <div className="byw17wa5">
          <div className="timetable-container">
            <Timetablee data={timetableData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timetable;
