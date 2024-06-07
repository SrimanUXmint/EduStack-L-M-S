import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Batch from './adminbatch';
import Faculties from './adminfaculties';
import Session from './adminsession';
import 'react-calendar/dist/Calendar.css';

function AdminDashboard() {
  const [profileData, setProfileData] = useState({ name: '', email: '' });
  const [sessionData, setSessionData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [facultiesData, setFacultiesData] = useState([]);

 
    

  useEffect(() => {
    const name = localStorage.getItem('userName'); // Assuming the token is stored in localStorage
    const email = localStorage.getItem('userEmail'); 
    setProfileData({ name:name, email: email });
    // Fetch profile data
   
    // Fetch sessions
    fetch('http://localhost:8080/courses')
      .then(response => response.json())
      .then(data => {
        setSessionData(data.map(course => ({
          courseId: course.courseId,
          courseName: course.courseName,
          strength: course.duration // Example field
        })));
      });

    // Fetch batches
    fetch('http://localhost:8080/batches')
      .then(response => response.json())
      .then(data => {
        setBatchData(data.map(batch => ({
          batchId: batch.batchId,
          batchName: batch.batchName,
          strength: batch.strength
        })));
      });

    // Fetch faculties
    fetch('http://localhost:8080/teachers')
      .then(response => response.json())
      .then(data => {
        setFacultiesData(data.map(teacher => ({
          teacherId: teacher.teacherId,
          teacherName: teacher.teacherName,
          courseId: teacher.courseId
        })));
      });
  }, []);

  return (
    <div className="App">
      <div className="xy259u7v">
        <div className="kyirz4qg">
          <div className="u1qbvbs2">
            <div className="repcf15d">
              <div className="fkw85fn2">
                <div className="huxcn62j">
                  <div className="g5yhsru0">
                    <h2 className="d98fisdt">Courses</h2>
                    <div className="dgm72ewu">
                      <div className="mikdpp7d"></div>
                      <div className="qe7fuaf4"></div>
                    </div>
                  </div>
                  <div className="euezgvat">
                    <div className="anpijogr">
                      <div className="slslp43x">Course id</div>
                    </div>
                    <div className="wgr231wl">Name</div>
                    <div className="ctskqstp">Total classes</div>
                  </div>
                  <Session sessions={sessionData} />
                </div>
                <div className="iqol85t2">
                  <div className="biwaxqxg">
                    <h2 className="wajsaoji">Batches</h2>
                  </div>
                  <div className="jk7bmpwy">
                    <div className="cf0todif">
                      <div className="w2mfpq6n">
                        <div className="bk6x83fz">Batch id</div>
                      </div>
                      <div className="bk6x83fz">Name</div>
                      <div className="j7mhom8b">Batch Strength</div>
                    </div>
                    <Batch batchData={batchData} />
                  </div>
                </div>
                <div className="iqol85">
                  <div className="biwaxqxg">
                    <h2 className="wajsaoji">Faculties</h2>
                  </div>
                  <div className="jk7bmpwy">
                    <div className="cf0todif">
                      <div className="w2mfpq6n">
                        <div className="bk6x83fz">Faculty id</div>
                      </div>
                      <div className="bk6x83fz">Name</div>
                      <div className="j7mhom8b">Course</div>
                    </div>
                    <Faculties facultyData={facultiesData} />
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
                  <Calendar />
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

export default AdminDashboard;
