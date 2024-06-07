import { useState } from 'react';
import {  Link } from 'react-router-dom';
const coursesData = [
  {
    id: 'CS101',
    name: 'Introduction to Computer Science',
    notices: [
      { title: 'Notice 1', content: 'This is the content of notice 1.' },
      { title: 'Notice 2', content: 'This is the content of notice 2. '},    ],
    quizzes: [
      { title: 'Quiz 1', link: 'https://example.com/quiz1', grade: 'A', gradedMarks: 95 },
      { title: 'Quiz 2', link: 'https://example.com/quiz2' },
    ],
  },
  {
    id: 'ENG201',
    name: 'Introduction to Computer Science',
    notices: [
      { title: 'Notice 1', content: 'This is the content of notice 1.' },
      { title: 'Notice 2', content: 'This is the content of notice 2.' },
    ],
    quizzes: [
      { title: 'Quiz 1', link: 'https://example.com/quiz1', grade: 23, gradedMarks: 95 },
      { title: 'Quiz 2', link: 'https://example.com/quiz2' },
    ],
  },
  {
    id: 'CS102',
    name: 'Introduction to Computer Science',
    notices: [
      { title: 'Notice 1', content: 'This is the content of notice 1.' },
      { title: 'Notice 2', content: 'This is the content of notice 2.' },
    ],
    quizzes: [
      { title: 'Quiz 1', link: 'https://example.com/quiz1', grade: 'A', gradedMarks: 95 },
      { title: 'Quiz 2', link: 'https://example.com/quiz2' },
    ],
  },
  // Add more course data as needed
];

const CoursePage = () => {
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
const currentUrl = window.location.href;
const lastPathSegment = getLastPathSegment(currentUrl);
const course = coursesData.find(course => course.id === lastPathSegment);
const [selectedNotice, setSelectedNotice] = useState(null);
const [selectedQuiz, setSelectedQuiz] = useState(null);

if (!course) {
  return <div>Course not found</div>;
}
  return (
      <>
      <div className="z1elyala">
        <div className="fh07zvwj">
          <div className="yaho0m0x">
            <div className="eg1xje" style={{ marginTop: "70px", marginLeft: "200px" ,overflow: "auto",scrollbarWidth: "none" }}>

              <div className="header">
                <div className="back-button">
                </div>
                <h1 style={{ color: "black",fontWeight: "700" }}>{course.name}</h1>
                <div  style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '20px', 
                  color: 'black',
                  width:"161",
                  display:"inline-flex"
                }}> <div style={{ 
                  top: '0px', 
                  left: '0px', 
                  backgroundColor: '#223b52', 
                  color: 'white',
                  padding:"7px",
                  margin:"7px",
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  textAlign:'center',
                  width:"1px"
                }}></div>
                <h5 style={{ color: "black"}} >Notices</h5>
                <div style={{ 
                  top: '0px', 
                  left: '0px', 
                  backgroundColor: '#623f91', 
                  color: 'white',
                  padding:"7px",
                  margin:"7px",
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  textAlign:'center',
                  width:"1px"
                }}></div>
                <h5 style={{ color: "black"}} >Quizzes</h5>
                  </div>
              </div>
              <div className="notices-section">
               
                <div className="notices-list">
                  {course.notices.map((notice, index) => (
                    <div key={index} style={{color:"#223b52",backgroundColor:"#2b487485"}} className="notice-item">
                      <button style={{backgroundColor:"#223b52",color:"black",fontWeight:"bolder"}} onClick={() => setSelectedNotice(selectedNotice === index ? null : index)}>
                        {notice.title}
                      </button>
                      {selectedNotice === index && (
                        <div style={{color:"black"}} className="notice-details">{notice.content}</div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="quizzes-list">
                  {course.quizzes.map((quiz, index) => (
                    <div key={index} style={{color:"#223b52",backgroundColor:"#2b487485"}} className="quiz-item">
                      <button style={{backgroundColor:"#623f91",color:"black",fontWeight:"bolder"}} onClick={() => setSelectedQuiz(selectedQuiz === index ? null : index)}>
                        {quiz.title}
                      </button>
                      {selectedQuiz === index && (
                        <div className="quiz-details">
                          <a href={quiz.link} target="_blank" rel="noopener noreferrer" className="quiz-link">
                            Attempt Quiz
                          </a>
                          {quiz.grade && (
                            <div  style={{color:"black",display:""}} className="quiz-grade">
                              <p>Grade: {quiz.grade}</p>
                              <p>Graded Marks: {quiz.gradedMarks}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
              </div>
              <Link   style={{ 
                 marginTop:"50px",
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

export default CoursePage;
