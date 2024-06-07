import React from 'react';
import styled from 'styled-components';

const TimetableContainer = styled.div`
  margin: 20px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 120px; /* Fixed width for all cells */
  height: 80px;
  background-color: #f2f2f2;
  font-weight: bold;
  color: black;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 120px; /* Fixed width for all cells */
  height: 80px;
  background-color: ${props => (props.isEmpty ? '#f9f9f9' : '#ececec')};
  color: black;
`;

const Timetable = ({ data = [] }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const generateTimetable = () => {
    const timetable = {};

    days.forEach(day => {
      timetable[day] = {};
      times.forEach(time => {
        const slot = data.find(item => item.day === day && item.startTime === time);
        timetable[day][time] = slot || { courseId: '', courseName: '', room: '', teacher: '' };
      });
    });

    return timetable;
  };

  const timetable = generateTimetable();
 
  return (
    <TimetableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Time</Th>
            {days.map(day => (
              <Th key={day}>{day}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map(time => (
            <tr key={time}>
              <Td>{time}</Td>
              {days.map(day => (
                <Td key={day} isEmpty={!timetable[day][time].courseName}>
                  <div>{timetable[day][time].courseName}</div>
                  <div>{timetable[day][time].room}</div>
                  <div>{timetable[day][time].teacherName}</div>
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TimetableContainer>
  );
};

export default Timetable;
