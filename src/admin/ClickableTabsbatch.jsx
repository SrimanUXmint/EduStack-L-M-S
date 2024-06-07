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


const ClickableTabs = ({ courses, batches }) => {
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
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => handleTabClick('courses')}
          >
            Courses
          </TabButton>
          <TabButton
            className={activeTab === 'batches' ? 'active' : ''}
            onClick={() => handleTabClick('batches')}
          >
            Batches
          </TabButton>
        </TabsContainer>
        {tabSelected && (
          <TabContent visible={activeTab === 'courses'}>
            <Table>
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.courseId}>
                    <td>{course.courseId}</td>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </TabContent>
        )}
        {tabSelected && (
          <TabContent visible={activeTab === 'batches'}>
            <Table>
              <thead>
                <tr>
                  <th>Batches ID</th>
                  <th>Batches Name</th>
                  <th>Strength</th>
                  <th>Course IDs</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((batch) => (
                  <tr key={batch.batchId}>
                    <td>{batch.batchId}</td>
                    <td>{batch.batchName}</td>
                    <td>{batch.strength}</td>
                    <td>{batch.courseIds.join(', ')}</td>
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