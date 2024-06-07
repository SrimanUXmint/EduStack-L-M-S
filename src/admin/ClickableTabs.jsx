import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff59;
  border: none;
  border-bottom: 2px solid transparent;
  margin-right: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #333;

  &.active {
    border-bottom: 2px solid;
    background-color: #fff;
  }
`;

const TabContent = styled.div`
  background-color: #ffffff59;
  padding: 20px;
  border: 1px solid #ddd;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;


const ClickableTabs = ({ students, teachers }) => {
    const [activeTab, setActiveTab] = useState('');
    const [tabSelected, setTabSelected] = useState(false);
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
      setTabSelected(true);
    };
  
    return (
      <div>
        <TabsContainer>
          <TabButton
            className={activeTab === 'students' ? 'active' : ''}
            onClick={() => handleTabClick('students')}
          >
            Students
          </TabButton>
          <TabButton
            className={activeTab === 'teachers' ? 'active' : ''}
            onClick={() => handleTabClick('teachers')}
          >
            Teachers
          </TabButton>
        </TabsContainer>
        {tabSelected && (
          <TabContent visible={activeTab === 'students'}>
            <Table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>Batch</th>
                  
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.studentId}>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.batch}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabContent>
        )}
        {tabSelected && (
          <TabContent visible={activeTab === 'teachers'}>
            <Table>
              <thead>
                <tr>
                  <th>Teacher ID</th>
                  <th>Teacher Name</th>
                  <th>Course IDs</th>
                  <th>Batch IDs</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher._id}>
                    <td>{teacher.teacherId}</td>
                    <td>{teacher.teacherName}</td>
                    <td>{teacher.courseId}</td>
                    <td>{teacher.batchIds.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabContent>
        )}
      </div>
    );
  };
  
  export default ClickableTabs;