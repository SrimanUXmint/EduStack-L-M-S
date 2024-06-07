import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Batch from './teacherbatch';
import ProgressBar from './teacherprogressbar';
import Session from './teachersession';
import Leave from './teacherleave';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function TeacherDashboard() {
  const [profileData, setProfileData] = useState({ name: '', email: '' });
  const [progressBarData, setProgressBarData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [leaveData, setLeaveData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const userid = localStorage.getItem('userName');
   
    fetch(`http://localhost:8080/teacherprofiledata?name=${userid}`)
          .then(response => response.json())
          .then(data => setProfileData({ email:data.email,name:data.name }))
          .catch(error => console.error('Error fetching progress data:', error));
      
    // Fetch data for ProgressBar
    fetch(`http://localhost:8080/teacherprogress?name=${userid}`)
      .then(response => response.json())
      .then(data => setProgressBarData(data))
      .catch(error => console.error('Error fetching progress data:', error));

    // Fetch data for Sessions
    fetch(`http://localhost:8080/teachersessions?name=${userid}`)
      .then(response => response.json())
      .then(data => {
        setSessionData(data);
        filterSessionsByDay(new Date(), data); // Initialize with today's sessions
      })
      .catch(error => console.error('Error fetching session data:', error));

    // Fetch data for Batches
    fetch(`http://localhost:8080/teacherbatches?name=${userid}`)
      .then(response => response.json())
      .then(data => setBatchData(data))
      .catch(error => console.error('Error fetching batch data:', error));

    // Fetch data for Leaves
    fetch(`http://localhost:8080/teacherleaves?name=${userid}`)
      .then(response => response.json())
      .then(data => setLeaveData(data))
      .catch(error => console.error('Error fetching leave data:', error));
  }, []);

  const filterSessionsByDay = (date, sessions = sessionData) => {
    const dayIndex = date.getDay();
    // Get the day index (0-6) of the selected date
    const filtered = sessions.filter(session => {
      const sessionDayIndex = getDayIndex(session.day); // Convert day name to day index
      // Get the day index (0-6) of the session's start time
      return sessionDayIndex === dayIndex;
    });
    setFilteredSessions(filtered);
  };
  
  const getDayIndex = (day) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days.indexOf(day);
  };
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterSessionsByDay(date);
  };


  return (
    <div className="App">
      <div className="xy259u7v">
        <div className="kyirz4qg">
          <div className="u1qbvbs2">
            <div className="repcf15d">
              <div className="fkw85fn2">
                <div className="islc0abm">
                  <h2 className="d7aod193">Classes</h2>
                  <div className="kn17g5gz">
                    <div className="q55aof8l">
                      <ProgressBar data={progressBarData} />
                    </div>
                  </div>
                </div>
                <div className="huxcn62j">
                  <div className="g5yhsru0">
                    <h2 className="d98fisdt">Sessions</h2>
                    <div className="dgm72ewu">
                      <div className="mikdpp7d"></div>
                      <div className="qe7fuaf4"></div>
                    </div>
                  </div>
                  <div className="euezgvat">
                    <div className="anpijogr">
                      <div className="slslp43x">Course id</div>
                    </div>
                    <div className="wgr231wl">Batch</div>
                    <div className="ctskqstp">Strength</div>
                    <div className="y9z06x0q">Room</div>
                  </div>
                  <Session sessions={filteredSessions}/>
                </div>
                <div className="iqol85t2">
                  <div className="biwaxqxg">
                    <h2 className="wajsaoji">Batches</h2>
                  </div>
                  <div className="jk7bmpwy">
                    <div className="cf0todif">
                      <div className="w2mfpq6n">
                        <div className="bk6x83fz">Course id</div>
                      </div>
                      <div className="bk6x83fz">Batch</div>
                      <div className="j7mhom8b">Strength</div>
                    </div>
                    <Batch batchData={batchData}/>
                  </div>
                </div>
              </div>
              <div className="riggrx1n">
                <div className="zpyulkz9">
                  <img
                    src="https://assets-global.website-files.com/6649d9640e151c6ff17d76fc/6649d9640e151c6ff17d7803_client-table-header-icon-dashdark-webflow-template.svg"
                    alt=""
                    className="flhjwft6"
                  />
                  <div className="zpbliu54">{profileData.name}</div>
                  <h4 style={{ color: "black" }}>{profileData.email}</h4>
                </div>
                <div className="b8s514yo" style={{ height: "300px", paddingBottom: "3px" }}>
                  <Calendar onChange={handleDateChange} value={selectedDate} />
                </div>
                <div className="cvio0a0i">
                  <h2 className="ozi9ds6z">Leaves</h2>
                  <div className="d35inuif">
                    <div className="b7lfi9ey">
                      <Leave event={leaveData}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gqeohtak"></div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
