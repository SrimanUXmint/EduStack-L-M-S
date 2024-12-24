import React, { useState, useEffect } from 'react';
import AdminPanel from './adminaddcomponent';
import ClickableTabs from './ClickableTabs';
import styled from 'styled-components';
import axios from 'axios';
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const AdminCourse = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const fetchStudentsAndTeachers = async () => {
    try {
      const studentsResponse = await axios.get('http://165.232.185.65:8080/students');
      const teachersResponse = await axios.get('http://165.232.185.65:8080/teachers');
      setStudents(studentsResponse.data);
      setTeachers(teachersResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchStudentsAndTeachers();
  }, []);
  const fetchCoursesAndBatches = async () => {
    try {
      const coursesResponse = await axios.get('http://165.232.185.65:8080/courses');
      setCourses(coursesResponse.data);

      const batchesResponse = await axios.get('http://165.232.185.65:8080/batches');
      setBatches(batchesResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoursesAndBatches();
  }, []);

 
  const handleAddStudent = async (studentData) => {
      
    try {
    
      const selectedBatch = batches.find(batch => batch.batchId === studentData.batch);
      if (selectedBatch) {
        studentData.courseIds = selectedBatch.courseIds;
      }

      const response = await axios.post('http://165.232.185.65:8080/student/add', studentData);
      
      setStudents([...students, response.data]);
      
      const studentsResponse = await axios.get('http://165.232.185.65:8080/students');
      setStudents(studentsResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddTeacher = async (teacherData) => {
    try {
      const response = await axios.post('http://165.232.185.65:8080/teacher/add', teacherData);
      console.log('Added teacher response:', response.data); // Log the response data
  
      // Update state directly with the new teacher data
      setStudents([...teachers, response.data]);
      
      const teachersResponse = await axios.get('http://165.232.185.65:8080/teachers');
     
      setTeachers(teachersResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
      <div className="hqu6j3os">
      <div className="ij6mk5pj">
        <div className="jmcs0gbx">
          <div className="gyc3f8q6">
            <div className="zzxrsn6l">
              <div className="fm5eardc">
                <div className="bkie7gg0" style={{width:"600px",padding:"20px"}}>
                <div style={{ padding: '20px' }}>
    <Container>
    
      <AdminPanel 
        onAddStudent={handleAddStudent} 
        onAddTeacher={handleAddTeacher} 
        batches={batches} 
        courses={courses} 
      />
      <ClickableTabs students={students} teachers={teachers} />
    </Container>
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

export default AdminCourse;
