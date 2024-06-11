import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const CoursePage = () => {
  const [course, setCourse] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [batchName, setBatchName] = useState('');
  useEffect(() => {
    async function fetchCourseData() {
      const userid = localStorage.getItem('userName');
      const currentUrl = window.location.href;
      const lastPathSegment = getLastPathSegment(currentUrl);
      
      try {
        const response = await axios.get(`http://localhost:8080/coursedata?name=${userid}`);
        setBatchName(response.data.batchName);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }


      try {
        const response = await fetch(`http://localhost:8080/course/${lastPathSegment}?studentId=${userid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const courseData = await response.json();
        setCourse(courseData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCourseData();
  }, []);

  const handleAttemptQuiz = async (quizId) => {
    const userid = localStorage.getItem('userName');
    const currentUrl = window.location.href;
    const lastPathSegment = getLastPathSegment(currentUrl);

    try {
      const response = await fetch('http://localhost:8080/grades/attempt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          courseId: lastPathSegment,
          batchId: batchName.batchId, // Ensure this field is available in your course data
          studentId: userid,
          quizId:quizId
        })
      });
      if (!response.ok) {
        throw new Error('Failed to record quiz attempt');
      }
      alert('Quiz attempt recorded successfully');
    } catch (error) {
      console.error(error);
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="z1elyala">
        <div className="fh07zvwj">
          <div className="yaho0m0x">
            <div className="eg1xje" style={{ marginTop: "70px", marginLeft: "200px", overflow: "auto", scrollbarWidth: "none" }}>
              <div className="header">
                <div className="back-button"></div>
                <h1 style={{ color: "black", fontWeight: "700" }}>{course.name}</h1>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  color: 'black',
                  width: "161",
                  display: "inline-flex"
                }}>
                  <div style={{
                    top: '0px',
                    left: '0px',
                    backgroundColor: '#223b52',
                    color: 'white',
                    padding: "7px",
                    margin: "7px",
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    width: "1px"
                  }}></div>
                  <h5 style={{ color: "black" }}>Notices</h5>
                  <div style={{
                    top: '0px',
                    left: '0px',
                    backgroundColor: '#623f91',
                    color: 'white',
                    padding: "7px",
                    margin: "7px",
                    borderRadius: '8px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    width: "1px"
                  }}></div>
                  <h5 style={{ color: "black" }}>Quizzes</h5>
                </div>
              </div>
              <div className="notices-section">
                <div className="notices-list">
                  {course.notices.map((notice, index) => (
                    <div key={index} style={{ color: "#223b52", backgroundColor: "#2b487485" }} className="notice-item">
                      <button style={{ backgroundColor: "#223b52", color: "white", fontWeight: "bolder" }} onClick={() => setSelectedNotice(selectedNotice === index ? null : index)}>
                        {notice.title}
                      </button>
                      {selectedNotice === index && (
                        <div style={{ color: "black" }} className="notice-details">{notice.content}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="quizzes-list">
                  {course.quizzes.map((quiz, index) => (
                    <div key={index} style={{ color: "#223b52", backgroundColor: "#2b487485" }} className="quiz-item">
                      <button style={{ backgroundColor: "#623f91", color: "white", fontWeight: "bolder" }} onClick={() => {
                        setSelectedQuiz(selectedQuiz === index ? null : index);
                      
                      }}>
                        {quiz.title}
                      </button>
                      {selectedQuiz === index && (
                        <div className="quiz-details">
                          <button href={quiz.link} target="_blank" rel="noopener noreferrer" className="quiz-link" onClick= {() => { handleAttemptQuiz(quiz.quizId);      }}  >
                            Attempt Quiz
                          </button>
                          <div style={{ color: "black", display: "" }} className="quiz-grade">
                          <p>Grade: {quiz.grade}</p>
                          <p>Quiz Time: {quiz.time}</p>
                          {quiz.grade && (
                              <p>Graded marks: {quiz.gradedMarks}</p>
                          )}
                           </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
              <Link style={{
                marginTop: "50px",
                bottom: '20px',
                left: '20px',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                textAlign: 'center',
                width: '100px'
              }}
                to="/course" className="rbsro8xx">Back </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function parseUrl(url) {
  const parser = document.createElement('a');
  parser.href = url;
  return {
    pathname: parser.pathname,
  };
}

function getLastPathSegment(url) {
  const parser = document.createElement('a');
  parser.href = url;
  const pathSegments = parser.pathname.split('/');
  const lastSegment = pathSegments[pathSegments.length - 1];
  return lastSegment;
}

export default CoursePage;
