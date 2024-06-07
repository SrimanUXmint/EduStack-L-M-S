import  { useState, useEffect } from 'react';
import StudentAttendance from './adminattendacetemplate';

const CourseBatchTab = ({ course, updateStudentAttendance }) => {
  const [activeBatch, setActiveBatch] = useState(null);
  const [localStudents, setLocalStudents] = useState({});

  useEffect(() => {
    const initialLocalStudents = {};
    course.batches.forEach(batch => {
      initialLocalStudents[batch.batchId] = batch.students;
    });
    setLocalStudents(initialLocalStudents);
  }, [course.batches]);

  const toggleBatch = (batchId) => {
    setActiveBatch(activeBatch === batchId ? null : batchId);
  };

  const handlePresentChange = (batchId, studentId, event) => {
    const presentValue = parseInt(event.target.value);
    if (!isNaN(presentValue)) {
      const updatedStudents = localStudents[batchId].map(student =>
        student.studentId === studentId ? { ...student, present: presentValue } : student
      );
      setLocalStudents({ ...localStudents, [batchId]: updatedStudents });
      updateStudentAttendance(course.courseId, batchId, studentId, presentValue);
    }
  };

  return (
    <div className="course-batch-tab">
      <div className="course-header">
        <h5>{course.courseName} ({course.courseId})</h5>
        <p style={{ fontWeight: "bolder" }}>{course.duration}</p>
      </div>
      <div className="batch-tabs">
        {course.batches.map(batch => (
          <div key={batch.batchId} className="batch-item">
            <button
              style={{ fontWeight: "bolder", backgroundColor: "#404a6d8a", color: 'black' }}
              onClick={() => toggleBatch(batch.batchId)}
            >
              {batch.batchName} {activeBatch === batch.batchId ? '-' : '+'}
            </button>
            {activeBatch === batch.batchId && (
              <StudentAttendance
                students={localStudents[batch.batchId] || batch.students}
                courseId={course.courseId}
                batchId={batch.batchId}
                total={course.duration}
                handlePresentChange={(studentId, event) => handlePresentChange(batch.batchId, studentId, event)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBatchTab;