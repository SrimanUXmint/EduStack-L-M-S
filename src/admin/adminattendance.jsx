import  { useState, useEffect } from 'react';
import CourseBatchTab from './admincoursebatchtab';
import axios from 'axios';

export default function AdminAttendance() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/courses');
      const courses = response.data;

      const updatedCourses = await Promise.all(courses.map(async course => {
        const batchesResponse = await axios.get(`http://localhost:8080/batches?courseId=${course._id}`);
        const batches = batchesResponse.data;

        const updatedBatches = await Promise.all(batches.map(async batch => {
          const studentsResponse = await axios.get(`http://localhost:8080/studentsattendance?courseId=${course.courseId}&batchId=${batch.batchId}`);
          const students = studentsResponse.data;
          return { ...batch, students };
        }));

        return { ...course, batches: updatedBatches };
      }));

      setAttendanceData(updatedCourses);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const updateStudentAttendance = async (courseId, batchId, studentId, present) => {
    try {
      console.log(courseId,batchId);
      await axios.put(`http://localhost:8080/attendance/${courseId}/${batchId}/${studentId}`, { present });
      setAttendanceData(prevData =>
        prevData.map(course => {
          if (course._id === courseId) {
            
            return {
              ...course,
              batches: course.batches.map(batch => {
                if (batch._id === batchId) {
                  
                  const updatedStudents = batch.students.map(student => {
                    if (student.studentId === studentId) {
                      return { ...student, present };
                    }
                    return student;
                  });
                  return { ...batch, students: updatedStudents };
                }
                return batch;
              })
            };
          }
          return course;
        })
      );
    } catch (error) {
      console.error('Error updating student attendance:', error);
    }
  };

  return (
    <div className="dz1wsaao" style={{ width: "548px", marginTop: "40px" }}>
      <div className="w1o7nuzj">
        <div className="byw17wa5" style={{ marginTop: "10px" }}>
          <h4 className="cbvnsdiu">Attendance</h4>
        </div>
      </div>
      {attendanceData.map((course, index) => (
        <CourseBatchTab
          key={index}
          course={course}
          updateStudentAttendance={updateStudentAttendance}
        />
      ))}
    </div>
  );
}
