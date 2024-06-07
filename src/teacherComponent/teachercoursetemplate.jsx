
import Coursetemplate from './teachercoursetemplate';
import Quizes from './teacherquizes';
import React, { useState } from 'react';
import AddNotice from './AddNotice';
import AddQuiz from './AddQuiz';
import GradeQuiz from './GradeQuiz';
const Course=()=> {
   const [selectedCourse, setSelectedCourse] = useState('CS101');
  const [selectedBatch, setSelectedBatch] = useState('Batch1');
  const [activeTab, setActiveTab] = useState('notices');

  const courses = [
    { courseid: 'CS101', coursename: 'Computer Science 101' },
    { courseid: 'ENG201', coursename: 'English 201' },
    // Add more courses as needed
  ];

  const batches = ['Batch1', 'Batch2', 'Batch3']; // Define your batches here

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleBatchChange = (event) => {
    setSelectedBatch(event.target.value);
  };

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <div>
        <label htmlFor="course">Select Course:</label>
        <select id="course" value={selectedCourse} onChange={handleCourseChange}>
          {courses.map((course) => (
            <option key={course.courseid} value={course.courseid}>
              {course.coursename}
            </option>
          ))}
        </select>

        <label htmlFor="batch">Select Batch:</label>
        <select id="batch" value={selectedBatch} onChange={handleBatchChange}>
          {batches.map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={() => setActiveTab('notices')}>Add Notices</button>
        <button onClick={() => setActiveTab('quizzes')}>Add Quizzes</button>
        <button onClick={() => setActiveTab('grade')}>Grade Quizzes</button>
      </div>

      {activeTab === 'notices' && <AddNotice courseId={selectedCourse} batchId={selectedBatch} />}
      {activeTab === 'quizzes' && <AddQuiz courseId={selectedCourse} batchId={selectedBatch} />}
      {activeTab === 'grade' && <GradeQuiz courseId={selectedCourse} batchId={selectedBatch} />}
    </div>
  );
};
export default Course;


import React, { useState } from 'react';

const AddNotice = ({ courseId, batchId }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNotice = () => {
    // Logic to add notice (e.g., API call)
    console.log(`Adding notice for course ${courseId}, batch ${batchId}:`, { title, content });
    // Clear form
    setTitle('');
    setContent('');
  };

  return (
    <div style={{ backgroundColor: 'blue', color: '#333', padding: '20px', borderRadius: '5px' }}>
      <h2>Add Notice</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', height: '100px' }}
      />
      <button onClick={handleAddNotice} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Add Notice</button>
    </div>
  );
};

export default AddNotice;
return (style={{color:"black",fontWeight:"bold",fontSize:"13px",textAlign:"center",backgroundColor:"#404a6d8a",borderRadius:"4px",borderWidth:"0px",borderColor:"black",marginTop:"13px"}}
  <>
     {coursedata.map((item, index) => (
       <Link 
         to={item.courseId} 
         key={index} 
         className="bkie7gg0" 
         style={{ textDecoration: 'none', color: 'black' }} // No hover effect
       >
         <h1 className="vo02f0su">{item.name}</h1>
         <img
           src={item.image}
           loading="lazy"
           sizes="(max-width: 479px) 82vw, (max-width: 767px) 81vw, (max-width: 991px) 39vw, (max-width: 1439px) 23vw, 325px"
           srcSet={`
             ${item.image}?w=500 500w,
             ${item.image}?w=800 800w,
             ${item.image} 820w
           `}
           alt={item.name}
           className="image-2"
         />
         <div className="l9vyvaej">
           <div className="ucda7sxe">
             <div className="eo8ulunt"></div>
             <div className="dql7bfud">{item.courseId}</div>
           </div>
           <div className="hygsypnv">
             <div className="i9ce9cep"></div>
             <div className="xtb5sxmk">{item.teacherName}</div>
           </div>
           <div className="xwexdgfv"></div>
         </div>
       </Link>
     ))}
   </>
 );
};
