import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNotice from './AddNotice';
import AddQuiz from './AddQuiz';
import GradeQuiz from './GradeQuiz';

const TeacherCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [activeTab, setActiveTab] = useState('notices');
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const teacherId = localStorage.getItem('userName');


  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/teacher/courses', {
          params: { teacherId }
        });
        const courses = response.data;

        const updatedCourses = await Promise.all(courses.map(async course => {
          const batchesResponse = await axios.get('http://localhost:8080/teacher/batches', {
            params: { teacherId }
          });

          const batches = batchesResponse.data.filter(batch => batch.courseIds.includes(course.courseId));
        

          const updatedBatches = await Promise.all(batches.map(async batch => {
            const studentsResponse = await axios.get(`http://localhost:8080/studentsattendance?courseId=${course.courseId}&batchId=${batch.batchId}`);
            const students = studentsResponse.data;
            return { ...batch, students };
          }));

          return { ...course, batches: updatedBatches };
        }));

        setCourses(updatedCourses);
        if (updatedCourses.length > 0) {
          setSelectedCourse(updatedCourses[0].courseId);
          setBatches(updatedCourses[0].batches);
          if (updatedCourses[0].batches.length > 0) {
            setSelectedBatch(updatedCourses[0].batches[0].batchId);
          }
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, []);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);
    const selectedCourse = courses.find(course => course.courseId === courseId);
    if (selectedCourse) {
      setBatches(selectedCourse.batches);
      if (selectedCourse.batches.length > 0) {
        setSelectedBatch(selectedCourse.batches[0].batchId);
      } else {
        setSelectedBatch('');
      }
    }
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  return (
    <div>
      <div className="hqu6j3os">
        <div className="ij6mk5pj">
          <div className="jmcs0gbx">
            <div className="gyc3f8q6">
              <div className="zzxrsn6l">
                <div className="fm5eardc">
                  <div className="bkie7gg0" style={{ width: '600px', padding: '40px' }}>
                    <div>
                      <label style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px' }} htmlFor="course">
                        Select Course:
                      </label>
                      <select
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: '#404a6d8a',
                          borderRadius: '4px',
                          borderWidth: '0px',
                          borderColor: 'black',
                        }}
                        id="course"
                        value={selectedCourse}
                        onChange={handleCourseChange}
                      >
                        {courses.map((course) => (
                          <option key={course.courseId} value={course.courseId}>
                            {course.courseName}
                          </option>
                        ))}
                      </select>

                      <label style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px', marginTop: '13px' }} htmlFor="batch">
                        Select Batch:
                      </label>
                      <select
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: '#404a6d8a',
                          borderRadius: '4px',
                          borderWidth: '0px',
                          borderColor: 'black',
                        }}
                        id="batch"
                        value={selectedBatch}
                        onChange={handleBatchChange}
                      >
                        {batches.map((batch) => (
                          <option key={batch.batchId} value={batch.batchId}>
                            {batch.batchName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <button
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: '#404a6d8a',
                          borderRadius: '4px',
                          borderWidth: '0px',
                          borderColor: 'black',
                          marginTop: '13px',
                        }}
                        onClick={() => setActiveTab('notices')}
                      >
                        Add Notices
                      </button>
                      <button
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: '#404a6d8a',
                          borderRadius: '4px',
                          borderWidth: '0px',
                          borderColor: 'black',
                          marginTop: '13px',
                        }}
                        onClick={() => setActiveTab('quizzes')}
                      >
                        Add Quizzes
                      </button>
                      <button
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: '#404a6d8a',
                          borderRadius: '4px',
                          borderWidth: '0px',
                          borderColor: 'black',
                          marginTop: '13px',
                        }}
                        onClick={() => setActiveTab('grade')}
                      >
                        Grade Quizzes
                      </button>
                    </div>

                    {activeTab === 'notices' && <AddNotice courseId={selectedCourse} batchId={selectedBatch} />}
                    {activeTab === 'quizzes' && <AddQuiz courseId={selectedCourse} batchId={selectedBatch} />}
                    {activeTab === 'grade' && <GradeQuiz courseId={selectedCourse} batchId={selectedBatch} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCourse;
