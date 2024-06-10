import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Faculty from './faculty';
import ProgressBar from './progressbar';
import Session from './session';
import Events from "./events";

function Dashboard() {
  const [profileData, setProfileData] = useState({ name: '', email: '' });
  const [progressBarData, setProgressBarData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [sessiondata, setFilteredSessions] = useState([]);
  const [facultydata, setFacultydata] = useState([]);
  const [eventdata, setEventdata] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const userid = localStorage.getItem('userName');
   
    const email = localStorage.getItem('userEmail');

    fetch(`http://localhost:8080/profiledata?name=${userid}`)
    .then(response => response.json())
    .then(data => setProfileData({ email:data.email,name:data.name }))
    .catch(error => console.error('Error fetching progress data:', error));

    
    // Fetch data for ProgressBar
    fetch(`http://localhost:8080/studentprogress?name=${userid}`)
      .then(response => response.json())
      .then(data => setProgressBarData(data))
      .catch(error => console.error('Error fetching progress data:', error));

    // Fetch data for Sessions
    fetch(`http://localhost:8080/studentsessions?name=${userid}`)
      .then(response => response.json())
      .then(data => {
        setSessionData(data);
        filterSessionsByDay(new Date(), data); // Initialize with today's sessions
      })
      .catch(error => console.error('Error fetching session data:', error));

    // Fetch data for Batches
    fetch(`http://localhost:8080/studentfaculty?name=${userid}`)
      .then(response => response.json())
      .then(data => setFacultydata(data))
      .catch(error => console.error('Error fetching batch data:', error));

    // Fetch data for Leaves
    fetch(`http://localhost:8080/studentquizes?name=${userid}`)
      .then(response => response.json())
      .then(data => setEventdata(data))
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
                  <h2 className="d7aod193">Attendance Summary</h2>
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
                      <div className="slslp43x">Course Name</div>
                    </div>
                    <div className="wgr231wl">Time</div>
                    <div className="ctskqstp">Faculty</div>
                    <div className="y9z06x0q">Room</div>
                  </div>
                  <Session sessions={sessiondata}/>
                </div>
                <div className="iqol85t2">
                  <div className="biwaxqxg">
                    <h2 className="wajsaoji">Faculties</h2>
                  </div>
                  <div className="jk7bmpwy">
                    <div className="cf0todif">
                      <div className="w2mfpq6n">
                        <div className="bk6x83fz">Teacher id</div>
                      </div>
                      <div className="bk6x83fz">Name</div>
                      <div className="j7mhom8b">Course</div>
                    </div>
                    <Faculty faculties={facultydata}/>
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
                  <h2 className="ozi9ds6z">Upcoming Events</h2>
                  <div className="d35inuif">
                    <div className="b7lfi9ey">
                      <Events event={eventdata}/>
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

export default Dashboard;
